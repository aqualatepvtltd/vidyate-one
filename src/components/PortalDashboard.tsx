import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink, Sparkles, Code, GraduationCap, Heart, Users, Briefcase, ChevronRight, Info, Check } from 'lucide-react';
import { VidyateHub } from '../types';

const PORTALS_DATA: VidyateHub[] = [
  {
    id: 'student-hub',
    title: 'Vidyate Student Hub',
    description: 'Your premier academic companion featuring adaptive subject guides, collaborative study spaces, notes libraries, and semester trackers designed to elevate student performance.',
    url: 'https://vidyate-student-hub.vercel.app/',
    status: 'active',
    category: 'academic',
    fields: ['Engineering', 'General Science', 'General Arts', 'School Level'],
    features: ['Peer Study Rooms', 'Digital Notes Repository', 'GPA Tracker', 'AI Companion Planner'],
    color: 'bg-google-blue text-white'
  },
  {
    id: 'commerce-hub',
    title: 'Vidyate Commerce Hub',
    description: 'Specialized business education portal delivering state-of-the-art case analysis, interactive spreadsheets, tax law breakdowns, accounting practice vaults, and portfolio models.',
    url: 'https://vidyate-commerce-hub.vercel.app/',
    status: 'active',
    category: 'professional',
    fields: ['Accountancy', 'Economics', 'Business Administration', 'Finance'],
    features: ['Ledger practice tools', 'Corporate tax guides', 'Stock market sandbox', 'Excel optimization kit'],
    color: 'bg-google-red text-white'
  },
  {
    id: 'tech-hub',
    title: 'Vidyate Tech Hub',
    description: 'Advanced technical education station featuring direct paths for coding bootcamps, full-stack software architecture, cloud orchestration, database engines, and design systems.',
    url: '#',
    status: 'beta',
    category: 'professional',
    fields: ['Computer Science', 'Software Engineering', 'System Design', 'AI/ML'],
    features: ['Coding Playgrounds', 'Git Integration guides', 'UI/UX Design Tokens', 'System Design blueprints'],
    color: 'bg-google-yellow text-google-dark'
  },
  {
    id: 'pharmacy-hub',
    title: 'Vidyate Pharmacy & Healthcare Hub',
    description: 'Targeted scientific portal for clinical pharmacy, nursing formulations, drug interactions lookup, biochemistry labs, and medical boards preps.',
    url: '#',
    status: 'upcoming',
    category: 'healthcare',
    fields: ['Pharmacy', 'Nursing', 'Pharmacology', 'Biochemistry'],
    features: ['Drug mechanism mockups', 'Clinical dosage guidelines', 'Anatomy flashcards', 'Surgical checklists'],
    color: 'bg-google-green text-white'
  },
  {
    id: 'softskills-hub',
    title: 'Vidyate Soft Skill Hub',
    description: 'Dedicated interpersonal incubator containing modules for group speaking, professional writing, executive presentations, mock technical reviews, and career counseling.',
    url: '#',
    status: 'upcoming',
    category: 'general',
    fields: ['Communication', 'Interview Preparation', 'Leadership', 'Emotional Intelligence'],
    features: ['Speech tempo calculators', 'Resume building builders', 'Email formulation guides', 'Mock dialogue tracks'],
    color: 'bg-google-dark text-white'
  }
];

