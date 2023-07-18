import React from 'react';
interface IButtonProps {
  color: string;
  title: string;
  type: 'submit' | 'reset';
  onClick?: () => void;
}
const Button = ({ color, onClick, title, type }: IButtonProps) => {
  return (
    <button type={type} className={`${color} rounded-full px-4 py-2 mr-4`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
