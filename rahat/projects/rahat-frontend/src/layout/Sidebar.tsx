import React, { useState, MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.svg';
import sun from '../assets/sun.svg';
import { navlinks } from '../constants/index';

interface IconProps {
  styles: string;
  name: string;
  imgUrl: string;
  isActive: string;
  disabled?: boolean;
  handleClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Icon: React.FC<IconProps> = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`flex items-center gap-2 p-2 rounded-[10px] ${isActive === name ? 'bg-[#2c2f32]' : ''} ${
      !disabled && 'cursor-pointer'
    } ${styles}`}
    onClick={handleClick}
  >
    <div className="flex-shrink-0 w-[48px] h-[48px] flex justify-center items-center">
      <img src={imgUrl} alt="icon" className={`w-1/2 h-1/2 ${isActive !== name ? 'grayscale' : ''}`} />
    </div>
    <span className="text-white">{name}</span>
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex flex-col justify-between items-center sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon styles="w-[70px] h-[60px] " imgUrl={logo} name="" isActive="" />
      </Link>

      <div className="flex-1 flex flex-col px-4 justify-between items-center bg-[#1c1c24] rounded-[20px] w-[200px] py-4 mt-12">
        <div className="flex flex-col justify-center items-start gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              styles="w-full" // Adjust width to fit the text and icon
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        {/* <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} name="" isActive="" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
