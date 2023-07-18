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
  return (
    <div className='flex-col mt-16'>
      <div className='flex items-center gap-2.5'>
        {/* <div className='percentage-value'>{percentage}%</div>
        <div className='arrow' style={{ left: `${percentage}%` }}></div> */}
        <input
          type='range'
          min='0'
          max='100'
          value={percentage}
          readOnly
          className='range-slider'
          style={{ background: getGradient() }}
        />
      </div>
      <div className='flex justify-evenly'>
        {stops.map((stop) => {
          return (
            <div className='flex-col text-center items-center'>
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
  const colorStops = stops.map((stop, index) => {
    const start = (index * 100) / (stops.length - 1);
    return `${stop.color} ${start}%`;
  });

  return `linear-gradient(to right, ${colorStops.join(', ')})`;
};

export default Range;
