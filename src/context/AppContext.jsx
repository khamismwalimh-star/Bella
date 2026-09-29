import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const DEFAULT_USER = {
  id: 'usr_01',
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
  role: 'patient', // 'patient' | 'nutritionist'
  allergies: ['Gluten Sensitivity', 'Lactose Intolerance'],
  goals: ['Metabolic Optimization', 'Cardiovascular Health'],
  notificationEmail: true,
  notificationSms: false,
  autoRenew: true
};

const DOCTOR_USER = {
  id: 'usr_doc_01',
  name: 'Dr. Sarah Jenkins',
  email: 'dr.sarah@khamis.health',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-X5X7z4p_oZVRelpeeeDwCgLnUBONnZ2-wE54s7YTGgYGppLMOHIihcl4RFPo7ABC1iNVo3WS8a2Noh3qyKCwsaBlReUBVnwZ-eDf-RN6k5yQgwR78fO9TsrQ3GGBkmh96sWrMNAfMucwF_3SJmmqwWLyVU2lpo_-QRwS0KM4bbNfeHvocYUl_X8xhEEYVniIpU3uHlQzslSwt3FY2z-S4qYGRmqxI107kdcBsbCZV8_VnmLc3mQc',
  phone: '+1 (555) 432-8765',
  address: '450 Sutter St, Floor 8',
  city: 'San Francisco',
  zip: '94108',
  plan: 'Staff Specialist Access',
  glucose: '88 mg/dL',
  glucoseChange: '-15%',
  hba1c: '5.1%',
  weight: '62.0 kg',
  role: 'nutritionist',
  allergies: ['None'],
  goals: ['Clinical Oversight', 'Biomarker Telemetry'],
  notificationEmail: true,
  notificationSms: true,
  autoRenew: true
};

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

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = localStorage.getItem('khamis_auth');
    return savedAuth !== null ? JSON.parse(savedAuth) : true;
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('khamis_user');
    return savedUser !== null ? JSON.parse(savedUser) : DEFAULT_USER;
  });

  useEffect(() => {
    localStorage.setItem('khamis_auth', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('khamis_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('khamis_user');
    }
  }, [user]);

  // Auth Functions
  const login = (email, password, demoRole = null) => {
    let loggedUser = DEFAULT_USER;
    if (demoRole === 'nutritionist' || email?.toLowerCase().includes('sarah') || email?.toLowerCase().includes('doctor')) {
      loggedUser = DOCTOR_USER;
    } else if (email) {
      loggedUser = {
        ...DEFAULT_USER,
        email: email,
        name: email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase())
      };
    }
    setUser(loggedUser);
    setIsAuthenticated(true);
    addToast(`Welcome back, ${loggedUser.name}!`);
    return loggedUser;
  };

  const signup = (signupData) => {
    const newUser = {
      ...DEFAULT_USER,
      id: `usr_${Date.now()}`,
      name: signupData.name || 'New Patient',
      email: signupData.email || 'patient@example.com',
      phone: signupData.phone || '+1 (555) 000-0000',
      goals: signupData.goals && signupData.goals.length > 0 ? signupData.goals : ['Metabolic Optimization'],
      allergies: signupData.allergies && signupData.allergies.length > 0 ? signupData.allergies : ['None reported'],
      plan: signupData.plan || 'Clinical Precision Pro',
      role: 'patient'
    };
    setUser(newUser);
    setIsAuthenticated(true);
    addToast(`Account created successfully! Welcome to Khamis, ${newUser.name}.`);
    return newUser;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('khamis_auth');
    localStorage.removeItem('khamis_user');
    addToast('You have been logged out securely.', 'info');
  };

  const forgotPassword = (email) => {
    addToast(`Password reset link sent to ${email || 'your email'}. Check your inbox!`, 'success');
  };

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

  return (
    <AppContext.Provider value={{
      toasts,
      addToast,
      removeToast,
      user,
      setUser,
      isAuthenticated,
      login,
      signup,
      logout,
      forgotPassword,
      selectedPlan,
      setSelectedPlan,
      booking,
      setBooking
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
