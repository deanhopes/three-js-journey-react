import {extend, useThree, useFrame} from "@react-three/fiber"
import {useRef} from "react"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import CustomObject from "./CustomObject.jsx"

extend({OrbitControls: OrbitControls})

export default function Experience() {
    const {camera, gl} = useThree()
    const cubeRef = useRef()
    const groupRef = useRef()
    const planeRef = useRef()

    console.log(camera, gl)

    useFrame((state, delta) => {
        cubeRef.current.rotation.z += delta
        // groupRef.current.rotation.y += delta
    })

    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />
            <CustomObject />
            <directionalLight
                intensity={1.5}
                position={[1, 2, 1]}
            />

            <ambientLight intensity={0.2} />

            <group ref={groupRef}>
                <mesh position-x={-2}>
                    <sphereGeometry />
                    <meshStandardMaterial
                        color={"orange"}
                        wireframe
                    />
                </mesh>

                <mesh
                    ref={cubeRef}
                    rotation-y={Math.PI * 0.25}
                    position-x={2}
                    scale={1.5}
                >
                    <boxGeometry scale={[1.5]} />
                    <meshStandardMaterial color={"mediumpurple"} />
                </mesh>
            </group>

            <mesh
                ref={planeRef}
                position-y={-1}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial color={"greenyellow"} />
            </mesh>
        </>
    )
}
