"use client"

import { Canvas } from "@react-three/fiber"
import { CuboidCollider, Physics } from "@react-three/rapier"

import { KineticPointer } from "./3d/kinetic-pointer"
import { Letter } from "./3d/letter"

export const HomepageHero = () => {
  return (
    <div className="container grid h-screen grid-rows-1 py-28">
      <Canvas
        className="rounded-2xl"
        dpr={[1.5, 2]}
        camera={{ position: [0, 0, 30], fov: 45, near: 1, far: 300 }}
      >
        <color attach="background" args={["#ffffff"]} />
        <Physics gravity={[0, 0, 0]} debug={true}>
          <KineticPointer />
          <Letter char="H" position={[-15, 0, 0]} />
          <Letter char="U" position={[-5, 0, 0]} />
          <Letter char="N" position={[5, 0, 0]} />
          <Letter char="G" position={[15, 0, 0]} />
          <CuboidCollider position={[0, -15, 0]} args={[100, 1, 100]} />
          <CuboidCollider position={[0, 15, 0]} args={[100, 1, 100]} />
          <CuboidCollider position={[-20, 0, 0]} args={[1, 100, 100]} />
        </Physics>
      </Canvas>
    </div>
  )
}
