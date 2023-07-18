'use client';
import { useState } from 'react';
import { BodyFatIndexForm } from './components/Form';
import Range from './components/Range';

const HomePage = async () => {
  const [showRange, setShowRange] = useState(true);
  const [percentage, setPercentage] = useState(28);
  const requestBodyMass = (e: any) => {
    e.preventDefault();
    console.log(e);
    const data = {
      gender: e.target.gender.value,
      height: e.target.height.value,
      weight: e.target.weight.value,
      waist: e.target.waist.value,
      neck: e.target.neck.value,
      hip: null,
    };

    if (data.gender === 'female') data.hip = e.target.hip.value;
    setShowRange(true);
  };
  return (
    <div className='flex mt-16 h-full m-auto min-h-full w-11/12 justify-center'>
      <div className='flex-1 px-20'>
        <BodyFatIndexForm requestBodyMass={requestBodyMass} />
      </div>
      <div className='flex-1 px-20 mt-auto mb-auto'>
        {showRange && <Range percentage={percentage} />}
      </div>
    </div>
  );
};

export default HomePage;
