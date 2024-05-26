import React, { useContext, useRef, useEffect, Suspense } from "react";
import { StyleContext } from "./StyleProviderPolo";
import { Canvas, useThree,useFrame } from '@react-three/fiber';
import { ContactShadows, OrbitControls, useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

export const PoloModel = () => {
  const { sharedState } = useContext(StyleContext);
    console.log(12304950)
  // Function to import all images
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../Fabric', false, /\.jpg$/));
  const textureLoader = new TextureLoader();

  // Load textures
  const textures = images.map(image => {
    const texture = textureLoader.load(image);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
    return texture;
  });

  // Create fabric materials
  const fabricMaterials = textures.map(texture => new THREE.MeshStandardMaterial({ map: texture }));
  useEffect(()=>{
    console.log("Changes::",sharedState.BottomStyle)
  },[sharedState]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
     
      <Canvas className="fullscreen-canvas">
        <Scene nodes={useGLTF("polo.glb").nodes} fabricMaterials={fabricMaterials} sharedState={sharedState} />
      </Canvas>
    </Suspense>
  );
};

const Scene = ({ nodes, fabricMaterials, sharedState }) => {
    console.log("polo:",nodes)
  const { camera } = useThree();
  const group = useRef();
  console.log(0)

  useEffect(() => {
    camera.position.set(0, 0, 25)
    camera.rotation.set(0,0,20)
    camera.fov = 15;
    camera.updateProjectionMatrix();
    
  }, [camera]);
    // Automatic rotation
    useFrame(() => {
        group.current.rotation.y += 0.01;
      });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <directionalLight position={[0, -100, -100]} intensity={1} />
      <directionalLight position={[0, 300, 100]} intensity={1} />
      <group ref={group} dispose={null}>
        {Object.keys(nodes).map(key => (
          <mesh
            key={key}
            geometry={nodes[key].geometry}
            material={fabricMaterials[sharedState.Fabricindex]}
          />
        ))}
      </group>
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -0.8, 0]}
        opacity={0.25}
        width={10}
        height={10}
        blur={1.5}
        far={0.8}
      />
      <OrbitControls />
    </>
  );
};
