import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const OurServicesPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'quarterly'
  const { setSelectedPlan, addToast } = useApp();
  const navigate = useNavigate();

  const pricingTiers = [
    {
      id: 'essential',
      name: 'Essential Care',
      tagline: 'Foundational clinical meal delivery for sustained energy and wellness.',
      priceMonthly: 199,
      priceQuarterly: 179,
      badge: 'Starter',
      features: [
        '5 Chef-prepared clinical lunches / week',
        'Standard macro balancing',
        'Weekly digital progress report',
        'Access to nutrition resource library'
      ],
      popular: false
    },
    {
      id: 'clinical_precision',
      name: 'Clinical Precision',
      tagline: 'Comprehensive metabolic care with dedicated dietitian oversight.',
      priceMonthly: 349,
      priceQuarterly: 319,
      badge: 'Most Popular',
      features: [
        '10 Chef-prepared meals (Lunch & Dinner) / week',
        'Biomarker & blood panel customization',
        'Bi-weekly 1:1 consultation with Dr. Sarah Jenkins',
        'Continuous glucose tracking data sync',
        'Free priority temperature-controlled delivery'
      ],
      popular: true
    },
    {
      id: 'complete_care',
      name: 'Concierge Health',
      tagline: 'Full spectrum clinical optimization with unlimited direct specialist access.',
      priceMonthly: 599,
      priceQuarterly: 549,
      badge: 'Comprehensive',
      features: [
        '21 Gourmet clinical meals (Breakfast, Lunch, Dinner) / week',
        'Weekly video consultations with lead dietitian',
        'Real-time wearable telemetry & biomarker monitoring',
        'Personalized nutraceutical & micronutrient pack',
        'Direct 24/7 dietitian concierge chat'
      ],
      popular: false
    }
  ];

  const handleSelectPlan = (tier) => {
    const price = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceQuarterly;
    setSelectedPlan({
      id: tier.id,
      name: tier.name,
      cadence: billingCycle === 'monthly' ? 'Monthly Delivery' : 'Quarterly Delivery (Saved 10%)',
      price: price,
      discount: 0,
      deliveryFee: 0,
      features: tier.features
    });
    addToast(`Selected ${tier.name}! Proceeding to checkout.`);
    navigate('/checkout');
  };

  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-xl flex flex-col gap-xl">
      {/* Header Section */}
      <header className="text-center max-w-3xl mx-auto flex flex-col gap-md">
        <span className="font-label-sm uppercase tracking-widest text-primary bg-surface-container px-3 py-1 rounded-full w-fit mx-auto">
          Medical Grade Standards
        </span>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-headline-lg text-on-background font-bold">
          Clinical Precision, Delivered.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Elevate your nutritional strategy with our evidence-based consultation, personalized planning, and seamless meal delivery services.
        </p>
      </header>

      {/* Core Offerings (Bento Grid Style) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Offering 1: Consultation (Large Span) */}
        <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-lg flex flex-col justify-between rounded-lg min-h-[380px] relative overflow-hidden group hover:border-primary transition-all">
          <div className="z-10 relative flex flex-col gap-md max-w-md">
            <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                medical_services
              </span>
            </div>
            <h2 className="font-headline-md text-2xl md:text-headline-md text-on-background font-bold">
              1:1 Clinical Consultation
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              In-depth assessment with certified dietitians to analyze your metabolic profile, define health objectives, and establish a foundational nutritional baseline.
            </p>
            <Link
              to="/booking"
              className="font-label-sm text-label-sm text-primary uppercase flex items-center gap-xs w-fit group-hover:underline mt-sm font-semibold"
            >
              Book Session <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div
            className="absolute right-0 bottom-0 w-1/2 h-full opacity-15 bg-cover bg-left pointer-events-none"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeIUPvGGMi9z-1627r1AdaB2x3d_6K6HS0LaAQ32-kuOttSsoJFL2wzfw4HOK9DPUK7r_Za95Aa29hdrm5PBOTHy4BzYMlgcQ_6x43WHv7CBq5F3p-y7UI0zqBf60VYS1u0EWRD-YnhbnIwTW5N0R7HIJ0mOWFL8cV-DS2ZuFMxB03v_mj1mJ85YJ8tn6sx2qMtUL0TDPLmMU4dj3dxHmL-l5ePNUO0Egx-RgveXy0yKH16qyuJnAT')"
            }}
          />
        </div>

        {/* Offering 2: Custom Diet Plans (Small Span) */}
        <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant p-md flex flex-col justify-between rounded-lg min-h-[380px] hover:border-primary transition-all">
          <div className="flex flex-col gap-md">
            <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                assignment
              </span>
            </div>
            <h3 className="font-headline-md text-xl md:text-2xl font-bold text-on-background">
              Custom Diet Plans
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
              onClick={() => handleSelectPlan(pricingTiers[1])}
              className="bg-surface text-primary font-label-sm text-label-sm px-8 py-3.5 rounded hover:bg-surface-container-low transition-colors font-semibold"
            >
              Order Precision Meals
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="flex flex-col gap-lg pt-lg border-t border-outline-variant">
        <div className="text-center flex flex-col gap-sm items-center">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary font-bold">
            Transparent Clinical Plans
          </h2>
          <p className="font-body-lg text-secondary max-w-xl">
            Choose the precision tier aligned with your health biomarkers and consultation needs.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center gap-2 mt-4 p-1 rounded-full bg-surface-container border border-outline-variant">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all ${
                billingCycle === 'monthly' ? 'bg-primary text-on-primary shadow-sm' : 'text-secondary hover:text-primary'
              }`}
            >
              Monthly Billing
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

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {pricingTiers.map((tier) => {
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
                  onClick={() => handleSelectPlan(tier)}
                  className={`w-full py-3.5 rounded font-label-sm uppercase tracking-wider text-center font-bold transition-all ${
                    tier.popular
                      ? 'bg-primary text-on-primary hover:bg-primary-container'
                      : 'border border-primary text-primary hover:bg-surface-container-low'
                  }`}
                >
                  Select {tier.name}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
