import React from 'react'
import Navbar from '../components/Navbar';
import { Box, Typography } from '@mui/material';
import slika1 from '../components/assets/AboutUsSlika.png'

export const AboutUs = () => {
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
                    About Us
                  </Typography>
                 <p> Welcome to our website, where we provide reliable and comprehensive medical advice and information to help you better understand your health concerns.</p>
                  <p>We understand that finding trustworthy medical information online can be overwhelming. That&apos;s why we&apos;ve created a user-friendly platform that&apos;s easy to navigate, and we use the latest medical research and guidelines to ensure that our information is reliable.</p>
                  <p>We believe that everyone deserves access to high-quality medical information, and we&apos;re committed to keeping your personal information confidential. We value transparency and encourage your questions and feedback.</p>
                 <p>Our website is designed to be accessible to everyone, regardless of their medical knowledge or background. We hope that our platform can empower you to take charge of your health and make informed decisions about your well-being.</p>
                  <p>Thank you for choosing us as your trusted source of medical advice. We&apos;re here to help you achieve better health and well-being.</p>
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