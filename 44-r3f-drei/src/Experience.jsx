import {
    OrbitControls,
    TransformControls,
    PivotControls,
    Html,
    Text,
    Float,
    MeshReflectorMaterial,
    MeshTransmissionMaterial,
} from "@react-three/drei"
import {useRef} from "react"
import {useControls} from "leva"

export default function Experience() {
    const materialProps = useControls({
        thickness: {value: 5, min: 0, max: 20},
        roughness: {value: 0, min: 0, max: 1, step: 0.1},
        clearcoat: {value: 1, min: 0, max: 1, step: 0.1},
        clearcoatRoughness: {value: 0, min: 0, max: 1, step: 0.1},
        transmission: {value: 1, min: 0.9, max: 1, step: 0.01},
        ior: {value: 1.25, min: 1, max: 2.3, step: 0.05},
        envMapIntensity: {value: 25, min: 0, max: 100, step: 1},
        color: "#ffffff",
        attenuationTint: "#ffe79e",
        attenuationDistance: {value: 0, min: 0, max: 1},
    })

    return (
        <>
            <color
                attach='background'
                args={["#151518"]}
            />
            <OrbitControls makeDefault />

            <directionalLight
                position={[1, 2, 3]}
                intensity={1.5}
            />
            <ambientLight intensity={0.5} />

            <Html
                position={[0, 0, 0]}
                transform='none'
                wrapperClass='hero-text_wrap'
            >
                <h1 className='hero-text'>Test</h1>
            </Html>

            <mesh
                rotation-y={2}
                position={[0, 0, 2]}
            >
                <sphereGeometry />
                <meshPhysicalMaterial {...materialProps} />
            </mesh>
        </>
    )
}
