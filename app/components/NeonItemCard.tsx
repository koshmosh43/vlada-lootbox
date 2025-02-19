"use client";

import * as THREE from "three";
import { gsap } from "gsap";

function makeRoundedRectShape(width: number, height: number, radius: number) {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;

  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);

  return shape;
}

interface NeonItemCardProps {
  itemTexture: THREE.Texture;
}

export function NeonItemCard({ itemTexture }: NeonItemCardProps): THREE.Group {
  const group = new THREE.Group();

  const itemW = 0.6;
  const itemH = 0.6;
  const itemGeo = new THREE.PlaneGeometry(itemW, itemH);
  const itemMat = new THREE.MeshBasicMaterial({ map: itemTexture, transparent: true });
  const itemMesh = new THREE.Mesh(itemGeo, itemMat);
  itemMesh.position.set(0, 1.7, 0);
  itemMesh.scale.set(0, 0, 0);
  group.add(itemMesh);

  gsap.to(itemMesh.scale, {
    x: 1.8,
    y: 1.8,
    z: 1.8,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 1.5,
  });

  const margin = 0.08;
  const shapeW = itemW + margin * 2;
  const shapeH = itemH + margin * 2;
  const cornerRadius = 0.06;
  const shape = makeRoundedRectShape(shapeW, shapeH, cornerRadius);
  const shapeGeom = new THREE.ShapeGeometry(shape);

  const shapeMesh = new THREE.Mesh(
    shapeGeom,
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 })
  );
  shapeMesh.position.set(0, 1.7, -0.001);
  shapeMesh.scale.set(0, 0, 0);
  group.add(shapeMesh);

  gsap.to(shapeMesh.scale, {
    x: 1.8,
    y: 1.8,
    z: 1.8,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 1.5,
  });

  const fillMat = new THREE.MeshBasicMaterial({
    color: 0xff00ff,
    transparent: true,
    opacity: 0.1,
  });
  const fillMesh = new THREE.Mesh(shapeGeom, fillMat);
  shapeMesh.add(fillMesh);

  const edgesGeo = new THREE.EdgesGeometry(shapeGeom);
  const borderMat = new THREE.LineBasicMaterial({ color: 0xff66ff });
  const border1 = new THREE.LineSegments(edgesGeo, borderMat);
  border1.scale.set(1.001, 1.001, 1.001);
  shapeMesh.add(border1);

  const border2 = new THREE.LineSegments(edgesGeo, borderMat);
  border2.scale.set(1.003, 1.003, 1.003);
  shapeMesh.add(border2);

  // Glow
  const glowGeom = new THREE.ShapeGeometry(shape);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0xff66ff,
    transparent: true,
    opacity: 0.3,
  });
  const glowMesh = new THREE.Mesh(glowGeom, glowMat);
  glowMesh.position.z = -0.0015;
  glowMesh.scale.set(1.03, 1.03, 1);
  shapeMesh.add(glowMesh);

  // Pulsing of Glow
  gsap.to(glowMat, {
    opacity: 0.5,
    duration: 1.2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
  });

  return group;
}