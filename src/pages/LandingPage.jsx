import React from 'react';
import { Box, Typography } from '@mui/material';
import './App.css'
import Navbar from '../components/Navbar';
import slika_doktora from '../components/assets/doctors.png'

  export const LandingPage =()=> {

    return (
      <Box>
        <Navbar />
        <Box
          sx={{
            backgroundColor:'#f9f4ed',
            
          }}
        >
          
          <Typography variant='h3' sx={{ fontWeight: 'bold', mb: '1rem' }}>
            How are you feeling today?
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'center', maxWidth: '30rem' }}>
            Welcome to our medical app! Our goal is to help you keep track of your health and make informed decisions about your well-being. Lets get started!
          </Typography>

      
        
          <img src={slika_doktora} alt="image description"/>

      
        </Box>
      </Box>
    );
  }