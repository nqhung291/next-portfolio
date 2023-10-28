import { useMemo, useRef } from "react"
import type { Position } from "@/types"
import { Center, Text3D } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RapierRigidBody, RigidBody } from "@react-three/rapier"
import { MathUtils, Vector3 } from "three"

interface Props {
  char: string
  position: Position
  vec?: Vector3
  scale?: number
  r?: (x: number) => number
}

export const Letter = ({
  char,
  position,
  vec = new Vector3(),
  scale,
  r = MathUtils.randFloatSpread,
  ...props
}: Props) => {
  const api = useRef<RapierRigidBody>(null)
  const pos = useMemo(() => position || new Vector3(r(10), r(10), r(10)), [])
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    api.current?.applyImpulse(
      vec
        .copy(api.current.translation() as Vector3)
        .negate()
        .multiplyScalar(0.2),
      true
    )
  })
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
    >
      <Center>
        <Text3D
          font="/fonts/noir-pro-bold.blob"
          bevelEnabled
          smooth={1}
          scale={0.125}
          size={80}
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
