"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    // ── Renderer ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // transparent — background is CSS black
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // ── Scene & camera ────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    camera.position.set(0, 0, 6);

    // ── Lighting — physical, minimal, directional ─────────────────────────
    // Ambient: faint fill so the dark faces aren't pure black
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    // Key light — top-left-front, like resend.com's subtle illumination
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(-4, 7, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Subtle fill from right — prevents full black on opposite faces
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.25);
    fillLight.position.set(5, 2, -2);
    scene.add(fillLight);

    // ── Cube geometry — matte black physical object ───────────────────────
    const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const material = new THREE.MeshStandardMaterial({
      color: 0x111111,      // near-black, not pure black
      roughness: 0.88,      // matte — no specular highlights
      metalness: 0.04,      // almost non-metallic
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    scene.add(cube);

    // ── Mouse tracking ────────────────────────────────────────────────────
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      // Map to -1…1 range
      targetRotX = -((e.clientY - rect.top) / rect.height - 0.5) * 0.5;
      targetRotY = ((e.clientX - rect.left) / rect.width - 0.5) * 0.5;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Resize ────────────────────────────────────────────────────────────
    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // ── Render loop ───────────────────────────────────────────────────────
    let frameId: number;
    let autoAngle = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      autoAngle += 0.003; // slow auto-rotate

      // Blend auto-rotate on Y with mouse tilt
      cube.rotation.y += (autoAngle + targetRotY - cube.rotation.y) * 0.04;
      cube.rotation.x += (targetRotX * 0.6 - cube.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      aria-hidden="true"
    />
  );
}
