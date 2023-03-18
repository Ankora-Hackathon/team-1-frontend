import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../components/constants';


const Navbar = () => 
{   
  return (
   
    <Stack direction="row" alignItems="center" p="2" 
        sx={{ zIndex: '10', position: 'sticky', background: '#fff', top: 0, justifyContent: 'space-between', height: '80px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: "center", marginLeft: "10px" }}>
            <img src={logo} alt="logo" height={45}></img>
        </Link>
    </Stack>
);
};


export default Navbar