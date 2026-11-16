import React from 'react';

export const PrimaryButton = ({ children, width = 'w-auto', onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-xl bg-primary text-on-primary hover:bg-primary-hover transition-colors cursor-pointer ${width}`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, width = 'w-auto', onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center h-10 px-4 border-2 border-primary text-sm font-medium rounded-xl bg-primary-soft text-primary hover:bg-on-primary transition-colors cursor-pointer ${width}`}
    >
      {children}
    </button>
  );
};