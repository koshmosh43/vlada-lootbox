"use client";

import * as THREE from "three";
import { TextureLoader } from "three";
import { webglTextureSrc } from "@/lib/webglTextureSrc";

const WOOD_URL = "https://threejs.org/examples/textures/crate.gif";

interface CrateMeshProps {
  lidPivotRef: React.MutableRefObject<THREE.Object3D | null>;
}

function crateFrontLabelTexture(): THREE.CanvasTexture {
  const w = 1024;
  const h = 512;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;
  const label = "Vlada Melnyk";
  const font =
    "italic 800 124px ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

  const withSlant = (draw: () => void) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.transform(1, 0, -0.14, 1, 0, 0);
    ctx.translate(-cx, -cy);
    draw();
    ctx.restore();
  };

  const drawGlow = (alpha: number, blur: number, dy: number) => {
    withSlant(() => {
      ctx.globalAlpha = alpha;
      ctx.shadowColor = "#fbcfe8";
      ctx.shadowBlur = blur;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = dy;
      ctx.fillStyle = "#fce7f3";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = font;
      ctx.fillText(label, cx, cy);
    });
    ctx.globalAlpha = 1;
  };

  drawGlow(0.5, 52, 0);
  drawGlow(0.32, 24, 2);

  const grd = ctx.createLinearGradient(cx - 280, cy - 40, cx + 280, cy + 40);
  grd.addColorStop(0, "#fda4af");
  grd.addColorStop(0.35, "#f472b6");
  grd.addColorStop(0.65, "#ec4899");
  grd.addColorStop(1, "#e879f9");

  withSlant(() => {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = font;
    ctx.fillStyle = grd;
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.fillText(label, cx, cy);
  });

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
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

  const labelTex = crateFrontLabelTexture();
  const logoMat = new THREE.MeshBasicMaterial({
    map: labelTex,
    transparent: true,
    depthTest: true,
  });
  const logoGeo = new THREE.PlaneGeometry(2, 1);
  const logoPlane = new THREE.Mesh(logoGeo, logoMat);
  logoPlane.position.set(0, wallHeight * 0.5, boxDepth / 2 + 0.012);
  group.add(logoPlane);

  return group;
}
