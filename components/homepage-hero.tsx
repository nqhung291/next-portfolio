"use client"

import { Canvas } from "@react-three/fiber"

export const HomepageHero = () => {
  return (
    <div className="container grid h-screen grid-rows-1 py-28">
      <Canvas className="rounded-2xl">
        <color attach="background" />
      </Canvas>
    </div>
  )
}
