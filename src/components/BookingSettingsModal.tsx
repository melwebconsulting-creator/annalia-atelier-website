import React, { useState } from 'react';
import { X, Check, RotateCcw, ExternalLink } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface BookingSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUrl: string;
  onSaveUrl: (newUrl: string) => void;
}

export const BookingSettingsModal: React.FC<BookingSettingsModalProps> = ({
  isOpen,
  onClose,
  currentUrl,
  onSaveUrl,
}) => {
  const [urlInput, setUrlInput] = useState(currentUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    onSaveUrl(urlInput.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setUrlInput(STUDIO_INFO.defaultBookingUrl);
    onSaveUrl(STUDIO_INFO.defaultBookingUrl);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1A1513]/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-[#FDFBF7] border border-[#E8DCD4] rounded-sm max-w-md w-full p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#7E726A] hover:text-[#27201C] p-1.5"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <p className="text-xs uppercase tracking-widest text-[#BAA99E] font-medium mb-1">
          Owner Configuration
        </p>
        <h3 className="font-serif text-xl text-[#27201C] mb-2">
          Configure Booking Destination URL
        </h3>
        <p className="text-xs text-[#7E726A] leading-relaxed mb-5">
          Specify where clients are directed when clicking &ldquo;Book an Appointment&rdquo; (e.g. your Beacons page, Square Appointments, Fresha, or Instagram DM link).
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#27201C] mb-1.5">
              Live Booking URL
            </label>
            <input
              type="url"
              required
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://beacons.ai/annalia.atelier"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DCD4] rounded-sm focus:outline-hidden focus:border-[#27201C] text-[#27201C]"
            />
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <button
              type="button"
              onClick={handleReset}
              className="text-[#7E726A] hover:text-[#27201C] flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset to verified Beacons URL</span>
            </button>

            <a
              href={urlInput}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#27201C] hover:underline flex items-center gap-1 font-medium"
            >
              <span>Test Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="pt-3 border-t border-[#E8DCD4] flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs uppercase tracking-wider font-medium text-[#7E726A] hover:text-[#27201C]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-white bg-[#27201C] rounded-sm hover:bg-[#3D332D] transition-colors flex items-center gap-1.5"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Destination</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
