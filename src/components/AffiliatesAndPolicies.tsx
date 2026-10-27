import React, { useState } from 'react';
import { ShieldCheck, Tag, Copy, Check, Instagram, ExternalLink, MapPin, Clock, Mail } from 'lucide-react';
import { BRAND_PARTNERS, STUDIO_INFO, STUDIO_POLICIES } from '../data/studioData';

export const AffiliatesAndPolicies: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="policies" className="py-20 sm:py-28 bg-[#F7F4EE] border-t border-[#E8DCD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Studio Policies */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#7E726A] font-medium">
              Client Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#27201C] tracking-tight mt-1">
              Studio Policies & Etiquette
            </h2>
            <p className="text-sm text-[#7E726A] mt-2">
              To ensure every client receives an unhurried, meticulous appointment, we kindly ask you to review our private studio standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDIO_POLICIES.map((policy, idx) => (
              <div
                key={idx}
                className="bg-[#FDFBF7] border border-[#E8DCD4] p-6 sm:p-7 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-[#BAA99E]" />
                    <h3 className="font-serif text-xl text-[#27201C]">{policy.title}</h3>
                  </div>
                  <p className="text-xs font-medium text-[#27201C] mb-2">{policy.summary}</p>
                  <p className="text-xs text-[#7E726A] leading-relaxed">{policy.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Verified Brand Partners & Creator Codes */}
        <div className="mb-20 pt-16 border-t border-[#E8DCD4]">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-[#7E726A] font-medium">
              Trusted Products & Partners
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#27201C] tracking-tight mt-1">
              Partner Perks & Affiliates
            </h2>
            <p className="text-sm text-[#7E726A] mt-2">
              Professional nail supplies and products trusted in the atelier, featured on our Beacons page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BRAND_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-[#FDFBF7] border border-[#E8DCD4] p-6 sm:p-7 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-wider text-[#BAA99E] font-medium">
                      {partner.badge}
                    </span>
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#7E726A] hover:text-[#27201C] flex items-center gap-1"
                    >
                      <span>Visit Partner</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <h3 className="font-serif text-2xl text-[#27201C] mb-2">{partner.name}</h3>
                  <p className="text-xs sm:text-sm text-[#7E726A] leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  <p className="text-xs text-[#5C524B] bg-[#F7F4EE] p-3 rounded-xs mb-4">
                    {partner.perk}
                  </p>
                </div>

                {partner.code && (
                  <div className="flex items-center justify-between pt-3 border-t border-[#E8DCD4]">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-[#BAA99E]" />
                      <span className="text-xs text-[#7E726A]">Promo Code:</span>
                      <code className="text-xs font-mono font-bold text-[#27201C] bg-[#E8DCD4] px-2 py-0.5 rounded-xs">
                        {partner.code}
                      </code>
                    </div>
                    <button
                      onClick={() => handleCopyCode(partner.code!)}
                      className="text-xs font-medium text-[#27201C] hover:text-[#BAA99E] flex items-center gap-1 transition-colors"
                    >
                      {copiedCode === partner.code ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Verified Contact & Studio Information */}
        <div id="contact" className="pt-16 border-t border-[#E8DCD4]">
          <div className="bg-[#FDFBF7] border border-[#E8DCD4] p-8 sm:p-12 rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-widest text-[#7E726A] font-medium">
                  Connect & Inquire
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#27201C] tracking-tight mt-1 mb-4">
                  Visit Annalia Atelier
                </h2>
                <p className="text-sm text-[#7E726A] leading-relaxed mb-6">
                  Private studio address and access details are provided upon appointment confirmation. For custom press inquiries, tutorial collaborations, or general questions, connect via Instagram or Beacons.
                </p>

                <div className="space-y-3 text-xs text-[#27201C]">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#BAA99E] shrink-0" />
                    <span>{STUDIO_INFO.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#BAA99E] shrink-0" />
                    <span>{STUDIO_INFO.operatingDays}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-[#BAA99E] shrink-0" />
                    <a
                      href={STUDIO_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-medium"
                    >
                      {STUDIO_INFO.instagramHandle} (Direct Messaging)
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-white bg-[#27201C] rounded-sm hover:bg-[#3D332D] transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow @annalia.atelier</span>
                </a>

                <a
                  href={STUDIO_INFO.beaconsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-[#27201C] border border-[#D5C7BC] bg-white rounded-sm hover:bg-[#F3EBE6] transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <ExternalLink className="w-4 h-4 text-[#7E726A]" />
                  <span>Official Beacons Link-in-Bio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
