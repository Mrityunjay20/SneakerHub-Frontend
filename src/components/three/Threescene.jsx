import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import { Camera } from 'three';

function ShoeExport() {
  const modelRef = useRef();

  // Load GLTF model using useLoader hook
  const gltf = useLoader(GLTFLoader, 'src/assets/Jordanfinal.gltf');
  gltf.scene.scale.set(0.21, 0.21, 0.21);

  return (
    <div style={{ width: '50%', border: '2px solid #ff', margin:'10px auto -100px auto' , height: '70vh' }}>
      {/* Set desired dimensions for the Canvas */}
      <Canvas style={{ width: '100%', height: '80%' }}>
        {/* Add lights and camera */}
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <perspectiveCamera position={[0, 0, 200]} fov={75} />

        {/* Render the loaded model */}
        <primitive object={gltf.scene} ref={modelRef} />


        {/* Animate the model */}
        <ModelAnimation modelRef={modelRef} />

        {/* Add OrbitControls for mouse interaction */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

// Component to animate the model
function ModelAnimation({ modelRef }) {
  useFrame(() => {
    // Rotate the model
    modelRef.current.rotation.y += 0.01;

  
  });

  return (null);
}

export default ShoeExport;
