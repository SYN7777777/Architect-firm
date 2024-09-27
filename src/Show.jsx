import React from 'react';
import Profile from './Profile';

const Show = () => {
  return (
    <div className='py-12 px-4 lg:px-24 bg-base-200'>
      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase text-black text-center'>
        Project <span className='text-amber-700'>Gallery</span>
      </h1>
      <div className='my-12 sm:my-24'>
        <Profile />
      </div>
    </div>
  );
};

export default Show;
