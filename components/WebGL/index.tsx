"use client";

import "./style.scss";

import * as THREE from "three";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";

interface Box {
  uid: number;
  key: number;
}

function generatePosition(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) - max;
}

function generateRandomColor() {
  const h = 230;
  const s = Math.floor(Math.random() * 30 + 30);
  const l = Math.floor(Math.random() * 20 + 30);
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

function Box(props: Box & ThreeElements["mesh"]) {
  const hitMax = useRef<boolean>(false);
  const [opacity, setOpacity] = useState<number>(props.uid);
  const mesh = useRef<THREE.Mesh>(null!);
  const color = useRef<string>(generateRandomColor());

  const generatedX = useRef<number>(generatePosition(-4, 4));
  const generatedY = useRef<number>(generatePosition(-4, 4));
  const generatedZ = useRef<number>(generatePosition(5, 15));

  useFrame((_, delta) => {
    mesh.current.position.z += delta * 3;

    if (!hitMax.current) {
      setOpacity(
        (opacity) => opacity + Math.sin(Math.PI * delta) / (10 - props.uid)
      );
    }

    if (opacity > 1 && !hitMax.current) hitMax.current = true;

    if (opacity >= 0 && hitMax.current)
      setOpacity(
        (opacity) => opacity - Math.sin(Math.PI * delta) / (10 - props.uid)
      );

    if (opacity < 0 && hitMax.current) {
      hitMax.current = false;
      generatedX.current = generatePosition(-4, 4);
      generatedY.current = generatePosition(-4, 4);
      generatedZ.current = generatePosition(5, 15);
      color.current = generateRandomColor();
    }

    if (mesh.current.position.z > -1 && mesh.current.position.z < 0) {
      hitMax.current = true;
      setOpacity((opacity) => opacity - 0.02);
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      geometry={props.geometry}
      position={[generatedX.current, generatedY.current, generatedZ.current]}
      rotation={[0, 0, 0]}
    >
      <meshNormalMaterial transparent opacity={opacity} flatShading />
    </mesh>
  );
}

function WebGL() {
  const geom = useMemo(() => new THREE.SphereGeometry(1, 8, 8), []);

  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 5]} />
      {Array.from({ length: 8 }, (_, uid) => (
        <Box key={uid} uid={uid} geometry={geom} />
      ))}
    </>
  );
}

function Scene() {
  return (
    <main className="canvas">
      <Canvas className="canvas-container" camera={{ fov: 45 }}>
        <WebGL />
      </Canvas>
    </main>
  );
}

export default Scene;
