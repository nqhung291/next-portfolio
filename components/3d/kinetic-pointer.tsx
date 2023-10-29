import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { BallCollider, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { Vector3 } from "three"

export const KineticPointer = ({ vec = new Vector3() }) => {
  const ref = useRef<RapierRigidBody>(null)

  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
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
      <BallCollider args={[3]} />
    </RigidBody>
  )
}
