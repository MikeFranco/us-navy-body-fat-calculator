'use client';
import React, { useState } from 'react';
import type { FormEvent } from 'react';
interface IGenderInput {
  gender: string;
  setGender: (value: string) => void;
  resetRange: () => void;
}

type FormInputProps = {
  label: string;
  id: string;
  name: string;
  defaultValue?: number;
};

export const FORM_NAMES = {
  height: 'height',
  weight: 'weight',
  waist: 'waist',
  neck: 'neck',
  hip: 'hip',
  gender: 'gender',
};

interface IBodyFatIndexForm {
  requestBodyMass: (e: FormEvent<HTMLFormElement>) => void;
  resetRange: () => void;
}

const GenderInput = ({ gender, setGender, resetRange }: IGenderInput) => {
  return (
    <div className='mb-4'>
      <p className='mb-2 font-bold'>Género</p>
      <div className='flex justify-between w-44'>
        <label>
          <input
            type='radio'
            name='gender'
            value='male'
            onChange={(e) => {
              setGender(e.target.value);
              resetRange();
            }}
            checked={gender === 'male'}
            className='mr-3'
          />
          Hombre
        </label>
        <label>
          <input
            type='radio'
            name={FORM_NAMES.gender}
            value='female'
            onChange={(e) => {
              setGender(e.target.value);
              resetRange();
            }}
            checked={gender === 'female'}
            className='mr-3'
          />
          Mujer
        </label>
      </div>
    </div>
  );
};

const FormInput = ({ label, id, name, defaultValue = 0 }: FormInputProps) => {
  return (
    <div className='mb-1'>
      <label htmlFor={id}>{label}</label>
      <input
        className='mt-2 mb-4 w-full bg-black border-[1px] rounded-full border-[#5A5A5A] p-2 pl-4 h-10'
        type='number'
        id={id}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export const BodyFatIndexForm = ({ requestBodyMass, resetRange }: IBodyFatIndexForm) => {
  const [gender, setGender] = useState('male');

  return (
    <div>
      <h1 className='text-6xl font-[600] mb-6'>Calculadora de Grasa Corporal</h1>
      <p className='font-light mb-6'>
        El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de
        calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona.
      </p>
      <p className='mb-7'>Los valores requeridos por la fórmula son los siguientes:</p>
      <form onSubmit={requestBodyMass}>
        <GenderInput gender={gender} setGender={setGender} resetRange={resetRange} />
        <FormInput label='Altura (cm)' id='height' name={FORM_NAMES.height} defaultValue={178} />
        <FormInput label='Peso (kg)' id='weight' name={FORM_NAMES.weight} defaultValue={70} />
        <FormInput label='Cintura (cm)' id='waist' name={FORM_NAMES.waist} defaultValue={96} />
        <FormInput label='Cuello (cm)' id='neck' name={FORM_NAMES.neck} defaultValue={50} />
        {gender === 'female' && (
          <FormInput label='Cadera (cm)' id='hip' name={FORM_NAMES.hip} defaultValue={93} />
        )}
        <button type='submit' className='bg-light-purple rounded-full px-4 py-2 mr-4'>
          Calcular
        </button>
        <button type='reset' className='bg-black rounded-full px-4 py-2 mr-4'>
          Limpiar
        </button>
      </form>
    </div>
  );
};
