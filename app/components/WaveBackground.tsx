"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const loadTexture = (url: string): Promise<THREE.Texture> => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    loader.load(url, resolve, undefined, reject);
  });
};

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      50000
    );
    camera.position.set(0, 0, 1000);
    camera.lookAt(new THREE.Vector3());

    const clock = new THREE.Clock();

    class Fog {
      uniforms: { [key: string]: any };
      num: number;
      obj: THREE.Mesh | null;

      constructor() {
        this.uniforms = {
          time: { value: 0 },
          tex: { value: null },
        };
        this.num = 200;
        this.obj = null;
      }

      createObj(tex: THREE.Texture) {
        const geometry = new THREE.InstancedBufferGeometry();

        const baseGeometry = new THREE.PlaneGeometry(1100, 1100, 20, 20);

        geometry.setAttribute("position", baseGeometry.attributes.position);
        geometry.setAttribute("normal", baseGeometry.attributes.normal);
        geometry.setAttribute("uv", baseGeometry.attributes.uv);
        geometry.setIndex(baseGeometry.index);

        const instancePositions = new THREE.InstancedBufferAttribute(
          new Float32Array(this.num * 3),
          3
        );
        const delays = new THREE.InstancedBufferAttribute(
          new Float32Array(this.num),
          1
        );
        const rotates = new THREE.InstancedBufferAttribute(
          new Float32Array(this.num),
          1
        );

        for (let i = 0; i < this.num; i++) {
          instancePositions.setXYZ(
            i,
            (Math.random() * 2 - 1) * 850, // X
            0, // Y
            (Math.random() * 2 - 1) * 300 // Z
          );
          delays.setX(i, Math.random());
          rotates.setX(i, Math.random() * 2 + 1);
        }

        geometry.setAttribute("instancePosition", instancePositions);
        geometry.setAttribute("delay", delays);
        geometry.setAttribute("rotate", rotates);

        const material = new THREE.RawShaderMaterial({
          uniforms: this.uniforms,
          vertexShader: `
            attribute vec3 position;
            attribute vec2 uv;
            attribute vec3 instancePosition;
            attribute float delay;
            attribute float rotate;

            uniform mat4 projectionMatrix;
            uniform mat4 modelViewMatrix;
            uniform float time;

            varying vec3 vPosition;
            varying vec2 vUv;
            varying vec3 vColor;
            varying float vBlink;

            const float duration = 200.0;

            mat4 calcRotateMat4Z(float radian) {
              return mat4(
                cos(radian), -sin(radian), 0.0, 0.0,
                sin(radian),  cos(radian), 0.0, 0.0,
                0.0,          0.0,         1.0, 0.0,
                0.0,          0.0,         0.0, 1.0
              );
            }

            vec3 convertHsvToRgb(vec3 c) {
              vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
              vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
              return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
            }

            void main(void) {
              float now = mod(time + delay * duration, duration) / duration;

              mat4 rotateMat = calcRotateMat4Z(radians(rotate * 360.0) + time * 0.1);
              vec3 rotatePosition = (rotateMat * vec4(position, 1.0)).xyz;

              vec3 moveRise = vec3(
                (now * 2.0 - 1.0) * (2500.0 - (delay * 2.0 - 1.0) * 2000.0),
                (now * 2.0 - 1.0) * 2000.0,
                sin(radians(time * 50.0 + delay + length(position))) * 30.0
              );
              vec3 updatePosition = instancePosition + moveRise + rotatePosition;

              vec3 hsv = vec3(time * 0.1 + delay * 0.2 + length(instancePosition) * 100.0, 0.5, 0.8);
              vec3 rgb = convertHsvToRgb(hsv);
              float blink = (sin(radians(now * 360.0 * 20.0)) + 1.0) * 0.88;

              vec4 mvPosition = modelViewMatrix * vec4(updatePosition, 1.0);

              vPosition = position;
              vUv = uv;
              vColor = rgb;
              vBlink = blink;

              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            precision highp float;

            uniform sampler2D tex;

            varying vec3 vPosition;
            varying vec2 vUv;
            varying vec3 vColor;
            varying float vBlink;

            void main() {
              vec2 p = vUv * 2.0 - 1.0;
              vec4 texColor = texture2D(tex, vUv);
              vec3 color = (texColor.rgb - vBlink * length(p) * 0.8) * vColor;
              float opacity = texColor.a * 0.36;
              gl_FragColor = vec4(color, opacity);
            }
          `,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });
        this.uniforms.tex.value = tex;

        this.obj = new THREE.Mesh(geometry, material);
      }

      render(deltaTime: number) {
        this.uniforms.time.value += deltaTime;
      }
    }

    const fog = new Fog();
    const fogTextureUrl = "https://ykob.github.io/sketch-threejs/img/sketch/fog/fog.png";

    loadTexture(fogTextureUrl).then((texture) => {
      fog.createObj(texture);
      if (fog.obj) {
        scene.add(fog.obj);
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      fog.render(delta);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}