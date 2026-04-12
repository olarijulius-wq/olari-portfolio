"use client";

import { useEffect, useRef } from "react";

export interface InteractiveGradientBackgroundProps {
  className?: string;
  /** Number of radial blobs (default 3). */
  gradientCount?: number;
  /** Canvas noise alpha 0–1 (default very low). */
  noiseOpacity?: number;
  /** Pointer follow smoothing 0–1. */
  lerpFactor?: number;
}

/** Mouse-reactive canvas gradients — black/grey base with a hint of neutral purple. */
export default function InteractiveGradientBackground({
  className = "",
  gradientCount = 3,
  noiseOpacity = 0.012,
  lerpFactor = 0.05,
}: InteractiveGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientPositionsRef = useRef<
    Array<{ x: number; y: number; targetX: number; targetY: number }>
  >([]);
  const mousePositionRef = useRef({ x: 0.5, y: 0.35 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  const gradientColors = [
    { start: "rgba(52, 52, 56, 0.45)", end: "rgba(52, 52, 56, 0)" },
    { start: "rgba(78, 72, 88, 0.1)", end: "rgba(78, 72, 88, 0)" },
    { start: "rgba(42, 44, 48, 0.38)", end: "rgba(42, 44, 48, 0)" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    if (gradientPositionsRef.current.length === 0) {
      gradientPositionsRef.current = Array.from({ length: gradientCount }, (_, i) => {
        const angle = (i / gradientCount) * Math.PI * 2;
        const radius = 0.28;
        const x = 0.5 + Math.cos(angle) * radius;
        const y = 0.38 + Math.sin(angle) * radius * 0.85;
        return { x, y, targetX: x, targetY: y };
      });
    }

    const createNoisePattern = () => {
      const noiseCanvas = document.createElement("canvas");
      noiseCanvas.width = 200;
      noiseCanvas.height = 200;
      const noiseCtx = noiseCanvas.getContext("2d");
      if (!noiseCtx) return null;

      const imageData = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = noiseOpacity * 255;
      }

      noiseCtx.putImageData(imageData, 0, 0);
      return noiseCanvas;
    };

    const noisePattern = createNoisePattern();

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const drawFrame = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      gradientPositionsRef.current.forEach((pos, index) => {
        const offsetX = (index / gradientCount - 0.5) * 0.35;
        const offsetY = Math.sin(index * 2) * 0.22;

        pos.targetX = mousePositionRef.current.x + offsetX;
        pos.targetY = mousePositionRef.current.y + offsetY;

        if (!reduceMotion) {
          pos.x = lerp(pos.x, pos.targetX, lerpFactor);
          pos.y = lerp(pos.y, pos.targetY, lerpFactor);
        } else {
          pos.x = pos.targetX;
          pos.y = pos.targetY;
        }

        const x = pos.x * canvas.width;
        const y = pos.y * canvas.height;
        const radius = Math.min(canvas.width, canvas.height) * 0.52;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const colorSet = gradientColors[index % gradientColors.length];
        gradient.addColorStop(0, colorSet.start);
        gradient.addColorStop(0.55, colorSet.end);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      if (noisePattern) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = ctx.createPattern(noisePattern, "repeat") || "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const w = Math.max(window.innerWidth, 1);
      const h = Math.max(window.innerHeight, 1);
      mousePositionRef.current = {
        x: e.clientX / w,
        y: e.clientY / h,
      };
    };

    const animate = () => {
      drawFrame();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (reduceMotion) {
      mousePositionRef.current = { x: 0.5, y: 0.35 };
      drawFrame();
      const onResizeRedraw = () => {
        resizeCanvas();
        drawFrame();
      };
      window.addEventListener("resize", onResizeRedraw);
      return () => {
        window.removeEventListener("resize", onResizeRedraw);
      };
    }

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerMove);
      if (animationFrameRef.current !== undefined) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gradientCount, noiseOpacity, lerpFactor]);

  return (
    <div
      className={`fixed inset-0 z-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full"
        style={{ background: "#000000" }}
      />
    </div>
  );
}
