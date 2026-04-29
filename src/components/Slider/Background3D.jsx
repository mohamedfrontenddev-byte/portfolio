import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import * as random from "maath/random/dist/maath-random.esm";

function Particles() {
  const ref = useRef();

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(5000), { radius: 1.5 }),
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    ref.current.rotation.y -= delta / 15;
    ref.current.position.y = Math.sin(t) * 0.1;

    const hue = (t * 20) % 360;
    ref.current.material.color.set(`hsl(${hue},100%,60%)`);
  });

  return (
    <Points ref={ref} positions={sphere} stride={3}>
      <PointMaterial
        transparent
        size={0.005}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Background3D() {
  return (
    <div className="bg3d">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <Particles />
        <EffectComposer>
          <Bloom intensity={1.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}