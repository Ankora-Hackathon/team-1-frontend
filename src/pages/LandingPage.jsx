import React from 'react';
import { Box, Typography } from '@mui/material';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import Navbar from '../components/Navbar';


export const LandingPage =()=> {
    function HeartModel() {
        const gltf = useLoader(GLTFLoader, 'https://example.com/heart-model.gltf');
        return (
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <primitive object={gltf.scene} scale={[0.1, 0.1, 0.1]} />
          </mesh>
        );
      }
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url('https://example.com/background-image.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        
        <Typography variant='h2' sx={{ fontWeight: 'bold', mb: '1rem' }}>
          How Are You Feeling Today?
        </Typography>
        <Typography variant='body1' sx={{ textAlign: 'center', maxWidth: '30rem' }}>
          Welcome to our medical app! Our goal is to help you keep track of your health and make informed decisions about your well-being. Let's get started!
        </Typography>
        <Box style={{ width: '20rem', height: '20rem' }}>
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <HeartModel />
          </Canvas>
        </Box>
      </Box>
    </Box>
  );
}