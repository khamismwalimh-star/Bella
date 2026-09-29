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
    }, 600);
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
    }, 400);
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
              Precision clinical nutrition for optimal metabolic health.
            </h2>
            <p className="text-primary-fixed-dim text-sm leading-relaxed mb-6">
              Access your personalized biomarkers, daily chef-curated cold-chain meal tracking, and direct telehealth consultations.
            </p>

            {/* Testimonial / Outcome Pill */}
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-fixed text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  monitoring
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-fixed">
                  Clinical Evidence Outcome
                </span>
              </div>
              <p className="text-xs text-white/90 font-medium">
                "Patients following our targeted 90-day metabolic protocol observed a mean <strong>-12% drop in fasting blood glucose</strong> and sustained insulin stabilization."
              </p>
              <p className="text-[11px] text-primary-fixed-dim pt-1 border-t border-white/10 font-mono">
                — Journal of Clinical Endocrinology, 2024
              </p>
            </div>
          </div>

          {/* Clinical Credentials Footer */}
          <div className="relative z-10 pt-8 mt-6 border-t border-white/15 flex items-center justify-between text-xs text-primary-fixed-dim">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              256-Bit SSL
            </span>
            <span>•</span>
            <span>Board-Certified RDNs</span>
            <span>•</span>
            <span>ISO 9001 Labs</span>
          </div>
        </div>

        {/* Right Column: Log In Form */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {/* Header */}
            <div className="mb-6">
              <h1 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mb-2">
                Welcome Back
              </h1>
              <p className="text-secondary text-sm">
                Log in to access your clinical nutrition plan and health records.
              </p>
            </div>

            {/* Quick Demo Access Pills */}
            <div className="mb-6 p-3 bg-surface-container-low border border-outline-variant rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  1-Click Demo Login
                </span>
                <span className="text-[10px] text-secondary">Instant Testing</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickDemoLogin('patient')}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 bg-surface border border-outline-variant rounded-lg hover:border-primary hover:bg-surface-container transition-all text-xs font-semibold text-on-surface"
                >
                  <span className="material-symbols-outlined text-sm text-primary">person</span>
                  Patient Demo
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemoLogin('nutritionist')}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 bg-surface border border-outline-variant rounded-lg hover:border-primary hover:bg-surface-container transition-all text-xs font-semibold text-on-surface"
                >
                  <span className="material-symbols-outlined text-sm text-primary">stethoscope</span>
                  Doctor Demo
                </button>
              </div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('patient')}
                className="flex items-center justify-center gap-2 py-2.5 px-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors text-xs font-semibold text-on-surface"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickDemoLogin('patient')}
                className="flex items-center justify-center gap-2 py-2.5 px-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors text-xs font-semibold text-on-surface"
              >
                <svg className="w-4 h-4 fill-current text-on-surface" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.02-.49 2.63-1.24z" />
                </svg>
                <span>Apple ID</span>
              </button>
            </div>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-[1px] bg-outline-variant" />
              <span className="text-[11px] uppercase tracking-wider text-secondary font-medium">Or continue with email</span>
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
                    placeholder="••••••••"
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
