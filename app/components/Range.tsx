import React from 'react';
import './Range.css';
const stops = [
  {
    color: '#029EEA',
    name: 'Esencial',
    range: '2-4%',
  },
  {
    color: '#2BEA02',
    name: 'Deportista',
    range: '6-13%',
  },
  {
    color: '#EAE502',
    name: 'Fitness',
    range: '14-17%',
  },
  {
    color: '#EA8A02',
    name: 'Aceptable',
    range: '18-25%',
  },
  {
    color: '#EA5702',
    name: 'Obeso',
    range: '25% +',
  },
];
const Range = ({ percentage }: { percentage: number }) => {
  const convertToMetric = (number: number) => {
    const clampedNumber = Math.min(Math.max(number, 0), 30);
    const metric = (clampedNumber / 30) * 100;
    return metric;
  };

  return (
    <div className='flex-col'>
      <h1 className='text-3xl font-bold mb-20'>Tu resultado es: {percentage}%</h1>
      <div className='flex items-center'>
        <div
          className='percentage-value relative top-[-6rem]'
          style={{
            left: `calc(${
              percentage >= 28
                ? '100% - 15px'
                : percentage <= 10
                ? `${convertToMetric(percentage)}% + 45px`
                : percentage > 10 && percentage <= 16
                ? `${convertToMetric(percentage)}% + 55px`
                : `${convertToMetric(percentage)}% + 25px`
            })`,
          }}
        >
          {percentage}%
        </div>
        <div
          className='arrow'
          style={{
            left: `calc(${
              percentage >= 28
                ? '100% - 40px'
                : percentage <= 10
                ? `${convertToMetric(percentage)}% + 25px`
                : percentage > 10 && percentage <= 16
                ? `${convertToMetric(percentage)}% + 25px`
                : `${convertToMetric(percentage)}%`
            })`,
          }}
        ></div>
        <input
          type='range'
          min='0'
          max='28'
          value={percentage}
          readOnly
          className='range-slider'
          style={{ background: getGradient() }}
        />
      </div>
      <div className='flex justify-evenly mt-5'>
        {stops.map((stop, index) => {
          return (
            <div className='flex-col text-center items-center' key={index}>
              <div
                className='ml-auto mr-auto w-4 h-4 rounded mb-2'
                style={{ backgroundColor: `${stop.color}` }}
              ></div>
              <p>{stop.range}</p>
              <p>{stop.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const getGradient = () => {
  const colorStops = stops.map((stop) => `${stop.color}`);

  return `linear-gradient(to right, ${colorStops.join(', ')})`;
};

export default Range;
