import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useApp();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Plans', path: '/services' },
    { name: 'Nutritionists', path: '/booking' },
    { name: 'About Us', path: '/about' },
    { name: 'Platform', path: '/platform' },
    { name: 'Admin', path: '/admin' }
  ];

  return (
    <header className="bg-surface docked full-width top-0 border-b border-outline-variant flat no-shadows sticky z-40 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-4 md:px-container-margin h-20 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-headline-md text-headline-md font-bold text-primary hover:opacity-80 transition-opacity tracking-tight"
          >
            Khamis
          </Link>
          <span className="hidden xl:inline-block text-[11px] font-semibold uppercase tracking-widest text-secondary bg-surface-container px-2 py-0.5 rounded">
            Clinical Nutrition
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-gutter items-center">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-secondary hover:text-primary transition-colors font-body-md text-body-md hover:bg-surface-container-low px-sm py-xs rounded ${
                  isActive ? 'text-primary font-semibold border-b-2 border-primary rounded-b-none' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-sm">
          <Link
            to="/profile"
            className="flex items-center gap-2 p-1.5 rounded hover:bg-surface-container-low transition-colors"
            title="User Profile"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full border border-outline-variant object-cover"
            />
            <span className="font-label-sm text-on-surface text-[13px]">{user.name.split(' ')[0]}</span>
          </Link>

          <Link
            to="/checkout"
            className="font-label-sm text-label-sm bg-primary text-on-primary px-md py-sm rounded hover:bg-primary-container transition-colors scale-95 active:scale-90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link to="/profile" className="p-1">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-7 h-7 rounded-full border border-outline-variant object-cover"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-primary hover:bg-surface-container rounded"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant bg-surface px-4 py-4 space-y-2">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-[15px] ${
                  isActive ? 'bg-primary-fixed/40 text-primary font-bold' : 'text-secondary hover:bg-surface-container-low'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-outline-variant flex flex-col gap-2">
            <Link
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-[14px] text-secondary hover:bg-surface-container-low rounded"
            >
              👤 Patient Portal & Biomarkers
            </Link>
            <Link
              to="/payments"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-[14px] text-secondary hover:bg-surface-container-low rounded"
            >
              💳 Payment & Invoices
            </Link>
            <Link
              to="/checkout"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-primary text-on-primary py-2.5 rounded font-label-sm uppercase mt-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
