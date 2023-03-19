import React, { useState } from 'react';
import { Label } from '../shared';
import { Input } from '../shared/form';

const Medications = () => {
  const [medications, setMedications] = useState([
    'Acetaminophen',
    'Adderall',
    'Amitriptyline',
    'Amlodipine',
    'Amoxicillin',
    'Ativan',
    'Atorvastatin',
    'Azithromycin',
  ]);
  const [medication, setMedication] = useState('');

  const handleOnSubmit = ({ event }) => {
    event.preventDefault();
    setMedications((previousState) => [...previousState, medication]);
    setMedication('');
  };
  return (
    <>
      <h1 className='text-2xl font-bold'>Medications</h1>
      <div className='flex flex-col space-y-4'>
        <form onSubmit={(event) => handleOnSubmit({ event })} className='flex items-end space-x-4'>
          <Label label='Add new medication'>
            <Input
              placeholder='E.g. Aspirin'
              onChange={(event) => setMedication(event.target.value)}
              value={medication}
            />
          </Label>
          <button className='px-4 py-2 h-[42px] bg-[#a59179] text-white rounded'>Add</button>
        </form>
        <div className='flex flex-col space-y-2'>
          <h1>List of used medications</h1>
          <div className='divide-y divide-[#a59179]'>
            {medications.map((item, id) => (
              <p key={id} className='py-4 text-gray-400'>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Medications;
