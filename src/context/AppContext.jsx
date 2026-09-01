import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const SCREENS_CATALOG = [
  {
    id: 'home_page',
    folder: 'home_page',
    title: 'Home / Landing Page',
    path: '/',
    badge: 'Core Landing',
    description: 'Hero presentation, trust badge (-12% Fasting Glucose), and clinical call to action.'
  },
  {
    id: 'about_us_1',
    folder: 'about_us_1',
    title: 'About Us (Overview)',
    path: '/about?tab=overview',
    badge: 'Brand Overview',
    description: 'Clinical mission overview and precision health introduction.'
  },
  {
    id: 'about_us_2',
    folder: 'about_us_2',
    title: 'About Us (Full Story & Bento)',
    path: '/about?tab=story',
    badge: 'Origin & Values',
    description: 'Bento Grid with Precision, Integrity, and Core Clinical Tenets.'
  },
  {
    id: 'our_services',
    folder: 'our_services',
    title: 'Our Services & Pricing',
    path: '/services',
    badge: 'Catalog & Tiers',
    description: '1:1 Consultations, Custom Diet Plans, Meal Delivery & 3 Pricing Tiers.'
  },
  {
    id: 'consultation_booking',
    folder: 'consultation_booking',
    title: 'Consultation Booking',
    path: '/booking',
    badge: 'Scheduling',
    description: 'Interactive specialist selector, calendar date picker, and time slot reservation.'
  },
  {
    id: 'nutritionist_profile',
    folder: 'nutritionist_profile',
    title: 'Nutritionist Profile',
    path: '/nutritionist/dr-sarah-jenkins',
    badge: 'Specialist Bio',
    description: 'Dr. Sarah Jenkins RDN, PhD credentials, rating, and direct booking teaser.'
  },
  {
    id: 'nutritionist_dashboard',
    folder: 'nutritionist_dashboard',
    title: 'Nutritionist Portal',
    path: '/nutritionist-dashboard',
    badge: 'Doctor Portal',
    description: 'Daily appointments schedule, call launch actions, and plan approvals.'
  },
  {
    id: 'admin_dashboard',
    folder: 'admin_dashboard',
    title: 'Admin Management',
    path: '/admin',
    badge: 'Admin & KPIs',
    description: 'Active users KPIs, revenue tracker, audience search table, and audit logs.'
  },
  {
    id: 'user_profile',
    folder: 'user_profile',
    title: 'User Health Profile',
    path: '/profile',
    badge: 'Patient Portal',
    description: 'Metabolic biomarkers (Glucose, HbA1c), dietary preferences, subscriptions.'
  },
  {
    id: 'payment_history',
    folder: 'payment_history',
    title: 'Payment & Billing History',
    path: '/payments',
    badge: 'Billing & Invoices',
    description: 'Payment methods (Visa, Apple Pay), transaction ledger, and receipt download.'
  },
  {
    id: 'checkout',
    folder: 'checkout',
    title: 'Clinical Checkout',
    path: '/checkout',
    badge: 'Secure Checkout',
    description: 'Delivery address, payment options, discount coupon, and order confirmation.'
  },
  {
    id: 'khamis_clinical_nutrition_platform',
    folder: 'khamis_clinical_nutrition_platform',
    title: 'Platform Showcase',
    path: '/platform',
    badge: 'Platform',
    description: 'Clinical nutrition platform architecture overview.'
  },
  {
    id: 'untitled_prototype',
    folder: 'untitled_prototype',
    title: 'Prototype Canvas',
    path: '/prototype',
    badge: 'Prototype',
    description: 'Interactive experimental prototype view with real-time health widgets.'
  },
  {
    id: 'khamis_design',
    folder: 'khamis',
    title: 'Design System Guidelines',
    path: '/design-system',
    badge: 'Design System',
    description: 'Tokens, color palette, typography hierarchy, and spacing rules.'
  }
];

export const AppProvider = ({ children }) => {
  // Toasts
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };
  const removeToast = id => setToasts(prev => prev.filter(t => t.id !== id));

  // User State
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.d@example.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbaTAm5thtDHwgDzoliQ7g9L2IdCk6L1kVakdw6fD7Jd8IdT63bE-BjEMpU4Ja3e6QvgSsSPTOtDtDo8PYODwC33sI98ym3omSPCvQI1AcQSTJ0ihhU9HXldq6GhmcgeWQdAU3xw3yNnrc7pSZddLQ3HR8J0-IlE_9R4G9u4T6FkrQNTpYEvYdViyOPfWbE_cqyQqrFbmHR8E6qJz_puIv-DirwAJSU228WrkMRmPFIZWtZOL2U6NM',
    phone: '+1 (555) 019-2834',
    address: '742 Evergreen Terrace, Suite 104',
    city: 'San Francisco',
    zip: '94107',
    plan: 'Clinical Precision Pro',
    glucose: '92 mg/dL',
    glucoseChange: '-12%',
    hba1c: '5.4%',
    weight: '74.5 kg',
    allergies: ['Gluten Sensitivity', 'Lactose Intolerance'],
    goals: ['Metabolic Optimization', 'Cardiovascular Health'],
    notificationEmail: true,
    notificationSms: false,
    autoRenew: true
  });

  // Selected Plan for Checkout
  const [selectedPlan, setSelectedPlan] = useState({
    id: 'clinical_precision',
    name: 'Clinical Precision Plan',
    cadence: 'Monthly Delivery',
    price: 349,
    discount: 0,
    deliveryFee: 0,
    features: [
      'Daily chef-prepared clinical meals',
      'Bi-weekly 1:1 dietitian review',
      'Continuous metabolic tracking sync',
      'Precision macro/micronutrient formulation'
    ]
  });

  // Booking State
  const [booking, setBooking] = useState({
    type: 'video', // 'video' | 'in-person'
    nutritionistId: 'dr-sarah-jenkins',
    date: '2026-08-20',
    timeSlot: '10:00 AM',
    notes: 'Review metabolic panel results and adjust daily caloric split.'
  });

  // Admin Mock Users
  const [adminUsers, setAdminUsers] = useState([
    { id: '1', name: 'John Doe', email: 'john.d@example.com', initials: 'JD', status: 'Active', plan: 'Weight Loss Pro', joined: '2024-01-15' },
    { id: '2', name: 'Sarah Adams', email: 'sarah.a@example.com', initials: 'SA', status: 'Active', plan: 'Maintenance Base', joined: '2024-02-01' },
    { id: '3', name: 'Michael Chen', email: 'michael.c@example.com', initials: 'MC', status: 'Pending Review', plan: 'Clinical Precision', joined: '2024-03-10' },
    { id: '4', name: 'Elena Rodriguez', email: 'elena.r@example.com', initials: 'ER', status: 'Active', plan: 'Sports Optimization', joined: '2024-03-22' },
    { id: '5', name: 'David Smith', email: 'david.s@example.com', initials: 'DS', status: 'Paused', plan: 'Metabolic Care', joined: '2023-11-18' }
  ]);

  return (
    <AppContext.Provider value={{
      toasts,
      addToast,
      removeToast,
      user,
      setUser,
      selectedPlan,
      setSelectedPlan,
      booking,
      setBooking,
      adminUsers,
      setAdminUsers,
      screensCatalog: SCREENS_CATALOG
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
