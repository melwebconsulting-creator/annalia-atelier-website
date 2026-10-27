import React, { useState } from 'react';
import { Clock, Check, Sparkles, HelpCircle, Edit3, Calculator } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  services: ServiceItem[];
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ services, onSelectService }) => {
  // Interactive estimator state
  const [selectedBase, setSelectedBase] = useState<string>('gel-x-full-set');
  const [selectedArt, setSelectedArt] = useState<string>('art-tier-1');
  const [includeRemoval, setIncludeRemoval] = useState<boolean>(false);
  const [showEstimator, setShowEstimator] = useState<boolean>(false);

  // Filter main enhancement services and add-ons
  const mainServices = services.filter((s) => !s.isAddOn);
  const addOnServices = services.filter((s) => s.isAddOn);

  // Calculate estimated total
  const baseService = services.find((s) => s.id === selectedBase) || services[0];
  const artService = services.find((s) => s.id === selectedArt);
  const removalService = services.find((s) => s.id === 'gel-removal-care');

  const totalEstimate =
    (baseService?.priceValue || 0) +
    (selectedArt !== 'none' ? artService?.priceValue || 0 : 0) +
    (includeRemoval ? removalService?.priceValue || 0 : 0);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F7F4EE] border-t border-[#E8DCD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E8DCD4] gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#7E726A] font-medium mb-2">
              Menu & Offerings
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#27201C] tracking-tight">
              Curated Services & Investment
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => setShowEstimator(!showEstimator)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-medium text-[#27201C] bg-[#FDFBF7] border border-[#D5C7BC] rounded-sm hover:bg-[#E8DCD4] transition-colors"
            >
              <Calculator className="w-3.5 h-3.5 text-[#7E726A]" />
              <span>{showEstimator ? 'Hide Estimator' : 'Interactive Set Estimator'}</span>
            </button>
          </div>
        </div>

        {/* Editable Placeholder Pricing Disclaimer */}
        <div className="mb-10 bg-[#FDFBF7] border border-[#E8DCD4] p-4 sm:p-5 rounded-sm flex items-start gap-3.5 text-xs text-[#7E726A] leading-relaxed">
          <HelpCircle className="w-4 h-4 text-[#BAA99E] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#27201C] uppercase tracking-wider mr-1.5">
              Owner Note:
            </span>
            All prices shown are estimated starting rates and represent placeholder values until officially finalized by Annalia Atelier. Final rates may vary based on customized nail length, custom hand-painted complexity, and individual consultation.
          </div>
        </div>

        {/* Interactive Set Estimator (Toggleable) */}
        {showEstimator && (
          <div className="mb-16 bg-[#FDFBF7] border border-[#D5C7BC] p-6 sm:p-8 rounded-sm shadow-xs animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-[#E8DCD4] pb-4 mb-6">
              <div>
                <h3 className="font-serif text-xl text-[#27201C]">Custom Set Price Estimator</h3>
                <p className="text-xs text-[#7E726A] mt-0.5">
                  Combine your desired base foundation and nail art complexity for a real-time studio estimate.
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-wider text-[#7E726A]">Estimated Total</p>
                <p className="text-2xl font-serif font-medium text-[#27201C] tabular-nums">
                  ${totalEstimate} <span className="text-xs font-sans text-[#7E726A]">CAD</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1: Base */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#27201C] mb-2.5">
                  1. Base Service
                </label>
                <div className="space-y-2">
                  {mainServices.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-start justify-between p-3 border rounded-sm cursor-pointer transition-colors ${
                        selectedBase === service.id
                          ? 'border-[#27201C] bg-[#F7F4EE]'
                          : 'border-[#E8DCD4] bg-white hover:border-[#BAA99E]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="base_service"
                          checked={selectedBase === service.id}
                          onChange={() => setSelectedBase(service.id)}
                          className="accent-[#27201C]"
                        />
                        <span className="text-xs font-medium text-[#27201C]">{service.name}</span>
                      </div>
                      <span className="text-xs font-mono tabular-nums text-[#7E726A]">
                        ${service.priceValue}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 2: Art Tier */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#27201C] mb-2.5">
                  2. Nail Art Level
                </label>
                <div className="space-y-2">
                  <label
                    className={`flex items-start justify-between p-3 border rounded-sm cursor-pointer transition-colors ${
                      selectedArt === 'none'
                        ? 'border-[#27201C] bg-[#F7F4EE]'
                        : 'border-[#E8DCD4] bg-white hover:border-[#BAA99E]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="art_tier"
                        checked={selectedArt === 'none'}
                        onChange={() => setSelectedArt('none')}
                        className="accent-[#27201C]"
                      />
                      <span className="text-xs font-medium text-[#27201C]">Solid Single Color / No Art</span>
                    </div>
                    <span className="text-xs font-mono tabular-nums text-[#7E726A]">+$0</span>
                  </label>

                  {addOnServices.map((addon) => (
                    <label
                      key={addon.id}
                      className={`flex items-start justify-between p-3 border rounded-sm cursor-pointer transition-colors ${
                        selectedArt === addon.id
                          ? 'border-[#27201C] bg-[#F7F4EE]'
                          : 'border-[#E8DCD4] bg-white hover:border-[#BAA99E]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="art_tier"
                          checked={selectedArt === addon.id}
                          onChange={() => setSelectedArt(addon.id)}
                          className="accent-[#27201C]"
                        />
                        <span className="text-xs font-medium text-[#27201C]">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono tabular-nums text-[#7E726A]">
                        +${addon.priceValue}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-on Removal & Action */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#27201C] mb-2.5">
                  3. Extra Care & Soak-Off
                </label>
                <label
                  className={`flex items-start justify-between p-3 border rounded-sm cursor-pointer transition-colors mb-4 ${
                    includeRemoval
                      ? 'border-[#27201C] bg-[#F7F4EE]'
                      : 'border-[#E8DCD4] bg-white hover:border-[#BAA99E]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includeRemoval}
                      onChange={(e) => setIncludeRemoval(e.target.checked)}
                      className="accent-[#27201C]"
                    />
                    <div>
                      <p className="text-xs font-medium text-[#27201C]">Gentle Soak-Off Removal</p>
                      <p className="text-[11px] text-[#7E726A]">Safe removal of previous Gel-X</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono tabular-nums text-[#7E726A]">+$25</span>
                </label>

                <button
                  onClick={() => onSelectService(selectedBase)}
                  className="w-full py-3 text-xs uppercase tracking-widest font-medium text-white bg-[#27201C] rounded-sm hover:bg-[#3D332D] transition-colors"
                >
                  Book This Configured Set (${totalEstimate} CAD)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Primary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#FDFBF7] border border-[#E8DCD4] p-6 sm:p-7 rounded-sm flex flex-col justify-between hover:border-[#BAA99E] transition-all hover:shadow-xs group"
            >
              <div>
                {/* Clean unboxed duration & category */}
                <div className="flex items-center justify-between text-xs text-[#7E726A] mb-3 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#BAA99E]" />
                    <span>{service.duration}</span>
                  </span>
                  <span className="uppercase tracking-wider text-[11px] font-sans text-[#BAA99E]">
                    {service.subtitle}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="font-serif text-2xl text-[#27201C] mb-2 group-hover:text-[#4A3B32] transition-colors">
                  {service.name}
                </h3>

                {/* Starting Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-serif text-[#27201C] tabular-nums font-medium">
                    {service.estimatedPrice}
                  </span>
                  <span className="text-xs text-[#7E726A] font-sans">starting rate</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#7E726A] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-2 mb-6 border-t border-[#F3EBE6] pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#5C524B]">
                      <Check className="w-3.5 h-3.5 text-[#BAA99E] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] text-[#7E726A] italic mb-4 bg-[#F7F4EE] p-2.5 rounded-xs">
                  Best for: {service.recommendedFor}
                </p>
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full py-2.5 text-xs uppercase tracking-wider font-medium text-[#27201C] border border-[#27201C] rounded-sm hover:bg-[#27201C] hover:text-white transition-colors"
                >
                  Select & Request Date
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Nail Art Tiers Banner */}
        <div className="border border-[#E8DCD4] bg-[#FDFBF7] p-6 sm:p-8 rounded-sm">
          <div className="max-w-2xl mb-6">
            <span className="text-xs uppercase tracking-widest text-[#7E726A] font-medium">
              Customization Menu
            </span>
            <h3 className="font-serif text-2xl text-[#27201C] mt-1">
              Nail Art Add-Ons & Design Tiers
            </h3>
            <p className="text-xs sm:text-sm text-[#7E726A] mt-1">
              Add-ons are paired with any Gel-X Full Set or Structured Manicure. Design ideas and reference photos can be sent in advance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOnServices.map((addon) => (
              <div
                key={addon.id}
                className="p-5 border border-[#F3EBE6] bg-[#F7F4EE] rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#BAA99E] font-medium">
                      {addon.subtitle}
                    </span>
                    <span className="text-sm font-serif font-medium text-[#27201C] tabular-nums">
                      {addon.estimatedPrice}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-[#27201C] mb-2">{addon.name}</h4>
                  <p className="text-xs text-[#7E726A] leading-relaxed mb-4">{addon.description}</p>
                </div>
                <div className="text-[11px] text-[#7E726A] border-t border-[#E8DCD4] pt-2 flex items-center justify-between">
                  <span>Duration</span>
                  <span className="font-mono text-[#27201C]">{addon.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
