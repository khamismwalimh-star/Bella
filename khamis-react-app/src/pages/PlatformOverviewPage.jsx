import React from 'react';
import { Link } from 'react-router-dom';

export const PlatformOverviewPage = () => {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-xl flex flex-col gap-xl">
      {/* Subfolder Identifier */}
      <div className="flex items-center gap-2">
        <span className="font-label-sm uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded">
          📁 Subfolders: khamis_clinical_nutrition_platform & untitled_prototype
        </span>
        <span className="text-[11px] font-semibold text-primary">System Architecture & Capabilities</span>
      </div>

      {/* Hero */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md md:p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
        <div className="flex flex-col gap-md max-w-xl">
          <div className="inline-flex items-center space-x-xs px-sm py-xs bg-surface-container rounded-full w-fit">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Clinical Platform Core
            </span>
          </div>
          <h1 className="font-headline-lg text-3xl md:text-headline-lg font-bold text-primary">
            Khamis Clinical Nutrition Platform
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            An end-to-end closed-loop platform combining biometric ingestion, algorithmic diet formulation, kitchen cold-chain execution, and specialist telehealth review.
          </p>
          <div className="flex gap-sm pt-2">
            <Link
              to="/services"
              className="bg-primary text-on-primary px-6 py-3 rounded font-label-sm uppercase font-bold text-xs hover:bg-primary-container"
            >
              Explore Services
            </Link>
            <Link
              to="/admin"
              className="border border-outline-variant px-6 py-3 rounded font-label-sm uppercase font-semibold text-xs hover:bg-surface-container"
            >
              Admin Metrics
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-surface-container-low border border-outline-variant rounded-lg p-md space-y-3">
          <div className="flex items-center justify-between p-2.5 bg-surface rounded border border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">bloodtype</span>
              <span className="text-sm font-semibold">Biomarker Ingestion Pipeline</span>
            </div>
            <span className="text-[11px] font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded">Active</span>
          </div>

          <div className="flex items-center justify-between p-2.5 bg-surface rounded border border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">kitchen</span>
              <span className="text-sm font-semibold">Cold-Chain Prep & Dispatch</span>
            </div>
            <span className="text-[11px] font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded">Active</span>
          </div>

          <div className="flex items-center justify-between p-2.5 bg-surface rounded border border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">teleport</span>
              <span className="text-sm font-semibold">Dietitian Telehealth Video Channel</span>
            </div>
            <span className="text-[11px] font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded">HIPAA Ready</span>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        <div className="p-md bg-surface border border-outline-variant rounded">
          <span className="material-symbols-outlined text-primary text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
            database
          </span>
          <h3 className="font-bold text-base text-primary mb-1">Telemetry Data Sync</h3>
          <p className="text-xs text-secondary">
            Continuous sync with continuous glucose monitors (CGM), smart scales, and lab panels.
          </p>
        </div>

        <div className="p-md bg-surface border border-outline-variant rounded">
          <span className="material-symbols-outlined text-primary text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
            nutrition
          </span>
          <h3 className="font-bold text-base text-primary mb-1">Precision Macros</h3>
          <p className="text-xs text-secondary">
            Exact carbohydrate glycemic load, sodium constraints, and targeted micronutrients.
          </p>
        </div>

        <div className="p-md bg-surface border border-outline-variant rounded">
          <span className="material-symbols-outlined text-primary text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
            security
          </span>
          <h3 className="font-bold text-base text-primary mb-1">Medical Compliance</h3>
          <p className="text-xs text-secondary">
            Full HIPAA compliant architecture, encrypted storage, and registered dietitian sign-offs.
          </p>
        </div>

        <div className="p-md bg-surface border border-outline-variant rounded">
          <span className="material-symbols-outlined text-primary text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
            local_shipping
          </span>
          <h3 className="font-bold text-base text-primary mb-1">Cold-Chain Delivery</h3>
          <p className="text-xs text-secondary">
            Sterile nitrogen-sealed temperature-controlled packaging delivered every morning.
          </p>
        </div>
      </section>
    </main>
  );
};
