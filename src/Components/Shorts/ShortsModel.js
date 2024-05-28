import React, { useContext, useRef, useEffect, Suspense } from "react";
import { StyleContext } from "./StyleproviderShorts";
import { Canvas, useThree,useFrame } from '@react-three/fiber';
import { ContactShadows,Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

export const ShortsModel = () => {
  const { sharedState } = useContext(StyleContext);
 

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
    texture.repeat.set(1, 1);
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
        <Scene nodes={useGLTF("shorts.glb").nodes} fabricMaterials={fabricMaterials} sharedState={sharedState} />
      </Canvas>
    </Suspense>
  );
};

const Scene = ({ nodes, fabricMaterials, sharedState }) => {
  const { camera } = useThree();
  const group = useRef();
  console.log("nodes:",nodes)

  useEffect(() => {
    camera.position.set(0, 0, 60)
    camera.rotation.set(0,0,5)
    camera.fov = 55;
    camera.updateProjectionMatrix();
  }, [camera]);
    // Automatic rotation
    // useFrame(() => {
    //     group.current.rotation.y += 0.01;
    //   });

  return (
    <>
    
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <directionalLight position={[0, -100, -100]} intensity={1} />
      <directionalLight position={[0, 300, 100]} intensity={1} />
      <Environment preset="city" />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -0.8, 0]}
              opacity={0.25}
              width={10}
              height={10}
              blur={1.5}
              far={0.8}
            />
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
