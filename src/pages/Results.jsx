import React from 'react'
import Navbar from '../components/Navbar';
import { Box, Typography } from '@mui/material';
import slika1 from '../components/assets/results.png'

export const Results = () => {
  return (
    <Box >
      <Navbar />
      <Box
        sx={{
          backgroundColor: '#f9f4ed',
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
        <Box display='flex' justifyContent='space-between'>
          <Box maxWidth='60%'>
            <Typography variant='h4' sx={{ textAlign: 'left', marginLeft: '20px' }}>
              <div className='home'>
                <div className="text" style={{ fontSize: '20px' }}>
                  <Typography variant='h3' sx={{ fontWeight: 'bold', mb: '1rem' }}>
                   Results
                  </Typography>
                
                </div>
              </div>
            </Typography>
          </Box>
          <Box maxWidth='50%' sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className='picture'>
              <img src={slika1} alt='image description' style={{ width: '200%', marginLeft: '3rem' }} />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}