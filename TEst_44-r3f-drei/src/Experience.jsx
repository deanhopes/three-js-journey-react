import {
    OrbitControls,
    TransformControls,
    Html,
    CubeCamera,
    MeshRefractionMaterial,
} from "@react-three/drei"
import {useRef} from "react"
import {useControls} from "leva"

export default function Experience() {
    const {ior, color} = useControls({
        ior: {value: -1.5, min: -3, max: 3, step: 0.1},
        color: "#ffffff",
    })

    const mesh = useRef()

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
                position={[0, 0, -2]}
                transform='none'
                wrapperClass='hero-text_wrap'
            >
                <h1 className='hero-text'>This is a placeholder statement</h1>
            </Html>

            <CubeCamera>
                {(texture) => (
                    <mesh
                        ref={mesh}
                        position={[0, 0, 0]}
                    >
                        <sphereGeometry args={[1, 32, 32]} />
                        <MeshRefractionMaterial
                            envMap={texture}
                            ior={ior}
                            color={color}
                        />
                        <meshStandardMaterial color='white' />
                    </mesh>
                )}
            </CubeCamera>
        </>
    )
}
