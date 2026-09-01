import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const AdminDashboardPage = () => {
  const { adminUsers, setAdminUsers, addToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredUsers = adminUsers.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          u.plan.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || u.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleExport = () => {
    addToast('Admin CSV report generated and downloaded!');
  };

  const handleToggleStatus = (id) => {
    setAdminUsers(prev => prev.map(u => {
      if (u.id === id) {
        const nextStatus = u.status === 'Active' ? 'Paused' : 'Active';
        return { ...u, status: nextStatus };
      }
      return u;
    }));
    addToast('User status updated.');
  };

  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-lg flex flex-col gap-xl">
      {/* Subfolder Identifier */}
      <div className="flex items-center gap-2">
        <span className="font-label-sm uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded">
          📁 Subfolder: admin_dashboard
        </span>
        <span className="text-[11px] font-semibold text-primary">Platform Administrator Suite</span>
      </div>

      {/* Dashboard Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-outline-variant pb-md">
        <div>
          <h1 className="font-headline-lg text-2xl md:text-headline-lg text-primary mb-xs font-bold">
            Executive Overview
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Platform performance, active subscribers, and operational metrics.
          </p>
        </div>
        <div className="flex gap-sm w-full sm:w-auto">
          <button
            onClick={handleExport}
            className="px-md py-sm border border-primary text-primary font-label-sm text-label-sm rounded bg-surface hover:bg-surface-container-low transition-colors font-bold"
          >
            Export Report
          </button>
          <button
            onClick={() => addToast('Launched new clinical campaign wizard.')}
            className="px-md py-sm bg-primary text-on-primary font-label-sm text-label-sm rounded hover:bg-primary-container transition-colors font-bold"
          >
            New Campaign
          </button>
        </div>
      </header>

      {/* KPI Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {/* KPI Card 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between h-48 shadow-sm">
          <div className="flex justify-between items-start">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Active Users</span>
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              group
            </span>
          </div>
          <div>
            <div className="font-headline-lg text-3xl md:text-headline-lg text-on-background mb-xs font-bold">24,592</div>
            <div className="font-label-sm text-label-sm text-primary flex items-center gap-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              +12.5% vs last month
            </div>
          </div>
        </div>

        {/* KPI Card 2 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between h-48 shadow-sm">
          <div className="flex justify-between items-start">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Monthly Revenue</span>
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance_wallet
            </span>
          </div>
          <div>
            <div className="font-headline-lg text-3xl md:text-headline-lg text-on-background mb-xs font-bold">$142.8K</div>
            <div className="font-label-sm text-label-sm text-primary flex items-center gap-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              +8.2% vs last month
            </div>
          </div>
        </div>

        {/* KPI Card 3 */}
        <div className="bg-primary border border-primary rounded p-md flex flex-col justify-between h-48 text-on-primary shadow-sm">
          <div className="flex justify-between items-start">
            <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest">Active Plans</span>
            <span className="material-symbols-outlined text-primary-fixed text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              monitoring
            </span>
          </div>
          <div>
            <div className="font-headline-lg text-3xl md:text-headline-lg mb-xs font-bold">8,941</div>
            <div className="font-label-sm text-label-sm text-primary-fixed flex items-center gap-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              94% Retention Rate
            </div>
          </div>
        </div>
      </section>

      {/* Audience Management Section */}
      <section className="flex flex-col gap-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 border-b border-outline-variant pb-sm">
          <div>
            <h2 className="font-headline-md text-xl font-bold text-on-background">Audience Management</h2>
            <p className="text-xs text-secondary">Manage subscribers, clinical dietary plans, and user permissions.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {/* Filter Pills */}
            <div className="flex gap-1 bg-surface-container rounded p-0.5 text-xs">
              {['All', 'Active', 'Pending Review', 'Paused'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-2.5 py-1 rounded font-medium transition-all ${
                    filterStatus === status ? 'bg-primary text-on-primary font-bold' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                search
              </span>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-sm py-2 border border-outline-variant rounded bg-surface-container-lowest font-body-md text-sm text-on-surface focus:outline-none focus:border-primary placeholder:text-secondary"
                placeholder="Search users..."
                type="text"
              />
            </div>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded overflow-x-auto shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant text-xs">
              <tr>
                <th className="py-3 px-md font-label-sm text-secondary uppercase">User</th>
                <th className="py-3 px-md font-label-sm text-secondary uppercase">Status</th>
                <th className="py-3 px-md font-label-sm text-secondary uppercase">Current Plan</th>
                <th className="py-3 px-md font-label-sm text-secondary uppercase">Joined Date</th>
                <th className="py-3 px-md font-label-sm text-secondary uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-sm divide-y divide-outline-variant">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-secondary">
                    No users matching criteria.
                  </td>
                </tr>
              ) : (
                filteredUsers.map(u => (
                  <tr key={u.id} className="hover:bg-surface-container-low transition-colors">
                    <td className="py-3 px-md">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">
                          {u.initials}
                        </div>
                        <div>
                          <div className="font-bold text-on-background">{u.name}</div>
                          <div className="font-label-sm text-xs text-secondary">{u.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-md">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold gap-1.5 ${
                        u.status === 'Active'
                          ? 'bg-primary-fixed text-on-primary-fixed'
                          : u.status === 'Pending Review'
                          ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                          : 'bg-surface-container text-secondary'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          u.status === 'Active' ? 'bg-primary' : u.status === 'Pending Review' ? 'bg-tertiary' : 'bg-secondary'
                        }`} />
                        {u.status}
                      </span>
                    </td>
                    <td className="py-3 px-md text-on-surface-variant font-medium">
                      {u.plan}
                    </td>
                    <td className="py-3 px-md text-secondary font-mono text-xs">
                      {u.joined}
                    </td>
                    <td className="py-3 px-md text-right">
                      <button
                        onClick={() => handleToggleStatus(u.id)}
                        className="text-xs px-2.5 py-1 border border-outline-variant rounded hover:border-primary text-secondary hover:text-primary transition-colors font-semibold"
                      >
                        {u.status === 'Active' ? 'Pause' : 'Activate'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
