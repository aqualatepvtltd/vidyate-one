import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'academic') => void;
}

export default function Navbar({ onOpenPolicy }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Portals', href: '#portals' },
    { name: 'Fields', href: '#fields' },
    { name: 'About Us', href: '#about' },
    { name: 'Get In Touch', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-google-border py-2.5'
            : 'bg-transparent py-4'
          }`}
        id="app-navbar"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="navbar-container">
          <div className="flex h-12 items-center justify-between" id="navbar-flex">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              id="navbar-logo-link"
            >
              <img src="/vidyate-one-logo-crop-no-bg.png" alt="Vidyate One Logo" className="h-9 w-auto" />
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[14px] font-medium text-google-gray hover:text-google-blue transition-colors py-2"
                  id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons - Rounded full pill */}
            <div className="hidden md:flex items-center gap-4" id="desktop-actions">
              <a
                href="#portals"
                onClick={(e) => handleNavClick(e, '#portals')}
                className="flex items-center gap-1.5 rounded-full bg-google-blue px-6 py-2.5 text-sm font-semibold text-white hover:bg-google-blue-hover transition-all shadow-sm"
                id="cta-enter-portal"
              >
                Access Hubs
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden" id="mobile-toggle-container">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-full p-2 text-google-gray hover:bg-google-light-gray transition-colors"
                aria-label="Toggle mobile menu"
                id="mobile-menu-toggle-btn"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-30 md:hidden" id="mobile-menu-overlay">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              id="mobile-backdrop"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 right-0 w-full max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between border-l border-google-border"
              id="mobile-drawer"
            >
              <div className="space-y-8 pt-16" id="mobile-drawer-top">
                

                <nav className="flex flex-col gap-3" id="mobile-nav">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-[16px] font-medium text-google-dark hover:text-google-blue transition-colors py-1"
                      id={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 border-t border-google-light-gray pt-6" id="mobile-drawer-bottom">
                <a
                  href="#portals"
                  onClick={(e) => handleNavClick(e, '#portals')}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-google-blue py-3 text-center text-sm font-semibold text-white hover:bg-google-blue-hover transition-colors shadow-xs"
                  id="mobile-cta"
                >
                  Launch Hub Directory
                  <ArrowRight className="h-4 w-4" />
                </a>


              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
