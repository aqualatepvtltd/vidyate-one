import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pill, Cpu, BarChart3, ShieldAlert, MessagesSquare, Sparkles, GraduationCap, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { LearningField } from '../types';

const FIELDS_DATA: LearningField[] = [
  {
    id: 'pharmacy',
    name: 'Pharmacy & Therapeutics',
    iconName: 'Pill',
    description: 'Specialized pharmacological studies, formulation engineering, drug interactions, and biochemical analysis.',
    extendedDescription: 'Our pharmacy curriculum is designed to support students preparing for national clinical licensing and hospital residencies. We emphasize practical chemistry, prescription dosage precision (posology), and clinical safety protocols.',
    coursesCount: 14,
    featuredTopic: 'Pharmacokinetics & Dosage Math',
    accentColor: 'text-google-red bg-google-red-light border-google-red/20 hover:border-google-red',
    hubsAssociated: ['Vidyate Pharmacy & Healthcare Hub']
  },
  {
    id: 'engineering',
    name: 'Engineering & Computing',
    iconName: 'Cpu',
    description: 'Structural analytics, embedded systems design, computing theories, and advanced mathematics.',
    extendedDescription: 'Designed for tomorrow\'s computational and physical builders. From circuits and material physics to neural architectures, we lay down clean foundational pipelines supporting full academic engineering syllabi.',
    coursesCount: 22,
    featuredTopic: 'Discrete Mathematics & Embedded Systems',
    accentColor: 'text-google-blue bg-google-blue-light border-google-blue/20 hover:border-google-blue',
    hubsAssociated: ['Vidyate Student Hub', 'Vidyate Tech Hub']
  },
  {
    id: 'commerce',
    name: 'Commerce & Finance',
    iconName: 'BarChart3',
    description: 'Corporate finance, advanced taxation law, accounting methodologies, and economic principles.',
    extendedDescription: 'Bridging classroom theory with actual business and trade dynamics. Our assets cover corporate taxation laws, portfolio metrics, public auditing processes, and dynamic spreadsheet analysis.',
    coursesCount: 18,
    featuredTopic: 'Double-Entry Bookkeeping & Indian Tax Law',
    accentColor: 'text-google-yellow bg-google-yellow-light border-google-yellow/20 hover:border-google-yellow',
    hubsAssociated: ['Vidyate Commerce Hub']
  },
  {
    id: 'nursing',
    name: 'Nursing & Patient Care',
    iconName: 'ShieldAlert',
    description: 'Critical care nursing, pediatric care, triage protocols, and anatomy fundamentals.',
    extendedDescription: 'Empowering caregivers with medical accuracy. Covers bedside patient care, fluid calculations, anatomical tracking, clinical ethics, and disaster triage response structures.',
    coursesCount: 12,
    featuredTopic: 'Adult Critical Care & Triage Assessment',
    accentColor: 'text-google-green bg-google-green-light border-google-green/20 hover:border-google-green',
    hubsAssociated: ['Vidyate Pharmacy & Healthcare Hub']
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills & Leadership',
    iconName: 'MessagesSquare',
    description: 'Vocal pitch management, corporate writing standards, and mock technical reviews.',
    extendedDescription: 'Specialized programs aiming to complete a candidate\'s professional profile. We provide targeted instruction in business vocabulary, mock team leading exercises, resume builds, and elevator pitches.',
    coursesCount: 9,
    featuredTopic: 'Vocal Presence & Executive Writing',
    accentColor: 'text-google-gray bg-google-light-gray border-google-border hover:border-google-gray',
    hubsAssociated: ['Vidyate Soft Skill Hub', 'Vidyate Student Hub']
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Tech & AI',
    iconName: 'Sparkles',
    description: 'Generative AI integrations, cloud server deployment architectures, and computer vision.',
    extendedDescription: 'Staying at the absolute edge of modern computing. Dive deep into vector databases, token usage analytics, prompt design, server-side proxies, and secure key operations.',
    coursesCount: 15,
    featuredTopic: 'Large Language Models & Web-Proxy Building',
    accentColor: 'text-google-blue bg-google-blue-light border-google-blue/20 hover:border-google-blue',
    hubsAssociated: ['Vidyate Tech Hub']
  }
];

