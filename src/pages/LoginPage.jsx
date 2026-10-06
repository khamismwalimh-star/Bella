import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Modal } from '../components/ui/Modal';

export const LoginPage = () => {
  const { login, forgotPassword, addToast } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const validate = () => {
    const errs = {};
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!password) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const loggedUser = login(email, password);
      const redirectPath = location.state?.from || (loggedUser.role === 'nutritionist' ? '/nutritionist-dashboard' : '/profile');
      navigate(redirectPath);
    }, 500);
  };

  const handleQuickDemoLogin = (role) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (role === 'nutritionist') {
        login('dr.sarah@khamis.health', 'demo123', 'nutritionist');
        navigate('/nutritionist-dashboard');
      } else {
        login('john.d@example.com', 'demo123', 'patient');
        navigate('/profile');
      }
    }, 350);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail || !/\S+@\S+\.\S+/.test(forgotEmail)) {
      addToast('Please enter a valid email address.', 'warning');
      return;
    }
    forgotPassword(forgotEmail);
    setForgotModalOpen(false);
    setForgotEmail('');
  };

  return (
    <main className="flex-grow flex items-center justify-center w-full px-4 py-8 md:py-16 bg-surface">
      <div className="w-full max-w-5xl bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Brand & Clinical Outcomes Story */}
        <div className="lg:col-span-5 bg-primary text-on-primary p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle geometric background glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary-fixed-variant rounded-full blur-3xl opacity-30 pointer-events-none" />

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-8">
              <span className="font-headline-md text-2xl font-bold tracking-tight text-on-primary">
                Khamis
              </span>
              <span className="bg-primary-fixed text-on-primary-fixed text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                Clinical Health
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-primary-fixed mb-4">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                lock
              </span>
              <span>HIPAA Encrypted Patient Portal</span>
            </div>

            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold leading-tight mb-4">
              Access your clinical telemetry & meal orders.
            </h2>

            <p className="text-inverse-primary text-sm leading-relaxed mb-6">
              Sign in to review continuous glucose response, update biomarker panels, or consult with your registered dietitian.
            </p>

            {/* Quick Stats Banner */}
            <div className="bg-surface/10 backdrop-blur-md rounded-xl p-4 border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                <span className="text-xs font-medium text-on-primary">End-to-end 256-bit encrypted health data</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  monitoring
                </span>
                <span className="text-xs font-medium text-on-primary">Continuous real-time biomarker sync</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs text-inverse-primary">
            <span>© 2026 Khamis Clinical Nutrition</span>
            <Link to="/about" className="hover:underline">Need Support?</Link>
          </div>
        </div>

        {/* Right Column: Sign In Form */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-surface">
          <div className="max-w-md w-full mx-auto">
            {/* Header Tabs Switcher */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant">
              <div>
                <h1 className="font-headline-md text-2xl font-bold text-primary">
                  Sign In to Account
                </h1>
                <p className="text-xs text-secondary mt-1">
                  Enter your clinical credentials to continue
                </p>
              </div>
              <div className="flex rounded-lg bg-surface-container p-1 border border-outline-variant">
                <span className="px-3 py-1 text-xs font-bold bg-primary text-on-primary rounded-md shadow-xs">
                  Sign In
                </span>
                <Link
                  to="/signup"
                  className="px-3 py-1 text-xs font-semibold text-secondary hover:text-primary transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Quick 1-Click Demo Logins */}
            <div className="mb-6 p-3.5 bg-surface-container-low border border-outline-variant rounded-xl">
              <p className="font-label-sm text-[11px] text-primary uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                Instant 1-Click Demo Logins
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickDemoLogin('patient')}
                  className="px-3 py-2 text-xs font-bold text-primary bg-surface border border-primary/30 hover:bg-primary-fixed/30 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span className="material-symbols-outlined text-[16px]">person</span>
                  <span>Patient Demo</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemoLogin('nutritionist')}
                  className="px-3 py-2 text-xs font-bold text-on-primary bg-primary hover:bg-primary-container rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span className="material-symbols-outlined text-[16px]">stethoscope</span>
                  <span>Doctor Demo</span>
                </button>
              </div>
            </div>

            <div className="relative flex py-2 items-center mb-6">
              <div className="flex-1 h-[1px] bg-outline-variant" />
              <span className="px-3 text-xs uppercase text-secondary font-medium tracking-wider">Or Sign In with Credentials</span>
              <div className="flex-1 h-[1px] bg-outline-variant" />
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                    mail
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="name@example.com"
                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg border bg-surface font-body-md text-sm text-on-surface focus:outline-none transition-all ${
                      errors.email ? 'border-error focus:border-error ring-1 ring-error/20' : 'border-outline-variant focus:border-primary'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-error mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">error</span>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setForgotEmail(email);
                      setForgotModalOpen(true);
                    }}
                    className="text-xs text-primary font-semibold hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                    lock
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: null });
                    }}
                    placeholder="••••••••••••"
                    className={`w-full pl-10 pr-10 py-2.5 rounded-lg border bg-surface font-body-md text-sm text-on-surface focus:outline-none transition-all ${
                      errors.password ? 'border-error focus:border-error ring-1 ring-error/20' : 'border-outline-variant focus:border-primary'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors p-1"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-error mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">error</span>
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-secondary">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                    className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4"
                  />
                  <span>Remember this device for 30 days</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-sm uppercase font-bold tracking-wider hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99]"
              >
                {isLoading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Portal</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Switch to Sign Up */}
            <div className="mt-8 text-center text-sm text-secondary border-t border-outline-variant pt-6">
              <span>New to Khamis Clinical Nutrition? </span>
              <Link to="/signup" className="text-primary font-bold hover:underline">
                Create an Account →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <Modal
        isOpen={forgotModalOpen}
        onClose={() => setForgotModalOpen(false)}
        title="Reset Your Secure Password"
      >
        <form onSubmit={handleForgotPasswordSubmit} className="flex flex-col gap-4 py-2">
          <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg">
            <span className="material-symbols-outlined text-primary text-2xl">mail_lock</span>
            <p className="text-xs text-secondary">
              Enter your registered clinical email address and we'll send you an encrypted one-time recovery link.
            </p>
          </div>

          <div>
            <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block mb-1">
              Registered Email Address
            </label>
            <input
              type="email"
              value={forgotEmail}
              onChange={e => setForgotEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full border border-outline-variant rounded-lg p-2.5 bg-surface text-sm text-on-surface focus:outline-none focus:border-primary"
              autoFocus
            />
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-sm uppercase font-bold tracking-wide hover:bg-primary-container transition-colors"
            >
              Send Reset Instructions
            </button>
            <button
              type="button"
              onClick={() => setForgotModalOpen(false)}
              className="px-4 border border-outline-variant rounded-lg text-xs font-semibold text-secondary hover:text-on-surface"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
};
