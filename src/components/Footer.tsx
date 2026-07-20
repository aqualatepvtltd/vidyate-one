import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'academic') => void;
}

export default function Footer({ onOpenPolicy }: FooterProps) {
  const scrollBackToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-google-light-gray/20 text-google-gray border-t border-google-border pt-16 pb-12 font-sans" id="app-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="footer-container">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-google-light-gray " id="footer-top-grid">
          {/* Brand block */}
          <div className="md:col-span-5 space-y-4" id="footer-brand-block">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src="/vidyate-one-logo-crop-no-bg.png" alt="Vidyate One Logo" className="h-9 w-auto translate-x-[-4px]" />
            </a>
            <p className="text-google-gray text-xs sm:text-sm leading-relaxed max-w-sm font-normal mt-2" id="footer-brand-desc">
              The unified academic navigation dashboard coordinates access across Student, Commerce, and Tech Hubs, providing students with borderless, specialized training.
            </p>
          </div>

          {/* Links block: Platforms */}
          <div className="md:col-span-2 space-y-4" id="footer-platforms-block">
            <h4 className="text-[10px] tracking-wider uppercase font-bold text-google-dark font-sans">Active Portals</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="https://vidyate-student-hub.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-google-blue hover:underline transition-colors font-medium">
                  Vidyate Student Hub
                </a>
              </li>
              <li>
                <a href="https://vidyate-commerce-hub.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-google-blue hover:underline transition-colors font-medium">
                  Vidyate Commerce Hub
                </a>
              </li>
              <li>
                <span className="text-google-gray/60 cursor-not-allowed">Vidyate Tech Hub (Beta)</span>
              </li>
              <li>
                <span className="text-google-gray/60 cursor-not-allowed">Healthcare Portal</span>
              </li>
            </ul>
          </div>

          {/* Links block: Fields */}
          <div className="md:col-span-2 space-y-4" id="footer-fields-block">
            <h4 className="text-[10px] tracking-wider uppercase font-bold text-google-dark font-sans">Core Disciplines</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="text-google-gray font-normal">Pharmacy</span></li>
              <li><span className="text-google-gray font-normal">Engineering</span></li>
              <li><span className="text-google-gray font-normal">Commerce</span></li>
              <li><span className="text-google-gray font-normal">Nursing</span></li>
              <li><span className="text-google-gray font-normal">Soft Skills</span></li>
            </ul>
          </div>

          {/* Links block: Legal & Compliance */}
          <div className="md:col-span-3 space-y-4" id="footer-legal-block">
            <h4 className="text-[10px] tracking-wider uppercase font-bold text-google-dark font-sans">Policy & Compliance</h4>
            <ul className="space-y-2.5 text-xs font-normal" id="footer-policy-triggers">
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-google-blue hover:underline text-left transition-colors cursor-pointer font-medium">
                  Privacy Policy File
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('terms')} className="hover:text-google-blue hover:underline text-left transition-colors cursor-pointer font-medium">
                  Terms of Service Agreement
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('academic')} className="hover:text-google-blue hover:underline text-left transition-colors cursor-pointer font-medium">
                  Academic Integrity Code
                </button>
              </li>
              <li className="flex py-4"><div className="flex items-center gap-2 ">
                <span className="font-medium text-google-gray">Go to Top</span>
                <button
                  onClick={scrollBackToTop}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-google-gray hover:text-google-dark hover:bg-google-light-gray border border-google-border transition-all shadow-xs cursor-pointer"
                  title="Scroll back to top"
                  id="footer-back-to-top-btn"
                >
                  <ArrowUp className="h-4.5 w-4.5" />
                </button>
              </div></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-google-gray/70 font-sans" id="footer-bottom-row">
          <div>
            &copy; {new Date().getFullYear()} Vidyate Education Group. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
