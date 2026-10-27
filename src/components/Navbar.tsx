import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface NavbarProps {
  onBookClick: () => void;
  bookingUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, bookingUrl }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Studio Policies', href: '#policies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8DCD4]/70 shadow-xs py-3.5'
          : 'bg-[#FDFBF7]/60 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="font-serif text-2xl sm:text-3xl tracking-tight text-[#27201C] font-normal hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
        >
          {STUDIO_INFO.brandName}
        </a>

        {/* Zone 2: Single-line Text Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#7E726A]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#27201C] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#27201C] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider uppercase font-medium text-white bg-[#27201C] rounded-sm hover:bg-[#3D332D] transition-colors shadow-xs whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            <span>Book Appointment</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#27201C] hover:bg-[#F3EBE6] rounded transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#E8DCD4] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-[#27201C] hover:text-[#BAA99E] transition-colors py-1 border-b border-[#F3EBE6]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 text-center text-xs tracking-widest uppercase font-medium text-white bg-[#27201C] rounded-sm hover:bg-[#3D332D] transition-colors"
              >
                Book Appointment
              </button>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs tracking-wider uppercase font-medium text-[#7E726A] border border-[#E8DCD4] rounded-sm hover:bg-[#F3EBE6] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Direct Beacons Link</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
