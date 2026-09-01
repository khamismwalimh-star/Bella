import React, { useEffect } from 'react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-lg'
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className={`relative bg-surface border border-outline-variant rounded-lg shadow-xl w-full ${maxWidth} overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150`}>
        <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant bg-surface-container-low">
          <h3 className="font-headline-md text-[20px] text-primary font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-secondary hover:text-primary transition-colors p-1 rounded hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div className="p-md">
          {children}
        </div>
      </div>
    </div>
  );
};
