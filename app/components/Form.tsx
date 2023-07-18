'use client';
import React, { useState } from 'react';

export const BodyFatIndexForm = () => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [hip, setHip] = useState('');

  return (
    <div>
      <h1 className='text-7xl font-[600] mb-6'>Calculadora de Grasa Corporal</h1>
      <p className='font-light mb-6'>
        El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de
        calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona.
      </p>
      <p>Los valores requeridos por la fórmula son los siguientes:</p>
      <form action=''>
        <div className='mb-4'>
          <p className='mb-2'>Género</p>
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
                className='mr-3'
                onChange={(e) => setGender(e.target.value)}
                checked={gender === 'female'}
              />
              Mujer
            </label>
          </div>
        </div>

        {/* Add more form fields for height, weight, waist, neck, and hip */}
        <div className='mb-4'>
          <label htmlFor='height'>Altura</label>
          <input
            type='number'
            id='height'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='weight'>Peso</label>
          <input
            type='number'
            id='weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='waist'>Cintura</label>
          <input
            type='number'
            id='waist'
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='neck'>Cuello</label>
          <input type='number' id='neck' value={neck} onChange={(e) => setNeck(e.target.value)} />
        </div>

        <div className='mb-4'>
          <label htmlFor='hip'>Cadera</label>
          <input type='number' id='hip' value={hip} onChange={(e) => setHip(e.target.value)} />
        </div>
      </form>
    </div>
  );
};
