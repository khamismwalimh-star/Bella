import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Modal } from '../components/ui/Modal';

export const ConsultationBookingPage = () => {
  const { booking, setBooking, addToast } = useApp();
  const [selectedType, setSelectedType] = useState(booking.type || 'video');
  const [selectedDate, setSelectedDate] = useState(booking.date || '2026-08-20');
  const [selectedSlot, setSelectedSlot] = useState(booking.timeSlot || '10:00 AM');
  const [notes, setNotes] = useState(booking.notes || '');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const timeSlots = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '01:15 PM', available: false },
    { time: '02:00 PM', available: true },
    { time: '03:30 PM', available: true },
    { time: '04:45 PM', available: true }
  ];

  const handleConfirm = () => {
    setBooking({
      type: selectedType,
      nutritionistId: 'dr-sarah-jenkins',
      date: selectedDate,
      timeSlot: selectedSlot,
      notes
    });
    setIsModalOpen(true);
  };

  return (
    <main className="flex-grow max-w-[1440px] mx-auto w-full px-4 md:px-container-margin py-xl flex flex-col gap-xl">
      {/* Header Section */}
      <header className="flex flex-col gap-base border-b border-outline-variant pb-lg">
        <div className="flex items-center gap-2">
          <span className="font-label-sm uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded">
            📁 Subfolder: consultation_booking
          </span>
          <span className="text-[11px] font-semibold text-primary">Telehealth & Clinical Office</span>
        </div>
        <h1 className="font-display-xl text-3xl md:text-5xl lg:text-display-xl text-primary font-bold">
          Book a Clinical Consultation
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
          Book a private consultation with our clinical specialists. Expert guidance tailored to your specific physiological data, biomarkers, and metabolic goals.
        </p>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Booking Flow (Left Column) */}
        <div className="lg:col-span-7 flex flex-col gap-lg">
          {/* Consultation Type */}
          <section className="border border-outline-variant rounded-lg p-md bg-surface flex flex-col gap-md">
            <h2 className="font-headline-md text-xl md:text-headline-md text-primary font-semibold">
              1. Consultation Type
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
              {/* Video Call */}
              <div
                onClick={() => setSelectedType('video')}
                className={`border-2 rounded p-md flex flex-col gap-sm cursor-pointer relative transition-all ${
                  selectedType === 'video'
                    ? 'border-primary bg-surface-container-low shadow-sm'
                    : 'border-outline-variant hover:border-outline'
                }`}
              >
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  videocam
                </span>
                <div>
                  <h3 className="font-body-lg text-body-lg font-semibold text-primary">Video Call (Telehealth)</h3>
                  <p className="font-body-md text-secondary text-sm">Face-to-face encrypted clinical review.</p>
                </div>
                {selectedType === 'video' && (
                  <div className="absolute top-md right-md bg-primary text-on-primary rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                )}
              </div>

              {/* In-Clinic Visit */}
              <div
                onClick={() => setSelectedType('clinic')}
                className={`border-2 rounded p-md flex flex-col gap-sm cursor-pointer relative transition-all ${
                  selectedType === 'clinic'
                    ? 'border-primary bg-surface-container-low shadow-sm'
                    : 'border-outline-variant hover:border-outline'
                }`}
              >
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_hospital
                </span>
                <div>
                  <h3 className="font-body-lg text-body-lg font-semibold text-primary">In-Clinic Assessment</h3>
                  <p className="font-body-md text-secondary text-sm">Full body composition & direct review.</p>
                </div>
                {selectedType === 'clinic' && (
                  <div className="absolute top-md right-md bg-primary text-on-primary rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Date & Time Slot Selection */}
          <section className="border border-outline-variant rounded-lg p-md bg-surface flex flex-col gap-md">
            <h2 className="font-headline-md text-xl md:text-headline-md text-primary font-semibold">
              2. Select Date & Time
            </h2>
            
            <div>
              <label className="font-label-sm uppercase tracking-wider text-secondary block mb-2">
                Consultation Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full sm:w-64 border border-outline-variant rounded p-2.5 bg-surface font-body-md text-on-surface focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="font-label-sm uppercase tracking-wider text-secondary block mb-2">
                Available Time Slots (45-Minute Window)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    disabled={!slot.available}
                    onClick={() => setSelectedSlot(slot.time)}
                    className={`py-2.5 px-3 rounded text-center text-sm font-semibold border transition-all ${
                      !slot.available
                        ? 'opacity-40 cursor-not-allowed border-outline-variant bg-surface-container line-through text-secondary'
                        : selectedSlot === slot.time
                        ? 'border-primary bg-primary text-on-primary font-bold'
                        : 'border-outline-variant bg-surface text-on-surface hover:border-primary'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Medical Notes */}
          <section className="border border-outline-variant rounded-lg p-md bg-surface flex flex-col gap-md">
            <h2 className="font-headline-md text-xl md:text-headline-md text-primary font-semibold">
              3. Clinical Notes & Objectives
            </h2>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe your health metrics, current dietary habits, or blood work results to discuss..."
              className="w-full border border-outline-variant rounded p-3 bg-surface font-body-md text-on-surface focus:outline-none focus:border-primary"
            />
          </section>
        </div>

        {/* Right Column: Specialist Summary & Booking Confirm */}
        <div className="lg:col-span-5 flex flex-col gap-md">
          {/* Specialist Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col gap-md">
            <div className="flex items-center gap-md pb-md border-b border-outline-variant">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-outline-variant flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-X5X7z4p_oZVRelpeeeDwCgLnUBONnZ2-wE54s7YTGgYGppLMOHIihcl4RFPo7ABC1iNVo3WS8a2Noh3qyKCwsaBlReUBVnwZ-eDf-RN6k5yQgwR78fO9TsrQ3GGBkmh96sWrMNAfMucwF_3SJmmqwWLyVU2lpo_-QRwS0KM4bbNfeHvocYUl_X8xhEEYVniIpU3uHlQzslSwt3FY2z-S4qYGRmqxI107kdcBsbCZV8_VnmLc3mQc"
                  alt="Dr. Sarah Jenkins"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h3 className="font-headline-md text-lg font-bold text-primary">Dr. Sarah Jenkins</h3>
                  <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                </div>
                <p className="text-secondary text-xs">RDN, PhD Clinical Nutrition • Stanford</p>
                <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-primary">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span>4.9 / 5.0 (124 Verified Patient Reviews)</span>
                </div>
              </div>
            </div>

            {/* Booking Details Breakdown */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-secondary">
                <span>Session Type:</span>
                <span className="font-semibold text-on-surface uppercase">
                  {selectedType === 'video' ? 'Encrypted Video Telehealth' : 'In-Clinic Assessment'}
                </span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Date & Time:</span>
                <span className="font-semibold text-on-surface">{selectedDate} @ {selectedSlot}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Duration:</span>
                <span className="font-semibold text-on-surface">45 Minutes</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Clinical Standard:</span>
                <span className="font-semibold text-primary">HIPAA Protected</span>
              </div>
              <div className="pt-3 border-t border-outline-variant flex justify-between items-baseline">
                <span className="font-bold text-on-surface">Total Consultation Fee:</span>
                <span className="font-headline-md text-2xl font-bold text-primary">$120.00</span>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full bg-primary text-on-primary py-3.5 rounded font-label-sm uppercase font-bold tracking-wider hover:bg-primary-container transition-colors"
            >
              Confirm Appointment
            </button>

            <Link
              to="/nutritionist/dr-sarah-jenkins"
              className="text-center text-xs text-secondary hover:text-primary hover:underline"
            >
              View Full Clinical Bio & Research Credentials →
            </Link>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Consultation Confirmed"
      >
        <div className="flex flex-col items-center text-center gap-4 py-2">
          <div className="w-14 h-14 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
          </div>
          <div>
            <h4 className="font-headline-md text-xl font-bold text-primary">
              Session Booked with Dr. Sarah Jenkins
            </h4>
            <p className="text-sm text-secondary mt-1">
              Your appointment is set for <strong>{selectedDate}</strong> at <strong>{selectedSlot}</strong>.
            </p>
          </div>
          <div className="p-3 bg-surface-container rounded text-left text-xs w-full space-y-1">
            <p><strong>Appointment Mode:</strong> {selectedType === 'video' ? 'Secure Telehealth Link (sent via email)' : 'Main Clinic Center, Suite 400'}</p>
            <p><strong>Notes:</strong> {notes || 'No special medical notes provided.'}</p>
          </div>
          <div className="flex gap-2 w-full pt-2">
            <button
              onClick={() => {
                setIsModalOpen(false);
                addToast('Appointment added to your health portal calendar!');
                navigate('/nutritionist-dashboard');
              }}
              className="flex-1 bg-primary text-on-primary py-2.5 rounded font-label-sm uppercase font-bold"
            >
              View in Doctor Portal
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 border border-outline-variant rounded font-label-sm uppercase"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};
