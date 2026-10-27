/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Booking } from './components/Booking';
import { AffiliatesAndPolicies } from './components/AffiliatesAndPolicies';
import { Footer } from './components/Footer';
import { BookingSettingsModal } from './components/BookingSettingsModal';
import { INITIAL_SERVICES, PORTFOLIO_ITEMS, STUDIO_INFO } from './data/studioData';
import { ServiceItem } from './types';

export default function App() {
  const [bookingUrl, setBookingUrl] = useState<string>(() => {
    return localStorage.getItem('annalia_booking_url') || STUDIO_INFO.defaultBookingUrl;
  });

  const [services] = useState<ServiceItem[]>(INITIAL_SERVICES);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('gel-x-full-set');
  const [preselectedStyleName, setPreselectedStyleName] = useState<string>('');
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);

  const handleSaveBookingUrl = (newUrl: string) => {
    setBookingUrl(newUrl);
    localStorage.setItem('annalia_booking_url', newUrl);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    scrollToSection('booking');
  };

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  const handleSelectService = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    scrollToSection('booking');
  };

  const handleRequestStyle = (styleName: string) => {
    setPreselectedStyleName(styleName);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#27201C] font-sans flex flex-col selection:bg-[#E8DCD4]">
      {/* 3-Zone Top Navigation */}
      <Navbar onBookClick={handleBookClick} bookingUrl={bookingUrl} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Services & Pricing */}
        <Services
          services={services}
          onSelectService={handleSelectService}
        />

        {/* 3. Portfolio & Lookbook */}
        <Portfolio
          items={PORTFOLIO_ITEMS}
          onRequestStyle={handleRequestStyle}
        />

        {/* 4. About & Philosophy */}
        <About />

        {/* 5. Booking Inquiry & Portal */}
        <Booking
          services={services}
          preselectedServiceId={preselectedServiceId}
          preselectedStyleName={preselectedStyleName}
          bookingUrl={bookingUrl}
          onOpenSettings={() => setIsSettingsModalOpen(true)}
        />

        {/* 6. Studio Policies, Brand Affiliates & Contact */}
        <AffiliatesAndPolicies />
      </main>

      {/* 7. Elegant Footer */}
      <Footer />

      {/* Destination Booking URL Settings Modal */}
      <BookingSettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        currentUrl={bookingUrl}
        onSaveUrl={handleSaveBookingUrl}
      />
    </div>
  );
}
