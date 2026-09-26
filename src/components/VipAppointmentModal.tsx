import React, { useState, useEffect } from 'react';
import { X, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { SHOWROOMS_DATA, type Showroom, type VaultPiece } from '../data/jewelryData';
import confetti from 'canvas-confetti';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedShowroom?: Showroom | null;
  preselectedPiece?: VaultPiece | null;
  preselectedDiamondSpec?: { shape: string; carat: number; color: string; clarity: string } | null;
}

export const VipAppointmentModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  preselectedShowroom,
  preselectedPiece,
  preselectedDiamondSpec
}) => {
  const [selectedShowroomId, setSelectedShowroomId] = useState<string>(
    preselectedShowroom ? preselectedShowroom.id : SHOWROOMS_DATA[0].id
  );
  const [inquiryType, setInquiryType] = useState<string>(
    preselectedPiece ? 'Specific Vault Piece' : preselectedDiamondSpec ? 'Custom 4Cs Diamond Viewing' : 'Custom Engagement Ring Design'
  );
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Afternoon (1:00 PM – 4:00 PM)');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedShowroom) {
      setSelectedShowroomId(preselectedShowroom.id);
    }
  }, [preselectedShowroom]);

  if (!isOpen) return null;

  const currentShowroom = SHOWROOMS_DATA.find(s => s.id === selectedShowroomId) || SHOWROOMS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#f8fafc', '#e6c88b', '#030712']
      });
    } catch {
      // Ignore if confetti fails
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-sapphire-950 border border-diamond-fire/40 shadow-2xl p-6 sm:p-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-platinum-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Success State */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-sapphire-900 border border-diamond-fire flex items-center justify-center mx-auto shadow-lg shadow-diamond-glow">
              <CheckCircle2 className="w-8 h-8 text-diamond-fire" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-diamond-champagne uppercase">
                Reservation Confirmed // Priority VIP
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">
                We Await Your Visit, {fullName || 'Valued Guest'}.
              </h3>
              <p className="text-xs sm:text-sm text-platinum-300 font-sans max-w-lg mx-auto leading-relaxed">
                Your private viewing salon at our <strong className="text-white">{currentShowroom.name}</strong> has been tentatively reserved for you. A senior gemologist from our Tulsa team will contact you shortly to confirm champagne pairings and stone preparation.
              </p>
            </div>

            <div className="bg-sapphire-900/60 border border-platinum-200/15 p-4 max-w-md mx-auto text-left text-xs font-mono space-y-2">
              <div className="flex justify-between border-b border-platinum-200/10 pb-1.5">
                <span className="text-platinum-400">Confirmation ID:</span>
                <span className="text-diamond-fire font-bold">#MJ-TULSA-8491</span>
              </div>
              <div className="flex justify-between border-b border-platinum-200/10 pb-1.5">
                <span className="text-platinum-400">Showroom:</span>
                <span className="text-white">{currentShowroom.name}</span>
              </div>
              <div className="flex justify-between border-b border-platinum-200/10 pb-1.5">
                <span className="text-platinum-400">Address:</span>
                <span className="text-white">{currentShowroom.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-platinum-400">Direct Phone:</span>
                <span className="text-diamond-champagne">{currentShowroom.phone}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-sapphire-900 hover:bg-sapphire-850 text-white font-sans text-xs uppercase tracking-widest border border-diamond-fire transition-colors"
            >
              Return to Showcase
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-diamond-fire">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Private Showroom Reservation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Reserve Your VIP Consultation.
              </h3>
              <p className="text-xs text-platinum-300 font-sans">
                Enjoy unhurried, private guidance in our dedicated diamond salon with complimentary refreshments.
              </p>
            </div>

            {/* Preselected Context Badges (if any) */}
            {preselectedPiece && (
              <div className="p-3 bg-sapphire-900/60 border border-diamond-fire/30 text-xs flex items-center justify-between">
                <span className="text-platinum-300">Selected Vault Piece:</span>
                <span className="font-serif font-bold text-diamond-fire">{preselectedPiece.title} ({preselectedPiece.price})</span>
              </div>
            )}

            {preselectedDiamondSpec && (
              <div className="p-3 bg-sapphire-900/60 border border-diamond-fire/30 text-xs flex items-center justify-between">
                <span className="text-platinum-300">Calibrated Stone:</span>
                <span className="font-serif font-bold text-diamond-fire">
                  {preselectedDiamondSpec.carat}ct {preselectedDiamondSpec.shape} ({preselectedDiamondSpec.color}/{preselectedDiamondSpec.clarity})
                </span>
              </div>
            )}

            {/* Select Showroom Location */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-mono tracking-widest uppercase text-platinum-400">
                1. Select Showroom Location
              </label>
              <select
                value={selectedShowroomId}
                onChange={(e) => setSelectedShowroomId(e.target.value)}
                className="w-full bg-sapphire-900 border border-platinum-200/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-diamond-fire"
                required
              >
                {SHOWROOMS_DATA.map((showroom) => (
                  <option key={showroom.id} value={showroom.id} className="bg-sapphire-950 text-white">
                    {showroom.name} — {showroom.address}
                  </option>
                ))}
              </select>
            </div>

            {/* Consultation Purpose */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-mono tracking-widest uppercase text-platinum-400">
                2. Consultation Focus
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-sapphire-900 border border-platinum-200/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-diamond-fire"
              >
                <option value="Custom Engagement Ring Design">Custom Engagement Ring Design (From Sketch / Idea)</option>
                <option value="Certified Natural & Lab Diamond Viewing">Certified Natural & Lab Diamond Viewing</option>
                <option value="Wedding & Anniversary Bands">Wedding & Anniversary Bands</option>
                <option value="Effy & Lali Designer Collections">Effy & Lali Designer Trunk Collections</option>
                <option value="Swiss Horology & Watch Sourcing">Swiss Horology & Watch Sourcing</option>
                <option value="Heirloom Restoration & Laser Repair">Heirloom Restoration & Laser Repair</option>
              </select>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-platinum-400">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-sapphire-900 border border-platinum-200/20 px-3 py-2.5 text-xs text-white placeholder-platinum-500 focus:outline-none focus:border-diamond-fire"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-platinum-400">
                  Mobile Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(918) 555-0199"
                  className="w-full bg-sapphire-900 border border-platinum-200/20 px-3 py-2.5 text-xs text-white placeholder-platinum-500 focus:outline-none focus:border-diamond-fire"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-platinum-400">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="eleanor@example.com"
                  className="w-full bg-sapphire-900 border border-platinum-200/20 px-3 py-2.5 text-xs text-white placeholder-platinum-500 focus:outline-none focus:border-diamond-fire"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-platinum-400">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-sapphire-900 border border-platinum-200/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-diamond-fire"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="block text-xs font-mono tracking-widest uppercase text-platinum-400">
                  Preferred Time Window
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-sapphire-900 border border-platinum-200/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-diamond-fire"
                >
                  <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                  <option value="Late Afternoon (4:00 PM – 6:00 PM)">Late Afternoon (4:00 PM – 6:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-mono tracking-widest uppercase text-platinum-400">
                Special Requests or Ring Budget Considerations (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Looking for a 2.5ct radiant cut with platinum cathedral setting, or bringing heirloom stone..."
                className="w-full bg-sapphire-900 border border-platinum-200/20 px-3 py-2 text-xs text-white placeholder-platinum-500 focus:outline-none focus:border-diamond-fire resize-none"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-sapphire-800 to-sapphire-700 hover:from-sapphire-700 hover:to-sapphire-600 text-white font-sans text-xs uppercase tracking-widest font-semibold border border-diamond-fire transition-all duration-300 shadow-xl hover:shadow-diamond-glow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-diamond-fire" />
                <span>Confirm VIP Showroom Reservation</span>
              </button>
              <p className="text-[10px] text-platinum-400 text-center font-sans mt-2">
                All consultations are complimentary with zero purchase obligation.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
