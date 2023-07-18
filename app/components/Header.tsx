import React from 'react';
import Image from 'next/image';
import MenuIcon from '@/app/assets/MenuIconSVG';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo flex justify-between'>
          <h1>Health Overview</h1>
          <MenuIcon fill='#ffffff'></MenuIcon>
        </div>
      </div>
    </header>
  );
};

export default Header;
