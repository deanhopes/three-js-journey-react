import {OrbitControls} from "@react-three/drei"
import {button, useControls} from "leva"
import Cube from "./Cube"
import {Perf} from "r3f-perf"

export default function Experience() {
    const {position, color, visible} = useControls("plane", {
        position: {
            value: {x: 0.6, y: -1.3, z: 0},
            step: 0.1,
        },
        color: "#9ec1ff",
        visible: true,
        clickMe: button(() => alert("Hello!")),
        choice: {options: ["A", "B", "C"]},
    })
    const {scale} = useControls("cube", {
        position: {
            value: {x: 0.6, y: -1.3, z: 0},
            step: 0.1,
        },
        scale: 4,
        color: "#9ec1ff",
        visible: true,
        clickMe: button(() => alert("Hello!")),
        choice: {options: ["A", "B", "C"]},
    })
    return (
        <>
            <Perf />
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

            <Cube
                scale={scale}
                visible={visible}
            />

            <mesh
                position={[position.x, position.y, position.z]}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial color={color} />
            </mesh>
        </>
    )
}
