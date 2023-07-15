import {useFrame} from "@react-three/fiber"
import {
    AccumulativeShadows,
    RandomizedLight,
    SoftShadows,
    useHelper,
    OrbitControls,
    BakeShadows,
} from "@react-three/drei"
import {useRef} from "react"
import {Perf} from "r3f-perf"
import * as THREE from "three"

export default function Experience() {
    const cube = useRef()
    const directionalLight = useRef()

    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    useFrame((state, delta) => {
        ;``
        cube.current.rotation.y += delta * 0.2
    })

    return (
        <>
            {/* <BakeShadows /> */}
            {/* <SoftShadows
                frustum={3.75}
                size={50}
                near={9.5}
                samples={17}
                rings={11}
            /> */}
            <AccumulativeShadows
                position={[0, -0.99, 0]}
                color='#316d39'
                opacity={0.8}
                frames={1000}
                temporal={false}
            >
                <RandomizedLight
                    amount={8}
                    radius={1}
                    intensity={1}
                    ambient={0.5}
                    position={[1, 2, 3]}
                    bias={0.001}
                />
            </AccumulativeShadows>

            <Perf position='top-left' />

            <OrbitControls makeDefault />

            <directionalLight
                // castShadow
                position={[2, 2, 3]}
                intensity={1.5}
                ref={directionalLight}
            />

            <ambientLight intensity={0.5} />

            <mesh
                castShadow
                position-x={-2}
            >
                <sphereGeometry />
                <meshStandardMaterial color='orange' />
            </mesh>

            <mesh
                castShadow
                ref={cube}
                position-x={2}
                scale={1.5}
            >
                <boxGeometry />
                <meshStandardMaterial color='mediumpurple' />
            </mesh>

            <mesh
                // receiveShadow
                position-y={-1}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>

            <color
                args={["black"]}
                attach={"background"}
            />
        </>
    )
}
