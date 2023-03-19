import { Box } from '@mui/material'

import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export const Patient = () => {
  
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [familyHistory, setFamilyHistory] = useState([]);
  const [healthCondition, setHealthCondition] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleAllergiesChange = (event) => {
    const selectedAllergies = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setAllergies(selectedAllergies);
  };

  const handleFamilyHistoryChange = (event) => {
    const selectedDiseases = familyHistory.includes(event.target.value)
      ? familyHistory.filter((disease) => disease !== event.target.value)
      : [...familyHistory, event.target.value];
    setFamilyHistory(selectedDiseases);
  };

  const handleHealthConditionChange = (event) => {
    setHealthCondition(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHealthCondition(event.target.elements.healthCondition.value);
  
  };

  return (
   <Box className="pozadina">
    
    <Navbar/>
    <h2 className="form-title">Please fill out our medical form </h2>

    <form className="medical-form" onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Medical Information</h2>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            value={gender}
            onChange={handleGenderChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="col">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={handleDobChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Allergies</label>
        <select
          className="form-select"
          multiple={true}
          value={allergies}
          onChange={handleAllergiesChange}
        >
          <option value="peanuts">Peanuts</option>
          <option value="shellfish">Shellfish</option>
          <option value="eggs">Eggs</option>
          <option value="milk">Milk</option>
          <option value="soy">Soy</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Chronic Diseases History</label>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="diabetesHistory"
              value="diabetes"     />
              <label className="form-check-label" htmlFor="diabetesHistory">
                Diabetes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="hypertensionHistory"
                value="hypertension"
                checked={familyHistory.includes("hypertension")}
                onChange={handleFamilyHistoryChange}
              />
              <label className="form-check-label" htmlFor="hypertensionHistory">
                Hypertension
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="heartAttackHistory"
                value="heartAttackHistory"
                checked={familyHistory.includes("heart attack")}
                onChange={handleFamilyHistoryChange}
              />
              <label className="form-check-label" htmlFor="heartAttackHistory">
                Heart attack
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="asthmaHistory"
                value="asthma"
                checked={familyHistory.includes("asthma")}
                onChange={handleFamilyHistoryChange}
              />
              <label className="form-check-label" htmlFor="asthmaHistory">
                Asthma
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Detailed Health Condition Description</label>
            <textarea
              className="form-control"
              name="healthCondition"
              rows="4"
              onChange={handleHealthConditionChange}
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
          <div className="d-grid gap-2" >
          <Link to="/results" style={{textDecoration:'none'}}>
            <button type="submit" className="dugme" onClick={()=>{setHealthCondition(healthCondition)}}>
             <div style={{fontWeight: 'bold', color:'white'}}> Submit</div>
            </button>
            </Link>
          </div>
          </div>
          </div>
        </form>
        


   </Box>
  );       
};

