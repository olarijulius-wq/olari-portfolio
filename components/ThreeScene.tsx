"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth || 400;
    const h = mount.clientHeight || 400;

    // ── Renderer — solid black background, not transparent ────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // ── Scene & camera ────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    camera.position.set(0, 0, 6);

    // ── Lighting ──────────────────────────────────────────────────────────
    // Low ambient — let the directional light do the heavy lifting
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    // Key light — top-left-front, creates visible specular on metallic surface
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.5);
    keyLight.position.set(-5, 8, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Rim light — back-right, separates cube from background
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(6, -2, -4);
    scene.add(rimLight);

    // ── Cube — metallic, so specular highlights are visible ───────────────
    const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.3,
      metalness: 0.8,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    scene.add(cube);

    // ── Mouse tracking — divide by 200 for subtle tilt ────────────────────
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      targetRotX = -(e.clientY - rect.top - rect.height / 2) / 200;
      targetRotY = (e.clientX - rect.left - rect.width / 2) / 200;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Resize ────────────────────────────────────────────────────────────
    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      if (!nw || !nh) return;
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
      autoAngle += 0.003;

      cube.rotation.y += (autoAngle + targetRotY - cube.rotation.y) * 0.05;
      cube.rotation.x += (targetRotX - cube.rotation.x) * 0.05;

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

  return <div ref={mountRef} className="w-full h-full" aria-hidden="true" />;
}
