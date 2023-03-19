import React from 'react';

const History = () => {
  return (
    <>
      <h1 className='text-2xl font-bold'>History</h1>
      <div className='flex flex-col divide-y divide-[#a59179]'>
        {[...Array(12)].map((item, id) => (
          <p key={id} className='py-4 text-gray-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae modi reiciendis quo
            fugit deserunt labore illum magni earum dolores, dignissimos saepe praesentium facere
            quod distinctio sunt architecto voluptates nihil et!
          </p>
        ))}
      </div>
    </>
  );
};

export default History;
