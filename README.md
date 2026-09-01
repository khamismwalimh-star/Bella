# Khamis - Clinical Nutrition React Application

A modular, high-performance React application converted from the 14 subfolders of **`stitch_khamis_diet_delivery_ui_kit`**, adhering to the **Clinical-Premium Minimalism** design system.

---

## 📁 Subfolder to React Mapping

Every single subfolder from the original UI Kit has been converted into React:

| # | UI Kit Subfolder | Converted React Route & Component | Description |
|---|---|---|---|
| 1 | `home_page` | `/` → [`src/pages/HomePage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/HomePage.jsx) | Clinical nutrition hero, trust badge (-12% Fasting Glucose), and core conversion CTAs. |
| 2 | `about_us_1` | `/about?tab=overview` → [`src/pages/AboutUsPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/AboutUsPage.jsx) | Clinical standards overview and patient outcome metrics. |
| 3 | `about_us_2` | `/about?tab=story` → [`src/pages/AboutUsPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/AboutUsPage.jsx) | Origin story, Bento Grid with Precision & Integrity values, and Core Tenets. |
| 4 | `our_services` | `/services` → [`src/pages/OurServicesPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/OurServicesPage.jsx) | 1:1 Consultations, Custom Diet Plans, Meal Delivery, and 3-Tier Interactive Pricing Calculator. |
| 5 | `consultation_booking` | `/booking` → [`src/pages/ConsultationBookingPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/ConsultationBookingPage.jsx) | Interactive consultation mode selector (Video vs Clinic), Date picker, Time slots, and Confirmation modal. |
| 6 | `nutritionist_profile` | `/nutritionist/dr-sarah-jenkins` → [`src/pages/NutritionistProfilePage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/NutritionistProfilePage.jsx) | Dr. Sarah Jenkins RDN, PhD credentials, rating, specialties, and direct booking widget. |
| 7 | `nutritionist_dashboard` | `/nutritionist-dashboard` → [`src/pages/NutritionistDashboardPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/NutritionistDashboardPage.jsx) | Doctor portal, appointment schedule, live call launch modal, and meal plan approvals queue. |
| 8 | `admin_dashboard` | `/admin` → [`src/pages/AdminDashboardPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/AdminDashboardPage.jsx) | Executive KPIs (Active Users, Monthly Revenue, Retention), searchable audience table, and report exporter. |
| 9 | `user_profile` | `/profile` → [`src/pages/UserProfilePage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/UserProfilePage.jsx) | Patient portal with live biomarker metrics (Fasting Glucose, HbA1c), allergies, goals, and subscription editor. |
| 10 | `payment_history` | `/payments` → [`src/pages/PaymentHistoryPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/PaymentHistoryPage.jsx) | Payment methods manager (Visa, Apple Pay), transaction history table, and PDF invoice downloader. |
| 11 | `checkout` | `/checkout` → [`src/pages/CheckoutPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/CheckoutPage.jsx) | Secure checkout with delivery address form, payment method selector, discount promo code (`CLINICAL10`), and order modal. |
| 12 | `khamis_clinical_nutrition_platform` | `/platform` → [`src/pages/PlatformOverviewPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/PlatformOverviewPage.jsx) | Architectural showcase of the closed-loop biomarker ingestion and cold-chain meal prep pipeline. |
| 13 | `untitled_prototype` | `/prototype` → [`src/pages/PlatformOverviewPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/PlatformOverviewPage.jsx) | Prototype canvas with real-time biometric and kitchen dispatch telemetry. |
| 14 | `khamis` | `/design-system` → [`src/pages/DesignSystemPage.jsx`](file:///c:/Users/FJ/OneDrive/Desktop/Ai2/khamis-react-app/src/pages/DesignSystemPage.jsx) | Live visual interactive explorer for design tokens, color palette, and Inter typography scale. |

---

## 🚀 Running the Project

Inside the `khamis-react-app` directory:

```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Build production bundle
npm run build
```

---

## 🎨 Design System

- **Primary Color:** Deep Forest Green (`#003527`)
- **Accent & Mint Fixed:** `#b0f0d6` / `#95d3ba`
- **Base Surface:** Clean Off-White (`#f9f9ff`)
- **Typography:** `Inter` (Display-XL 72px, Headline-LG 48px, Headline-MD 30px, Body-MD 16px, Label-SM 12px)
- **Spatial Grid:** 8pt scale (4px, 8px, 12px, 24px, 48px, 80px, 120px)
