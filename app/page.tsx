'use client';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { BodyFatIndexForm, FORM_NAMES } from './components/Form';
import Range from './components/Range';

const HomePage = () => {
  const [percentage, setPercentage] = useState<number>(0);
  const [gender, setGender] = useState<string>('male');
  const requestBodyMass = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const gender = String(formData.get(FORM_NAMES.gender));
    const height = Number(formData.get(FORM_NAMES.height));
    const weight = Number(formData.get(FORM_NAMES.weight));
    const waist = Number(formData.get(FORM_NAMES.waist));
    const neck = Number(formData.get(FORM_NAMES.neck));
    const hip = formData.get(FORM_NAMES.hip);

    const data = {
      gender,
      height,
      weight,
      waist,
      neck,
      hip: hip ? Number(hip) : 0,
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
