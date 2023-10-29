import { useRef } from "react"
import { Center, Text3D } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RapierRigidBody, RigidBody, RigidBodyProps } from "@react-three/rapier"
import { Vector3 } from "three"

interface Props {
  char: string
  vec?: Vector3
  wrapperProps?: RigidBodyProps
  textProps?: any
  impulseScalar?: number
}

export const Letter = ({
  char,
  vec = new Vector3(),
  wrapperProps,
  textProps,
  impulseScalar = 1.5,
}: Props) => {
  const api = useRef<RapierRigidBody>(null)
  useFrame(() => {
    api.current?.applyImpulse(
      vec
        .copy(api.current.translation() as Vector3)
        .negate()
        .multiplyScalar(impulseScalar),
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
      {...wrapperProps}
    >
      <Center>
        <Text3D
          font="/fonts/noir-pro-bold.blob"
          bevelEnabled
          bevelThickness={5}
          bevelSize={2}
          smooth={1}
          scale={0.125}
          size={60}
          height={4}
          curveSegments={10}
          bevelOffset={0}
          bevelSegments={5}
          {...textProps}
        >
          {char}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </RigidBody>
  )
}
