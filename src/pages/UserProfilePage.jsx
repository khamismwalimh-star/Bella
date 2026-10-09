import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Modal } from '../components/ui/Modal';

export const UserProfilePage = () => {
  const { user, setUser, isAuthenticated, logout, login, addToast } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  // Active tab state: 'general' | 'biomarkers' | 'diet' | 'subscription' | 'security'
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({ ...(user || {}) });
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Security tab state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  // Synchronize local formData whenever user context changes
  useEffect(() => {
    if (user) {
      setFormData({ ...user });
    }
  }, [user]);

  // If visiting /signout or /logout route directly
  useEffect(() => {
    if (location.pathname === '/signout' || location.pathname === '/logout') {
      if (isAuthenticated) {
        logout();
      }
    }
  }, [location.pathname, isAuthenticated, logout]);

  const handleSave = (e) => {
    if (e) e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setUser({ ...formData });
      setIsSaving(false);
      addToast('Profile & clinical health metrics updated successfully!');
    }, 400);
  };

  const handleSignOutConfirm = () => {
    setIsSignOutModalOpen(false);
    logout();
    addToast('You have been signed out of your patient profile.', 'info');
  };

  const handleSignOutAllSessions = () => {
    setIsSignOutModalOpen(false);
    logout();
    addToast('Signed out of all 2 active device sessions successfully.', 'info');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (!currentPassword) {
      addToast('Please enter your current password.', 'warning');
      return;
    }
    if (newPassword.length < 8) {
      addToast('New password must be at least 8 characters.', 'warning');
      return;
    }
    if (newPassword !== confirmPassword) {
      addToast('New passwords do not match.', 'warning');
      return;
    }
    addToast('Password updated securely!', 'success');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleQuickDemoLogin = () => {
    login('john.d@example.com', 'demo123', 'patient');
  };

  // --- SIGNED-OUT VIEW ---
  if (!isAuthenticated || !user) {
    return (
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-12 md:py-20 flex flex-col items-center justify-center">
        <div className="w-full max-w-xl bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 md:p-10 shadow-xl text-center relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Status Icon */}
            <div className="w-16 h-16 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4 shadow-sm">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                lock
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-[14px]">verified_user</span>
              <span>Session Safely Terminated</span>
            </div>

            <h1 className="font-headline-lg text-2xl md:text-3xl font-bold text-primary mb-2">
              Signed Out of Patient Portal
            </h1>
            
            <p className="text-sm text-secondary max-w-md mb-8 leading-relaxed">
              Your biometric telemetry, continuous glucose logs, and scheduled clinical meal orders are securely encrypted and protected under HIPAA standards.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="flex-1 bg-primary text-on-primary px-5 py-3 rounded-lg font-label-sm uppercase font-bold text-xs hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                <span>Instant Patient Demo</span>
              </button>

              <Link
                to="/login"
                className="flex-1 border border-primary text-primary px-5 py-3 rounded-lg font-label-sm uppercase font-bold text-xs hover:bg-surface-container transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                <span>Sign In with Password</span>
              </Link>
            </div>

            {/* Secondary Links */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-outline-variant w-full text-xs text-secondary font-medium">
              <Link to="/signup" className="text-primary hover:underline font-bold">
                Create New Patient Account
              </Link>
              <span>•</span>
              <Link to="/" className="hover:text-primary transition-colors">
                Return to Home
              </Link>
              <span>•</span>
              <Link to="/services" className="hover:text-primary transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // --- SIGNED-IN USER PROFILE VIEW ---
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-8 md:py-12 flex flex-col gap-8">
      {/* Profile Header Banner */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 z-10">
          <div className="relative group">
            <img
              src={formData.avatar || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbaTAm5thtDHwgDzoliQ7g9L2IdCk6L1kVakdw6fD7Jd8IdT63bE-BjEMpU4Ja3e6QvgSsSPTOtDtDo8PYODwC33sI98ym3omSPCvQI1AcQSTJ0ihhU9HXldq6GhmcgeWQdAU3xw3yNnrc7pSZddLQ3HR8J0-IlE_9R4G9u4T6FkrQNTpYEvYdViyOPfWbE_cqyQqrFbmHR8E6qJz_puIv-DirwAJSU228WrkMRmPFIZWtZOL2U6NM'}
              alt={formData.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary object-cover shadow-sm"
            />
            <button
              onClick={() => addToast('Avatar update modal opened.')}
              className="absolute bottom-0 right-0 bg-primary text-on-primary p-1.5 rounded-full border-2 border-surface shadow hover:scale-105 transition-transform"
              title="Change Profile Photo"
            >
              <span className="material-symbols-outlined text-[14px]">photo_camera</span>
            </button>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="font-headline-md text-2xl md:text-3xl font-bold text-on-surface">
                {formData.name}
              </h1>
              <span className="bg-primary-fixed text-on-primary-fixed text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                Verified Patient
              </span>
            </div>
            
            <p className="text-secondary text-sm flex flex-wrap items-center gap-2">
              <span>{formData.email}</span>
              <span>•</span>
              <span className="font-semibold text-primary">{formData.plan || 'Clinical Precision Pro'}</span>
              <span>•</span>
              <span className="font-mono text-xs text-secondary">ID: KM-84920</span>
            </p>
          </div>
        </div>

        {/* Header Action Controls */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto z-10">
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="flex-1 sm:flex-none bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-sm uppercase font-bold text-xs hover:bg-primary-container transition-all flex items-center justify-center gap-1.5 shadow-xs"
          >
            {isSaving ? (
              <>
                <span className="material-symbols-outlined animate-spin text-[16px]">progress_activity</span>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[16px]">save</span>
                <span>Save Changes</span>
              </>
            )}
          </button>

          {/* Primary Sign Out Header Button */}
          <button
            type="button"
            onClick={() => setIsSignOutModalOpen(true)}
            className="flex-1 sm:flex-none border border-error/40 text-error hover:bg-error/10 px-5 py-2.5 rounded-lg font-label-sm uppercase font-bold text-xs transition-all flex items-center justify-center gap-1.5"
            title="Sign out of patient portal"
          >
            <span className="material-symbols-outlined text-[16px]">logout</span>
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-outline-variant gap-2 md:gap-4 overflow-x-auto text-sm pb-px">
        {[
          { id: 'general', label: 'Personal Information', icon: 'person' },
          { id: 'biomarkers', label: 'Biomarkers & Telemetry', icon: 'monitor_heart' },
          { id: 'diet', label: 'Dietary Preferences', icon: 'nutrition' },
          { id: 'subscription', label: 'Active Plan & Deliveries', icon: 'card_membership' },
          { id: 'security', label: 'Account Security & Sign Out', icon: 'shield' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 pb-3.5 px-3 font-semibold transition-all whitespace-nowrap text-xs md:text-sm ${
              activeTab === tab.id
                ? 'border-b-2 border-primary text-primary font-bold'
                : 'text-secondary hover:text-primary hover:border-b-2 hover:border-outline'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content Container */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-8 shadow-sm">
        {/* 1. PERSONAL INFORMATION */}
        {activeTab === 'general' && (
          <form onSubmit={handleSave} className="space-y-6 max-w-4xl">
            <div>
              <h2 className="font-headline-md text-lg font-bold text-primary mb-1">
                Personal & Contact Information
              </h2>
              <p className="text-secondary text-xs">
                Your medical shipping address and communication preferences for daily delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase font-semibold">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="minimal-input p-2.5 rounded-lg text-sm text-on-surface"
                  placeholder="Full name"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase font-semibold">
                  Email Address (Primary Login)
                </label>
                <input
                  type="email"
                  value={formData.email || ''}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="minimal-input p-2.5 rounded-lg text-sm text-on-surface"
                  placeholder="name@example.com"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase font-semibold">
                  Phone Number (Delivery SMS Alerts)
                </label>
                <input
                  type="tel"
                  value={formData.phone || ''}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="minimal-input p-2.5 rounded-lg text-sm text-on-surface"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase font-semibold">
                  City & State
                </label>
                <input
                  type="text"
                  value={formData.city || ''}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  className="minimal-input p-2.5 rounded-lg text-sm text-on-surface"
                  placeholder="San Francisco, CA"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col">
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase font-semibold">
                  Delivery Street Address
                </label>
                <input
                  type="text"
                  value={formData.address || ''}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="minimal-input p-2.5 rounded-lg text-sm text-on-surface"
                  placeholder="Street address, Apt / Suite number"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
              <p className="text-xs text-secondary">
                Need to update medical records? Contact your clinical dietitian coordinator.
              </p>
              <button
                type="submit"
                className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-sm uppercase font-bold text-xs hover:bg-primary-container transition-colors shadow-xs"
              >
                Save Details
              </button>
            </div>
          </form>
        )}

        {/* 2. BIOMARKERS & VITALS */}
        {activeTab === 'biomarkers' && (
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h2 className="font-headline-md text-lg font-bold text-primary mb-1">
                  Clinical Health Biomarkers & Telemetry
                </h2>
                <p className="text-secondary text-xs">
                  Continuous glucose telemetry (CGM) and quarterly blood metabolic panels.
                </p>
              </div>
              <div className="flex items-center gap-1.5 bg-primary-fixed/30 text-primary px-3 py-1 rounded-lg text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">sync</span>
                <span>Dexcom G7 Synced 14m ago</span>
              </div>
            </div>

            {/* Biomarker Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 border border-outline-variant rounded-xl bg-surface">
                <span className="text-xs uppercase text-secondary font-semibold">Fasting Blood Glucose</span>
                <p className="text-3xl font-extrabold text-primary my-1">{formData.glucose || '92 mg/dL'}</p>
                <span className="text-xs font-bold text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">trending_down</span>
                  {formData.glucoseChange || '-12%'} vs baseline (Optimal Target)
                </span>
              </div>

              <div className="p-4 border border-outline-variant rounded-xl bg-surface">
                <span className="text-xs uppercase text-secondary font-semibold">HbA1c Glycated Hemoglobin</span>
                <p className="text-3xl font-extrabold text-on-surface my-1">{formData.hba1c || '5.4%'}</p>
                <span className="text-xs text-secondary">Normative Clinical Range (&lt; 5.7%)</span>
              </div>

              <div className="p-4 border border-outline-variant rounded-xl bg-surface">
                <span className="text-xs uppercase text-secondary font-semibold">Target Body Weight</span>
                <p className="text-3xl font-extrabold text-on-surface my-1">{formData.weight || '74.5 kg'}</p>
                <span className="text-xs text-primary font-semibold">Lean mass maintenance stable</span>
              </div>
            </div>

            {/* Assigned Dietitian Notes */}
            <div className="p-4 bg-surface-container-low border border-outline-variant rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                  <h3 className="font-bold text-sm text-primary">Clinical Assessment (Dr. Sarah Jenkins, Lead Dietitian)</h3>
                </div>
                <Link to="/booking" className="text-xs text-primary font-bold hover:underline">
                  Book Follow-up Call →
                </Link>
              </div>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                "Patient exhibits notable glycemic stability with the current clinical macro protocol (40% complex low-GI carbs, 30% lean protein, 30% healthy lipids). Recommended to maintain breakfast timing window and post-prandial electrolyte delivery."
              </p>
            </div>
          </div>
        )}

        {/* 3. DIETARY PREFERENCES */}
        {activeTab === 'diet' && (
          <div className="flex flex-col gap-6 max-w-3xl">
            <div>
              <h2 className="font-headline-md text-lg font-bold text-primary mb-1">
                Allergies & Dietary Protocols
              </h2>
              <p className="text-secondary text-xs">
                Our kitchen laboratory enforces complete zero-cross-contamination protocols for these items.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2">Active Allergies & Exclusions</h3>
              <div className="flex flex-wrap gap-2">
                {(formData.allergies || ['Gluten Sensitivity', 'Lactose Intolerance']).map((allergy, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container border border-outline-variant rounded-lg text-xs font-semibold text-primary">
                    <span className="material-symbols-outlined text-[14px]">block</span>
                    {allergy}
                  </span>
                ))}
                <button
                  onClick={() => addToast('Opening allergy customization manager...')}
                  className="px-3 py-1.5 border border-dashed border-primary text-primary rounded-lg text-xs font-bold hover:bg-primary-fixed/20 transition-colors"
                >
                  + Add Restriction
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant">
              <h3 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2">Health & Performance Goals</h3>
              <div className="flex flex-wrap gap-2">
                {(formData.goals || ['Metabolic Optimization', 'Cardiovascular Health']).map((goal, i) => (
                  <span key={i} className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed rounded-lg text-xs font-bold">
                    ✓ {goal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. SUBSCRIPTION & DELIVERIES */}
        {activeTab === 'subscription' && (
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex justify-between items-start border-b border-outline-variant pb-4">
              <div>
                <h2 className="font-headline-md text-xl font-bold text-primary">{formData.plan || 'Clinical Precision Pro'}</h2>
                <p className="text-secondary text-xs mt-0.5">Active enrollment • Daily nitrogen-sealed cold-chain box</p>
              </div>
              <span className="bg-primary-fixed text-on-primary-fixed text-xs font-bold px-3 py-1 rounded-full uppercase">
                Active & Enrolled
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-surface rounded-xl border border-outline-variant">
                <span className="text-secondary text-xs uppercase block mb-1">Delivery Frequency</span>
                <span className="font-bold text-on-surface">Daily Cold-Chain Delivery (7:00 AM)</span>
              </div>
              <div className="p-4 bg-surface rounded-xl border border-outline-variant">
                <span className="text-secondary text-xs uppercase block mb-1">Consultation Access</span>
                <span className="font-bold text-on-surface">Bi-Weekly 1:1 Video Telehealth</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/payments"
                className="bg-primary text-on-primary px-5 py-2.5 rounded-lg text-xs font-bold uppercase hover:bg-primary-container transition-colors"
              >
                View Billing & Invoices
              </Link>
              <button
                onClick={() => addToast('Pause delivery request recorded.')}
                className="border border-outline-variant px-5 py-2.5 rounded-lg text-xs font-semibold text-secondary hover:text-primary transition-colors"
              >
                Pause Scheduled Deliveries
              </button>
            </div>
          </div>
        )}

        {/* 5. ACCOUNT SECURITY & SIGN OUT */}
        {activeTab === 'security' && (
          <div className="flex flex-col gap-8 max-w-3xl">
            <div>
              <h2 className="font-headline-md text-lg font-bold text-primary mb-1">
                Account Security & Session Management
              </h2>
              <p className="text-secondary text-xs">
                Manage your credentials, two-factor authentication, active device sessions, and sign out controls.
              </p>
            </div>

            {/* Password Update Form */}
            <form onSubmit={handlePasswordChange} className="space-y-4 p-5 bg-surface rounded-xl border border-outline-variant">
              <h3 className="text-sm font-bold text-primary flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">lock_reset</span>
                Change Password
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-label-sm text-[11px] text-secondary uppercase block mb-1">Current Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={e => setCurrentPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full minimal-input p-2 rounded-lg text-xs text-on-surface"
                  />
                </div>

                <div>
                  <label className="font-label-sm text-[11px] text-secondary uppercase block mb-1">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    placeholder="Min 8 chars"
                    className="w-full minimal-input p-2 rounded-lg text-xs text-on-surface"
                  />
                </div>

                <div>
                  <label className="font-label-sm text-[11px] text-secondary uppercase block mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Confirm"
                    className="w-full minimal-input p-2 rounded-lg text-xs text-on-surface"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="bg-primary text-on-primary px-4 py-2 rounded-lg text-xs font-bold uppercase hover:bg-primary-container transition-colors"
                >
                  Update Password
                </button>
              </div>
            </form>

            {/* Two-Factor Authentication Status */}
            <div className="p-5 bg-surface rounded-xl border border-outline-variant flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">phonelink_lock</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Two-Factor Authentication (2FA)</p>
                  <p className="text-xs text-secondary">Requires SMS / Authenticator verification at login</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setTwoFactorEnabled(!twoFactorEnabled);
                  addToast(twoFactorEnabled ? '2FA disabled.' : '2FA enabled successfully.');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-colors ${
                  twoFactorEnabled
                    ? 'bg-primary text-on-primary'
                    : 'border border-outline-variant text-secondary'
                }`}
              >
                {twoFactorEnabled ? 'Enabled ✓' : 'Disabled'}
              </button>
            </div>

            {/* Active Device Sessions */}
            <div className="p-5 bg-surface rounded-xl border border-outline-variant space-y-3">
              <h3 className="text-sm font-bold text-primary flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">devices</span>
                Active Device Sessions
              </h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">laptop_mac</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Chrome on Windows (Current Device)</p>
                      <p className="text-[11px] text-secondary">San Francisco, CA • IP: 198.51.100.42 • Active Now</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-primary text-on-primary">
                    This Session
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-2xl">smartphone</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Safari on iPhone 15 Pro</p>
                      <p className="text-[11px] text-secondary">San Francisco, CA • Last active 2 hours ago</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => addToast('Terminated iPhone mobile session.')}
                    className="text-xs text-error hover:underline font-bold"
                  >
                    Revoke
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone: Explicit Sign Out & Session Termination */}
            <div className="p-6 bg-error/5 border border-error/20 rounded-xl space-y-4">
              <div>
                <h3 className="text-sm font-bold text-error flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">gpp_maybe</span>
                  Sign Out & Session Controls
                </h3>
                <p className="text-xs text-secondary mt-1">
                  End your current session or disconnect all authorized devices securely.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Sign Out Current Device */}
                <button
                  type="button"
                  onClick={() => setIsSignOutModalOpen(true)}
                  className="bg-error text-on-error px-5 py-2.5 rounded-lg text-xs font-bold uppercase hover:opacity-90 transition-opacity flex items-center gap-2 shadow-xs"
                >
                  <span className="material-symbols-outlined text-[16px]">logout</span>
                  <span>Sign Out of This Device</span>
                </button>

                {/* Sign Out All Devices */}
                <button
                  type="button"
                  onClick={handleSignOutAllSessions}
                  className="border border-error text-error hover:bg-error/10 px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">power_settings_new</span>
                  <span>Sign Out All Sessions</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sign Out Confirmation Modal */}
      <Modal
        isOpen={isSignOutModalOpen}
        onClose={() => setIsSignOutModalOpen(false)}
        title="Confirm Secure Sign Out"
      >
        <div className="flex flex-col items-center text-center gap-4 py-3">
          <div className="w-16 h-16 rounded-full bg-error/10 text-error flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">logout</span>
          </div>

          <div>
            <h3 className="font-headline-md text-lg font-bold text-primary">
              Are you sure you want to sign out?
            </h3>
            <p className="text-xs text-secondary mt-1 max-w-sm">
              Your patient profile data, daily delivery schedules, and continuous glucose telemetry will remain safely encrypted on our HIPAA-compliant servers.
            </p>
          </div>

          <div className="flex gap-3 w-full pt-2">
            <button
              type="button"
              onClick={handleSignOutConfirm}
              className="flex-1 bg-error text-on-error py-2.5 rounded-lg font-label-sm uppercase font-bold text-xs hover:opacity-90 transition-opacity"
            >
              Yes, Sign Out Now
            </button>
            <button
              type="button"
              onClick={() => setIsSignOutModalOpen(false)}
              className="px-5 border border-outline-variant rounded-lg font-label-sm uppercase text-xs font-semibold text-secondary hover:text-on-surface"
            >
              Stay Signed In
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};
