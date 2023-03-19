import React from 'react';
import { Box, Button, Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../components/constants/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p="2"
      sx={{
        zIndex: '10',
        position: 'sticky',
        background: '#f9f4ed',
        top: 0,
        justifyContent: 'space-between',
        height: '80px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      }}
    >
    
      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', marginLeft: '18px' }}>
          <img src={logo} alt="logo" height="130px" width="120px" />
        </Link>

        <Button
          variant="contained"
          component={Link}
          to="/aboutUs"
          sx={{ marginLeft: '10px',  '&:hover': {
            backgroundColor: '#b3a18e',
          }, backgroundColor:'#dfd0bb', color:'white',  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
        >
          About Us
        </Button>

        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/contact"
          sx={{ marginLeft: '10px' , backgroundColor:'#dfd0bb',  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',  '&:hover': {
            backgroundColor: '#b3a18e',
          }}}
        >
          Contact
        </Button>

        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/aboutApp"
          sx={{ marginLeft: '10px', backgroundColor:'#dfd0bb' ,  '&:hover': {
            backgroundColor: '#b3a18e',
          }}}
        >
          About App
        </Button>
      </Box>

    
      <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
          sx={{ marginLeft: '10px',backgroundColor:'#a39179', '&:hover': {
            backgroundColor: '#7b5e41',
          }}}
        >
          Log In
        </Button>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
          sx={{ marginLeft: '10px',backgroundColor:'#a39179', '&:hover': {
            backgroundColor: '#7b5e41',
          } }}
        >
          Register
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/patient"
          sx={{ marginLeft: '10px',backgroundColor:'#a39179', '&:hover': {
            backgroundColor: '#7b5e41',
          } }}
        >
          Let&apos;s get started
        </Button>
      </Box>
    </Stack>
  );
};



export default Navbar