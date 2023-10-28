import { useMemo, useRef } from "react"
import type { Position } from "@/types"
import { Center, Text3D } from "@react-three/drei"
import { Euler, useFrame } from "@react-three/fiber"
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier"
import { MathUtils, Vector3 } from "three"

interface Props extends RigidBodyProps {
  char: string
  vec?: Vector3
  scale?: number
  r?: (x: number) => number
}

export const Letter = ({
  char,
  vec = new Vector3(),
  scale,
  r = MathUtils.randFloatSpread,
  ...props
}: Props) => {
  const api = useRef<RapierRigidBody>(null)
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    api.current?.applyImpulse(
      vec
        .copy(api.current.translation() as Vector3)
        .negate()
        .multiplyScalar(2),
      true
    )
  })
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      colliders="cuboid"
      ref={api}
      {...props}
    >
      <Center>
        <Text3D
          font="/fonts/noir-pro-bold.blob"
          bevelEnabled
          smooth={1}
          scale={0.125}
          size={60}
          height={4}
          curveSegments={10}
          bevelThickness={10}
          bevelSize={2}
          bevelOffset={0}
          bevelSegments={5}
        >
          {char}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </RigidBody>
  )
}
