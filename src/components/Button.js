"use client";
import React from 'react';

const Button = ({ children, onClick, className })  => {
  return (
    <button
      className={`bg-blue text-white text-center font-bold py-2 px-8 rounded hover:text-blue cursor-pointer whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
