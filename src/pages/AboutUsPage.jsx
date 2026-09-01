import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

export const AboutUsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'story';

  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-xl flex flex-col gap-xl">
      {/* Subfolder View Switcher */}
      <div className="flex items-center justify-between border-b border-outline-variant pb-md">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded">
            📁 Subfolder: {activeTab === 'story' ? 'about_us_2' : 'about_us_1'}
          </span>
          <h1 className="font-headline-lg text-3xl md:text-headline-lg text-primary mt-2">
            About Khamis
          </h1>
        </div>
        
        {/* Toggle between variation 1 & 2 */}
        <div className="inline-flex rounded border border-outline-variant p-1 bg-surface-container-low">
          <button
            onClick={() => setSearchParams({ tab: 'story' })}
            className={`px-3 py-1.5 rounded text-[13px] font-semibold transition-all ${
              activeTab === 'story'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'text-secondary hover:text-primary'
            }`}
          >
            Brand Story & Bento (about_us_2)
          </button>
          <button
            onClick={() => setSearchParams({ tab: 'overview' })}
            className={`px-3 py-1.5 rounded text-[13px] font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'text-secondary hover:text-primary'
            }`}
          >
            Clinical Overview (about_us_1)
          </button>
        </div>
      </div>

      {activeTab === 'story' ? (
        /* About Us 2 View: Brand Story & Bento Grid */
        <div className="flex flex-col gap-xl">
          {/* Hero Section */}
          <section className="flex flex-col items-start gap-lg border-b border-outline-variant pb-xl">
            <h2 className="font-display-xl text-3xl md:text-5xl lg:text-display-xl text-primary max-w-4xl font-bold">
              Redefining the standard of clinical nutrition.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              At Khamis, we believe that health is built on precision and transparency. We combine rigorous clinical standards with premium culinary execution to deliver results you can trust.
            </p>
          </section>

          {/* Brand Story (Bento Grid) */}
          <section className="grid grid-cols-12 gap-gutter border-b border-outline-variant pb-xl">
            <div className="col-span-12 md:col-span-4 flex flex-col gap-sm">
              <h2 className="font-headline-lg text-2xl md:text-headline-lg text-primary font-bold">The Origin</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Founded by clinical dietitians frustrated by the lack of transparency in meal delivery, Khamis was built as a solution. No hidden ingredients, no generic macros—just precise, tailored nutrition.
              </p>
              <div className="mt-4 pt-4 border-t border-outline-variant">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">
                    KH
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-primary">Dr. Karim Khamis, MD</p>
                    <p className="text-[12px] text-secondary">Chief Clinical Officer & Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              {/* Precision Card */}
              <div
                className="bg-surface-container p-lg rounded border border-outline-variant flex flex-col justify-end min-h-[300px] relative overflow-hidden"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeIUPvGGMi9z-1627r1AdaB2x3d_6K6HS0LaAQ32-kuOttSsoJFL2wzfw4HOK9DPUK7r_Za95Aa29hdrm5PBOTHy4BzYMlgcQ_6x43WHv7CBq5F3p-y7UI0zqBf60VYS1u0EWRD-YnhbnIwTW5N0R7HIJ0mOWFL8cV-DS2ZuFMxB03v_mj1mJ85YJ8tn6sx2qMtUL0TDPLmMU4dj3dxHmL-l5ePNUO0Egx-RgveXy0yKH16qyuJnAT')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="bg-surface/90 backdrop-blur-sm p-md rounded border border-outline-variant">
                  <h3 className="font-headline-md text-headline-md text-primary font-semibold">Precision</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                    Every meal is meticulously calculated against laboratory biomarkers.
                  </p>
                </div>
              </div>

              {/* Integrity Card */}
              <div
                className="bg-surface-container p-lg rounded border border-outline-variant flex flex-col justify-end min-h-[300px] relative overflow-hidden"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDB4Y4bYd9UYzf-JKqocySEL0AYEXHjlVdH1AWV07JhXh0djV2fNVKWX7HpDOasw9I9iA7T9RZiBE80S6G9pdyC_5sEri4Nj0dNUw_QUreaX-vUKsc4FHUz3JiQfZePieS1MkZsCs23EC5_V19Sapij1qtJw5oVIuhkkRRFm9FVuDHkFrB7L_uyhHSrTGYzIR5-A0q_3zORKK6gymDER4ezHmzxgda78Ms7aiiMXm7JHjv8oZm_AXbj')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="bg-surface/90 backdrop-blur-sm p-md rounded border border-outline-variant">
                  <h3 className="font-headline-md text-headline-md text-primary font-semibold">Integrity</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                    Complete ingredient transparency with verified clinical certifications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Grid */}
          <section className="bg-surface-container-low p-md md:p-lg border border-outline-variant rounded">
            <h2 className="font-headline-lg text-2xl md:text-headline-lg text-primary mb-lg font-bold">
              Our Core Tenets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="p-lg border border-outline-variant bg-surface rounded flex flex-col gap-sm">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  science
                </span>
                <h3 className="font-headline-md text-[22px] text-primary font-semibold">Evidence-Based</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our protocols are dictated by peer-reviewed nutritional science, not fleeting dietary trends.
                </p>
              </div>

              <div className="p-lg border border-outline-variant bg-surface rounded flex flex-col gap-sm">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                <h3 className="font-headline-md text-[22px] text-primary font-semibold">Uncompromising Quality</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  From sourcing to delivery, we maintain a clinical standard of hygiene, refrigeration, and prep.
                </p>
              </div>

              <div className="p-lg border border-outline-variant bg-surface rounded flex flex-col gap-sm">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  restaurant
                </span>
                <h3 className="font-headline-md text-[22px] text-primary font-semibold">Culinary Excellence</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Health optimization should not require a sacrifice in taste, texture, or presentation.
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* About Us 1 View: Clinical Overview */
        <div className="flex flex-col gap-xl">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="flex flex-col gap-md">
              <div className="inline-flex items-center space-x-xs px-sm py-xs bg-surface-container rounded-full w-fit">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  Clinical Standards
                </span>
              </div>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary font-bold">
                Precision Health Through Targeted Nutrition.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We bridge the gap between doctor recommendations and your daily plate. Our registered dietitians work directly with culinary artists to formulate nutrient-dense meals engineered to optimize metabolic markers.
              </p>
              <div className="grid grid-cols-2 gap-md pt-md">
                <div className="p-md border border-outline-variant rounded bg-surface">
                  <p className="font-headline-md text-2xl text-primary font-bold">100%</p>
                  <p className="text-[13px] text-secondary">Clinical-Grade Ingredients</p>
                </div>
                <div className="p-md border border-outline-variant rounded bg-surface">
                  <p className="font-headline-md text-2xl text-primary font-bold">12k+</p>
                  <p className="text-[13px] text-secondary">Active Patients Served</p>
                </div>
              </div>
            </div>

            <div className="rounded overflow-hidden border border-outline-variant">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeIUPvGGMi9z-1627r1AdaB2x3d_6K6HS0LaAQ32-kuOttSsoJFL2wzfw4HOK9DPUK7r_Za95Aa29hdrm5PBOTHy4BzYMlgcQ_6x43WHv7CBq5F3p-y7UI0zqBf60VYS1u0EWRD-YnhbnIwTW5N0R7HIJ0mOWFL8cV-DS2ZuFMxB03v_mj1mJ85YJ8tn6sx2qMtUL0TDPLmMU4dj3dxHmL-l5ePNUO0Egx-RgveXy0yKH16qyuJnAT"
                alt="Clinical Prep Kitchen"
                className="w-full h-80 object-cover"
              />
            </div>
          </section>
        </div>
      )}
    </main>
  );
};
