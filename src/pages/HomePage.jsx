import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const HomePage = () => {
  const { addToast } = useApp();

  return (
    <main className="flex-grow flex flex-col w-full max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-container-margin py-xl flex flex-col md:flex-row items-center justify-between gap-xl relative">
        <div className="md:w-1/2 flex flex-col space-y-md z-10">
          <div className="inline-flex items-center space-x-xs px-sm py-xs bg-surface-container rounded-full w-fit">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Medical Grade Standard
            </span>
          </div>

          <h1 className="font-display-xl text-4xl sm:text-6xl lg:text-display-xl text-on-surface">
            Clinical nutrition, <br />
            <span className="text-primary">delivered.</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Evidence-based meal plans designed by certified dietitians. Tailored to your specific health metrics and delivered fresh to your door daily. Precision health, simplified.
          </p>

          <div className="flex flex-wrap items-center gap-md pt-sm">
            <Link
              to="/services"
              className="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded hover:bg-primary-container transition-colors tracking-wide text-center"
            >
              View Meal Plans
            </Link>
            <Link
              to="/booking"
              className="border border-outline font-label-sm text-label-sm px-8 py-4 rounded text-on-surface hover:bg-surface-container-low transition-colors tracking-wide text-center"
            >
              Take the Assessment
            </Link>
          </div>
        </div>

        {/* Hero Visual Banner & Floating Outcome Card */}
        <div className="md:w-1/2 relative h-[450px] md:h-[600px] w-full rounded overflow-hidden shadow-sm border border-outline-variant">
          <img
            alt="Clinical Nutrition Meal"
            className="absolute inset-0 w-full h-full object-cover rounded"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3J2kDu1rCZvlUpil_oEDFOWbpaMqubUTbhyvOgwenILlwTTDj4i5cs8m8wfu8zDlfIwgXwQtDO1M6JoE5Nz4bP6EnSewiTjtxQeE5mPGQvNRpqjHVbSq0AgQgtqCmVdl7GXo1S94oX9QZrCjj6gyEgKLniYOg2FLPa4nbKUejoTqLOHl0MZvHTGYuzcoTH7WhMABjQkvb1A_Ub-oMeGTFhw-BaP4rqVl_nScaFdRvImkOHfHse_d5"
          />
          {/* Floating Trust Card */}
          <div className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur-md p-md rounded border border-outline-variant flex items-center space-x-sm shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                monitor_heart
              </span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Avg. Patient Outcome</p>
              <p className="font-headline-md text-[22px] md:text-headline-md text-primary font-bold">-12% Fasting Glucose</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bento Section */}
      <section className="px-4 md:px-container-margin py-lg border-t border-outline-variant bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface p-md rounded border border-outline-variant">
            <span className="material-symbols-outlined text-primary text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
              biotechnology
            </span>
            <h3 className="font-headline-md text-[20px] text-primary mb-1">Targeted Formulations</h3>
            <p className="font-body-md text-secondary">
              Direct integration with clinical biomarkers and blood panels to craft macro and micronutrient balances.
            </p>
          </div>

          <div className="bg-surface p-md rounded border border-outline-variant">
            <span className="material-symbols-outlined text-primary text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
              restaurant
            </span>
            <h3 className="font-headline-md text-[20px] text-primary mb-1">Culinary Execution</h3>
            <p className="font-body-md text-secondary">
              Chef-crafted meals using unrefined organic ingredients, sterile kitchen protocols, and zero additives.
            </p>
          </div>

          <div className="bg-surface p-md rounded border border-outline-variant">
            <span className="material-symbols-outlined text-primary text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
              health_and_safety
            </span>
            <h3 className="font-headline-md text-[20px] text-primary mb-1">Dedicated RDN Oversight</h3>
            <p className="font-body-md text-secondary">
              Ongoing biometric adjustments and bi-weekly reviews with board-certified clinical dietitians.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
