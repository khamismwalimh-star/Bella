import React from 'react';

export const Input = ({
  label,
  id,
  error,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <span className="material-symbols-outlined absolute left-3 text-secondary text-[20px] pointer-events-none">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={`w-full border border-outline-variant rounded p-2.5 bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/70 ${icon ? 'pl-10' : ''} ${error ? 'border-error' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="font-label-sm text-error text-[11px] mt-1">{error}</p>}
    </div>
  );
};
