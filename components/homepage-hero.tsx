"use client"

import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"

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
        <Physics gravity={[0, 0, 0]}>
          <Letter char="H" position={[-20, 0, 0]} />
          {/* <Letter char="U" />
          <Letter char="N" />
          <Letter char="G" /> */}
        </Physics>
      </Canvas>
    </div>
  )
}
