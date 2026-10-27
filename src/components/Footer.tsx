import React from 'react';
import { ArrowUp, Instagram, ExternalLink } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#27201C] text-[#E8DCD4] py-16 sm:py-20 border-t border-[#3D332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3D332D]">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <a href="#" className="font-serif text-3xl text-white tracking-tight block mb-3">
              {STUDIO_INFO.brandName}
            </a>
            <p className="text-xs sm:text-sm text-[#BAA99E] leading-relaxed max-w-sm mb-6">
              Private 1-on-1 nail studio in Mississauga & Greater Toronto. Dedicated to healthy natural nail care, Apres Gel-X, and bespoke editorial nail artistry.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8DCD4] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <span className="text-[#5C524B]" aria-hidden="true">·</span>
              <a
                href={STUDIO_INFO.beaconsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8DCD4] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Beacons Link-in-Bio</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#BAA99E] font-medium mb-4">
              Explore Atelier
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D5C7BC]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Lookbook Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  The Artist & Philosophy
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-white transition-colors">
                  Studio Policies & Etiquette
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Appointment Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#BAA99E] font-medium mb-4">
              Studio Location
            </h4>
            <div className="text-xs text-[#D5C7BC] space-y-2 leading-relaxed">
              <p>Mississauga, Ontario</p>
              <p>Greater Toronto Area (GTA)</p>
              <p className="text-[#BAA99E] pt-2">
                Tuesday – Saturday · By Appointment Only
              </p>
              <p className="text-[11px] text-[#7E726A] pt-1">
                Private studio address shared upon confirmed deposit reservation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BAA99E]">
          <p>© {new Date().getFullYear()} Annalia Atelier. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors p-1"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
