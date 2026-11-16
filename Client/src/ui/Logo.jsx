import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Simple Text Icon Mark */}
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary font-bold text-lg ring-1 ring-border shadow-xs">
        F
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-base font-bold tracking-tight text-text">
          Finance
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
          Management
        </span>
      </div>
    </div>
  );
};

export default Logo;