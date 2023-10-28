import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { BallCollider, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { Vector3 } from "three"

export const KineticPointer = () => {
  const ref = useRef<RapierRigidBody>(null)

  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      new Vector3(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    )
  })
  return (
    <RigidBody
      ref={ref}
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
    >
      <BallCollider args={[5]} />
    </RigidBody>
  )
}
