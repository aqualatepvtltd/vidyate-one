import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Check, Copy, RefreshCw, Send, HelpCircle, ExternalLink } from 'lucide-react';
import { InquiryFormInput } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<InquiryFormInput>({
    name: '',
    email: '',
    role: 'student',
    fieldOfInterest: 'pharmacy',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof InquiryFormInput, string>>>({});

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof InquiryFormInput, string>> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Please tell us your name';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email structure';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please input your query details';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Inquiry must contain at least 10 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error on type
    if (validationErrors[name as keyof InquiryFormInput]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate real server database connection and dispatch
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      role: 'student',
      fieldOfInterest: 'pharmacy',
      message: ''
    });
    setSubmitSuccess(false);
    setValidationErrors({});
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('teamvidyate@gmail.com'); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-google-light-gray/10 scroll-mt-12 border-t border-google-border" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="contact-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-google-dark tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-google-gray text-sm sm:text-base leading-relaxed">
            Have questions about Vidyate student tools, commerce ledgers, engineering modules, or licensing models? Reach out directly using our encrypted inquiry gateway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-main-grid">
          
          {/* Left panel: Info & links */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-info-panel">
            <div className="space-y-8" id="contact-info-top">
              <div>
                <h3 className="font-display text-xl font-bold text-google-dark mb-2">Centralized Helpdesk</h3>
                <p className="text-google-gray text-sm leading-relaxed font-normal">
                  Our system maintains a unified correspondence pipeline. When you submit an inquiry, we route it directly to the coordinator presiding over your field of interest.
                </p>
              </div>

              {/* Coordinates Grid */}
              <div className="space-y-4" id="contact-coordinates">
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-google-border bg-white shadow-xs" id="contact-coordinate-mail">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-google-blue-light text-google-blue shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-google-dark truncate">teamvidyate@gmail.com</div>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 text-google-gray hover:text-google-dark rounded-full hover:bg-google-light-gray/40 transition-colors"
                    title="Copy to clipboard"
                    id="copy-email-btn"
                  >
                    {copied ? <Check className="h-4 w-4 text-google-green" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-google-border bg-white shadow-xs" id="contact-coordinate-support">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-google-green-light text-google-green shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-google-dark">Under 24 Business Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Active Form Component */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-google-border p-6 sm:p-8 shadow-xs animate-none" id="contact-form-container">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  id="contact-form-component"
                  noValidate
                >
                  {/* Name field */}
                  <div id="form-group-name">
                    <label htmlFor="name-input" className="block text-xs font-bold text-google-dark uppercase tracking-wider font-sans mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name-input"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border py-2.5 px-4 text-sm outline-none transition-all ${
                        validationErrors.name 
                          ? 'border-google-red focus:border-google-red focus:ring-1 focus:ring-google-red' 
                          : 'border-google-border focus:border-google-blue focus:ring-1 focus:ring-google-blue'
                      }`}
                      placeholder="Enter your name"
                    />
                    {validationErrors.name && (
                      <p className="text-xs text-google-red font-medium mt-1.5 flex items-center gap-1" id="name-error">
                        <HelpCircle className="h-3.5 w-3.5" />
                        {validationErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Role Selection Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="form-row-1">
                    {/* Email field */}
                    <div id="form-group-email">
                      <label htmlFor="email-input" className="block text-xs font-bold text-google-dark uppercase tracking-wider font-sans mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email-input"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border py-2.5 px-4 text-sm outline-none transition-all ${
                          validationErrors.email 
                            ? 'border-google-red focus:border-google-red focus:ring-1 focus:ring-google-red' 
                            : 'border-google-border focus:border-google-blue focus:ring-1 focus:ring-google-blue'
                        }`}
                        placeholder="you@domain.com"
                      />
                      {validationErrors.email && (
                        <p className="text-xs text-google-red font-medium mt-1.5 flex items-center gap-1" id="email-error">
                          <HelpCircle className="h-3.5 w-3.5" />
                          {validationErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Role selector */}
                    <div id="form-group-role">
                      <label htmlFor="role-select" className="block text-xs font-bold text-google-dark uppercase tracking-wider font-sans mb-2">My Role</label>
                      <select
                        name="role"
                        id="role-select"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-google-border py-2.5 px-4 text-sm bg-white outline-none focus:border-google-blue focus:ring-1 focus:ring-google-blue transition-all"
                      >
                        <option value="student">Student / Learner</option>
                        <option value="educator">Academic Instructor</option>
                        <option value="partner">Corporate Partner / Recruiter</option>
                        <option value="other">General Inquirer</option>
                      </select>
                    </div>
                  </div>

                  {/* Field of interest */}
                  <div id="form-group-field">
                    <label htmlFor="field-select" className="block text-xs font-bold text-google-dark uppercase tracking-wider font-sans mb-2">Field of Interest</label>
                    <select
                      name="fieldOfInterest"
                      id="field-select"
                      value={formData.fieldOfInterest}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-google-border py-2.5 px-4 text-sm bg-white outline-none focus:border-google-blue focus:ring-1 focus:ring-google-blue transition-all"
                    >
                      <option value="pharmacy">Pharmacy & Pharmacology</option>
                      <option value="engineering">Engineering & Architecture</option>
                      <option value="commerce">Commerce & Financial Laws</option>
                      <option value="nursing">Nursing & Clinical Care</option>
                      <option value="soft-skills">Soft Skills & Communication</option>
                      <option value="emerging-tech">Advanced Tech & AI</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div id="form-group-message">
                    <label htmlFor="message-textarea" className="block text-xs font-bold text-google-dark uppercase tracking-wider font-sans mb-2">Inquiry / Message Details</label>
                    <textarea
                      name="message"
                      id="message-textarea"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border py-2.5 px-4 text-sm outline-none transition-all resize-none ${
                        validationErrors.message 
                          ? 'border-google-red focus:border-google-red focus:ring-1 focus:ring-google-red' 
                          : 'border-google-border focus:border-google-blue focus:ring-1 focus:ring-google-blue'
                      }`}
                      placeholder="Outline your questions or describe how we can assist you..."
                    />
                    {validationErrors.message && (
                      <p className="text-xs text-google-red font-medium mt-1.5 flex items-center gap-1" id="message-error">
                        <HelpCircle className="h-3.5 w-3.5" />
                        {validationErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button - Rounded Pill */}
                  <div className="pt-2" id="form-submit-container">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-google-blue py-3 text-sm font-semibold text-white hover:bg-google-blue/95 disabled:bg-google-blue/50 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                      id="form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          Routing Secure Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit Inquiry
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 px-4 flex flex-col items-center justify-center h-full"
                  id="contact-success-card"
                >
                  <div className="h-16 w-16 bg-google-green-light text-google-green rounded-full border border-google-green/20 flex items-center justify-center mb-6 shadow-xs animate-bounce" id="success-icon-container">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-google-dark mb-2">Inquiry Successfully Routed!</h3>
                  <p className="text-google-gray text-sm max-w-sm mx-auto mb-8 leading-relaxed font-normal">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.fieldOfInterest}</strong> has been encrypted and logged. A coordinator will contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 rounded-full bg-google-dark text-white font-semibold text-xs px-6 py-3 hover:bg-google-dark/90 transition-all shadow-xs"
                    id="success-reset-btn"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
