import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/common/ToastContainer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { OurServicesPage } from './pages/OurServicesPage';
import { ConsultationBookingPage } from './pages/ConsultationBookingPage';
import { NutritionistProfilePage } from './pages/NutritionistProfilePage';
import { NutritionistDashboardPage } from './pages/NutritionistDashboardPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { PaymentHistoryPage } from './pages/PaymentHistoryPage';
import { PlatformOverviewPage } from './pages/PlatformOverviewPage';
import { DesignSystemPage } from './pages/DesignSystemPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { AuthPage } from './pages/AuthPage';

function ScrollToTop() {
  const { pathname, search } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-surface text-on-surface">
          <Navbar />
          <ToastContainer />
          <div className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/services" element={<OurServicesPage />} />
              <Route path="/booking" element={<ConsultationBookingPage />} />
              <Route path="/nutritionist/:id" element={<NutritionistProfilePage />} />
              <Route path="/nutritionist-dashboard" element={<NutritionistDashboardPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
              <Route path="/payments" element={<PaymentHistoryPage />} />
              <Route path="/platform" element={<PlatformOverviewPage />} />
              <Route path="/prototype" element={<PlatformOverviewPage />} />
              <Route path="/design-system" element={<DesignSystemPage />} />
              {/* Redirect legacy routes */}
              <Route path="/checkout" element={<Navigate to="/signup" replace />} />
              <Route path="/admin" element={<Navigate to="/login" replace />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
