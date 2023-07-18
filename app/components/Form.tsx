'use client';
import React, { useState } from 'react';
import Button from './Button';
interface IFormInput {
  label: string;
  id: string;
  value: number;
  onChange: (value: number) => void;
}

const GenderInput = ({
  gender,
  setGender,
}: {
  gender: string;
  setGender: (value: string) => void;
}) => {
  return (
    <div className='mb-4'>
      <p className='mb-2 font-bold'>Género</p>
      <div className='flex justify-between w-44'>
        <label>
          <input
            type='radio'
            name='gender'
            value='male'
            onChange={(e) => setGender(e.target.value)}
            checked={gender === 'male'}
            className='mr-3'
          />
          Hombre
        </label>
        <label>
          <input
            type='radio'
            name='gender'
            value='female'
            onChange={(e) => setGender(e.target.value)}
            checked={gender === 'female'}
            className='mr-3'
          />
          Mujer
        </label>
      </div>
    </div>
  );
};

const FormInput = ({ label, id, value, onChange }: IFormInput) => {
  return (
    <div className='mb-1'>
      <label htmlFor={id}>{label}</label>
      <input
        className='mt-2 mb-4 w-full bg-black border-[1px] rounded-full border-[#5A5A5A] p-2 pl-4 h-10'
        type='number'
        id={id}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
    </div>
  );
};

export const BodyFatIndexForm = ({ requestBodyMass }: { requestBodyMass: (e: any) => void }) => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [waist, setWaist] = useState(0);
  const [neck, setNeck] = useState(0);
  const [hip, setHip] = useState(0);

  const cleanForm = () => {
    setGender('male');
    setHeight(0);
    setWeight(0);
    setWaist(0);
    setNeck(0);
    setHip(0);
  };

  return (
    <div>
      <h1 className='text-6xl font-[600] mb-6'>Calculadora de Grasa Corporal</h1>
      <p className='font-light mb-6'>
        El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de
        calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona.
      </p>
      <p className='mb-7'>Los valores requeridos por la fórmula son los siguientes:</p>
      <form onSubmit={requestBodyMass}>
        <GenderInput gender={gender} setGender={setGender} />
        <FormInput label='Altura (cm)' id='height' value={height} onChange={setHeight} />
        <FormInput label='Peso (kg)' id='weight' value={weight} onChange={setWeight} />
        <FormInput label='Cintura (cm)' id='waist' value={waist} onChange={setWaist} />
        <FormInput label='Cuello (cm)' id='neck' value={neck} onChange={setNeck} />
        {gender === 'female' && (
          <FormInput label='Cadera (cm)' id='hip' value={hip} onChange={setHip} />
        )}
        <Button type='submit' color='bg-light-purple' title='Calcular' />
        <Button type='reset' color='bg-black' title='Limpiar' onClick={() => cleanForm()} />
      </form>
    </div>
  );
};
