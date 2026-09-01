import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const ScreenSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { screensCatalog } = useApp();
  const location = useLocation();

  const currentScreen = screensCatalog.find(s => {
    if (s.path.includes('?')) {
      const [base, query] = s.path.split('?');
      return location.pathname === base && location.search.includes(query);
    }
    return location.pathname === s.path;
  }) || screensCatalog[0];

  return (
    <>
      {/* Floating Pill Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-on-primary rounded-full shadow-lg hover:bg-primary-container transition-all border border-primary-fixed duration-200 group text-[13px] font-semibold tracking-wide"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:rotate-45 transition-transform">
            grid_view
          </span>
          <span>UI Kit Screens ({screensCatalog.length})</span>
          <span className="bg-primary-fixed text-on-primary-fixed text-[11px] px-2 py-0.5 rounded-full font-bold">
            {currentScreen?.folder || 'Browse'}
          </span>
        </button>
      </div>

      {/* Screen Selector Drawer Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-md bg-surface h-full shadow-2xl border-l border-outline-variant flex flex-col z-10 animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-headline-md text-[20px] font-bold text-primary">Khamis UI Kit</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded">
                    14 Folders Converted
                  </span>
                </div>
                <p className="text-secondary text-[13px] mt-1">
                  All screens from <code className="text-primary font-mono text-[12px]">stitch_khamis_diet_delivery_ui_kit</code>
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-secondary hover:text-primary hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Screens List */}
            <div className="flex-1 overflow-y-auto p-sm divide-y divide-outline-variant/40">
              {screensCatalog.map((screen, idx) => {
                const isActive = (screen.path.includes('?') && location.pathname + location.search === screen.path) ||
                                (!screen.path.includes('?') && location.pathname === screen.path);
                return (
                  <NavLink
                    key={screen.id}
                    to={screen.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex flex-col p-3 rounded transition-all group ${
                      isActive
                        ? 'bg-primary-fixed/30 border border-primary text-primary font-medium'
                        : 'hover:bg-surface-container-low text-on-surface'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-[14px] flex items-center gap-2 text-primary">
                        <span className="text-[11px] font-mono text-secondary bg-surface-container px-1.5 py-0.5 rounded">
                          {(idx + 1).toString().padStart(2, '0')}
                        </span>
                        {screen.title}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                        {screen.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[11px] font-mono text-secondary">
                        📁 /{screen.folder}
                      </span>
                    </div>
                    <p className="text-[12px] text-secondary mt-1 line-clamp-2">
                      {screen.description}
                    </p>
                  </NavLink>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-md border-t border-outline-variant bg-surface-container text-center">
              <p className="text-[12px] text-secondary">
                Clinical-Premium Minimalism Design System
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
