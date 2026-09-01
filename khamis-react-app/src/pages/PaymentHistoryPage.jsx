import React from 'react';
import { useApp } from '../context/AppContext';

export const PaymentHistoryPage = () => {
  const { addToast } = useApp();

  const transactions = [
    { id: 'INV-2026-0801', date: 'Aug 01, 2026', plan: 'Clinical Precision Plan (Monthly)', amount: '$349.00', status: 'Paid', method: 'Visa •••• 4242' },
    { id: 'INV-2026-0701', date: 'Jul 01, 2026', plan: 'Clinical Precision Plan (Monthly)', amount: '$349.00', status: 'Paid', method: 'Visa •••• 4242' },
    { id: 'INV-2026-0615', date: 'Jun 15, 2026', plan: 'Specialist Consultation (Dr. Sarah Jenkins)', amount: '$120.00', status: 'Paid', method: 'Apple Pay' },
    { id: 'INV-2026-0601', date: 'Jun 01, 2026', plan: 'Essential Care Plan (Monthly)', amount: '$199.00', status: 'Paid', method: 'Visa •••• 4242' },
    { id: 'INV-2026-0501', date: 'May 01, 2026', plan: 'Initial Metabolic Biomarker Intake Kit', amount: '$85.00', status: 'Paid', method: 'Visa •••• 4242' }
  ];

  const handleDownloadInvoice = (id) => {
    addToast(`Downloading official tax receipt for ${id}...`);
  };

  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-xl flex flex-col gap-xl">
      {/* Subfolder Identifier */}
      <div className="flex items-center gap-2">
        <span className="font-label-sm uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded">
          📁 Subfolder: payment_history
        </span>
        <span className="text-[11px] font-semibold text-primary">Billing & Invoices</span>
      </div>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 border-b border-outline-variant pb-md">
        <div>
          <h1 className="font-headline-lg text-2xl md:text-headline-lg text-primary font-bold mb-xs">
            Payment & Billing History
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Review past transactions, active billing methods, and download official medical invoices.
          </p>
        </div>
        <div className="flex items-center gap-sm bg-surface-container px-3 py-1.5 rounded">
          <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified
          </span>
          <span className="font-label-sm text-xs text-primary uppercase font-bold tracking-wider">
            256-Bit Encrypted
          </span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {/* Next Billing */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between">
          <span className="text-xs uppercase text-secondary font-semibold">Next Scheduled Billing</span>
          <div className="my-2">
            <p className="text-2xl font-bold text-on-background">$349.00</p>
            <p className="text-xs text-secondary">Auto-renews on September 1, 2026</p>
          </div>
          <span className="text-xs font-bold text-primary">Clinical Precision Pro</span>
        </div>

        {/* Primary Method */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs uppercase text-secondary font-semibold">Default Payment Method</span>
            <span className="material-symbols-outlined text-primary">credit_card</span>
          </div>
          <div className="my-2">
            <p className="text-lg font-bold text-on-background">Visa ending in 4242</p>
            <p className="text-xs text-secondary">Expires 09/28 • Default</p>
          </div>
          <button
            onClick={() => addToast('Opening payment method manager...')}
            className="text-xs text-primary font-bold hover:underline text-left"
          >
            Update Payment Method →
          </button>
        </div>

        {/* Insurance & HSA/FSA */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs uppercase text-secondary font-semibold">HSA / FSA Eligibility</span>
            <span className="material-symbols-outlined text-primary">receipt_long</span>
          </div>
          <div className="my-2">
            <p className="text-sm font-semibold text-on-background">Eligible for Medical Reimbursement</p>
            <p className="text-xs text-secondary">All invoices include clinical dietitian NPI codes</p>
          </div>
          <button
            onClick={() => addToast('Generating consolidated annual medical receipt summary...')}
            className="text-xs text-primary font-bold hover:underline text-left"
          >
            Download HSA Annual Summary →
          </button>
        </div>
      </div>

      {/* Invoices Table */}
      <section className="flex flex-col gap-md">
        <h2 className="font-headline-md text-xl font-bold text-on-background">Past Transactions</h2>

        <div className="bg-surface-container-lowest border border-outline-variant rounded overflow-x-auto shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-surface-container-low border-b border-outline-variant text-xs">
              <tr>
                <th className="py-3 px-md font-label-sm text-secondary uppercase">Invoice ID</th>
                <th className="py-3 px-md font-label-sm text-secondary uppercase">Date</th>
                <th className="py-3 px-md font-label-sm text-secondary uppercase">Description</th>
                <th className="py-3 px-md font-label-sm text-secondary uppercase">Amount</th>
                <th className="py-3 px-md font-label-sm text-secondary uppercase">Status</th>
                <th className="py-3 px-md font-label-sm text-secondary uppercase text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant font-body-md">
              {transactions.map(item => (
                <tr key={item.id} className="hover:bg-surface-container-low transition-colors">
                  <td className="py-3 px-md font-mono text-xs font-semibold text-primary">
                    {item.id}
                  </td>
                  <td className="py-3 px-md text-secondary">
                    {item.date}
                  </td>
                  <td className="py-3 px-md font-medium text-on-surface">
                    {item.plan}
                    <span className="block text-xs text-secondary">{item.method}</span>
                  </td>
                  <td className="py-3 px-md font-bold text-on-background">
                    {item.amount}
                  </td>
                  <td className="py-3 px-md">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary-fixed text-on-primary-fixed rounded text-xs font-bold">
                      <span className="material-symbols-outlined text-[12px]">check</span>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-md text-right">
                    <button
                      onClick={() => handleDownloadInvoice(item.id)}
                      className="inline-flex items-center gap-1 text-xs text-primary font-bold hover:bg-surface-container px-2 py-1 rounded transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
