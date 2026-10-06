import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, isAuthenticated, logout } = useApp();
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Removed 'Plans' and replaced with 'Services'
  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Nutritionists', path: '/booking' },
    { name: 'About Us', path: '/about' },
    { name: 'Platform', path: '/platform' }
  ];

  const handleLogout = () => {
    setUserDropdownOpen(false);
    setMobileMenuOpen(false);
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-surface docked full-width top-0 border-b border-outline-variant flat no-shadows sticky z-40 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-4 md:px-container-margin h-20 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-headline-md text-headline-md font-bold text-primary hover:opacity-80 transition-opacity tracking-tight flex items-center gap-2"
          >
            <span>Khamis</span>
          </Link>
          <span className="hidden xl:inline-block text-[11px] font-semibold uppercase tracking-widest text-secondary bg-surface-container px-2.5 py-0.5 rounded">
            Clinical Nutrition
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-1 lg:space-x-4 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-secondary hover:text-primary transition-colors font-body-md text-body-md px-3 py-1.5 rounded-lg ${
                  isActive
                    ? 'text-primary font-bold bg-surface-container-low'
                    : 'hover:bg-surface-container-low'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions / Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {isAuthenticated && user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pl-3 rounded-full border border-outline-variant hover:border-primary bg-surface-container-lowest transition-all"
              >
                <div className="text-right leading-tight hidden lg:block">
                  <span className="block text-xs font-bold text-primary">{user.name}</span>
                  <span className="block text-[10px] text-secondary uppercase font-semibold">
                    {user.role === 'nutritionist' ? 'Clinical Staff' : 'Patient Member'}
                  </span>
                </div>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border border-primary object-cover"
                />
                <span className="material-symbols-outlined text-secondary text-sm">
                  {userDropdownOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>

              {/* User Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-surface border border-outline-variant rounded-xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-4 py-2 border-b border-outline-variant">
                    <p className="text-xs font-bold text-primary truncate">{user.name}</p>
                    <p className="text-[11px] text-secondary truncate">{user.email}</p>
                    <span className="inline-block mt-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">
                      {user.role === 'nutritionist' ? 'Clinician' : 'Active Patient'}
                    </span>
                  </div>

                  <div className="py-1">
                    <Link
                      to="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-primary">person</span>
                      <span>Patient Portal</span>
                    </Link>

                    <Link
                      to="/nutritionist-dashboard"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-primary">stethoscope</span>
                      <span>Doctor Portal</span>
                    </Link>

                    <Link
                      to="/booking"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
                      <span>Book Consultation</span>
                    </Link>

                    <Link
                      to="/payments"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-primary">receipt_long</span>
                      <span>Billing & Invoices</span>
                    </Link>

                    <Link
                      to="/design-system"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-primary">palette</span>
                      <span>Design Tokens</span>
                    </Link>
                  </div>

                  <div className="border-t border-outline-variant pt-1 mt-1">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center gap-2.5 px-4 py-2 text-xs font-bold text-error hover:bg-error/10 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-error">logout</span>
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="font-label-sm text-label-sm text-primary px-4 py-2 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-all font-bold"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="font-label-sm text-label-sm bg-primary text-on-primary px-5 py-2 rounded-lg hover:bg-primary-container transition-all font-bold shadow-xs hover:shadow-md active:scale-95"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          {isAuthenticated && user && (
            <Link to="/profile" className="p-1">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-primary object-cover"
              />
            </Link>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-primary hover:bg-surface-container rounded-lg"
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
        <div className="md:hidden border-t border-outline-variant bg-surface px-4 py-4 space-y-2 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-[15px] ${
                  isActive ? 'bg-primary-fixed/40 text-primary font-bold' : 'text-secondary hover:bg-surface-container-low'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-3 border-t border-outline-variant flex flex-col gap-2">
            {isAuthenticated && user ? (
              <>
                <div className="px-3 py-2 bg-surface-container-low rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-primary">{user.name}</p>
                    <p className="text-xs text-secondary">{user.email}</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">
                    {user.role || 'Patient'}
                  </span>
                </div>

                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-[14px] text-secondary hover:bg-surface-container-low rounded-lg"
                >
                  👤 Patient Portal & Biomarkers
                </Link>
                <Link
                  to="/nutritionist-dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-[14px] text-secondary hover:bg-surface-container-low rounded-lg"
                >
                  🩺 Doctor & Telehealth Portal
                </Link>
                <Link
                  to="/payments"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-[14px] text-secondary hover:bg-surface-container-low rounded-lg"
                >
                  💳 Payment & Invoices
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-[14px] text-error hover:bg-error/10 rounded-lg font-bold"
                >
                  🚪 Sign Out
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center border border-primary text-primary py-2.5 rounded-lg font-label-sm uppercase font-bold text-xs"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center bg-primary text-on-primary py-2.5 rounded-lg font-label-sm uppercase font-bold text-xs shadow-xs"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
