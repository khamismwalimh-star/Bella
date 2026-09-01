import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScreenSwitcher } from './components/common/ScreenSwitcher';
import { ToastContainer } from './components/common/ToastContainer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { OurServicesPage } from './pages/OurServicesPage';
import { ConsultationBookingPage } from './pages/ConsultationBookingPage';
import { NutritionistProfilePage } from './pages/NutritionistProfilePage';
import { NutritionistDashboardPage } from './pages/NutritionistDashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { PaymentHistoryPage } from './pages/PaymentHistoryPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { PlatformOverviewPage } from './pages/PlatformOverviewPage';
import { DesignSystemPage } from './pages/DesignSystemPage';

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
          <ScreenSwitcher />
          <div className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/services" element={<OurServicesPage />} />
              <Route path="/booking" element={<ConsultationBookingPage />} />
              <Route path="/nutritionist/:id" element={<NutritionistProfilePage />} />
              <Route path="/nutritionist-dashboard" element={<NutritionistDashboardPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
              <Route path="/payments" element={<PaymentHistoryPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/platform" element={<PlatformOverviewPage />} />
              <Route path="/prototype" element={<PlatformOverviewPage />} />
              <Route path="/design-system" element={<DesignSystemPage />} />
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
