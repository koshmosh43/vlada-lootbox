"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { CrateMesh } from "./CrateMesh";
import { NeonItemCard } from "./NeonItemCard";
import { webglTextureSrc } from "@/lib/webglTextureSrc";

interface Case3DViewProps {
  rolledItem?: string;
  showRolledItem?: boolean;
}

export default function Case3DView({
  rolledItem,
  showRolledItem = false,
}: Case3DViewProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const lidPivotRef = useRef<THREE.Object3D | null>(null);

  useLayoutEffect(() => {
    const root = mountRef.current;
    if (!root) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0.8, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const canvasEl = renderer.domElement;
    canvasEl.style.display = "block";
    canvasEl.style.touchAction = "none";
    root.appendChild(canvasEl);

    const fit = () => {
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (w < 2 || h < 2) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h);
    };

    const ro = new ResizeObserver(fit);
    ro.observe(root);
    fit();

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const crateGroup = CrateMesh({ lidPivotRef });
    crateGroup.position.y = 0;
    const baseRx = 0.35;
    const baseRy = 0.4;
    crateGroup.rotation.x = baseRx;
    crateGroup.rotation.y = baseRy;
    crateGroup.scale.set(0.8, 0.8, 0.8);
    scene.add(crateGroup);

    const ampX = 0.55;
    const ampY = 0.7;
    const targetRot = { x: baseRx, y: baseRy };
    const curRot = { x: baseRx, y: baseRy };

    if (showRolledItem && rolledItem) {
      const loader = new THREE.TextureLoader();
      loader.crossOrigin = "anonymous";
      const itemTex = loader.load(webglTextureSrc(rolledItem), (t) => {
        t.colorSpace = THREE.SRGBColorSpace;
      });
      const cardGroup = NeonItemCard({ itemTexture: itemTex });
      crateGroup.add(cardGroup);
      cardGroup.position.set(0, 0.8, 0);
    }

    const setTargetFromEvent = (e: PointerEvent) => {
      const el = mountRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const w = rect.width || 1;
      const h = rect.height || 1;
      const nx = ((e.clientX - rect.left) / w) * 2 - 1;
      const ny = ((e.clientY - rect.top) / h) * 2 - 1;
      const clamp = (v: number) => Math.max(-1, Math.min(1, v));
      const mx = clamp(nx);
      const my = clamp(ny);
      targetRot.x = baseRx - my * ampX;
      targetRot.y = baseRy + mx * ampY;
    };

    const onPointerLeave = () => {
      targetRot.x = baseRx;
      targetRot.y = baseRy;
    };

    canvasEl.addEventListener("pointermove", setTargetFromEvent);
    canvasEl.addEventListener("pointerdown", setTargetFromEvent);
    root.addEventListener("pointerleave", onPointerLeave);

    let stopAnim = false;
    const animate = () => {
      if (stopAnim) return;
      requestAnimationFrame(animate);
      const k = 0.14;
      curRot.x += (targetRot.x - curRot.x) * k;
      curRot.y += (targetRot.y - curRot.y) * k;
      crateGroup.rotation.x = curRot.x;
      crateGroup.rotation.y = curRot.y;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      ro.disconnect();
      canvasEl.removeEventListener("pointermove", setTargetFromEvent);
      canvasEl.removeEventListener("pointerdown", setTargetFromEvent);
      root.removeEventListener("pointerleave", onPointerLeave);
      stopAnim = true;
      renderer.dispose();
      root.removeChild(canvasEl);
    };
  }, [rolledItem, showRolledItem]);

  useEffect(() => {
    if (lidPivotRef.current) {
      gsap.to(lidPivotRef.current.rotation, {
        x: showRolledItem ? -Math.PI / 2 : 0,
        duration: 2,
        ease: "power2.out",
      });
    }
  }, [showRolledItem]);

  return (
    <div
      ref={mountRef}
      className="relative w-full max-w-[800px] mx-auto overflow-hidden rounded-lg"
      style={{
        height: "min(400px, 55vh)",
        minHeight: "260px",
        background: "transparent",
        cursor: "grab",
      }}
    />
  );
}
