"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Icosahedron wireframe
    const geometry = new THREE.IcosahedronGeometry(1.2, 1);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.25,
    });
    const wireframe = new THREE.LineSegments(edges, material);
    scene.add(wireframe);

    // Inner solid icosahedron for depth
    const innerGeo = new THREE.IcosahedronGeometry(1.18, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x080808,
      transparent: true,
      opacity: 0.6,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    scene.add(inner);

    // Outer glow ring
    const ringGeo = new THREE.TorusGeometry(1.6, 0.004, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.08,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI * 0.3;
    scene.add(ring);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Animation loop
    let frameId: number;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.005;

      // Smooth mouse follow
      targetX += (mouseX * 0.4 - targetX) * 0.05;
      targetY += (mouseY * 0.4 - targetY) * 0.05;

      wireframe.rotation.y = time * 0.3 + targetX;
      wireframe.rotation.x = time * 0.1 + targetY;
      inner.rotation.y = wireframe.rotation.y;
      inner.rotation.x = wireframe.rotation.x;
      ring.rotation.z = time * 0.15;
      ring.rotation.y = targetX * 0.5;

      // Pulse opacity
      const pulse = 0.2 + Math.sin(time * 1.2) * 0.06;
      (wireframe.material as THREE.LineBasicMaterial).opacity = pulse;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      edges.dispose();
      material.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
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
