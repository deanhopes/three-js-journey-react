import * as THREE from "three"
import {useMemo, useRef, useEffect} from "react"

export default function CustomObject() {
    const geometryRef = useRef()

    // Render after the first render is complete
    useEffect(() => {
        geometryRef.current.computeVertexNormals()
    }, [])

    // Custom Object with random vertices
    const verticesCount = 10 * 3

    const positionsAttribute = useMemo(() => {
        const positions = new Float32Array(verticesCount * 3)

        for (let i = 0; i < verticesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3
        }

        return positions
    }, [])

    return (
        <>
            <mesh>
                <bufferGeometry ref={geometryRef}>
                    <bufferAttribute
                        attach='attributes-position'
                        count={verticesCount}
                        itemSize={3}
                        array={positionsAttribute}
                    />
                </bufferGeometry>
                <meshStandardMaterial
                    color={"mediumpurple"}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </>
    )
}
