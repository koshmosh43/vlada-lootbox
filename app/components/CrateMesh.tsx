"use client";

import * as THREE from "three";
import { TextureLoader } from "three";

interface CrateMeshProps {
  textureUrl: string;
  lidPivotRef: React.MutableRefObject<THREE.Object3D | null>;
}

export function CrateMesh({ textureUrl, lidPivotRef }: CrateMeshProps): THREE.Group {
  const group = new THREE.Group();
  const loader = new TextureLoader();
  const crateTex = loader.load(textureUrl);

  const crateMat = new THREE.MeshStandardMaterial({ map: crateTex });
  const boxWidth = 3;
  const boxDepth = 2;
  const wallHeight = 1.3;
  const wallThickness = 0.1;

  // Bottom
  const bottomGeo = new THREE.BoxGeometry(boxWidth, 0.1, boxDepth);
  const bottomMesh = new THREE.Mesh(bottomGeo, crateMat);
  bottomMesh.position.set(0, 0.05, 0);
  group.add(bottomMesh);

  // Front
  const frontGeo = new THREE.BoxGeometry(boxWidth, wallHeight, wallThickness);
  const frontWall = new THREE.Mesh(frontGeo, crateMat);
  frontWall.position.set(0, wallHeight / 2 + 0.05, boxDepth / 2 - wallThickness / 2);
  group.add(frontWall);

  // Back
  const backWall = new THREE.Mesh(frontGeo, crateMat);
  backWall.position.set(
    0,
    wallHeight / 2 + 0.05,
    -(boxDepth / 2 - wallThickness / 2)
  );
  group.add(backWall);

  // Left / Right
  const sideGeo = new THREE.BoxGeometry(
    wallThickness,
    wallHeight,
    boxDepth - wallThickness * 2
  );
  const leftWall = new THREE.Mesh(sideGeo, crateMat);
  leftWall.position.set(
    -(boxWidth / 2 - wallThickness / 2),
    wallHeight / 2 + 0.05,
    0
  );
  group.add(leftWall);

  const rightWall = new THREE.Mesh(sideGeo, crateMat);
  rightWall.position.set(
    boxWidth / 2 - wallThickness / 2,
    wallHeight / 2 + 0.05,
    0
  );
  group.add(rightWall);

  // Lid pivot
  const lidHeight = 0.15;
  const lidGeo = new THREE.BoxGeometry(boxWidth, lidHeight, boxDepth);
  const lidMesh = new THREE.Mesh(lidGeo, crateMat);
  const lidPivot = new THREE.Object3D();
  lidPivot.position.set(0, wallHeight + 0.05, -(boxDepth / 2));
  lidPivot.rotation.x = 0;
  group.add(lidPivot);
  lidPivot.add(lidMesh);
  lidMesh.position.set(0, 0, boxDepth / 2);

  // Expose pivot
  lidPivotRef.current = lidPivot;

  // Front logo
  const logoTex = loader.load("/images/logo-case.png");
  const logoMat = new THREE.MeshBasicMaterial({ map: logoTex, transparent: true });
  const logoGeo = new THREE.PlaneGeometry(2, 1);
  const logoPlane = new THREE.Mesh(logoGeo, logoMat);
  logoPlane.position.set(0, wallHeight * 0.5, boxDepth / 2 + 0.01);
  group.add(logoPlane);

  return group;
}
