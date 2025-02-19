"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { CrateMesh } from "./CrateMesh";
import { NeonItemCard } from "./NeonItemCard";

function getProxiedUrl(url: string) {
  return `/api/proxy?url=${encodeURIComponent(url)}`;
}

interface Case3DViewProps {
  textureUrl?: string;
  rolledItem?: string;
  showRolledItem?: boolean;
}

export default function Case3DView({
  textureUrl = "https://threejs.org/examples/textures/crate.gif",
  rolledItem,
  showRolledItem = false,
}: Case3DViewProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const lidPivotRef = useRef<THREE.Object3D | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.8, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Crate
    const woodenCrateUrl = "https://threejs.org/examples/textures/crate.gif";

    const crateGroup = CrateMesh({
      textureUrl: getProxiedUrl(woodenCrateUrl),
      lidPivotRef,
    });
    crateGroup.position.y = 0;
    crateGroup.rotation.x = 0.35;
    crateGroup.rotation.y = 0.4;
    crateGroup.scale.set(0.8, 0.8, 0.8);
    scene.add(crateGroup);

    // If we have a rolledItem
    if (showRolledItem && rolledItem) {
      const loader = new THREE.TextureLoader();
      const itemTex = loader.load(getProxiedUrl(rolledItem));
      const cardGroup = NeonItemCard({ itemTexture: itemTex });
      crateGroup.add(cardGroup);
      cardGroup.position.set(0, 0.8, 0);
    }

    // Mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width;
      const my = (e.clientY - rect.top) / rect.height;
      crateGroup.rotation.x = 0.35 + (my - 0.5) * 0.2;
      crateGroup.rotation.y = 0.4 + (mx - 0.5) * 0.2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let stopAnim = false;
    const animate = () => {
      if (stopAnim) return;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      stopAnim = true;
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [rolledItem, showRolledItem]);

  useEffect(() => {
    // Lid animation
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
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "400px",
        margin: "0 auto",
        background: "transparent",
      }}
    />
  );
}