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
    // neck materials
    const images2 = importAll(require.context('./polofabric1', false, /\.jpg$/));
    const textureLoader2 = new TextureLoader();

    // Load textures
    const textures2 = images2.map(images2 => {
        const texture2 = textureLoader2.load(images2);
        texture2.wrapS = THREE.RepeatWrapping;
        texture2.wrapT = THREE.RepeatWrapping;
        texture2.repeat.set(10, 10);
        return texture2;
    });

    // Create fabric materials
    const neckfabricMaterials = textures2.map(texture2 => new THREE.MeshStandardMaterial({ map: texture2 }));
    const images3 = importAll(require.context('./polofabric1', false, /\.jpg$/));
    const textureLoader3 = new TextureLoader();

    // Load textures
    const textures3 = images2.map(images3 => {
        const texture3 = textureLoader3.load(images3);
        texture3.wrapS = THREE.RepeatWrapping;
        texture3.wrapT = THREE.RepeatWrapping;
        texture3.repeat.set(10, 10);
        return texture3;
    });

    // Create fabric materials
    const cufffabricMaterials = textures3.map(texture3 => new THREE.MeshStandardMaterial({ map: texture3 }));


    return (
        <Suspense fallback={<Loading />}>
            <Canvas className="fullscreen-canvas">
                <Scene
                    nodes={useGLTF("polo3.glb").nodes}
                    fabricMaterials={fabricMaterials}
                    sharedState={sharedState}
                    collarfabricMaterials={collarfabricMaterials}
                    neckfabricMaterials={neckfabricMaterials}
                    cufffabricMaterials={cufffabricMaterials}
                />
            </Canvas>
        </Suspense>
    );
};

const Scene = ({ nodes, fabricMaterials, sharedState, collarfabricMaterials, neckfabricMaterials, cufffabricMaterials }) => {

    const { camera } = useThree();
    const group = useRef();
    console.log("polo_nodes:", nodes)

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
                        geometry={nodes.main_shirt002.geometry}
                        visible={true}
                    />
                    <mesh

                        material={sharedState.CuffContrastFlag ?
                            cufffabricMaterials[sharedState.CuffFabricIndex] :
                            fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.main_shirt003.geometry}
                        visible={true}
                    />
                    {/* Cuff side */}
                    {/* <mesh

                        material={
                            fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.main_shirt005.geometry}
                        visible={true}
                    />
                    <mesh

                        material={
                            fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.main_shirt005_1.geometry}
                        visible={true}
                    />
                    <mesh

                        material={sharedState.CuffContrastFlag ?
                            cufffabricMaterials[sharedState.CuffFabricIndex] :
                            fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.main_shirt006.geometry}
                        visible={true}
                    />
                    <mesh

                        material={sharedState.CuffContrastFlag ?
                            cufffabricMaterials[sharedState.CuffFabricIndex] :
                            fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.main_shirt006_1.geometry}
                        visible={true}
                    /> */}
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.placket_front.geometry}
                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.placket_front001.geometry}
                    />
                    <mesh
                        material={sharedState.NeckContrastFlag
                            ? neckfabricMaterials[sharedState.NeckFabricIndex]
                            : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.neck_collar.geometry}

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
                        geometry={nodes.collar_classical.geometry}
                        visible={sharedState.CollarStyle[2] || sharedState.CollarStyle[1]}
                    />
                    <mesh
                        material={sharedState.CollarContrastFlag
                            ? collarfabricMaterials[sharedState.CollarFabricIndex]
                            : fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.collar_round.geometry}
                        visible={sharedState.CollarStyle[0]}
                    />


                    <mesh

                        material={fabricMaterials[sharedState.Fabricindex]}

                        geometry={nodes.front_buttons.geometry}
                        visible={sharedState.ButtonFlag[0]}

                    />
                    <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.front_buttons001.geometry}
                        visible={sharedState.ButtonFlag[1]}
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
                        visible={sharedState.ChestStyle[0]}
                    />


                    {/* <mesh
                        material={fabricMaterials[sharedState.Fabricindex]}
                        geometry={nodes.pocket_front002.geometry}
                        visible={sharedState.ChestStyle[1]}
                    />  */}
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
