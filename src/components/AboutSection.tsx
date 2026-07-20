import React from 'react';
import { Shield, BookOpen, Fingerprint, Award, Globe, Workflow } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: <BookOpen className="h-5 w-5 text-google-blue" />,
      title: 'Academic Rigor',
      description: 'We construct board-aligned, curated educational systems spanning Pharmacy, Commerce, and Engineering. Our content is vetted by experienced educators to guarantee accuracy.',
      colorClass: 'bg-google-blue-light'
    },
    {
      icon: <Workflow className="h-5 w-5 text-google-red" />,
      title: 'Vocational Sandboxes',
      description: 'We prioritize applied learning. From digital accounting ledger practices inside the Commerce Hub to coding terminals on the Tech Hub, our users learn by building.',
      colorClass: 'bg-google-red-light'
    },
    {
      icon: <Fingerprint className="h-5 w-5 text-google-yellow" />,
      title: 'Single-Identity Gateway',
      description: 'Vidyate One unites disparate servers. We provide single-click identity transfers, removing login friction and allowing users to swap between disciplines instantly.',
      colorClass: 'bg-google-yellow-light'
    }
  ];

  const values = [
    {
      icon: <Shield className="h-5 w-5 text-google-green" />,
      title: 'Trust & Safety',
      description: 'Ensuring student data is fully container-shielded and encrypted.',
      colorClass: 'bg-google-green-light'
    },
    {
      icon: <Award className="h-5 w-5 text-google-blue" />,
      title: 'Curricular Standard',
      description: 'Coordinating curriculum with actual board requirements.',
      colorClass: 'bg-google-blue-light'
    },
    {
      icon: <Globe className="h-5 w-5 text-google-red" />,
      title: 'Open Ingress',
      description: 'Promoting free, democratic entry points for curious minds globally.',
      colorClass: 'bg-google-red-light'
    }
  ];

  return (
    <section className="py-20 bg-white scroll-mt-12 border-t border-google-border" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="about-container">
        
        {/* Top Story Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20" id="about-story">
          <div className="lg:col-span-6" id="about-story-text">
            <span className="text-xs font-bold font-sans tracking-wider text-google-blue uppercase mb-3 block" id="about-span">
              OUR MISSION & PURPOSE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-google-dark tracking-tight mb-6" id="about-h2">
              Democratizing multi-disciplinary education for everyone
            </h2>
            <p className="text-google-gray text-sm sm:text-base leading-relaxed mb-6" id="about-p-1">
              Vidyate was born out of a simple observation: educational resources are highly fragmented. A student pursuing engineering shouldn't have to navigate completely different user experiences to master commerce topics, practice pharmacy equations, or sharpen their professional soft skills.
            </p>
            <p className="text-google-gray text-sm sm:text-base leading-relaxed" id="about-p-2">
              By launching <strong>Vidyate One</strong>, we establish a centralized portal that brings these disciplines together. Under our unified brand, students gain access to dedicated tools designed specifically for each field, while keeping navigation minimalist and frictionless.
            </p>
          </div>

          <div className="lg:col-span-6 bg-google-light-gray/20 border border-google-border rounded-2xl p-6 sm:p-8 space-y-6 relative" id="about-story-visual">
            <h3 className="font-display font-bold text-google-dark text-lg">System Capabilities</h3>
            <div className="space-y-5">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`p-2.5 ${v.colorClass} rounded-full shrink-0`}>
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-google-dark text-sm">{v.title}</h4>
                    <p className="text-google-gray text-xs mt-0.5 leading-relaxed font-normal">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars Cards Grid */}
        <div className="border-t border-google-light-gray pt-16" id="about-pillars">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-2xl font-bold text-google-dark mb-3">Our Three Architectural Pillars</h3>
            <p className="text-google-gray text-xs sm:text-sm font-normal">We structure our educational software to reinforce three primary concepts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="about-pillars-grid">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-google-border p-6 sm:p-8 hover:shadow-xs transition-all flex flex-col gap-4"
                id={`about-pillar-card-${idx}`}
              >
                <div className={`p-3 ${p.colorClass} rounded-full w-fit`}>
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-google-dark mb-2">
                    {p.title}
                  </h4>
                  <p className="text-google-gray text-xs sm:text-sm leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
