'use client';

import React, { HTMLAttributes, useContext } from 'react';
import { DrawerContext } from '../drawer';

export interface MenuButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const MenuButton = ({ ...rest }: MenuButtonProps) => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button {...rest} onClick={handleMenuToggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
  );
};
