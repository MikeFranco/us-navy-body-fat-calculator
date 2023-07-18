import React from 'react';
import Image from 'next/image';
import MenuIcon from '@/app/assets/MenuIconSVG';
import MonitorHeartSVG from '../assets/MonitorHeartSVG';
const Header = () => {
  return (
    <header className='flex bg-light-purple text-white p-4'>
      <div className='flex-1 px-36'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <MonitorHeartSVG fill='#ffffff' />
            <h1 className='ml-4'>Health Overview</h1>
          </div>
          <MenuIcon fill='#ffffff'></MenuIcon>
        </div>
      </div>
    </header>
  );
};

export default Header;
