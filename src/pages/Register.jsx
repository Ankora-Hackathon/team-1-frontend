import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import leftImage from '../components/assets/RegistracijaLijevo.png'
import rightImage from '../components/assets/RegistracijaDesno.png'
import "../registerForm.css";

export const Register = () => {
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
        <table className="table1">
          <tbody>
            <tr>
              <td>
                <Box maxWidth='100%'>
                  <div className='picture left-image1'>
                    <img src={leftImage} alt='image description' style={{ width: '30em' }} />
                  </div>
                </Box>
              </td>
              <td className="log">
                <div className="login-form-container1">
                  <h1 className="login-form-title1" >Register</h1>
                  <form>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-group1">
                              <label htmlFor="name" className="login-form-label1">
                                Name
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                className="login-form-input1"
                                placeholder="Enter your name"
                              />
                            </div>
                            <div className="form-group1">
                              <label htmlFor="surname" className="login-form-label1">
                                Surname
                              </label>
                              <input
                                type="text"
                                id="surname"
                                name="surname"
                                className="login-form-input1"
                                placeholder="Enter your surname"
                              />
                            </div>
                            <div className="form-group1">
                              <label htmlFor="age" className="login-form-label1">
                                Age
                              </label>
                              <input
                                type="number"
                                id="age"
                                name="age"
                                className="login-form-input1"
                                placeholder="Enter your age"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-group1">
                              <label htmlFor="sex" className="login-form-label1">
                                Sex
                              </label>
                              <select id="sex" name="sex" className="login-form-input1">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                            <div className="form-group1">
                              <label htmlFor="username" className="login-form-label1">
                                Username
                              </label>
                              <input
                                type="text"
                                id="username"
                                name="username"
                                className="login-form-input1"
                                placeholder="Enter your username"
                              />
                            </div>
                            <div className="form-group1">
                              <label htmlFor="password" className="login-form-label1">
                                Password
                              </label>
                              <input
                                type="password"
                                id="password"
                                name="password"
                                className="login-form-input1"
                                placeholder="Enter your password"
                              />
                            </div>
                            <div className="form-group1">
                              <label htmlFor="confirmPassword" className
                                ="login-form-label1">
                                Confirm Password
                              </label>
                              <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="login-form-input1"
                                placeholder="Confirm your password"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button type="submit" className="login-form-button1">
                      REGISTER
                    </button>
                  </form>
                </div>
              </td>
              <td>
                <Box maxWidth='100%'>
                  <div className='picture right-image1'>
                    <img src={rightImage} alt='image description' style={{ width: '33em' }} />
                  </div>
                </Box>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};