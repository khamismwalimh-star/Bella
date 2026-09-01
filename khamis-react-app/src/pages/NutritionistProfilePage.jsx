import React from 'react';
import { Link } from 'react-router-dom';

export const NutritionistProfilePage = () => {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-xl flex flex-col gap-xl">
      {/* Subfolder Identifier */}
      <div className="flex items-center gap-2">
        <span className="font-label-sm uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded">
          📁 Subfolder: nutritionist_profile
        </span>
        <span className="text-[11px] font-semibold text-primary">Clinical Specialist Directory</span>
      </div>

      {/* Profile Header Bento */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Main Profile Card */}
        <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col md:flex-row gap-md items-start">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded bg-surface-container flex-shrink-0 overflow-hidden relative border border-outline-variant">
            <img
              alt="Dr. Sarah Jenkins"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-X5X7z4p_oZVRelpeeeDwCgLnUBONnZ2-wE54s7YTGgYGppLMOHIihcl4RFPo7ABC1iNVo3WS8a2Noh3qyKCwsaBlReUBVnwZ-eDf-RN6k5yQgwR78fO9TsrQ3GGBkmh96sWrMNAfMucwF_3SJmmqwWLyVU2lpo_-QRwS0KM4bbNfeHvocYUl_X8xhEEYVniIpU3uHlQzslSwt3FY2z-S4qYGRmqxI107kdcBsbCZV8_VnmLc3mQc"
            />
          </div>

          <div className="flex-col flex flex-grow w-full">
            <div className="flex justify-between items-start w-full">
              <div>
                <div className="flex items-center gap-xs mb-xs">
                  <h1 className="font-headline-lg text-2xl md:text-headline-lg text-primary font-bold">
                    Dr. Sarah Jenkins
                  </h1>
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified Nutritionist">
                    verified
                  </span>
                </div>
                <p className="font-body-md text-body-md text-secondary">
                  Registered Dietitian Nutritionist (RDN), PhD Clinical Nutrition
                </p>
              </div>

              <div className="hidden sm:flex flex-col items-end">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-surface-tint text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">4.9</span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary">124 REVIEWS</span>
              </div>
            </div>

            <div className="mt-md font-body-md text-body-md text-on-surface-variant flex-grow">
              <p>
                Specializing in metabolic health and performance nutrition. Over 10 years of clinical experience developing precise, data-driven dietary protocols for complex metabolic conditions and athletic optimization.
              </p>
            </div>

            <div className="mt-md flex flex-wrap gap-sm">
              <span className="px-3 py-1 border border-outline-variant text-on-surface-variant font-label-sm text-label-sm rounded bg-surface font-semibold">
                Metabolic Health
              </span>
              <span className="px-3 py-1 border border-outline-variant text-on-surface-variant font-label-sm text-label-sm rounded bg-surface font-semibold">
                Sports Nutrition
              </span>
              <span className="px-3 py-1 border border-outline-variant text-on-surface-variant font-label-sm text-label-sm rounded bg-surface font-semibold">
                Clinical Dietetics
              </span>
            </div>
          </div>
        </div>

        {/* Quick Action / Booking Teaser */}
        <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between">
          <div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-sm">Consultation</h3>
            <p className="font-body-md text-secondary text-sm mb-md">
              45-minute comprehensive initial assessment and protocol planning.
            </p>
            <div className="flex items-center gap-sm mb-xs text-on-surface text-sm">
              <span className="material-symbols-outlined text-outline">schedule</span>
              <span>Next available: <strong className="text-primary">Tomorrow, 10:00 AM</strong></span>
            </div>
            <div className="flex items-center gap-sm mb-md text-on-surface text-sm">
              <span className="material-symbols-outlined text-outline">videocam</span>
              <span>Telehealth (Secure Video)</span>
            </div>
          </div>

          <Link
            to="/booking"
            className="w-full bg-primary text-on-primary font-label-sm text-center text-label-sm px-6 py-3.5 rounded hover:bg-primary-container transition-colors uppercase font-bold tracking-wider"
          >
            Book Consultation
          </Link>
        </div>
      </div>

      {/* Secondary Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Credentials & Experience */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded p-md">
          <h3 className="font-headline-md text-xl font-bold text-on-surface mb-md pb-sm border-b border-outline-variant">
            Credentials & Education
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-2xl mt-0.5">school</span>
              <div>
                <p className="font-body-md text-on-surface font-semibold">PhD in Clinical Nutrition & Metabolism</p>
                <p className="font-body-md text-secondary text-sm">Stanford University, 2014</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-2xl mt-0.5">verified</span>
              <div>
                <p className="font-body-md text-on-surface font-semibold">Board Certified Specialist in Sports Dietetics (CSSD)</p>
                <p className="font-body-md text-secondary text-sm">Academy of Nutrition and Dietetics</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-2xl mt-0.5">medical_information</span>
              <div>
                <p className="font-body-md text-on-surface font-semibold">Former Lead Clinical Dietitian</p>
                <p className="font-body-md text-secondary text-sm">UCSF Medical Center, Endocrinology & Diabetes Dept</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Publications & Research */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded p-md">
          <h3 className="font-headline-md text-xl font-bold text-on-surface mb-md pb-sm border-b border-outline-variant">
            Published Research & Focus
          </h3>
          <ul className="space-y-4">
            <li className="p-3 bg-surface rounded border border-outline-variant/60">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wide">Journal of Clinical Endocrinology</span>
              <p className="font-semibold text-[14px] text-on-surface mt-1">
                "Continuous Glucose Telemetry in Dietary Intervention Protocols" (2022)
              </p>
            </li>
            <li className="p-3 bg-surface rounded border border-outline-variant/60">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wide">Metabolism & Nutrition Reports</span>
              <p className="font-semibold text-[14px] text-on-surface mt-1">
                "Targeted Micronutrient Timing for Glycemic Control in High-Performance Patients" (2020)
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
