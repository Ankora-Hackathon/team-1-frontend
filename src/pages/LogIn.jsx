import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import leftImage from '../components/assets/LogInLijevo.png'
import rightImage from '../components/assets/LogInDesno.png'
import "../LoginForm.css";

export const LogIn = () => {
  return (
    <Box>
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
        <table className="table">
          <tbody>
            <tr>
              <td>
                <Box maxWidth='100%'>
                  <div className='picture left-image'>
                    <img src={leftImage} alt='image description' style={{ width: '29em' }} />
                  </div>
                </Box>
              </td>
              <td className="log">
                <div className="login-form-container">
                  <h1 className="login-form-title" >Login</h1>
                  <form>
                    <div className="form-group">
                      <label htmlFor="username" className="login-form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="login-form-input"
                        placeholder="Enter your username"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="login-form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="login-form-input"
                        placeholder="Enter your password"
                      />
                    </div>
                    <button type="submit" className="login-form-button">
                      LOG IN
                    </button>
                  </form>
                </div>
              </td>
              <td>
                <Box maxWidth='100%'>
                  <div className='picture right-image'>
                    <img src={rightImage} alt='image description' style={{ width: '25em' }} />
                  </div>
                </Box>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  )
};