import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Modal } from '../components/ui/Modal';

export const CheckoutPage = () => {
  const { user, selectedPlan, addToast } = useApp();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [addressForm, setAddressForm] = useState({
    firstName: user.name.split(' ')[0] || 'John',
    lastName: user.name.split(' ')[1] || 'Doe',
    address: user.address || '742 Evergreen Terrace, Suite 104',
    city: user.city || 'San Francisco',
    zip: user.zip || '94107',
    phone: user.phone || '+1 (555) 019-2834'
  });

  const [cardForm, setCardForm] = useState({
    number: '4242 •••• •••• 4242',
    expiry: '09/28',
    cvc: '883'
  });

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccessModal, setOrderSuccessModal] = useState(false);

  const subtotal = selectedPlan.price || 349;
  const total = subtotal - discount;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'CLINICAL10' || promoCode.trim().toUpperCase() === 'KHAMIS') {
      setDiscount(35);
      addToast('Promo code applied: $35.00 discount!');
    } else if (promoCode.trim().length > 0) {
      addToast('Invalid or expired promo code. Try "CLINICAL10"', 'warning');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccessModal(true);
    }, 1200);
  };

  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-container-margin py-xl flex flex-col gap-xl">
      {/* Subfolder Identifier */}
      <div className="flex items-center gap-2">
        <span className="font-label-sm uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded">
          📁 Subfolder: checkout
        </span>
        <span className="text-[11px] font-semibold text-primary">High-Security Clinical Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Left Column: Forms */}
        <div className="lg:col-span-7 flex flex-col gap-lg">
          <h1 className="font-headline-lg text-2xl md:text-headline-lg font-bold text-on-surface">
            Secure Checkout
          </h1>

          {/* Delivery Address Form */}
          <section className="bg-surface-container-lowest p-md md:p-lg rounded-xl border border-outline-variant shadow-sm">
            <h2 className="font-headline-md text-lg font-bold mb-md flex items-center text-primary">
              <span className="material-symbols-outlined mr-sm text-primary">local_shipping</span>
              1. Delivery Address
            </h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div>
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase block">First Name</label>
                <input
                  type="text"
                  value={addressForm.firstName}
                  onChange={e => setAddressForm({ ...addressForm, firstName: e.target.value })}
                  className="border border-outline-variant rounded p-2.5 bg-surface font-body-md text-sm text-on-surface w-full focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase block">Last Name</label>
                <input
                  type="text"
                  value={addressForm.lastName}
                  onChange={e => setAddressForm({ ...addressForm, lastName: e.target.value })}
                  className="border border-outline-variant rounded p-2.5 bg-surface font-body-md text-sm text-on-surface w-full focus:outline-none focus:border-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase block">Street Address</label>
                <input
                  type="text"
                  value={addressForm.address}
                  onChange={e => setAddressForm({ ...addressForm, address: e.target.value })}
                  className="border border-outline-variant rounded p-2.5 bg-surface font-body-md text-sm text-on-surface w-full focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase block">City</label>
                <input
                  type="text"
                  value={addressForm.city}
                  onChange={e => setAddressForm({ ...addressForm, city: e.target.value })}
                  className="border border-outline-variant rounded p-2.5 bg-surface font-body-md text-sm text-on-surface w-full focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase block">ZIP / Postal Code</label>
                <input
                  type="text"
                  value={addressForm.zip}
                  onChange={e => setAddressForm({ ...addressForm, zip: e.target.value })}
                  className="border border-outline-variant rounded p-2.5 bg-surface font-body-md text-sm text-on-surface w-full focus:outline-none focus:border-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase block">Phone Number (For Delivery Driver)</label>
                <input
                  type="tel"
                  value={addressForm.phone}
                  onChange={e => setAddressForm({ ...addressForm, phone: e.target.value })}
                  className="border border-outline-variant rounded p-2.5 bg-surface font-body-md text-sm text-on-surface w-full focus:outline-none focus:border-primary"
                />
              </div>
            </form>
          </section>

          {/* Payment Method */}
          <section className="bg-surface-container-lowest p-md md:p-lg rounded-xl border border-outline-variant shadow-sm">
            <h2 className="font-headline-md text-lg font-bold mb-md flex items-center text-primary">
              <span className="material-symbols-outlined mr-sm text-primary">payment</span>
              2. Payment Method
            </h2>

            <div className="flex flex-col gap-sm">
              {/* Credit Card Option */}
              <label className={`flex items-start p-md border rounded-lg cursor-pointer transition-all ${
                paymentMethod === 'card' ? 'border-primary bg-surface-container-low' : 'border-outline-variant hover:border-outline'
              }`}>
                <div className="flex items-center h-5 mt-1">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="w-4 h-4 text-primary"
                  />
                </div>
                <div className="ml-sm flex-1">
                  <span className="font-body-md text-sm font-bold block text-primary">Credit or Debit Card</span>
                  <div className="mt-md grid grid-cols-2 gap-sm w-full">
                    <div className="flex flex-col col-span-2">
                      <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={cardForm.number}
                          onChange={e => setCardForm({ ...cardForm, number: e.target.value })}
                          className="w-full border border-outline-variant rounded p-2.5 bg-surface font-body-md text-sm text-on-surface pl-10 focus:outline-none focus:border-primary"
                        />
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                          credit_card
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase">Expiry Date</label>
                      <input
                        type="text"
                        value={cardForm.expiry}
                        onChange={e => setCardForm({ ...cardForm, expiry: e.target.value })}
                        className="border border-outline-variant rounded p-2.5 bg-surface font-body-md text-sm text-on-surface focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-label-sm text-xs text-on-surface-variant mb-1 uppercase">CVC Code</label>
                      <input
                        type="text"
                        value={cardForm.cvc}
                        onChange={e => setCardForm({ ...cardForm, cvc: e.target.value })}
                        className="border border-outline-variant rounded p-2.5 bg-surface font-body-md text-sm text-on-surface focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              </label>

              {/* Apple Pay Option */}
              <label className={`flex items-center p-md border rounded-lg cursor-pointer transition-all ${
                paymentMethod === 'apple_pay' ? 'border-primary bg-surface-container-low' : 'border-outline-variant hover:border-outline'
              }`}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'apple_pay'}
                  onChange={() => setPaymentMethod('apple_pay')}
                  className="w-4 h-4 text-primary"
                />
                <span className="ml-sm font-body-md text-sm font-semibold flex items-center gap-2">
                  <span>Apple Pay (Instant Checkout)</span>
                </span>
              </label>

              {/* HSA / FSA Card Option */}
              <label className={`flex items-center p-md border rounded-lg cursor-pointer transition-all ${
                paymentMethod === 'hsa' ? 'border-primary bg-surface-container-low' : 'border-outline-variant hover:border-outline'
              }`}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'hsa'}
                  onChange={() => setPaymentMethod('hsa')}
                  className="w-4 h-4 text-primary"
                />
                <span className="ml-sm font-body-md text-sm font-semibold">
                  Health Savings Account (HSA / FSA Card)
                </span>
              </label>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 flex flex-col gap-md">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md md:p-lg shadow-sm sticky top-24">
            <h2 className="font-headline-md text-xl font-bold text-primary mb-md pb-sm border-b border-outline-variant">
              Order Summary
            </h2>

            {/* Selected Plan Details */}
            <div className="p-3 bg-surface-container-low rounded border border-outline-variant mb-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[15px] text-primary">{selectedPlan.name}</h3>
                  <p className="text-xs text-secondary">{selectedPlan.cadence}</p>
                </div>
                <span className="font-bold text-on-surface">${subtotal}</span>
              </div>
              <ul className="mt-2 text-xs text-secondary space-y-1">
                {selectedPlan.features?.slice(0, 2).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-1">
                    <span className="text-primary">✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Promo Code Input */}
            <div className="flex gap-2 mb-md">
              <input
                type="text"
                placeholder="Promo Code (e.g. CLINICAL10)"
                value={promoCode}
                onChange={e => setPromoCode(e.target.value)}
                className="flex-1 border border-outline-variant rounded p-2 text-xs bg-surface font-mono uppercase focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="px-3 bg-surface-container border border-outline-variant text-primary rounded text-xs font-bold hover:bg-surface-container-high"
              >
                Apply
              </button>
            </div>

            {/* Breakdown */}
            <div className="space-y-2 text-sm pb-md border-b border-outline-variant text-secondary">
              <div className="flex justify-between">
                <span>Clinical Meal Plan:</span>
                <span className="text-on-surface font-medium">${subtotal}.00</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-primary font-bold">
                  <span>Promotional Discount:</span>
                  <span>-${discount}.00</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Insulated Cold-Chain Delivery:</span>
                <span className="text-primary font-bold">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Dietitian Review & Sync:</span>
                <span className="text-primary font-bold">Included</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline py-md">
              <span className="font-headline-md text-lg font-bold text-on-surface">Total Due Today:</span>
              <span className="font-headline-md text-3xl font-bold text-primary">${total}.00</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className="w-full bg-primary text-on-primary py-4 rounded font-label-sm uppercase font-bold tracking-wider hover:bg-primary-container transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                  <span>Processing Encrypted Payment...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">lock</span>
                  <span>Complete Order (${total}.00)</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-secondary text-center mt-3">
              🔒 256-Bit SSL Encrypted. Cancel or pause anytime before delivery window.
            </p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={orderSuccessModal}
        onClose={() => setOrderSuccessModal(false)}
        title="Order & Subscription Confirmed"
      >
        <div className="flex flex-col items-center text-center gap-4 py-2">
          <div className="w-16 h-16 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
          </div>
          <div>
            <h4 className="font-headline-md text-xl font-bold text-primary">
              Welcome to Khamis Precision Health
            </h4>
            <p className="text-sm text-secondary mt-1">
              Your subscription for <strong>{selectedPlan.name}</strong> is now active.
            </p>
          </div>
          <div className="p-3 bg-surface-container rounded text-left text-xs w-full space-y-1">
            <p><strong>First Delivery Scheduled:</strong> Friday at 7:00 AM</p>
            <p><strong>Delivery Address:</strong> {addressForm.address}, {addressForm.city} {addressForm.zip}</p>
            <p><strong>Dietitian Review:</strong> Dr. Sarah Jenkins has received your biomarker file.</p>
          </div>
          <div className="flex gap-2 w-full pt-2">
            <button
              onClick={() => {
                setOrderSuccessModal(false);
                addToast('Welcome! Check your patient portal for telemetry and delivery tracking.');
                navigate('/profile');
              }}
              className="flex-1 bg-primary text-on-primary py-2.5 rounded font-label-sm uppercase font-bold"
            >
              Go to Patient Portal
            </button>
            <button
              onClick={() => {
                setOrderSuccessModal(false);
                navigate('/payments');
              }}
              className="px-4 border border-outline-variant rounded font-label-sm uppercase"
            >
              View Invoices
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};
