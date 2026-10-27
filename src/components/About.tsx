import React from 'react';
import { Sparkles, HeartHandshake, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F7F4EE] border-t border-[#E8DCD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Studio & Artist Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-[#E8DCD4] shadow-sm bg-[#FDFBF7]">
              <img
                src="/src/assets/images/atelier_studio_space_1793074980459.jpg"
                alt="Annalia Atelier minimalist boutique studio desk with Japanese gel bottles and serene ambiance"
                className="w-full h-[420px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-4 bg-[#FDFBF7] border-t border-[#E8DCD4]">
                <p className="text-xs uppercase tracking-widest text-[#7E726A] font-medium">
                  The Studio Space
                </p>
                <p className="font-serif text-lg text-[#27201C] mt-0.5">
                  Private 1-on-1 setting in Mississauga, ON
                </p>
              </div>
            </div>
          </div>

          {/* About Narrative & Verified Details */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-[#7E726A] font-medium mb-2">
              The Artist & Philosophy
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#27201C] tracking-tight mb-6">
              Thoughtful artistry focused on nail health and quiet luxury.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#7E726A] leading-relaxed">
              <p>
                Founded by Annalia in Mississauga, Ontario, <strong className="text-[#27201C] font-medium">Annalia Atelier</strong> was built to redefine the salon experience into an intentional, unhurried 1-on-1 sanctuary.
              </p>
              <p>
                As an independent nail technician, content creator, and educator, Annalia documents her real nail journey and shares transparent guidance with a growing beauty community. With a focus on gentle Russian-style dry manicure techniques and authentic Apres Gel-X systems, every set balances long-term natural nail preservation with pristine, editorial finish work.
              </p>
              <p>
                Whether you are seeking clean micro-French tips, glowing glazed chrome, or bespoke hand-sculpted 3D details, every appointment is custom-tailored to your hands, style, and natural nail anatomy.
              </p>
            </div>

            {/* Studio Core Principles */}
            <div className="mt-8 pt-6 border-t border-[#E8DCD4] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#BAA99E] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#27201C]">
                    Health-First Foundations
                  </h4>
                  <p className="text-xs text-[#7E726A] mt-0.5">
                    No harsh mechanical scraping or aggressive filing on bare natural nail beds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#BAA99E] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#27201C]">
                    Premium Japanese & Korean Gels
                  </h4>
                  <p className="text-xs text-[#7E726A] mt-0.5">
                    High-purity formulas and gentle soak-off flexibility curated from trusted partners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#BAA99E] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#27201C]">
                    Industry Educator & Author
                  </h4>
                  <p className="text-xs text-[#7E726A] mt-0.5">
                    Author of <em>The Fully Booked Blueprint</em>, providing business guidance to fellow nail techs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#BAA99E] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#27201C]">
                    Private & Relaxing
                  </h4>
                  <p className="text-xs text-[#7E726A] mt-0.5">
                    A calm, one-on-one session with no chaotic multi-chair salon rush.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
