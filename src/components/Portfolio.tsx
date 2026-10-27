import React, { useState } from 'react';
import { Maximize2, X, Sparkles, ArrowRight } from 'lucide-react';
import { NailCategory, PortfolioItem } from '../types';

interface PortfolioProps {
  items: PortfolioItem[];
  onRequestStyle: (styleName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ items, onRequestStyle }) => {
  const [activeFilter, setActiveFilter] = useState<NailCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterTabs: { id: NailCategory; label: string }[] = [
    { id: 'all', label: 'All Sets' },
    { id: 'french', label: 'French & Micro-Tips' },
    { id: 'minimalist', label: 'Minimalist & Nude' },
    { id: 'chrome', label: 'Glazed Chrome' },
    { id: 'custom-3d', label: 'Bespoke 3D Art' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#7E726A] font-medium mb-2">
            Selected Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#27201C] tracking-tight">
            Artistry & Lookbook
          </h2>
          <p className="text-sm text-[#7E726A] mt-3">
            Handcrafted Gel-X extensions and structured gel creations from our private Mississauga studio.
          </p>
        </div>

        {/* Interactive Filter Tabs (Zero-Pill Discipline: Clean Segmented Control) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#F7F4EE] border border-[#E8DCD4] rounded-sm">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-xs transition-all duration-200 whitespace-nowrap shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-[#27201C] text-white shadow-xs'
                    : 'text-[#7E726A] hover:text-[#27201C] hover:bg-[#E8DCD4]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-[#F7F4EE] border border-[#E8DCD4] rounded-sm overflow-hidden hover:border-[#BAA99E] transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DCD4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#27201C]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 bg-[#FDFBF7]/90 text-[#27201C] rounded-full shadow-md backdrop-blur-xs">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                {/* Clean unboxed category badge */}
                <span className="absolute top-3 left-3 bg-[#FDFBF7]/90 text-[#27201C] text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-xs backdrop-blur-xs">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#27201C] group-hover:text-[#4A3B32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7E726A] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DCD4] flex items-center justify-between text-xs text-[#7E726A]">
                  <span className="font-medium text-[#27201C]">{item.shape}</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#BAA99E]">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-[#1A1513]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-[#FDFBF7] border border-[#E8DCD4] rounded-sm max-w-3xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#FDFBF7]/80 hover:bg-[#FDFBF7] text-[#27201C] rounded-full border border-[#E8DCD4] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Modal Image */}
                <div className="md:col-span-7 bg-[#27201C] max-h-[460px] md:max-h-none overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Modal Details */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#BAA99E] font-medium mb-1">
                      {selectedItem.categoryLabel}
                    </div>
                    <h3 className="font-serif text-2xl text-[#27201C] mb-3">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7E726A] leading-relaxed mb-6">
                      {selectedItem.description}
                    </p>

                    <div className="space-y-3 border-t border-[#E8DCD4] pt-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#7E726A]">Shape:</span>
                        <span className="font-medium text-[#27201C]">{selectedItem.shape}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7E726A]">Length:</span>
                        <span className="font-medium text-[#27201C]">{selectedItem.length}</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[#7E726A]">Technique & Materials:</span>
                        <span className="font-medium text-[#27201C] mt-0.5">
                          {selectedItem.technique}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E8DCD4]">
                    <button
                      onClick={() => {
                        const styleTitle = selectedItem.title;
                        setSelectedItem(null);
                        onRequestStyle(styleTitle);
                      }}
                      className="w-full py-3 text-xs uppercase tracking-widest font-medium text-white bg-[#27201C] rounded-sm hover:bg-[#3D332D] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Request This Look</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
