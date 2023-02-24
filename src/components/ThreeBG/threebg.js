import React, { useMemo, useRef, useEffect } from "react"
import { useFrame, useThree } from '@react-three/fiber'
import { BufferAttribute } from 'three'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import * as THREE from "three"

function Points() {

  const group = useRef(null)
  useFrame(() => {
    group.current.rotation.x += 0.001
  })

    const stars = useMemo(() => {
      const p = new Array(5000).fill(0).map((v) => ((0.5-Math.random()) * 100));
      return  new BufferAttribute(new Float32Array(p), 3);
    }, []);
  
    return (
      <points ref={group}>
        <bufferGeometry>
          <bufferAttribute attach={"attributes-position"} {...stars} />
        </bufferGeometry>
        <pointsMaterial size={0.1} color={0xffffff}></pointsMaterial>
      </points>
    )
}
// 0a060f
export default function ThreeBG(){

  useEffect(() => {
    window.removeEventListener("wheel", () => console.log("removed"))
  })

  const { camera, pointer } = useThree()

  const mesh = useRef(null)
  useFrame(() => {
    mesh.current.rotation.z += 0.0008
  })

  const Rig = () => {
    camera.rotation.y = 1
    camera.rotation.z = 0.5
    const vec = new THREE.Vector3()
    return useFrame((state) => {
      camera.position.lerp(
        vec.set(6 + pointer.x, -6 + pointer.y, 12 - pointer.y),
        0.1
      )
      camera.lookAt(0,0,4)
    }
    )
  }

    return (
      <>
        <Points/>
        {/* <directionalLight intensity={10}></directionalLight> */}
        <directionalLight position={[0, 0, 50]} intensity={10} color={0xffffff} lookAt={[0,0,0]}></directionalLight>
        <directionalLight position={[0, 0, -50]} intensity={10} color={0xaaff} lookAt={[0,0,0]}></directionalLight>
        <directionalLight position={[0, -50, 0]} intensity={10} color={0xff0000} lookAt={[0,0,0]}></directionalLight>
        <directionalLight position={[-50, 0, 0]} intensity={10} color={0xff006f} lookAt={[0,0,0]}></directionalLight>
        <ambientLight color={0xf0f0f0} intensity={1.2}></ambientLight>
        <mesh ref={mesh}>
          <torusGeometry args={[10, 7, 48, 24]}/>
          {/* <lineBasicMaterial color={0x00f0a0}></lineBasicMaterial> */}
          {/* <pointsMaterial color={0x00f0a0} size={0.01}></pointsMaterial> */}
          <meshStandardMaterial roughness={0.1} metalness={0.9} wireframe={true} color={0xfb607f}></meshStandardMaterial>
        </mesh>
        {/* <OrbitControls/> */}
        <Rig/>
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.1} height={500} />
          <Noise opacity={0.4} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </>      
    )
}

