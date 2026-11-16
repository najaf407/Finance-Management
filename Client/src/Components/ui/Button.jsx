import React from 'react';
import { Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

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
      className={`inline-flex items-center justify-center h-10 px-4 border-2 border-primary text-sm font-medium rounded-xl bg-on-primary text-primary hover:bg-primary-soft transition-colors cursor-pointer ${width}`}
    >
      {children}
    </button>
  );
};

export const SettingButton = () => {
  return (
    <NavLink path = "/settings" to="/settings">
      <button
        className="flex h-fit lg:hidden items-center justify-center rounded-xl border border-border bg-surface p-2.5 text-text-muted transition-all hover:border-primary hover:bg-primary-soft hover:text-primary"
      >
        <Settings size={20} />
      </button>
    </NavLink>
  )
}