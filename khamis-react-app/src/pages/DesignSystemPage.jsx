import React from 'react';
import { colors } from '../theme/designTokens';

export const DesignSystemPage = () => {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-xl flex flex-col gap-xl">
      {/* Subfolder Identifier */}
      <div className="flex items-center gap-2">
        <span className="font-label-sm uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded">
          📁 Subfolder: khamis / DESIGN.md
        </span>
        <span className="text-[11px] font-semibold text-primary">Clinical-Premium Minimalism Tokens</span>
      </div>

      <header className="border-b border-outline-variant pb-md">
        <h1 className="font-headline-lg text-3xl md:text-headline-lg font-bold text-primary">
          Khamis Design System
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-3xl mt-1">
          Built on a <strong>Clinical-Premium Minimalism</strong> philosophy. Clean architectural lines, 8pt spacing grid, deep forest green primary accents, and utilitarian Inter typography.
        </p>
      </header>

      {/* Color Palette Tokens */}
      <section className="flex flex-col gap-md">
        <h2 className="font-headline-md text-2xl font-bold text-on-surface">Color Tokens</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {Object.entries(colors).map(([name, hex]) => (
            <div key={name} className="p-3 bg-surface-container-lowest border border-outline-variant rounded flex flex-col gap-2">
              <div
                className="w-full h-12 rounded border border-outline-variant shadow-inner"
                style={{ backgroundColor: hex }}
              />
              <div>
                <p className="font-mono text-xs font-bold text-primary truncate" title={name}>{name}</p>
                <p className="font-mono text-[11px] text-secondary">{hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Hierarchy */}
      <section className="flex flex-col gap-md">
        <h2 className="font-headline-md text-2xl font-bold text-on-surface">Typography Scale (Inter)</h2>
        <div className="bg-surface-container-lowest border border-outline-variant rounded p-md space-y-4">
          <div className="border-b border-outline-variant pb-3">
            <span className="font-mono text-xs text-secondary">display-xl (72px / 800)</span>
            <p className="font-display-xl text-3xl sm:text-5xl font-extrabold text-primary">Clinical Nutrition</p>
          </div>
          <div className="border-b border-outline-variant pb-3">
            <span className="font-mono text-xs text-secondary">headline-lg (48px / 700)</span>
            <p className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface">Redefining precision meal delivery</p>
          </div>
          <div className="border-b border-outline-variant pb-3">
            <span className="font-mono text-xs text-secondary">headline-md (30px / 600)</span>
            <p className="font-headline-md text-xl sm:text-2xl font-semibold text-primary">Biomarker Health & Dietetics</p>
          </div>
          <div className="border-b border-outline-variant pb-3">
            <span className="font-mono text-xs text-secondary">body-lg (18px / 400)</span>
            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant">
              Evidence-based meal plans designed by certified dietitians. Tailored to your specific health metrics and delivered fresh daily.
            </p>
          </div>
          <div>
            <span className="font-mono text-xs text-secondary">label-sm (12px / 600 uppercase)</span>
            <p className="font-label-sm text-xs font-semibold uppercase tracking-wider text-primary">
              Medical Grade Standard • HIPAA Protected
            </p>
          </div>
        </div>
      </section>

      {/* Spacing & Shapes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <div className="p-md bg-surface-container-lowest border border-outline-variant rounded">
          <h3 className="font-bold text-lg text-primary mb-2">8pt Spatial System</h3>
          <ul className="text-xs text-secondary space-y-1.5 font-mono">
            <li>xs: 4px</li>
            <li>base: 8px</li>
            <li>sm: 12px</li>
            <li>md: 24px</li>
            <li>lg: 48px</li>
            <li>xl: 80px</li>
            <li>container-margin: 120px</li>
          </ul>
        </div>

        <div className="p-md bg-surface-container-lowest border border-outline-variant rounded">
          <h3 className="font-bold text-lg text-primary mb-2">Corner Radius</h3>
          <ul className="text-xs text-secondary space-y-1.5 font-mono">
            <li>DEFAULT: 0.25rem (4px)</li>
            <li>sm: 0.125rem (2px)</li>
            <li>md: 0.375rem (6px)</li>
            <li>lg: 0.5rem (8px)</li>
            <li>full: 9999px</li>
          </ul>
        </div>
      </section>
    </main>
  );
};
