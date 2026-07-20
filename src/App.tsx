/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortalDashboard from './components/PortalDashboard';
import FieldsSection from './components/FieldsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PolicyModal from './components/PolicyModal';

export default function App() {
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'academic' | null>(null);

  const handleOpenPolicy = (type: 'privacy' | 'terms' | 'academic') => {
    setActivePolicy(type);
  };

  const handleClosePolicy = () => {
    setActivePolicy(null);
  };

  return (
    <div className="relative min-h-screen bg-white text-google-dark overflow-x-hidden selection:bg-google-blue-light selection:text-google-blue" id="vidyate-one-root">
      
      {/* Background radial accent patterns - Google colors */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" id="ambient-patterns">
        <div className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-google-blue-light/40 blur-[100px]" />
        <div className="absolute top-[35%] left-[-150px] h-[500px] w-[500px] rounded-full bg-google-red-light/30 blur-[90px]" />
        <div className="absolute top-[60%] right-[-150px] h-[600px] w-[600px] rounded-full bg-google-yellow-light/30 blur-[110px]" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-google-green-light/40 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen" id="app-wrapper">
        {/* Navigation Bar */}
        <Navbar onOpenPolicy={handleOpenPolicy} />

        {/* Main Content Layout */}
        <main className="flex-grow" id="app-main-content">
          {/* Hero Section */}
          <Hero />

          {/* Core Portal Dashboard Section */}
          <PortalDashboard />

          {/* Fields We Work In Section */}
          <FieldsSection />

          {/* About Vidyate Group */}
          <AboutSection />

          {/* Contact Inquiry Section */}
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer onOpenPolicy={handleOpenPolicy} />

        {/* Dynamic Policy Modal */}
        <PolicyModal
          isOpen={activePolicy !== null}
          onClose={handleClosePolicy}
          type={activePolicy || 'privacy'}
        />
      </div>
    </div>
  );
}
