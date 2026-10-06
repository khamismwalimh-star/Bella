import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const OurServicesPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const { setSelectedPlan, addToast, isAuthenticated } = useApp();
  const navigate = useNavigate();

  const serviceTiers = [
    {
      id: 'tier_essential',
      name: 'Essential Clinical Care',
      badge: 'Baseline Therapy',
      popular: false,
      priceMonthly: 240,
      priceQuarterly: 216,
      tagline: 'Standard biomarker calibration & dietitian consultation',
      features: [
        'Bi-weekly clinical consultation (30 min)',
        'Biomarker analysis & diet mapping',
        'Direct messaging with assigned RDN',
        'Daily clinical meal delivery (5 days/wk)',
        'Quarterly blood panel review'
      ]
    },
    {
      id: 'tier_precision',
      name: 'Precision Metabolic Protocol',
      badge: 'Most Popular',
      popular: true,
      priceMonthly: 380,
      priceQuarterly: 342,
      tagline: 'Full continuous biometric integration with chef meals',
      features: [
        'Weekly 1-on-1 specialist consults',
        'Continuous glucose telemetry sync',
        'Daily clinical meal delivery (7 days/wk)',
        'Custom micronutrient supplementation',
        'Emergency dietary adjustments & chat',
        'Priority lab ordering & prescription support'
      ]
    },
    {
      id: 'tier_executive',
      name: 'Executive Longevity Protocol',
      badge: 'Comprehensive Suite',
      popular: false,
      priceMonthly: 620,
      priceQuarterly: 558,
      tagline: 'Complete medical concierge & metabolic bio-optimization',
      features: [
        '24/7 dedicated dietitian on-call',
        'Full bespoke chef meal customization',
        'Comprehensive lipid & hormone monitoring',
        'At-home phlebotomy & testing kit',
        'Family metabolic profiling included',
        'Concierge clinician coordination'
      ]
    }
  ];

  const handleSelectService = (tier) => {
    setSelectedPlan({
      id: tier.id,
      name: tier.name,
      price: billingCycle === 'monthly' ? tier.priceMonthly : tier.priceQuarterly,
      billingCycle
    });
    addToast(`Selected ${tier.name} protocol.`);
    if (isAuthenticated) {
      navigate('/booking');
    } else {
      navigate('/signup');
    }
  };

  return (
    <main className="flex-grow flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-lg md:py-xl gap-xl">
      {/* Header Section */}
      <section className="flex flex-col gap-sm max-w-3xl">
        <div className="inline-flex items-center space-x-xs px-sm py-xs bg-surface-container rounded-full w-fit">
          <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
            medical_services
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            Clinical Services
          </span>
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-on-surface font-bold">
          Precision Clinical Nutrition Services
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Physician-backed nutrition therapy, continuous metabolic monitoring, and chef-crafted clinical meal delivery.
        </p>
      </section>

      {/* Services Grid Bento */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Offering 1: 1-on-1 Telehealth (Large Span) */}
        <div className="md:col-span-8 bg-surface-container-low border border-outline-variant p-lg flex flex-col justify-between rounded-lg relative overflow-hidden min-h-[380px]">
          <div className="flex flex-col gap-md max-w-md z-10">
            <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                video_camera_front
              </span>
            </div>
            <h2 className="font-headline-md text-2xl md:text-headline-md font-bold text-on-background">
              1-on-1 Clinical Consultations
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Meet directly with registered dietitians specialized in metabolic health, glycemic regulation, cardiovascular wellness, and GI recovery.
            </p>
          </div>
          <div className="z-10 mt-6">
            <Link
              to="/booking"
              className="bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 rounded hover:bg-primary-container transition-colors inline-flex items-center gap-2 font-semibold"
            >
              Book Specialist Session <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div
            className="absolute right-0 bottom-0 w-1/2 h-full opacity-15 bg-cover bg-left pointer-events-none"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeIUPvGGMi9z-1627r1AdaB2x3d_6K6HS0LaAQ32-kuOttSsoJFL2wzfw4HOK9DPUK7r_Za95Aa29hdrm5PBOTHy4BzYMlgcQ_6x43WHv7CBq5F3p-y7UI0zqBf60VYS1u0EWRD-YnhbnIwTW5N0R7HIJ0mOWFL8cV-DS2ZuFMxB03v_mj1mJ85YJ8tn6sx2qMtUL0TDPLmMU4dj3dxHmL-l5ePNUO0Egx-RgveXy0yKH16qyuJnAT')"
            }}
          />
        </div>

        {/* Offering 2: Custom Diet Protocols (Small Span) */}
        <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant p-md flex flex-col justify-between rounded-lg min-h-[380px] hover:border-primary transition-all">
          <div className="flex flex-col gap-md">
            <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                assignment
              </span>
            </div>
            <h3 className="font-headline-md text-xl md:text-2xl font-bold text-on-background">
              Personalized Nutrition Protocols
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Algorithmic and expert-reviewed macro/micro nutrient mapping tailored precisely to your physiological requirements and allergies.
            </p>
          </div>
          <Link
            to="/profile"
            className="font-label-sm text-label-sm text-primary uppercase flex items-center gap-xs w-fit hover:underline mt-auto pt-md font-semibold"
          >
            Configure Biomarkers <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* Offering 3: Meal Delivery (Full Width Banner) */}
        <div className="md:col-span-12 bg-primary text-on-primary p-lg flex flex-col md:flex-row items-center justify-between rounded-lg relative overflow-hidden">
          <div className="flex flex-col gap-md max-w-xl z-10">
            <span className="material-symbols-outlined text-inverse-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              local_shipping
            </span>
            <h2 className="font-headline-md text-2xl md:text-headline-md font-bold text-on-primary">
              Premium Meal Delivery
            </h2>
            <p className="font-body-md text-body-md text-inverse-primary">
              Chef-prepared, nutritionally exact meals delivered daily. Zero prep, pure clinical adherence.
            </p>
          </div>
          <div className="mt-md md:mt-0 z-10">
            <button
              onClick={() => handleSelectService(serviceTiers[1])}
              className="bg-surface text-primary font-label-sm text-label-sm px-8 py-3.5 rounded hover:bg-surface-container-low transition-colors font-semibold"
            >
              Order Precision Meals
            </button>
          </div>
        </div>
      </section>

      {/* Clinical Programs & Packages Section */}
      <section className="flex flex-col gap-lg pt-lg border-t border-outline-variant">
        <div className="text-center flex flex-col gap-sm items-center">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary font-bold">
            Clinical Care Programs & Telehealth
          </h2>
          <p className="font-body-lg text-secondary max-w-xl">
            Choose the precision clinical program aligned with your health biomarkers and consultation needs.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center gap-2 mt-4 p-1 rounded-full bg-surface-container border border-outline-variant">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all ${
                billingCycle === 'monthly' ? 'bg-primary text-on-primary shadow-sm' : 'text-secondary hover:text-primary'
              }`}
            >
              Monthly Program
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly' ? 'bg-primary text-on-primary shadow-sm' : 'text-secondary hover:text-primary'
              }`}
            >
              Quarterly (Save 10%)
              <span className="bg-primary-fixed text-on-primary-fixed text-[10px] px-1.5 py-0.2 rounded font-bold">
                10% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {serviceTiers.map((tier) => {
            const price = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceQuarterly;
            return (
              <div
                key={tier.id}
                className={`p-lg rounded-lg flex flex-col justify-between transition-all ${
                  tier.popular
                    ? 'bg-surface-container-lowest border-2 border-primary shadow-md relative'
                    : 'bg-surface-container-lowest border border-outline-variant hover:border-outline'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-headline-md text-2xl font-bold text-primary">{tier.name}</h3>
                    {!tier.popular && (
                      <span className="text-[11px] uppercase font-semibold bg-surface-container px-2 py-0.5 rounded text-secondary">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-body-md text-sm text-secondary mb-6">{tier.tagline}</p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-outline-variant">
                    <span className="text-4xl font-extrabold text-on-background">${price}</span>
                    <span className="text-secondary text-sm font-medium">/ month</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectService(tier)}
                  className={`w-full py-3.5 rounded font-label-sm uppercase tracking-wider text-center font-bold transition-all ${
                    tier.popular
                      ? 'bg-primary text-on-primary hover:bg-primary-container'
                      : 'border border-primary text-primary hover:bg-surface-container-low'
                  }`}
                >
                  Enroll in {tier.name}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
