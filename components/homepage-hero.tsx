"use client"

import { Suspense } from "react"
import { Text } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Vector3 } from "three"

export const HomepageHero = () => {
  return (
    <div className="h-screen">
      <Suspense fallback={null}>
        <Canvas
          camera={{
            position: [0, 0, 15],
          }}
        >
          <Text
            fontSize={12}
            maxWidth={10}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={"left"}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle"
            fillOpacity={0}
            strokeWidth={0.1}
            strokeColor="#ffffff"
          >
            H.N.
          </Text>
          <Text
            fontSize={12}
            maxWidth={10}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={"left"}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle"
            fillOpacity={0}
            strokeWidth={0.1}
            strokeColor="#ffffff"
            strokeOpacity={1}
            position={new Vector3(1, 1, 1)}
          >
            H.N.
          </Text>
        </Canvas>
      </Suspense>
    </div>
  )
}
