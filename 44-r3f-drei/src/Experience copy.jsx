import {
    OrbitControls,
    TransformControls,
    PivotControls,
    Html,
    Text,
    Float,
    MeshReflectorMaterial,
} from "@react-three/drei"
import {useRef} from "react"

export default function Experience() {
    const cube = useRef()
    const sphere = useRef()

    return (
        <>
            <OrbitControls makeDefault />

            <directionalLight
                position={[1, 2, 3]}
                intensity={1.5}
            />
            <ambientLight intensity={0.5} />

            <Float>
                <PivotControls
                    // scale={200}
                    lineWidth={4}
                    axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
                    depthTest={false}
                    anchor={[0, 0, 0]}
                    // fixed={true}
                >
                    <mesh
                        position-x={-2}
                        useRef={sphere}
                    >
                        <sphereGeometry />
                        <meshStandardMaterial color='orange' />
                        <Html
                            occlude={[sphere, cube]}
                            wrapperClass='label'
                            position={[1, 1, 1]}
                            center
                            distanceFactor={4}
                        >
                            <div>
                                <h1>Hello, world!</h1>
                            </div>
                        </Html>
                    </mesh>
                </PivotControls>
            </Float>

            <mesh
                position-x={2}
                scale={1.5}
                ref={cube}
            >
                <boxGeometry />
                <meshStandardMaterial color='mediumpurple' />
            </mesh>
            <TransformControls object={cube} />

            <mesh
                position-y={-1}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <MeshReflectorMaterial
                    blur={(1000, 1000)}
                    mixBlur={1}
                    resolution={512}
                    color='white'
                    mirror={0.5}
                />
            </mesh>

            <Float>
                <Text
                    color='salmon'
                    fontSize={2}
                    maxWidth={10}
                    lineHeight={1}
                    letterSpacing={0.02}
                    textAlign='center'
                    font='./bangers-v20-latin-regular.woff'
                    position={[0, 2, 0]}
                >
                    I LOVE R3F
                </Text>
            </Float>
        </>
    )
}
