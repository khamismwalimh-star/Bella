import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const UserProfilePage = () => {
  const { user, setUser, addToast } = useApp();
  const [activeTab, setActiveTab] = useState('general'); // 'general' | 'biomarkers' | 'diet' | 'subscription'
  const [formData, setFormData] = useState({ ...user });

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...formData });
    addToast('Profile & clinical health metrics updated successfully!');
  };

  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-lg flex flex-col gap-xl">
      {/* Subfolder Identifier */}
      <div className="flex items-center gap-2">
        <span className="font-label-sm uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded">
          📁 Subfolder: user_profile
        </span>
        <span className="text-[11px] font-semibold text-primary">Patient Portal & Health Data</span>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-lowest p-md rounded border border-outline-variant">
        <div className="flex items-center gap-md">
          <img
            src={formData.avatar}
            alt={formData.name}
            className="w-16 h-16 rounded-full border-2 border-primary object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-headline-md text-xl font-bold text-on-surface">{formData.name}</h1>
              <span className="bg-primary-fixed text-on-primary-fixed text-[11px] font-bold px-2 py-0.5 rounded uppercase">
                Verified Patient
              </span>
            </div>
            <p className="text-secondary text-sm">{formData.email} • {formData.plan}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="bg-primary text-on-primary px-5 py-2.5 rounded font-label-sm uppercase font-bold text-xs hover:bg-primary-container transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-outline-variant gap-4 overflow-x-auto text-sm">
        {[
          { id: 'general', label: 'Personal Information', icon: 'person' },
          { id: 'biomarkers', label: 'Biomarkers & Vitals', icon: 'monitor_heart' },
          { id: 'diet', label: 'Dietary Preferences', icon: 'nutrition' },
          { id: 'subscription', label: 'Active Subscription', icon: 'card_membership' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 pb-3 px-2 font-semibold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-b-2 border-primary text-primary'
                : 'text-secondary hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md md:p-lg">
        {activeTab === 'general' && (
          <form onSubmit={handleSave} className="grid grid-cols-1 sm:grid-cols-2 gap-md max-w-3xl">
            <div className="flex flex-col">
              <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="minimal-input p-2.5 rounded text-sm text-on-surface"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="minimal-input p-2.5 rounded text-sm text-on-surface"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="minimal-input p-2.5 rounded text-sm text-on-surface"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase">City & State</label>
              <input
                type="text"
                value={formData.city}
                onChange={e => setFormData({ ...formData, city: e.target.value })}
                className="minimal-input p-2.5 rounded text-sm text-on-surface"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col">
              <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase">Street Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                className="minimal-input p-2.5 rounded text-sm text-on-surface"
              />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="bg-primary text-on-primary px-6 py-2.5 rounded font-label-sm uppercase font-bold text-xs"
              >
                Save Details
              </button>
            </div>
          </form>
        )}

        {activeTab === 'biomarkers' && (
          <div className="flex flex-col gap-lg max-w-4xl">
            <div>
              <h3 className="font-headline-md text-lg font-bold text-primary mb-1">
                Clinical Health Biomarkers
              </h3>
              <p className="text-secondary text-sm">
                Synchronized with telemetry continuous glucose monitor (CGM) and quarterly blood panels.
              </p>
            </div>

            {/* Biomarker Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
              <div className="p-md border border-outline-variant rounded bg-surface">
                <span className="text-xs uppercase text-secondary font-semibold">Fasting Blood Glucose</span>
                <p className="text-3xl font-extrabold text-primary my-1">{formData.glucose}</p>
                <span className="text-xs font-bold text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">trending_down</span>
                  {formData.glucoseChange} vs baseline (Optimal)
                </span>
              </div>

              <div className="p-md border border-outline-variant rounded bg-surface">
                <span className="text-xs uppercase text-secondary font-semibold">HbA1c Glycated Hemoglobin</span>
                <p className="text-3xl font-extrabold text-on-background my-1">{formData.hba1c}</p>
                <span className="text-xs text-secondary">Normative Clinical Range (&lt; 5.7%)</span>
              </div>

              <div className="p-md border border-outline-variant rounded bg-surface">
                <span className="text-xs uppercase text-secondary font-semibold">Target Body Weight</span>
                <p className="text-3xl font-extrabold text-on-background my-1">{formData.weight}</p>
                <span className="text-xs text-primary font-semibold">Lean mass maintenance stable</span>
              </div>
            </div>

            {/* Assigned Dietitian Notes */}
            <div className="p-md bg-surface-container-low border border-outline-variant rounded">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <h4 className="font-bold text-sm text-primary">Notes from Dr. Sarah Jenkins (Lead Dietitian)</h4>
              </div>
              <p className="text-sm text-on-surface-variant">
                "Patient exhibits fantastic glycemic stability with the current 40/30/30 clinical macro protocol. Continue breakfast timing window and post-prandial electrolyte delivery."
              </p>
            </div>
          </div>
        )}

        {activeTab === 'diet' && (
          <div className="flex flex-col gap-md max-w-2xl">
            <h3 className="font-headline-md text-lg font-bold text-primary">
              Allergies & Dietary Restrictions
            </h3>
            <p className="text-secondary text-sm">
              Our clinical kitchen strictly excludes these allergens from all your meal preparation.
            </p>

            <div className="flex flex-wrap gap-2 my-2">
              {formData.allergies.map((allergy, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container border border-outline-variant rounded text-xs font-semibold text-primary">
                  <span className="material-symbols-outlined text-[14px]">block</span>
                  {allergy}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-outline-variant">
              <h4 className="font-bold text-sm text-on-surface mb-2">Health & Performance Goals</h4>
              <div className="flex flex-wrap gap-2">
                {formData.goals.map((goal, i) => (
                  <span key={i} className="px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded text-xs font-bold">
                    ✓ {goal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'subscription' && (
          <div className="flex flex-col gap-md max-w-3xl">
            <div className="flex justify-between items-start border-b border-outline-variant pb-md">
              <div>
                <h3 className="font-headline-md text-xl font-bold text-primary">{formData.plan}</h3>
                <p className="text-secondary text-sm">Active billing • Next clinical box ships Friday morning</p>
              </div>
              <span className="bg-primary-fixed text-on-primary-fixed text-xs font-bold px-3 py-1 rounded uppercase">
                Active & Enrolled
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md text-sm">
              <div>
                <span className="text-secondary text-xs uppercase block">Delivery Frequency</span>
                <span className="font-semibold text-on-surface">Daily Cold-Chain Delivery (7:00 AM)</span>
              </div>
              <div>
                <span className="text-secondary text-xs uppercase block">Consultation Access</span>
                <span className="font-semibold text-on-surface">Bi-Weekly 1:1 Video Reviews</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => addToast('Plan preferences opened.')}
                className="bg-primary text-on-primary px-5 py-2 rounded text-xs font-bold uppercase"
              >
                Modify Meal Selection
              </button>
              <button
                onClick={() => addToast('Pause delivery request recorded.')}
                className="border border-outline-variant px-5 py-2 rounded text-xs font-semibold text-secondary hover:text-primary"
              >
                Pause Deliveries
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
