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
    hip: { value: string };
  };
}

const HomePage = () => {
  const [percentage, setPercentage] = useState<number>(0);
  const [gender, setGender] = useState<string>('male');
  const requestBodyMass = async (e: IRequestBodyMass) => {
    e.preventDefault();
    const data = {
      gender: e.target.gender.value,
      height: +e.target.height.value,
      weight: +e.target.weight.value,
      waist: +e.target.waist.value,
      neck: +e.target.neck.value,
      hip: e.target.hip?.value,
    };

    const queryParams = Object.entries(data)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    const response = await fetch(`http://localhost:3001/body-mass/calculator?${queryParams}`);
    const responseData = await response.json();
    if (responseData.percentage) {
      setPercentage(responseData.percentage.toFixed(1));
    }
    if (responseData.gender) {
      setGender(responseData.gender);
    }
  };

  const resetRange = () => {
    setPercentage(0);
    setGender('');
  };
  return (
    <div className='flex mt-16 h-full m-auto min-h-full w-11/12 justify-center'>
      <div className='flex-1 px-20'>
        <BodyFatIndexForm requestBodyMass={requestBodyMass} resetRange={resetRange} />
      </div>
      <div className='flex-1 px-20 mt-auto mb-auto'>
        {!!percentage && !!gender && <Range percentage={percentage} gender={gender} />}
      </div>
    </div>
  );
};

export default HomePage;
