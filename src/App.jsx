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
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* Authentication: Log In / Sign In & Sign Up / Registration */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signin" element={<LoginPage />} />
              <Route path="/sign-in" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/sign-up" element={<SignupPage />} />
              <Route path="/register" element={<SignupPage />} />
              <Route path="/auth" element={<AuthPage />} />

              {/* Patient Profile & Sign Out Portal */}
              <Route path="/profile" element={<UserProfilePage />} />
              <Route path="/patient-portal" element={<UserProfilePage />} />
              <Route path="/signout" element={<UserProfilePage />} />
              <Route path="/sign-out" element={<UserProfilePage />} />
              <Route path="/logout" element={<UserProfilePage />} />

              {/* Core Clinical Pages */}
              <Route path="/services" element={<OurServicesPage />} />
              <Route path="/our-services" element={<OurServicesPage />} />
              <Route path="/booking" element={<ConsultationBookingPage />} />
              <Route path="/nutritionists" element={<ConsultationBookingPage />} />
              <Route path="/nutritionist/:id" element={<NutritionistProfilePage />} />
              <Route path="/payments" element={<PaymentHistoryPage />} />
              <Route path="/billing" element={<PaymentHistoryPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/platform" element={<PlatformOverviewPage />} />
              <Route path="/prototype" element={<PlatformOverviewPage />} />
              <Route path="/design-system" element={<DesignSystemPage />} />

              {/* Admin & Legacy Route Redirects */}
              <Route path="/admin" element={<Navigate to="/profile" replace />} />
              <Route path="/nutritionist-dashboard" element={<Navigate to="/profile" replace />} />
              <Route path="/dashboard" element={<Navigate to="/profile" replace />} />
              <Route path="/plans" element={<Navigate to="/services" replace />} />
              <Route path="/plan" element={<Navigate to="/services" replace />} />
              <Route path="/pricing" element={<Navigate to="/services" replace />} />
              <Route path="/checkout" element={<Navigate to="/signup" replace />} />

              {/* Fallback */}
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
