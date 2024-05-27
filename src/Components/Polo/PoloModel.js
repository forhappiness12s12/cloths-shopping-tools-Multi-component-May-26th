import React, { useContext, useRef, useEffect, Suspense } from "react";
import { StyleContext } from "./StyleProviderPolo";
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import Loading from "./Loading";
export const PoloModel = () => {
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
        texture.repeat.set(10, 10);
        return texture;
    });

    // Create fabric materials
    const fabricMaterials = textures.map(texture => new THREE.MeshStandardMaterial({ map: texture }));

    const images1 = importAll(require.context('./polofabric', false, /\.jpg$/));
    const textureLoader1 = new TextureLoader();

    // Load textures
    const textures1 = images1.map(images1 => {
        const texture1 = textureLoader1.load(images1);
        texture1.wrapS = THREE.RepeatWrapping;
        texture1.wrapT = THREE.RepeatWrapping;
        texture1.repeat.set(10, 10);
        return texture1;
    });

    // Create fabric materials
    const collarfabricMaterials = textures1.map(texture1 => new THREE.MeshStandardMaterial({ map: texture1 }));
    useEffect(() => {
        
    }, [sharedState]);

    return (
        <Suspense fallback={<Loading />}>
            <Canvas className="fullscreen-canvas">
                <Scene 
                    nodes={useGLTF("polo1.glb").nodes} 
                    fabricMaterials={fabricMaterials} 
                    sharedState={sharedState} 
                    collarfabricMaterials={collarfabricMaterials} 
                />
            </Canvas>
        </Suspense>
    );
};

const Scene = ({ nodes, fabricMaterials, sharedState, collarfabricMaterials }) => {
    
    const { camera } = useThree();
    const group = useRef();
    console.log("polonodes:",nodes)

    useEffect(() => {
        camera.position.set(0, 0, 15)
        camera.rotation.set(0, 0, 20)
        camera.fov = 15;
        camera.updateProjectionMatrix();

    }, [camera]);
    // Automatic rotation
    useFrame(() => {
        // group.current.rotation.y += 0.01;
    });

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
                <mesh castShadow receiveShadow>
                    <mesh

                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.main_shirt.geometry}
                    />
                    <mesh

                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.main_shirt001.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.placket_front.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.placket_front001.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.neck_collar.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.neck_collar001.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.buttons.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.buttons001.geometry}
                    />
                    <mesh
                       material={sharedState.CollarContrastFlag 
                        ? collarfabricMaterials[sharedState.CollarFabricIndex] 
                        : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.collar_button_down_concealed.geometry}
                        visible={sharedState.CollarStyle[4]}
                    />

                    <mesh
                        material={sharedState.CollarContrastFlag 
                            ? collarfabricMaterials[sharedState.CollarFabricIndex] 
                            : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.collar_button_down.geometry}
                        visible={sharedState.CollarStyle[3]}
                    />
                    <mesh
                        material={sharedState.CollarContrastFlag 
                            ? collarfabricMaterials[sharedState.CollarFabricIndex] 
                            : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.collar_button_down001.geometry}
                        visible={sharedState.CollarStyle[3]}
                    />
                    <mesh
                        material={sharedState.CollarContrastFlag 
                            ? collarfabricMaterials[sharedState.CollarFabricIndex] 
                            : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.collar_classical.geometry}
                        visible={sharedState.CollarStyle[2]}
                    />
                    <mesh
                        material={sharedState.CollarContrastFlag 
                            ? collarfabricMaterials[sharedState.CollarFabricIndex] 
                            : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.collar_classical001.geometry}
                        visible={sharedState.CollarStyle[2]}
                    />
                    <mesh
                        material={sharedState.CollarContrastFlag 
                            ? collarfabricMaterials[sharedState.CollarFabricIndex] 
                            : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.collar_round.geometry}
                        visible={sharedState.CollarStyle[0]}
                    />
                    <mesh
                        material={sharedState.CollarContrastFlag 
                            ? collarfabricMaterials[sharedState.CollarFabricIndex] 
                            : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.collar_round001.geometry}
                        visible={sharedState.CollarStyle[0]}
                    />
                    <mesh
                        material={sharedState.CollarContrastFlag 
                            ? collarfabricMaterials[sharedState.CollarFabricIndex] 
                            : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.collar_tapper.geometry}
                        visible={sharedState.CollarStyle[1]}
                    />
                    <mesh
                        material={sharedState.CollarContrastFlag 
                            ? collarfabricMaterials[sharedState.CollarFabricIndex] 
                            : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.collar_tapper001.geometry}
                        visible={sharedState.CollarStyle[1]}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.front_buttons.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.front_buttons001.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.placket_back.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.placket_back001.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.pocket_front.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.pocket_front001.geometry}
                    />
                </mesh>

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