export default function FieldsSection() {
  const [selectedField, setSelectedField] = useState<LearningField | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return <Pill className="h-5 w-5" />;
      case 'Cpu':
        return <Cpu className="h-5 w-5" />;
      case 'BarChart3':
        return <BarChart3 className="h-5 w-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="h-5 w-5" />;
      case 'MessagesSquare':
        return <MessagesSquare className="h-5 w-5" />;
      case 'Sparkles':
        return <Sparkles className="h-5 w-5" />;
      default:
        return <GraduationCap className="h-5 w-5" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-google-border scroll-mt-12" id="fields">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="fields-container">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="fields-header">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-google-dark tracking-tight mb-4">
            Fields of Action
          </h2>
          <p className="text-google-gray text-sm sm:text-base leading-relaxed">
            Vidyate specializes in distinct, high-impact learning vectors. Select a field below to inspect curriculum priorities, core objectives, and associated platforms.
          </p>
        </div>

        {/* Dynamic Fields Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="fields-main-layout">
          {FIELDS_DATA.map((field) => (
            <button
              key={field.id}
              onClick={() => setSelectedField(field)}
              className="w-full text-left flex items-center justify-between p-4 rounded-2xl border bg-white border-google-border hover:bg-google-light-gray/20 hover:border-google-blue/50 hover:shadow-xs transition-all"
              id={`field-trigger-btn-${field.id}`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-2.5 rounded-full border text-google-gray bg-google-light-gray border-google-border`} id={`field-icon-wrapper-${field.id}`}>
                  {getIconComponent(field.iconName)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-google-dark text-sm" id={`field-name-${field.id}`}>
                    {field.name}
                  </h4>
                  <p className="text-xs text-google-gray line-clamp-1 mt-0.5" id={`field-tagline-${field.id}`}>
                    {field.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-google-gray" />
            </button>
          ))}
        </div>
      </div>

      {/* Field Detail Modal */}
      <AnimatePresence>
        {selectedField && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="field-detail-overlay">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedField(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              id="field-detail-backdrop"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.35 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-google-border"
              id="field-detail-body"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-google-light-gray bg-white px-6 py-5" id="field-detail-header">
                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 rounded-full border ${selectedField.accentColor}`}>
                    {getIconComponent(selectedField.iconName)}
                  </div>
                  <h3 className="font-display text-lg font-bold text-google-dark">{selectedField.name}</h3>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6" id="field-detail-content">
                {/* Long Description */}
                <div>
                  <h5 className="text-[10px] uppercase tracking-wider font-semibold text-google-gray font-mono mb-2">Scope of Learning</h5>
                  <p className="text-sm text-google-gray leading-relaxed font-normal">
                    {selectedField.extendedDescription}
                  </p>
                </div>

                {/* Syllabus sample bullets */}
                <div>
                  <h5 className="text-[10px] uppercase tracking-wider font-semibold text-google-gray font-mono mb-3">Key Training Objectives</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-start gap-2.5 text-xs text-google-gray font-medium">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-google-blue-light text-google-blue text-[10px] font-bold shrink-0">1</span>
                      <span>Rigorous, board-compliant academic alignments</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-google-gray font-medium">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-google-blue-light text-google-blue text-[10px] font-bold shrink-0">2</span>
                      <span>Interactive practice sandboxes & spreadsheet tooling</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-google-gray font-medium">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-google-blue-light text-google-blue text-[10px] font-bold shrink-0">3</span>
                      <span>Peer interactions and open review portfolios</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-google-gray font-medium">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-google-blue-light text-google-blue text-[10px] font-bold shrink-0">4</span>
                      <span>Direct placement pipelines with strategic recruiters</span>
                    </div>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-google-light-gray/30 rounded-xl border border-google-border">
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-google-gray font-mono mb-1.5">Featured Spotlight</div>
                    <div className="text-sm font-bold text-google-dark flex items-center gap-1.5">
                      {selectedField.featuredTopic}
                    </div>
                  </div>
                  <div className="p-4 bg-google-light-gray/30 rounded-xl border border-google-border">
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-google-gray font-mono mb-1.5">Associated Gateways</div>
                    <div className="text-sm font-bold text-google-dark space-y-1">
                      {selectedField.hubsAssociated.map((hub, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="truncate">{hub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-google-light-gray px-6 py-4 bg-google-light-gray/20 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedField(null)}
                  className="rounded-full border border-google-border px-5 py-2.5 text-xs font-semibold text-google-dark hover:bg-google-light-gray/40 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedField(null);
                    const portalSection = document.querySelector('#portals');
                    if (portalSection) {
                      portalSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="group inline-flex items-center gap-1.5 rounded-full bg-google-blue text-white px-5 py-2.5 text-xs font-semibold hover:bg-google-blue-hover transition-colors shadow-xs"
                >
                  Browse Portals
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
