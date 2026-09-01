import React from 'react';
import { useApp } from '../../context/AppContext';

export const ToastContainer = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-24 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-center justify-between p-3.5 rounded shadow-lg border text-[13px] font-medium animate-in slide-in-from-top-4 duration-200 ${
            toast.type === 'error'
              ? 'bg-error-container text-on-error-container border-error'
              : toast.type === 'warning'
              ? 'bg-tertiary-fixed text-on-tertiary-fixed border-tertiary'
              : 'bg-surface text-on-surface border-primary'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              {toast.type === 'error' ? 'error' : toast.type === 'warning' ? 'warning' : 'check_circle'}
            </span>
            <span>{toast.message}</span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="p-1 text-secondary hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      ))}
    </div>
  );
};
