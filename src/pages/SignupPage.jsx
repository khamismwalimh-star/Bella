import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const SignupPage = () => {
  const { signup, addToast } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    selectedGoal: 'Metabolic & Glucose Control',
    selectedAllergies: ['Gluten Sensitivity'],
    agreeTerms: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const goalsList = [
    'Metabolic & Glucose Control',
    'Cardiovascular Health',
    'Targeted Weight Management',
    'Cellular Longevity & Anti-Aging',
    'Athletic Performance & Recovery'
  ];

  const allergiesList = [
    'Gluten Sensitivity',
    'Lactose Intolerance',
    'Nut Free',
    'Shellfish Free',
    'Soy Free',
    'Low Sodium (Cardio)',
    'Low Glycemic Index (Diabetic)'
  ];

  const toggleAllergy = (allergy) => {
    setFormData(prev => {
      const exists = prev.selectedAllergies.includes(allergy);
      if (exists) {
        return { ...prev, selectedAllergies: prev.selectedAllergies.filter(a => a !== allergy) };
      } else {
        return { ...prev, selectedAllergies: [...prev.selectedAllergies, allergy] };
      }
    });
  };

  // Password strength calculation
  const getPasswordStrength = (pass) => {
    if (!pass) return { score: 0, label: '', color: '' };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 1) return { score, label: 'Weak', color: 'bg-error text-error' };
    if (score === 2 || score === 3) return { score, label: 'Moderate', color: 'bg-amber-500 text-amber-600' };
    return { score, label: 'Strong Clinical Grade', color: 'bg-primary text-primary' };
  };

  const strength = getPasswordStrength(formData.password);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      errs.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errs.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = 'You must agree to the Terms of Service & HIPAA Privacy Policy';
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
      signup({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        goals: [formData.selectedGoal],
        allergies: formData.selectedAllergies,
        plan: 'Clinical Precision Pro'
      });
      navigate('/profile');
    }, 700);
  };

  return (
    <main className="flex-grow flex items-center justify-center w-full px-4 py-8 md:py-16 bg-surface">
      <div className="w-full max-w-5xl bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Clinical Presentation & Benefits */}
        <div className="lg:col-span-5 bg-primary text-on-primary p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
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
                verified
              </span>
              <span>Evidence-Based Patient Enrollment</span>
            </div>

            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold leading-tight mb-4">
              Begin your personalized clinical nutrition journey.
            </h2>
            <p className="text-primary-fixed-dim text-sm leading-relaxed mb-6">
              Create your account to connect with registered dietitians, customize your metabolic dietary parameters, and schedule cold-chain meal delivery.
            </p>

            {/* What you receive list */}
            <div className="space-y-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 text-xs text-white/95">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary-fixed text-[18px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>
                  <strong>Comprehensive Health Intake:</strong> Continuous biomarker tracking, CGM sync & laboratory panel reviews.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary-fixed text-[18px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>
                  <strong>Dedicated RDN Specialist:</strong> 1:1 consultation and clinical diet formulation.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary-fixed text-[18px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>
                  <strong>Sterile Cold-Chain Delivery:</strong> Fresh chef-crafted clinical meals shipped daily to your door.
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-8 mt-6 border-t border-white/15 flex items-center justify-between text-xs text-primary-fixed-dim">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">security</span>
              HIPAA Compliant
            </span>
            <span>•</span>
            <span>No Long-Term Lock-in</span>
            <span>•</span>
            <span>HSA/FSA Eligible</span>
          </div>
        </div>

        {/* Right Column: Sign Up Form */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-lg mx-auto w-full">
            {/* Header */}
            <div className="mb-6">
              <h1 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mb-2">
                Create Patient Account
              </h1>
              <p className="text-secondary text-sm">
                Fill in your baseline information to personalize your clinical dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                      person
                    </span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="Jane Doe"
                      className={`w-full pl-10 pr-3 py-2.5 rounded-lg border bg-surface font-body-md text-sm text-on-surface focus:outline-none transition-all ${
                        errors.name ? 'border-error focus:border-error' : 'border-outline-variant focus:border-primary'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-error mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                      call
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-outline-variant bg-surface font-body-md text-sm text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                    mail
                  </span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="jane.doe@example.com"
                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg border bg-surface font-body-md text-sm text-on-surface focus:outline-none transition-all ${
                      errors.email ? 'border-error focus:border-error' : 'border-outline-variant focus:border-primary'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
              </div>

              {/* Passwords Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block mb-1">
                    Password *
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                      lock
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={e => {
                        setFormData({ ...formData, password: e.target.value });
                        if (errors.password) setErrors({ ...errors, password: null });
                      }}
                      placeholder="Min 8 chars"
                      className={`w-full pl-10 pr-10 py-2.5 rounded-lg border bg-surface font-body-md text-sm text-on-surface focus:outline-none transition-all ${
                        errors.password ? 'border-error focus:border-error' : 'border-outline-variant focus:border-primary'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors p-1"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                  {errors.password && <p className="text-xs text-error mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block mb-1">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                      lock_reset
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={e => {
                        setFormData({ ...formData, confirmPassword: e.target.value });
                        if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null });
                      }}
                      placeholder="Repeat password"
                      className={`w-full pl-10 pr-3 py-2.5 rounded-lg border bg-surface font-body-md text-sm text-on-surface focus:outline-none transition-all ${
                        errors.confirmPassword ? 'border-error focus:border-error' : 'border-outline-variant focus:border-primary'
                      }`}
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-xs text-error mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>

              {/* Password Strength Bar */}
              {formData.password && (
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-secondary">Password Security:</span>
                    <span className="font-bold">{strength.label}</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden flex gap-1">
                    <div className={`h-full flex-1 rounded-full ${strength.score >= 1 ? 'bg-primary' : 'bg-surface-variant'}`} />
                    <div className={`h-full flex-1 rounded-full ${strength.score >= 2 ? 'bg-primary' : 'bg-surface-variant'}`} />
                    <div className={`h-full flex-1 rounded-full ${strength.score >= 3 ? 'bg-primary' : 'bg-surface-variant'}`} />
                    <div className={`h-full flex-1 rounded-full ${strength.score >= 4 ? 'bg-primary' : 'bg-surface-variant'}`} />
                  </div>
                </div>
              )}

              {/* Health Goal Selector */}
              <div className="pt-2">
                <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block mb-2">
                  Primary Clinical Goal
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {goalsList.map(goal => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedGoal: goal })}
                      className={`text-left p-2.5 rounded-lg border text-xs font-semibold transition-all flex items-center justify-between ${
                        formData.selectedGoal === goal
                          ? 'border-primary bg-primary-fixed/20 text-primary font-bold shadow-xs'
                          : 'border-outline-variant bg-surface text-secondary hover:border-outline'
                      }`}
                    >
                      <span>{goal}</span>
                      {formData.selectedGoal === goal && (
                        <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dietary Restrictions / Allergies Multi-Selector */}
              <div className="pt-2">
                <label className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block mb-2">
                  Dietary Restrictions & Allergies
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {allergiesList.map(item => {
                    const active = formData.selectedAllergies.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleAllergy(item)}
                        className={`px-2.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          active
                            ? 'bg-primary text-on-primary border-primary'
                            : 'bg-surface-container border-outline-variant text-secondary hover:border-primary'
                        }`}
                      >
                        {active ? `✓ ${item}` : `+ ${item}`}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Terms & Consent Checkbox */}
              <div className="pt-3">
                <label className="flex items-start gap-2 cursor-pointer select-none text-xs text-secondary leading-relaxed">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={e => {
                      setFormData({ ...formData, agreeTerms: e.target.checked });
                      if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: null });
                    }}
                    className="mt-0.5 rounded border-outline-variant text-primary focus:ring-primary w-4 h-4"
                  />
                  <span>
                    I agree to the <Link to="/about" className="text-primary underline">Terms of Service</Link>, <Link to="/about" className="text-primary underline">HIPAA Privacy Protocol</Link>, and consent to clinical telemedicine assessment.
                  </span>
                </label>
                {errors.agreeTerms && <p className="text-xs text-error mt-1">{errors.agreeTerms}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-on-primary py-3.5 rounded-lg font-label-sm uppercase font-bold tracking-wider hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.99] mt-4"
              >
                {isLoading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                    <span>Creating Clinical Profile...</span>
                  </>
                ) : (
                  <>
                    <span>Create My Patient Account</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Switch to Login */}
            <div className="mt-6 text-center text-sm text-secondary border-t border-outline-variant pt-5">
              <span>Already enrolled as a patient? </span>
              <Link to="/login" className="text-primary font-bold hover:underline">
                Sign In to Portal →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
