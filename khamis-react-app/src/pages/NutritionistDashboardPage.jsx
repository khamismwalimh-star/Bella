import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Modal } from '../components/ui/Modal';

export const NutritionistDashboardPage = () => {
  const { addToast } = useApp();
  const [activeCallModal, setActiveCallModal] = useState(null);
  const [pendingPlans, setPendingPlans] = useState([
    { id: '1', client: 'John Doe', plan: 'Weight Loss Pro', date: 'Submitted Today', status: 'Pending Review' },
    { id: '2', client: 'Sarah Adams', plan: 'Maintenance Base', date: 'Submitted Yesterday', status: 'Pending Review' }
  ]);

  const handleApprovePlan = (id, client) => {
    setPendingPlans(prev => prev.filter(p => p.id !== id));
    addToast(`Approved meal plan for ${client}! Client notified.`);
  };

  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-lg">
      {/* Subfolder Identifier */}
      <div className="flex items-center gap-2 mb-4">
        <span className="font-label-sm uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded">
          📁 Subfolder: nutritionist_dashboard
        </span>
        <span className="text-[11px] font-semibold text-primary">Specialist Management Portal</span>
      </div>

      {/* Welcome Header & Quick Actions */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-xl gap-md">
        <div>
          <h1 className="font-headline-lg text-2xl md:text-headline-lg text-primary mb-xs font-bold">
            Good Morning, Dr. Sarah
          </h1>
          <p className="font-body-lg text-body-lg text-secondary">
            You have 3 appointments and {pendingPlans.length} plans pending review today.
          </p>
        </div>
        <div className="flex gap-sm w-full md:w-auto">
          <button
            onClick={() => addToast('Viewing all 42 clinical patients.')}
            className="bg-surface text-primary border border-primary px-md py-sm rounded font-label-sm text-label-sm uppercase hover:bg-surface-container-low transition-colors flex-1 md:flex-none text-center font-bold"
          >
            Review All Plans
          </button>
          <button
            onClick={() => addToast('Opening client intake form modal...')}
            className="bg-primary text-on-primary px-md py-sm rounded font-label-sm text-label-sm uppercase hover:opacity-90 transition-opacity flex-1 md:flex-none text-center flex items-center justify-center gap-xs font-bold"
          >
            <span className="material-symbols-outlined text-[16px]">add</span> New Client
          </button>
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
        {/* Schedule / Upcoming Appointments (Span 8) */}
        <section className="md:col-span-8 bg-surface border border-outline-variant rounded p-md flex flex-col">
          <div className="flex justify-between items-center mb-md pb-sm border-b border-outline-variant">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">Today's Schedule</h2>
            <span className="font-label-sm text-label-sm text-primary uppercase font-semibold">
              Today: August 20, 2026
            </span>
          </div>

          <div className="flex-grow flex flex-col gap-sm">
            {/* Appointment Item 1 */}
            <div className="flex items-center justify-between p-3 border border-outline-variant rounded hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-md">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-surface-container rounded text-primary">
                  <span className="font-label-sm text-xs font-bold uppercase">9:00</span>
                  <span className="font-label-sm text-[10px] uppercase text-secondary">AM</span>
                </div>
                <div>
                  <h3 className="font-body-lg text-body-lg font-semibold text-on-surface flex items-center gap-xs">
                    Michael Chen
                    <span className="w-4 h-4 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center" title="Verified Client">
                      <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </span>
                  </h3>
                  <p className="font-body-md text-secondary text-sm">Initial Consultation • Video Call</p>
                </div>
              </div>
              <button
                onClick={() => setActiveCallModal('Michael Chen')}
                className="bg-primary text-on-primary hover:bg-primary-container px-4 py-2 rounded font-label-sm text-xs font-bold transition-all"
              >
                Join Call
              </button>
            </div>

            {/* Appointment Item 2 */}
            <div className="flex items-center justify-between p-3 border border-outline-variant rounded hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-md">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-surface-container rounded text-primary">
                  <span className="font-label-sm text-xs font-bold uppercase">11:30</span>
                  <span className="font-label-sm text-[10px] uppercase text-secondary">AM</span>
                </div>
                <div>
                  <h3 className="font-body-lg text-body-lg font-semibold text-on-surface">Elena Rodriguez</h3>
                  <p className="font-body-md text-secondary text-sm">Plan Adjustment Review • In-Clinic</p>
                </div>
              </div>
              <button
                onClick={() => addToast('Opening clinical patient chart for Elena Rodriguez.')}
                className="text-secondary hover:text-on-surface border border-outline-variant px-4 py-2 rounded font-label-sm text-xs font-semibold"
              >
                Prepare File
              </button>
            </div>

            {/* Appointment Item 3 (Canceled) */}
            <div className="flex items-center justify-between p-3 border border-outline-variant rounded hover:bg-surface-container-low transition-colors opacity-70">
              <div className="flex items-center gap-md">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-surface-variant rounded text-secondary">
                  <span className="font-label-sm text-xs font-bold uppercase">2:00</span>
                  <span className="font-label-sm text-[10px] uppercase text-secondary">PM</span>
                </div>
                <div>
                  <h3 className="font-body-lg text-body-lg font-semibold text-secondary line-through">David Smith</h3>
                  <p className="font-body-md text-secondary text-sm">Monthly Follow-up • Canceled by Patient</p>
                </div>
              </div>
              <span className="text-xs uppercase font-semibold text-secondary px-2 py-1 bg-surface-container rounded">
                Rescheduled
              </span>
            </div>
          </div>
        </section>

        {/* Pending Approvals & Alerts (Span 4) */}
        <section className="md:col-span-4 flex flex-col gap-md">
          {/* Pending Reviews Card */}
          <div className="bg-surface border border-outline-variant rounded p-md">
            <div className="flex justify-between items-center mb-sm pb-sm border-b border-outline-variant">
              <h3 className="font-headline-md text-lg font-bold text-on-surface">Pending Meal Plans</h3>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold px-2 py-0.5 rounded">
                {pendingPlans.length} Needs Review
              </span>
            </div>

            {pendingPlans.length === 0 ? (
              <p className="text-sm text-secondary py-4 text-center">All meal plans reviewed for today!</p>
            ) : (
              <div className="space-y-3">
                {pendingPlans.map(plan => (
                  <div key={plan.id} className="p-3 bg-surface-container-low border border-outline-variant rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-[14px] text-on-surface">{plan.client}</p>
                        <p className="text-xs text-secondary">{plan.plan}</p>
                      </div>
                      <span className="text-[10px] text-secondary font-mono">{plan.date}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => handleApprovePlan(plan.id, plan.client)}
                        className="flex-1 bg-primary text-on-primary py-1.5 rounded text-xs font-bold hover:bg-primary-container"
                      >
                        Approve Plan
                      </button>
                      <button
                        onClick={() => addToast(`Opened custom editor for ${plan.client}`)}
                        className="px-3 border border-outline-variant rounded text-xs text-secondary hover:text-primary"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Biomarker Stat Card */}
          <div className="bg-primary text-on-primary rounded p-md flex flex-col justify-between">
            <span className="text-xs uppercase tracking-widest text-primary-fixed-dim font-bold">
              Cohort Glycemic Trends
            </span>
            <div className="my-2">
              <p className="text-3xl font-extrabold">-14.2%</p>
              <p className="text-xs text-primary-fixed">Average 90-day HbA1c drop across active clients</p>
            </div>
            <span className="text-[11px] text-primary-fixed-dim border-t border-primary-container pt-2">
              ✓ Clinical validation metric updated today
            </span>
          </div>
        </section>
      </div>

      {/* Video Call Modal Simulator */}
      <Modal
        isOpen={!!activeCallModal}
        onClose={() => setActiveCallModal(null)}
        title={`Encrypted Telehealth Session: ${activeCallModal}`}
      >
        <div className="flex flex-col items-center gap-4 py-4 text-center">
          <div className="w-20 h-20 rounded-full bg-primary-container text-on-primary flex items-center justify-center animate-pulse">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              videocam
            </span>
          </div>
          <div>
            <h4 className="font-bold text-lg text-primary">Connected to Telehealth Room</h4>
            <p className="text-xs text-secondary mt-1">
              End-to-End HIPAA Compliant WebRTC Channel Active.
            </p>
          </div>
          <div className="flex gap-3 w-full pt-2">
            <button
              onClick={() => {
                setActiveCallModal(null);
                addToast('Telehealth session completed and notes logged.');
              }}
              className="flex-1 bg-error text-on-error py-2.5 rounded font-label-sm uppercase font-bold"
            >
              End Consultation
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};
