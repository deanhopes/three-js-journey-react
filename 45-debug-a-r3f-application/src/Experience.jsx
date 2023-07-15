import {OrbitControls} from "@react-three/drei"
import {useControls} from "leva"
import Cube from "./Cube"

export default function Experience() {
    const controls = useControls({
        position: -2,
    })
    return (
        <>
            <OrbitControls makeDefault />

            <directionalLight
                position={[1, 2, 3]}
                intensity={1.5}
            />
            <ambientLight intensity={0.5} />

            <mesh position-x={-2}>
                <sphereGeometry />
                <meshStandardMaterial color='orange' />
            </mesh>

            <Cube scale={2} />

            <mesh
                position-y={controls.position}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>
        </>
    )
}
