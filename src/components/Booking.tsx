import React, { useState } from 'react';
import { Calendar, Clock, Send, Sparkles, Check, Copy, ExternalLink, Settings, Info, Upload } from 'lucide-react';
import { BookingInquiry, ServiceItem } from '../types';
import { STUDIO_INFO } from '../data/studioData';

interface BookingProps {
  services: ServiceItem[];
  preselectedServiceId?: string;
  preselectedStyleName?: string;
  bookingUrl: string;
  onOpenSettings: () => void;
}

export const Booking: React.FC<BookingProps> = ({
  services,
  preselectedServiceId,
  preselectedStyleName,
  bookingUrl,
  onOpenSettings,
}) => {
  const [formData, setFormData] = useState<BookingInquiry>({
    fullName: '',
    email: '',
    instagram: '',
    serviceId: preselectedServiceId || 'gel-x-full-set',
    nailLength: 'Medium',
    nailShape: 'Almond',
    currentNailState: 'Bare natural nails',
    preferredDate: '',
    preferredTime: 'Afternoon (1:00 PM – 4:00 PM)',
    artDescription: preselectedStyleName ? `Interested in style: ${preselectedStyleName}` : '',
  });

  const [submittedSummary, setSubmittedSummary] = useState<BookingInquiry | null>(null);
  const [copied, setCopied] = useState(false);

  // Update if preselectedServiceId changes externally
  React.useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  React.useEffect(() => {
    if (preselectedStyleName) {
      setFormData((prev) => ({
        ...prev,
        artDescription: `Interested in style: ${preselectedStyleName}`,
      }));
    }
  }, [preselectedStyleName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedSummary({ ...formData });
  };

  const handleCopySummary = () => {
    if (!submittedSummary) return;
    const selectedService = services.find((s) => s.id === submittedSummary.serviceId);
    const summaryText = `Hi Annalia! I'd love to request an appointment at Annalia Atelier:
- Name: ${submittedSummary.fullName}
- Instagram: ${submittedSummary.instagram || 'N/A'}
- Service: ${selectedService?.name || submittedSummary.serviceId}
- Desired Shape & Length: ${submittedSummary.nailShape}, ${submittedSummary.nailLength}
- Current Nails: ${submittedSummary.currentNailState}
- Preferred Date: ${submittedSummary.preferredDate || 'Flexible'} (${submittedSummary.preferredTime})
- Art / Notes: ${submittedSummary.artDescription || 'Clean & classic'}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentServiceObj = services.find((s) => s.id === formData.serviceId);

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[#7E726A] font-medium mb-2">
            Reserve Your Session
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#27201C] tracking-tight">
            Appointment Request & Inquiries
          </h2>
          <p className="text-sm text-[#7E726A] mt-2 max-w-lg mx-auto">
            Plan your next bespoke nail set. Appointments are scheduled exclusively 1-on-1 for personalized attention.
          </p>
        </div>

        {/* Demo Mode Notice & Direct Booking Bar */}
        <div className="mb-8 p-5 bg-[#F7F4EE] border border-[#E8DCD4] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-[#BAA99E] shrink-0 mt-0.5" />
            <div className="text-xs text-[#7E726A] leading-relaxed">
              <span className="font-semibold text-[#27201C] uppercase tracking-wider block sm:inline mr-1">
                Demo Notice:
              </span>
              This form is an interactive prototype for testing. You can submit to preview a complete client inquiry summary, or visit Annalia's live booking page directly.
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs uppercase tracking-wider font-medium text-white bg-[#27201C] rounded-sm hover:bg-[#3D332D] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Direct Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenSettings}
              title="Configure Destination URL"
              className="p-2 text-[#7E726A] hover:text-[#27201C] border border-[#D5C7BC] rounded-sm bg-white hover:bg-[#F3EBE6] transition-colors"
              aria-label="Configure Booking Destination"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* The Inquiry Form */}
        <div className="bg-[#FDFBF7] border border-[#E8DCD4] p-6 sm:p-10 rounded-sm shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#27201C] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Julia Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DCD4] rounded-sm focus:outline-hidden focus:border-[#27201C] transition-colors text-[#27201C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#27201C] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DCD4] rounded-sm focus:outline-hidden focus:border-[#27201C] transition-colors text-[#27201C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#27201C] mb-1.5">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  placeholder="@yourhandle"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DCD4] rounded-sm focus:outline-hidden focus:border-[#27201C] transition-colors text-[#27201C]"
                />
              </div>
            </div>

            {/* Service & Condition Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#F3EBE6]">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#27201C] mb-1.5">
                  Selected Service *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DCD4] rounded-sm focus:outline-hidden focus:border-[#27201C] transition-colors text-[#27201C]"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.estimatedPrice})
                    </option>
                  ))}
                </select>
                {currentServiceObj && (
                  <p className="text-[11px] text-[#7E726A] mt-1 italic">
                    Duration: {currentServiceObj.duration} · {currentServiceObj.subtitle}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#27201C] mb-1.5">
                  Current Nail State *
                </label>
                <select
                  value={formData.currentNailState}
                  onChange={(e) => setFormData({ ...formData, currentNailState: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DCD4] rounded-sm focus:outline-hidden focus:border-[#27201C] transition-colors text-[#27201C]"
                >
                  <option value="Bare natural nails">Bare natural nails (Ready for full set)</option>
                  <option value="Existing Gel-X by Annalia Atelier">Existing Gel-X by Annalia Atelier (Need soak off)</option>
                  <option value="Natural nails with simple gel">Natural nails with simple gel</option>
                </select>
                <p className="text-[11px] text-[#7E726A] mt-1">
                  Note: Foreign acrylic / dip powder soak-offs are not accepted.
                </p>
              </div>
            </div>

            {/* Shape & Length Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#F3EBE6]">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#27201C] mb-1.5">
                  Preferred Nail Shape
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Almond', 'Squoval', 'Square', 'Oval', 'Coffin', 'Natural'].map((shape) => (
                    <button
                      type="button"
                      key={shape}
                      onClick={() => setFormData({ ...formData, nailShape: shape })}
                      className={`py-2 text-xs font-medium rounded-xs border transition-colors ${
                        formData.nailShape === shape
                          ? 'border-[#27201C] bg-[#27201C] text-white'
                          : 'border-[#E8DCD4] bg-white text-[#7E726A] hover:border-[#BAA99E]'
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#27201C] mb-1.5">
                  Preferred Length
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['Natural', 'Short', 'Medium', 'Long'].map((length) => (
                    <button
                      type="button"
                      key={length}
                      onClick={() => setFormData({ ...formData, nailLength: length })}
                      className={`py-2 text-xs font-medium rounded-xs border transition-colors ${
                        formData.nailLength === length
                          ? 'border-[#27201C] bg-[#27201C] text-white'
                          : 'border-[#E8DCD4] bg-white text-[#7E726A] hover:border-[#BAA99E]'
                      }`}
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Date & Time Window */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#F3EBE6]">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#27201C] mb-1.5">
                  Desired Date (Tue – Sat)
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DCD4] rounded-sm focus:outline-hidden focus:border-[#27201C] transition-colors text-[#27201C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#27201C] mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DCD4] rounded-sm focus:outline-hidden focus:border-[#27201C] transition-colors text-[#27201C]"
                >
                  <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                  <option value="Late Afternoon (4:00 PM – 7:00 PM)">Late Afternoon (4:00 PM – 7:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Design Notes & Inspiration */}
            <div className="pt-2 border-t border-[#F3EBE6]">
              <label className="block text-xs uppercase tracking-wider font-medium text-[#27201C] mb-1.5">
                Design Inspiration & Notes
              </label>
              <textarea
                rows={3}
                placeholder="Describe your design vision (e.g. micro French with glazed chrome, milky nude base, reference photo on IG)..."
                value={formData.artDescription}
                onChange={(e) => setFormData({ ...formData, artDescription: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E8DCD4] rounded-sm focus:outline-hidden focus:border-[#27201C] transition-colors text-[#27201C] resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#7E726A]">
                Deposit terms apply upon consultation confirmation.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-widest font-medium text-white bg-[#27201C] rounded-sm hover:bg-[#3D332D] transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit Inquiry (Demo Preview)</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Submission Confirmation Modal */}
        {submittedSummary && (
          <div
            className="fixed inset-0 z-50 bg-[#1A1513]/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSubmittedSummary(null)}
          >
            <div
              className="bg-[#FDFBF7] border border-[#E8DCD4] rounded-sm max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#BAA99E] font-medium mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Inquiry Prepared</span>
              </div>

              <h3 className="font-serif text-2xl text-[#27201C] mb-3">
                Appointment Summary Ready
              </h3>

              <p className="text-xs text-[#7E726A] mb-6 leading-relaxed">
                Here is your complete booking summary. You can copy it to direct message{' '}
                <strong className="text-[#27201C]">{STUDIO_INFO.instagramHandle}</strong> on Instagram, or proceed to the booking portal.
              </p>

              {/* Summary Card */}
              <div className="bg-[#F7F4EE] border border-[#E8DCD4] p-4 rounded-sm space-y-2.5 text-xs text-[#27201C] mb-6">
                <div className="flex justify-between border-b border-[#E8DCD4] pb-2">
                  <span className="text-[#7E726A]">Client:</span>
                  <span className="font-medium">{submittedSummary.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8DCD4] pb-2">
                  <span className="text-[#7E726A]">Contact:</span>
                  <span className="font-medium">{submittedSummary.email} ({submittedSummary.instagram || 'No IG'})</span>
                </div>
                <div className="flex justify-between border-b border-[#E8DCD4] pb-2">
                  <span className="text-[#7E726A]">Service:</span>
                  <span className="font-medium">
                    {services.find((s) => s.id === submittedSummary.serviceId)?.name}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#E8DCD4] pb-2">
                  <span className="text-[#7E726A]">Shape & Length:</span>
                  <span className="font-medium">{submittedSummary.nailShape} · {submittedSummary.nailLength}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8DCD4] pb-2">
                  <span className="text-[#7E726A]">Preferred Slot:</span>
                  <span className="font-medium">{submittedSummary.preferredDate || 'Open date'} ({submittedSummary.preferredTime})</span>
                </div>
                {submittedSummary.artDescription && (
                  <div className="pt-1">
                    <span className="text-[#7E726A] block mb-0.5">Design Notes:</span>
                    <span className="italic text-[#5C524B]">{submittedSummary.artDescription}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleCopySummary}
                  className="w-full py-3 text-xs uppercase tracking-wider font-medium text-[#27201C] border border-[#27201C] rounded-sm hover:bg-[#27201C] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Summary for Instagram DM</span>
                    </>
                  )}
                </button>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-xs uppercase tracking-wider font-medium text-white bg-[#27201C] rounded-sm hover:bg-[#3D332D] transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <span>Open Annalia's Booking Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSubmittedSummary(null)}
                  className="w-full py-2 text-xs text-[#7E726A] hover:text-[#27201C] transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
