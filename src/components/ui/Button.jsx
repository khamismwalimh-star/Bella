import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  icon,
  iconRight,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-label-sm uppercase tracking-wide rounded transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-[12px] gap-1.5',
    md: 'px-6 py-3 text-[12px] gap-2',
    lg: 'px-8 py-4 text-[14px] gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-primary text-on-primary hover:bg-primary-container active:scale-[0.98]',
    secondary: 'bg-surface-container-high text-primary hover:bg-surface-container-highest active:scale-[0.98]',
    outline: 'border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-low hover:border-outline active:scale-[0.98]',
    ghost: 'text-secondary hover:text-primary hover:bg-surface-container-low active:scale-[0.98]',
    danger: 'bg-error text-on-error hover:opacity-90 active:scale-[0.98]'
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="material-symbols-outlined text-[18px]">{icon}</span>}
      {children}
      {iconRight && <span className="material-symbols-outlined text-[18px]">{iconRight}</span>}
    </button>
  );
};