export default function PortalDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedHub, setSelectedHub] = useState<VidyateHub | null>(null);

  const categories = [
    { value: 'all', label: 'All Gateways' },
    { value: 'academic', label: 'Academic & Student' },
    { value: 'professional', label: 'Professional & Business' },
    { value: 'healthcare', label: 'Healthcare & Science' },
    { value: 'general', label: 'Skills & Development' }
  ];

  const filteredHubs = useMemo(() => {
    return PORTALS_DATA.filter(hub => {
      const matchesSearch = hub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            hub.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            hub.fields.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            hub.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || hub.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getStatusBadge = (status: VidyateHub['status']) => {
    switch (status) {
      case 'active':
        return <span className="inline-flex items-center gap-1 rounded-full bg-google-green-light px-3 py-1 text-xs font-semibold text-google-green border border-google-green/20">● Live Platform</span>;
      case 'beta':
        return <span className="inline-flex items-center gap-1 rounded-full bg-google-blue-light px-3 py-1 text-xs font-semibold text-google-blue border border-google-blue/20">▲ Public Beta</span>;
      case 'upcoming':
        return <span className="inline-flex items-center gap-1 rounded-full bg-google-light-gray px-3 py-1 text-xs font-semibold text-google-gray border border-google-border">◆ Upcoming</span>;
    }
  };

  const getHubIcon = (category: VidyateHub['category']) => {
    switch (category) {
      case 'academic':
        return <GraduationCap className="h-5 w-5" />;
      case 'professional':
        return <Briefcase className="h-5 w-5" />;
      case 'healthcare':
        return <Heart className="h-5 w-5" />;
      case 'general':
        return <Users className="h-5 w-5" />;
      default:
        return <Sparkles className="h-5 w-5" />;
    }
  };

  const handleOpenHubDetails = (hub: VidyateHub) => {
    setSelectedHub(hub);
  };

  const handleBetaRequestSubmit = () => {
    setSelectedHub(null); // Close the modal
    // Scroll to the contact form section
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); // A small delay ensures the modal has closed before scrolling
  };

  return (
    <section className="py-20 bg-white border-t border-b border-google-border scroll-mt-12" id="portals">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="portals-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="portals-header">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-google-dark tracking-tight mb-4">
            Unified Portal Gateway
          </h2>
          <p className="text-google-gray text-sm sm:text-base leading-relaxed">
            Instantly navigate Vidyate's specialized hubs. Filter, search, and access active workspaces or explore future releases.
          </p>
        </div>

        {/* Dashboard Control Panel */}
        <div className="bg-google-light-gray/40 rounded-2xl border border-google-border p-4 sm:p-5 mb-10" id="portals-controls">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4" id="portals-controls-flex">
            
            {/* Search Input - Rounded Pill */}
            <div className="relative flex-1" id="search-container">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-google-gray" />
              <input
                type="text"
                placeholder="Search hub titles, core features, or specialized topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-google-border bg-white py-2.5 pl-11 pr-4 text-sm text-google-dark placeholder:text-google-gray focus:border-google-blue focus:ring-1 focus:ring-google-blue outline-none transition-shadow"
                id="portal-search-input"
              />
            </div>

            {/* Category Pills Slider - Rounded Pill */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none scroll-smooth" id="category-pills">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide whitespace-nowrap transition-all ${
                    selectedCategory === cat.value
                      ? 'bg-google-blue text-white shadow-xs'
                      : 'bg-white text-google-gray border border-google-border hover:bg-google-light-gray'
                  }`}
                  id={`filter-pill-${cat.value}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portals Main Grid */}
        {filteredHubs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="portals-grid">
            {filteredHubs.map((hub) => (
              <motion.div
                key={hub.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative flex flex-col justify-between rounded-2xl border border-google-border bg-white p-6 sm:p-8 hover:shadow-md transition-all"
                id={`portal-card-${hub.id}`}
              >
                <div id={`portal-card-top-${hub.id}`}>
                  {/* Card Header Info */}
                  <div className="flex items-center justify-between mb-5" id={`portal-header-info-${hub.id}`}>
                    <div className="flex items-center gap-3">
                      
                      <h3 className="font-display text-lg font-bold text-google-dark group-hover:text-google-blue transition-colors" id={`portal-title-${hub.id}`}>
                        {hub.title}
                      </h3>
                    </div>
                    {getStatusBadge(hub.status)}
                  </div>

                  {/* Card Description */}
                  <p className="text-sm text-google-gray leading-relaxed mb-6" id={`portal-desc-${hub.id}`}>
                    {hub.description}
                  </p>
                </div>

                {/* Card Action footer */}
                <div className="border-t border-google-light-gray pt-5 flex items-center justify-between gap-3 mt-auto" id={`portal-footer-actions-${hub.id}`}>
                  <button
                    onClick={() => handleOpenHubDetails(hub)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-google-gray hover:text-google-blue transition-colors"
                    id={`portal-info-btn-${hub.id}`}
                  >
                    <Info className="h-4 w-4" />
                    Details
                  </button>

                  {hub.status === 'active' ? (
                    <a
                      href={hub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-google-blue hover:bg-google-blue-hover text-white font-semibold text-xs px-5 py-2.5 transition-all shadow-xs"
                      id={`portal-launch-link-${hub.id}`}
                    >
                      Launch Portal
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => handleOpenHubDetails(hub)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-google-light-gray hover:bg-google-border text-google-dark font-semibold text-xs px-5 py-2.5 transition-all"
                      id={`portal-explore-btn-${hub.id}`}
                    >
                      Request Invite
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-google-light-gray/40 border border-google-border rounded-2xl" id="portals-empty-state">
            <Search className="h-10 w-10 text-google-gray mx-auto mb-3" />
            <h4 className="font-display text-lg font-bold text-google-dark">No matching gateways found</h4>
            <p className="text-google-gray text-sm mt-1 max-w-md mx-auto">
              Try adjusting your spelling or category filters. Our current directories cover pharmacy, nursing, commerce, soft skills, and engineering.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 text-xs font-bold text-google-blue hover:text-google-blue-hover underline underline-offset-4"
              id="portals-reset-btn"
            >
              Clear filters and search
            </button>
          </div>
        )}
      </div>

      {/* Hub Detail Panel Drawer Dialog */}
      <AnimatePresence>
        {selectedHub && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="detail-drawer-overlay">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHub(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              id="detail-drawer-backdrop"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.35 }}
              className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-google-border"
              id="detail-drawer-body"
            >
              <div className="p-6 sm:p-8" id="detail-drawer-content">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl font-bold text-google-dark">{selectedHub.title}</h3>
                  </div>
                  {getStatusBadge(selectedHub.status)}
                </div>

                <p className="text-google-gray text-sm leading-relaxed mb-6">
                  {selectedHub.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider font-semibold text-google-gray font-mono mb-2">Disciplines Addressed</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedHub.fields.map((f, i) => (
                        <span key={i} className="rounded-md bg-google-light-gray px-3 py-1 text-xs text-google-dark font-medium">{f}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider font-semibold text-google-gray font-mono mb-2">Core Tools Built-In</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-google-gray font-medium">
                      {selectedHub.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-google-blue" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider font-semibold text-google-gray font-mono mb-2">Integration & Access Details</h4>
                    <p className="text-google-gray text-xs leading-relaxed">
                      {selectedHub.status === 'active' 
                        ? 'This portal is fully deployed and synced with our central user database. Single Sign-On (SSO) works automatically.' 
                        : 'This portal is undergoing active layout validation and database schema planning. Users can register interest to receive access keys once the beta starts.'}
                    </p>
                  </div>
                </div>

                {/* Drawer actions */}
                <div className="flex items-center justify-end gap-3 border-t border-google-light-gray pt-5">
                  <button
                    onClick={() => setSelectedHub(null)}
                    className="rounded-full border border-google-border px-5 py-2.5 text-xs font-semibold text-google-dark hover:bg-google-light-gray transition-colors"
                    id="detail-drawer-close-btn"
                  >
                    Close
                  </button>
                  {selectedHub.status === 'active' ? (
                    <a
                      href={selectedHub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-google-blue text-white px-5 py-2.5 text-xs font-semibold hover:bg-google-blue-hover transition-colors shadow-xs"
                      id="detail-drawer-launch-btn"
                    >
                      Launch Portal
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={handleBetaRequestSubmit}
                      className="rounded-full bg-google-blue text-white px-5 py-2.5 text-xs font-semibold hover:bg-google-blue-hover transition-colors shadow-xs"
                      id="detail-drawer-request-btn"
                    >
                      Submit Beta Request
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
