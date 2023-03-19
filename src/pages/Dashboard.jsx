import React, { useState } from 'react';
import { Layout } from '../components/shared';
import { Dyagnose, History, Medications, Profile } from '../components/tabs';

const menu = [
  {
    label: 'Dyagnose',
    value: 'dyagnose',
  },
  {
    label: 'History',
    value: 'history',
  },
  {
    label: 'Medications',
    value: 'medications',
  },
  {
    label: 'Profile',
    value: 'profile',
  },
];

const Tabs = {
  dyagnose: Dyagnose,
  history: History,
  medications: Medications,
  profile: Profile,
};

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState('dyagnose');
  const Tab = Tabs[currentTab];

  return (
    <Layout>
      <div className='grid grid-cols-12 col-span-2 space-x-12'>
        <div className='col-span-2'>
          <div className='flex flex-col items-start space-y-4'>
            {menu.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentTab(item.value)}
                className={`w-full px-4 py-2 ${
                  currentTab === item.value ? 'bg-gray-800' : 'border border-gray-800'
                } border border-gray-800 rounded`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className='col-span-10'>
          <Tab />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
