import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, GraduationCap, Building2, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const scrollToPortals = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#portals');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToFields = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#fields');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 150 } }
  };

  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-5 md:pb-24 lg:pt-48 lg:pb-32 bg-white" id="hero-section">
      {/* Soft background accents with Google's iconic four colors */}
      <div className="absolute top-[5%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-google-blue-light/30 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[5%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-google-green-light/20 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" id="hero-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
          id="hero-content"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-28 inline-flex items-center gap-2.5 rounded-full border border-google-border bg-white px-4 py-1.5 text-xs font-semibold text-google-dark mb-6 shadow-xs"
            id="hero-badge"
          >
            {/* Google colored dots row */}
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-google-blue animate-pulse" />
              <span className="h-2 w-2 rounded-full bg-google-red" />
              <span className="h-2 w-2 rounded-full bg-google-yellow" />
              <span className="h-2 w-2 rounded-full bg-google-green" />
            </div>
            <span className="text-google-gray font-medium">Vidyate One Ecosystem</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-google-dark leading-[1.15] mb-6"
            id="hero-title"
          >
            Get Started with {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-red to-google-green">
              Vidyate One
            </span>
          </motion.h1>

          

          {/* CTA Buttons - Full Rounded Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            id="hero-cta-group"
          >
            <button
              onClick={scrollToPortals}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-google-blue px-8 py-3.5 text-sm font-semibold text-white hover:bg-google-blue-hover transition-all hover:shadow-md"
              id="hero-primary-btn"
            >
              See active portals
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToFields}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white border border-google-border px-8 py-3.5 text-sm font-semibold text-google-blue hover:bg-google-blue-light transition-colors"
              id="hero-secondary-btn"
            >
              Explore learning fields
            </button>
          </motion.div>

          {/* Real-time stats grid (Refined Google One layout style) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 rounded-2xl border border-google-border bg-white p-6 md:p-8 shadow-xs"
            id="hero-stats-grid"
          >
            <div className="text-center" id="stat-student">
              <div className="flex justify-center mb-3" id="stat-student-icon-container">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-google-blue-light text-google-blue">
                  <GraduationCap className="h-5.5 w-5.5" />
                </div>
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-google-dark" id="stat-student-count">12,400+</div>
              <div className="text-xs text-google-gray font-medium mt-1" id="stat-student-label">Connected Learners</div>
            </div>

            <div className="text-center" id="stat-hubs">
              <div className="flex justify-center mb-3" id="stat-hubs-icon-container">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-google-red-light text-google-red">
                  <BookOpen className="h-5.5 w-5.5" />
                </div>
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-google-dark" id="stat-hubs-count">5+</div>
              <div className="text-xs text-google-gray font-medium mt-1" id="stat-hubs-label">Active Learning Hubs</div>
            </div>

            <div className="text-center" id="stat-fields">
              <div className="flex justify-center mb-3" id="stat-fields-icon-container">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-google-yellow-light text-google-yellow">
                  <Building2 className="h-5.5 w-5.5" />
                </div>
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-google-dark" id="stat-fields-count">6+</div>
              <div className="text-xs text-google-gray font-medium mt-1" id="stat-fields-label">Professional Disciplines</div>
            </div>

            <div className="text-center" id="stat-uptime">
              <div className="flex justify-center mb-3" id="stat-uptime-icon-container">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-google-green-light text-google-green">
                  <CheckCircle2 className="h-5.5 w-5.5" />
                </div>
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-google-dark" id="stat-uptime-count">99.9%</div>
              <div className="text-xs text-google-gray font-medium mt-1" id="stat-uptime-label">Portal Uptime</div>
            </div>
          </motion.div>

          {/* Small chevron prompt */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12 animate-bounce"
            id="hero-chevron-prompt"
          >
            <button
              onClick={scrollToPortals}
              className="text-google-gray hover:text-google-dark transition-colors"
              aria-label="Scroll to Directory"
              id="hero-scroll-trigger"
            >
              <ChevronDown className="h-6 w-6" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
