"use client"

import { CameraControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"

import { KineticPointer } from "./3d/kinetic-pointer"
import { Letter } from "./3d/letter"

const center1 = 0
const center2 = 1
const textGap = 4

export const HomepageHero = () => {
  return (
    <div className="container grid h-screen grid-rows-1 py-20">
      <Canvas
        className="rounded-2xl"
        dpr={[1.5, 2]}
        camera={{ position: [0, 0, 30], fov: 45, near: 1, far: 300 }}
      >
        {/* <color attach="background" args={["#ffffff"]} /> */}
        <Physics gravity={[0, 0, 0]}>
          {/* <KineticPointer /> */}
          {/* CREATIVE */}
          <Letter
            char="C"
            wrapperProps={{
              position: [center1 - 3.5 * textGap, 8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="R"
            wrapperProps={{
              position: [center1 - 2.5 * textGap, 8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="E"
            wrapperProps={{
              position: [center1 - 1.5 * textGap, 8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="A"
            wrapperProps={{
              position: [center1 - 0.5 * textGap, 8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="T"
            wrapperProps={{
              position: [center1 + 0.5 * textGap, 8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="I"
            wrapperProps={{
              position: [center1 + 1.5 * textGap, 8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.05}
          />
          <Letter
            char="V"
            wrapperProps={{
              position: [center1 + 2.5 * textGap, 8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="E"
            wrapperProps={{
              position: [center1 + 3.5 * textGap, 8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          {/* HUNG */}
          <Letter
            char="H"
            wrapperProps={{
              position: [-15, 0, 0],
            }}
          />
          <Letter
            char="U"
            wrapperProps={{
              position: [-5, 0, 0],
            }}
          />
          <Letter
            char="N"
            wrapperProps={{
              position: [5, 0, 0],
            }}
          />
          <Letter
            char="G"
            wrapperProps={{
              position: [15, 0, 0],
            }}
          />
          {/* DEVELOPER */}
          <Letter
            char="D"
            wrapperProps={{
              position: [center2 - 4 * textGap, -8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="E"
            wrapperProps={{
              position: [center2 - 3 * textGap, -8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="V"
            wrapperProps={{
              position: [center2 - 2 * textGap, -8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.12}
          />
          <Letter
            char="E"
            wrapperProps={{
              position: [center2 - textGap, -8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="L"
            wrapperProps={{
              position: [center2, -8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="O"
            wrapperProps={{
              position: [center2 + textGap, -8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.12}
          />
          <Letter
            char="P"
            wrapperProps={{
              position: [center2 + 2 * textGap, -8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="E"
            wrapperProps={{
              position: [center2 + 3 * textGap, -8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
          <Letter
            char="R"
            wrapperProps={{
              position: [center2 + 4 * textGap, -8, 0],
            }}
            textProps={{
              scale: 0.06,
            }}
            impulseScalar={0.1}
          />
        </Physics>
        {/* <CameraControls
          makeDefault
          dollyToCursor
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        /> */}
      </Canvas>
    </div>
  )
}
