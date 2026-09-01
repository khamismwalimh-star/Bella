import React from 'react';

export const Card = ({
  children,
  className = '',
  variant = 'default', // 'default' | 'flat' | 'highlight' | 'container'
  padding = 'p-md',
  onClick,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-surface-container-lowest border border-outline-variant rounded',
    flat: 'bg-surface border border-outline-variant rounded',
    highlight: 'bg-primary text-on-primary border border-primary rounded',
    container: 'bg-surface-container border border-outline-variant rounded'
  };

  return (
    <div
      onClick={onClick}
      className={`${variantStyles[variant]} ${padding} ${onClick ? 'cursor-pointer hover:border-primary transition-colors' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
