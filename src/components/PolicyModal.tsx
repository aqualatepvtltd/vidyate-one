import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Scale, AlertCircle } from 'lucide-react';
import { PolicyDocument } from '../types';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'academic';
}

const POLICY_DATA: Record<'privacy' | 'terms' | 'academic', PolicyDocument> = {
  privacy: {
    title: "Privacy Policy",
    content: [
      "Welcome to Vidyate One. We are committed to protecting your personal data and respecting your privacy. This policy explains how we collect, process, and protect your information when using the Vidyate One gateway.",
      "1. Information Collection: Vidyate One does not directly store any of your personal identifiers or user accounts. Accounts and profile credentials are managed entirely by their respective hubs (e.g., Vidyate Student Hub, Vidyate Commerce Hub). We may only log anonymous, aggregated analytics to improve connection speeds and routing precision.",
      "2. Cross-Portal Navigation: When you click a link to proceed to a hub, you are transitioning to a separate service governed by that platform's dedicated Privacy Policy. Please inspect the target platform's parameters before entering credentials.",
      "3. Local Storage: We may use brief browser localStorage entries to preserve your dark/light preference or preferred academic fields to streamline your gateway experience.",
      "4. Safety Measures: We adopt modern container shielding and state-of-the-art encryption protocols across all Vidyate servers to secure routing streams from tampering.",
      "For privacy inquiries, please contact our core compliance desk at teamvidyate@gmail.com."
    ]
  },
  terms: {
    title: "Terms of Service",
    content: [
      "By accessing the Vidyate One portal, you agree to comply with and be bound by these Terms of Service. Please read them thoroughly.",
      "1. Platform Access: Vidyate One acts as a central hub routing to distinct learning environments. Users agree to access these resources solely for personal, non-commercial educational purposes.",
      "2. Integrity and Ethics: Users must not attempt to disrupt gateway routing, flood contact channels with artificial requests, or run malicious vulnerability scans against Vidyate assets.",
      "3. Third-Party Portals: While Vidyate coordinates development standards across hubs, each separate hub (such as the Commerce Hub) holds unique terms. Your activities on external domains are governed strictly by those entities.",
      "4. Disclaimer: The Vidyate gateway and its routing directories are provided on an 'as-is' and 'as-available' basis without warranties of any kind, whether express or implied.",
      "Failure to adhere to these rules can result in temporary routing blocks on your source address."
    ]
  },
  academic: {
    title: "Academic Integrity Guidelines",
    content: [
      "Vidyate's core mission is the promotion of real, transformative learning. We hold all students, educators, and partners to the highest standards of scholastic honesty.",
      "1. Original Work: All assignments, assessments, code submissions, and projects conducted across Vidyate Commerce Hub, Vidyate Tech Hub, and Vidyate Student Hub must represent the original work of the student.",
      "2. Collaborations: While peer learning is highly encouraged, direct sharing of solutions, copy-pasting of answers, or hiring third parties to complete exam modules is strictly forbidden.",
      "3. Generative AI Use: Generative AI tools should be treated as companion tutors. Students must not directly submit unaltered AI responses as their own course output unless explicitly authorized by the instructor.",
      "4. Zero Tolerance: Plagiarism and credentials sharing will result in an immediate suspension of the student's Vidyate global identifier across all integrated portals."
    ]
  }
};

export default function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  const document = POLICY_DATA[type];

  const getIcon = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="p-2 bg-google-green-light rounded-full shrink-0">
            <ShieldCheck className="h-5 w-5 text-google-green" id="policy-privacy-icon" />
          </div>
        );
      case 'terms':
        return (
          <div className="p-2 bg-google-blue-light rounded-full shrink-0">
            <Scale className="h-5 w-5 text-google-blue" id="policy-terms-icon" />
          </div>
        );
      case 'academic':
        return (
          <div className="p-2 bg-google-yellow-light rounded-full shrink-0">
            <AlertCircle className="h-5 w-5 text-google-yellow" id="policy-academic-icon" />
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="policy-modal-container font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-google-dark/30 backdrop-blur-xs"
            id="policy-modal-backdrop"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.35 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-google-border"
            id="policy-modal-card"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-google-light-gray bg-white px-6 py-5" id="policy-modal-header">
              <div className="flex items-center gap-3.5">
                {getIcon()}
                <div>
                  <h3 className="font-display text-lg font-bold text-google-dark" id="policy-title">
                    {document.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-google-gray hover:bg-google-light-gray/40 hover:text-google-dark transition-colors cursor-pointer"
                aria-label="Close modal"
                id="policy-close-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="max-h-[55vh] overflow-y-auto px-6 py-6 space-y-4" id="policy-modal-content">
              {document.content.map((paragraph, index) => (
                <p key={index} className="text-google-gray text-sm leading-relaxed font-normal" id={`policy-p-${index}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-google-light-gray px-6 py-4 bg-google-light-gray/20 flex justify-end" id="policy-modal-footer">
              <button
                onClick={onClose}
                className="rounded-full bg-google-blue px-6 py-2.5 text-sm font-semibold text-white hover:bg-google-blue/95 transition-all shadow-xs cursor-pointer"
                id="policy-footer-close-btn"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
