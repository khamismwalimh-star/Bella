import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const Footer = () => {
  const { isAuthenticated } = useApp();

  return (
    <footer className="bg-surface-container full-width border-t border-outline-variant flat no-shadows w-full mt-auto">
      <div className="grid grid-cols-12 gap-gutter py-lg px-4 md:px-container-margin w-full max-w-[1440px] mx-auto">
        <div className="col-span-12 md:col-span-4 flex flex-col space-y-sm">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-primary">
            Khamis
          </Link>
          <p className="font-label-sm text-label-sm text-on-surface-variant max-w-sm">
            Clinical precision for daily nutrition. Evidence-based protocols designed by certified dietitians.
          </p>
          <div className="flex items-center gap-3 pt-2 text-xs text-secondary">
            <span className="flex items-center gap-1 font-semibold text-primary">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              HIPAA Compliant
            </span>
            <span>•</span>
            <span>256-Bit Encrypted</span>
          </div>
        </div>
        
        <div className="col-span-12 md:col-span-8 flex flex-wrap justify-start md:justify-end gap-x-xl gap-y-sm items-center font-label-sm text-label-sm">
          <Link to="/about" className="text-on-surface-variant hover:text-primary transition-opacity hover:opacity-80">
            About Us
          </Link>
          <Link to="/services" className="text-on-surface-variant hover:text-primary transition-opacity hover:opacity-80">
            Our Services
          </Link>
          <Link to="/booking" className="text-on-surface-variant hover:text-primary transition-opacity hover:opacity-80">
            Nutritionists
          </Link>
          <Link to="/profile" className="text-on-surface-variant hover:text-primary transition-opacity hover:opacity-80">
            Patient Portal
          </Link>
          {isAuthenticated ? (
            <Link to="/payments" className="text-on-surface-variant hover:text-primary transition-opacity hover:opacity-80">
              Billing & Invoices
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-on-surface-variant hover:text-primary transition-opacity hover:opacity-80 font-bold">
                Patient Log In
              </Link>
              <Link to="/signup" className="text-on-surface-variant hover:text-primary transition-opacity hover:opacity-80 font-bold">
                Sign Up
              </Link>
            </>
          )}
          <Link to="/design-system" className="text-on-surface-variant hover:text-primary transition-opacity hover:opacity-80">
            Design Tokens
          </Link>
        </div>

        <div className="col-span-12 mt-lg pt-md border-t border-outline-variant font-label-sm text-label-sm text-on-surface-variant flex flex-col md:flex-row justify-between items-center gap-2">
          <div>© 2026 Khamis Diet Delivery Inc. All rights reserved.</div>
          <div className="flex gap-4 text-[12px] text-secondary">
            <span>HIPAA Compliant</span>
            <span>•</span>
            <span>Evidence-Based Practice</span>
            <span>•</span>
            <span>Clinical Grade Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
