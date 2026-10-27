import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#F3EBE6]/60 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Zero-Pill Clean Metadata */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7E726A] mb-4 font-medium">
              <span>Mississauga, ON</span>
              <span aria-hidden="true">·</span>
              <span>Private Studio</span>
              <span aria-hidden="true">·</span>
              <span>By Appointment Only</span>
            </div>

            {/* Serif Headline with text-wrap: balance */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#27201C] leading-[1.12] mb-6 [text-wrap:balance]">
              Elevated nail artistry & bespoke Gel-X care.
            </h1>

            {/* Introduction prose */}
            <p className="text-base sm:text-lg text-[#7E726A] leading-relaxed mb-8 max-w-xl">
              An intimate private studio experience in Mississauga & the Greater Toronto Area. Dedicated to pristine Russian cuticle prep, healthy natural nail growth, and curated editorial designs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-white bg-[#27201C] rounded-sm hover:bg-[#3D332D] transition-all shadow-sm text-center active:scale-[0.99]"
              >
                Book an Appointment
              </button>
              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#27201C] border border-[#D5C7BC] rounded-sm hover:bg-[#F3EBE6] transition-colors text-center"
              >
                Explore Services & Rates
              </button>
            </div>

            {/* Verified Studio Features Strip */}
            <div className="pt-6 border-t border-[#E8DCD4] grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif text-lg text-[#27201C]">Apres Gel-X</p>
                <p className="text-xs text-[#7E726A] mt-0.5">Damage-free extensions</p>
              </div>
              <div>
                <p className="font-serif text-lg text-[#27201C]">Russian Prep</p>
                <p className="text-xs text-[#7E726A] mt-0.5">Flawless dry cuticle care</p>
              </div>
              <div>
                <p className="font-serif text-lg text-[#27201C]">1-on-1 Studio</p>
                <p className="text-xs text-[#7E726A] mt-0.5">Private client focus</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Editorial Nail Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative hairline frame */}
              <div className="relative rounded-sm overflow-hidden border border-[#E8DCD4] shadow-md bg-[#F7F4EE]">
                <img
                  src="/src/assets/images/hero_nail_artistry_1793074977263.jpg"
                  alt="Glazed chrome French tip nail artistry on manicured hands by Annalia Atelier"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Quiet caption scrim */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#27201C]/80 via-[#27201C]/30 to-transparent text-white">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-medium tracking-wide">Signature Glazed Chrome French</p>
                      <p className="text-neutral-300 text-[11px] mt-0.5">Medium Almond Gel-X Enhancement</p>
                    </div>
                    <span className="font-serif italic text-sm text-[#F7F4EE]">Annalia Atelier</span>
                  </div>
                </div>
              </div>

              {/* Aesthetic Floating Detail Label */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#FDFBF7] border border-[#E8DCD4] p-4 rounded-sm shadow-sm max-w-[220px]">
                <p className="text-[11px] uppercase tracking-wider text-[#7E726A] font-medium">Studio Standard</p>
                <p className="text-xs text-[#27201C] mt-1 font-serif leading-snug">
                  Hospital-grade sanitation & medical autoclave sterilization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
