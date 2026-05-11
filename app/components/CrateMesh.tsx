"use client";

import * as THREE from "three";
import { TextureLoader } from "three";
import { webglTextureSrc } from "@/lib/webglTextureSrc";
import { publicPath } from "@/lib/publicPath";

const WOOD_URL = "https://threejs.org/examples/textures/crate.gif";

interface CrateMeshProps {
  lidPivotRef: React.MutableRefObject<THREE.Object3D | null>;
}

function logoFallbackTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createLinearGradient(0, 0, 512, 256);
  g.addColorStop(0, "#581c87");
  g.addColorStop(1, "#7e22ce");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 256);
  ctx.fillStyle = "#fae8ff";
  ctx.font = "bold 56px system-ui,sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("VLADA", 256, 128);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function CrateMesh({ lidPivotRef }: CrateMeshProps): THREE.Group {
  const group = new THREE.Group();
  const loader = new TextureLoader();
  loader.crossOrigin = "anonymous";

  const crateTex = loader.load(webglTextureSrc(WOOD_URL), (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
  });

  const crateMat = new THREE.MeshStandardMaterial({ map: crateTex });
  const boxWidth = 3;
  const boxDepth = 2;
  const wallHeight = 1.3;
  const wallThickness = 0.1;

  const bottomGeo = new THREE.BoxGeometry(boxWidth, 0.1, boxDepth);
  const bottomMesh = new THREE.Mesh(bottomGeo, crateMat);
  bottomMesh.position.set(0, 0.05, 0);
  group.add(bottomMesh);

  const frontGeo = new THREE.BoxGeometry(boxWidth, wallHeight, wallThickness);
  const frontWall = new THREE.Mesh(frontGeo, crateMat);
  frontWall.position.set(0, wallHeight / 2 + 0.05, boxDepth / 2 - wallThickness / 2);
  group.add(frontWall);

  const backWall = new THREE.Mesh(frontGeo, crateMat);
  backWall.position.set(
    0,
    wallHeight / 2 + 0.05,
    -(boxDepth / 2 - wallThickness / 2)
  );
  group.add(backWall);

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

  const lidHeight = 0.15;
  const lidGeo = new THREE.BoxGeometry(boxWidth, lidHeight, boxDepth);
  const lidMesh = new THREE.Mesh(lidGeo, crateMat);
  const lidPivot = new THREE.Object3D();
  lidPivot.position.set(0, wallHeight + 0.05, -(boxDepth / 2));
  lidPivot.rotation.x = 0;
  group.add(lidPivot);
  lidPivot.add(lidMesh);
  lidMesh.position.set(0, 0, boxDepth / 2);

  lidPivotRef.current = lidPivot;

  const logoMat = new THREE.MeshBasicMaterial({ transparent: true, depthTest: true });
  const logoGeo = new THREE.PlaneGeometry(2, 1);
  const logoPlane = new THREE.Mesh(logoGeo, logoMat);
  logoPlane.position.set(0, wallHeight * 0.5, boxDepth / 2 + 0.012);
  group.add(logoPlane);

  loader.load(
    publicPath("/images/logo-case.png"),
    (logoTex) => {
      logoTex.colorSpace = THREE.SRGBColorSpace;
      logoMat.map = logoTex;
      logoMat.needsUpdate = true;
    },
    undefined,
    () => {
      logoMat.map = logoFallbackTexture();
      logoMat.needsUpdate = true;
    }
  );

  return group;
}
