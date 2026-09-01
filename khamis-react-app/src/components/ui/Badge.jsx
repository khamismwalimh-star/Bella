import React from 'react';

export const Badge = ({
  children,
  variant = 'default', // 'default' | 'primary' | 'success' | 'warning' | 'error' | 'outline'
  icon,
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[12px] font-semibold tracking-wider uppercase';
  
  const variantStyles = {
    default: 'bg-surface-container text-on-surface-variant',
    primary: 'bg-primary text-on-primary',
    success: 'bg-primary-fixed text-on-primary-fixed',
    warning: 'bg-tertiary-fixed text-on-tertiary-fixed',
    error: 'bg-error-container text-on-error-container',
    outline: 'border border-outline-variant text-on-surface-variant bg-surface'
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>}
      {children}
    </span>
  );
};
