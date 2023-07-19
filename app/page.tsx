'use client';
import { useState } from 'react';
import { BodyFatIndexForm } from './components/Form';
import Range from './components/Range';

interface IRequestBodyMass {
  preventDefault: () => void;
  target: {
    gender: { value: string };
    height: { value: string };
    weight: { value: string };
    waist: { value: string };
    neck: { value: string };
    hip: { value?: string };
  };
}

const HomePage = () => {
  const [showRange, setShowRange] = useState(false);
  const [percentage, setPercentage] = useState(28.1);
  const requestBodyMass = (e: IRequestBodyMass) => {
    e.preventDefault();
    console.log(e);
    const data = {
      gender: e.target.gender.value,
      height: +e.target.height.value,
      weight: +e.target.weight.value,
      waist: +e.target.waist.value,
      neck: +e.target.neck.value,
      hip: e.target.hip?.value,
    };

    if (data.gender !== 'female') delete data.hip;
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
