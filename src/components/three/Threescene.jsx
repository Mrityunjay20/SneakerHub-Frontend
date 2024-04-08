import { Button } from '@material-tailwind/react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from './lib/SceneInit';

function ShoeExport() {
  const loadedModelRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const gltfLoader = new GLTFLoader();
    gltfLoader.load('src/assets/Jordanfinal.gltf', (gltfScene) => {
      loadedModelRef.current = gltfScene;
      gltfScene.scene.rotation.y = 0;
      gltfScene.scene.position.y = 0;
      gltfScene.scene.scale.set(1, 1, 1);
      test.scene.add(gltfScene.scene);
    });

    return () => {
      // Cleanup animation loop
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (loadedModelRef.current) {
        loadedModelRef.current.scene.rotation.x += 0.00;
        loadedModelRef.current.scene.rotation.y += 0.01;
        loadedModelRef.current.scene.rotation.z -= 0.00;
      }
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup animation loop
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div className='w-1/2'>
      <canvas className='w-1/2' id="myThreeJsCanvas" />
    </div>
  );
}

export default ShoeExport;
