import React from 'react';
import './Range.css';
const stopsMale = [
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
const stopsFemale = [
  {
    color: '#029EEA',
    name: 'Esencial',
    range: '10-13%',
  },
  {
    color: '#2BEA02',
    name: 'Deportista',
    range: '14-20%',
  },
  {
    color: '#EAE502',
    name: 'Fitness',
    range: '21-24%',
  },
  {
    color: '#EA8A02',
    name: 'Aceptable',
    range: '25-31%',
  },
  {
    color: '#EA5702',
    name: 'Obeso',
    range: '32% +',
  },
];
const Range = ({ percentage, gender }: { percentage: number; gender: string }) => {
  const stops = gender === 'female' ? stopsFemale : stopsMale;

  const convertToMetric = (number: number) => {
    const clampedNumber = Math.min(Math.max(number, 0), 30);
    const metric = (clampedNumber / 30) * 100;
    console.log('%c⧭ metric', 'color: #e57373', metric);
    return metric;
  };

  const getPercentageValuePosition = (percentage: number) => {
    const metric = convertToMetric(percentage);
    if (percentage >= 28) {
      return 'calc(100% - 15px)';
    } else if (percentage <= 10) {
      return `${metric}% + 45px`;
    } else if (percentage > 10 && percentage <= 16) {
      `${metric}% + 55px`;
    } else {
      return `${metric}% + 2px`;
    }
  };

  const getArrowPosition = (percentage: number) => {
    const metric = convertToMetric(percentage);
    if (percentage >= 28) {
      return 'calc(100% - 40px)';
    } else if (percentage <= 10 || (percentage > 10 && percentage <= 16)) {
      return `${metric}% + 250px`;
    } else {
      return `${metric}%`;
    }
  };

  return (
    <>
      {percentage && (
        <div className='flex-col'>
          <h1 className='text-3xl font-bold mb-20'>Tu resultado es: {percentage}%</h1>
          <div className='flex items-center'>
            <div
              className='percentage-value relative top-[-6rem]'
              style={{
                left: getPercentageValuePosition(percentage),
              }}
            >
              {percentage}%
            </div>
            <div
              className='arrow'
              style={{
                left: getArrowPosition(percentage),
              }}
            ></div>
            <input
              type='range'
              min='0'
              max='28'
              value={percentage}
              readOnly
              className='range-slider'
              style={{ background: getGradient(stops) }}
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
      )}
    </>
  );
};

const getGradient = (stops: { color: string; name: string; range: string }[]) => {
  const colorStops = stops.map((stop) => `${stop.color}`);

  return `linear-gradient(to right, ${colorStops.join(', ')})`;
};

export default Range;
