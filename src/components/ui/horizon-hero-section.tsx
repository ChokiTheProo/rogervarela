import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { useIsMobile } from '@/hooks/use-mobile';

interface HorizonBackgroundProps {
  className?: string;
}

/**
 * Slimmed down Horizon Hero — used as a contained animated cosmic background.
 * Renders a starfield + nebula plane with bloom post-processing.
 * Skips on mobile for performance.
 */
export const HorizonBackground = ({ className }: HorizonBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile || !canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0006);

    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 2000);
    camera.position.set(0, 10, 100);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.6;

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(width, height), 0.7, 0.5, 0.85);
    composer.addPass(bloom);

    // ---- Star fields (3 layers) ----
    const starFields: THREE.Points[] = [];
    const starCount = 1500;
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);
      const sizes = new Float32Array(starCount);

      for (let j = 0; j < starCount; j++) {
        const radius = 200 + Math.random() * 800;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[j * 3 + 2] = radius * Math.cos(phi);

        const color = new THREE.Color();
        const choice = Math.random();
        if (choice < 0.65) color.setHSL(0, 0, 0.85 + Math.random() * 0.15);
        else if (choice < 0.85) color.setHSL(0.75, 0.6, 0.75); // purple
        else color.setHSL(0.55, 0.7, 0.7); // cyan
        colors[j * 3] = color.r;
        colors[j * 3 + 1] = color.g;
        colors[j * 3 + 2] = color.b;
        sizes[j] = Math.random() * 2 + 0.5;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 }, depth: { value: i } },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          uniform float depth;
          void main() {
            vColor = color;
            vec3 pos = position;
            float angle = time * 0.04 * (1.0 - depth * 0.3);
            mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
            pos.xy = rot * pos.xy;
            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (300.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float o = 1.0 - smoothstep(0.0, 0.5, d);
            gl_FragColor = vec4(vColor, o);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);
      starFields.push(stars);
    }

    // ---- Nebula plane ----
    const nebulaGeo = new THREE.PlaneGeometry(4000, 2000, 40, 40);
    const nebulaMat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x6d28d9) }, // purple
        color2: { value: new THREE.Color(0x0891b2) }, // cyan
        opacity: { value: 0.35 },
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float time;
        void main() {
          vUv = uv;
          vec3 pos = position;
          pos.z += sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 18.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float opacity;
        uniform float time;
        varying vec2 vUv;
        void main() {
          float m = sin(vUv.x * 8.0 + time) * cos(vUv.y * 8.0 + time);
          vec3 c = mix(color1, color2, m * 0.5 + 0.5);
          float a = opacity * (1.0 - length(vUv - 0.5) * 1.8);
          gl_FragColor = vec4(c, a);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const nebula = new THREE.Mesh(nebulaGeo, nebulaMat);
    nebula.position.z = -800;
    scene.add(nebula);

    // ---- FPS-limited animation loop (~30fps) ----
    let animationId = 0;
    let lastTime = 0;
    const interval = 1000 / 30;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    container.addEventListener('mousemove', onMouseMove);

    const animate = (now: number) => {
      animationId = requestAnimationFrame(animate);
      if (now - lastTime < interval) return;
      lastTime = now;

      const t = now * 0.001;
      starFields.forEach((s) => {
        (s.material as THREE.ShaderMaterial).uniforms.time.value = t;
      });
      nebulaMat.uniforms.time.value = t * 0.4;

      // gentle parallax based on mouse
      camera.position.x += (mouseX * 8 - camera.position.x) * 0.04;
      camera.position.y += (10 - mouseY * 4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, -200);

      composer.render();
    };
    animate(0);

    // ---- Resize ----
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      composer.setSize(width, height);
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    // ---- Cleanup ----
    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
      container.removeEventListener('mousemove', onMouseMove);
      starFields.forEach((s) => {
        s.geometry.dispose();
        (s.material as THREE.Material).dispose();
      });
      nebulaGeo.dispose();
      nebulaMat.dispose();
      composer.dispose();
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ''}`}
      aria-hidden="true"
    >
      {!isMobile && (
        <canvas ref={canvasRef} className="w-full h-full block" />
      )}
    </div>
  );
};

export default HorizonBackground;
