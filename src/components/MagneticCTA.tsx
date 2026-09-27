import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Award, CheckCircle2 } from 'lucide-react';

interface MagneticCTAProps {
  onOpenBooking: () => void;
}

export const MagneticCTA: React.FC<MagneticCTAProps> = ({ onOpenBooking }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const inner = buttonInnerRef.current;
    if (!btn || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.45}px, 0)`;
      inner.style.transform = `translate3d(${dx * 0.15}px, ${dy * 0.20}px, 0)`;
    };

    const onMouseLeave = () => {
      btn.style.transform = 'translate3d(0px, 0px, 0px)';
      inner.style.transform = 'translate3d(0px, 0px, 0px)';
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="vault-inquiry" className="relative py-28 md:py-40 bg-[#070709] text-[#F0EBE1] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CFAB60]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Massive Fluid Headline (Meta AI Standard) */}
        <div className="text-center mb-16">
          <div className="text-[12px] font-mono tracking-[0.3em] uppercase text-[#CFAB60] font-semibold mb-4">
            PRIVATE VAULT ACCESS / 05
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[13vw] md:text-[8.5vw] leading-[0.88] tracking-tight text-[#F0EBE1]">
            TIMELESS BRILLIANCE.
          </h2>
          <p className="mt-6 text-[16px] md:text-[20px] text-[#9E9AA3] max-w-2xl mx-auto font-light leading-relaxed font-['Montserrat',sans-serif]">
            Reserve an exclusive diamond viewing or custom bridal appointment with our Graduate Gemologists at Utica Square or Sheridan HQ.
          </p>

          {/* Dual-Layer Magnetic Button */}
          <div className="mt-12 flex justify-center">
            <button
              ref={buttonRef}
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center px-12 py-6 rounded-2xl bg-[#CFAB60] text-[#0A0A0D] text-[16px] md:text-[18px] font-bold tracking-wider uppercase shadow-2xl shadow-[#CFAB60]/25 transition-transform duration-100 ease-out cursor-pointer hover:bg-[#dfbd72]"
            >
              <span ref={buttonInnerRef} className="flex items-center gap-3 transition-transform duration-100 ease-out">
                <span>Book Private Vault Salon</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        {/* Deep Contact Intelligence Grid */}
        <div className="mt-20 pt-12 border-t border-[#CFAB60]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Executive & Leadership */}
          <div className="p-6 rounded-xl bg-[#0A0A0D] border border-[#CFAB60]/20">
            <div className="flex items-center gap-2 text-[#CFAB60] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Award className="w-4 h-4 text-[#CFAB60]" />
              PRESIDENT & EXECUTIVE
            </div>
            <div className="text-[16px] font-semibold text-[#F0EBE1]">Tyler Jones</div>
            <div className="text-[12px] text-[#9E9AA3] mb-3">President & Managing Director</div>
            <div className="text-[11px] font-mono text-[#CFAB60]">Moody's Jewelry Corporate</div>
          </div>

          {/* Phone Hotlines */}
          <div className="p-6 rounded-xl bg-[#0A0A0D] border border-[#CFAB60]/20">
            <div className="flex items-center gap-2 text-[#CFAB60] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Phone className="w-4 h-4 text-[#CFAB60]" />
              SALON CONCIERGE
            </div>
            <a href="tel:9187499999" className="block text-[16px] font-semibold text-[#F0EBE1] hover:text-[#CFAB60] transition-colors">
              (918) 749-9999
            </a>
            <div className="text-[12px] text-[#9E9AA3] mt-1">Utica Square Flagship Line</div>
            <a href="tel:9188343371" className="block text-[13px] font-mono text-[#CFAB60] mt-2">
              Sheridan HQ: (918) 834-3371 ext. 2111
            </a>
          </div>

          {/* Electronic Mail */}
          <div className="p-6 rounded-xl bg-[#0A0A0D] border border-[#CFAB60]/20">
            <div className="flex items-center gap-2 text-[#CFAB60] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Mail className="w-4 h-4 text-[#CFAB60]" />
              DIRECT COMMUNICATIONS
            </div>
            <a href="mailto:tjones@moodysjewelry.com" className="block text-[13px] font-mono text-[#F0EBE1] hover:text-[#CFAB60] transition-colors">
              tjones@moodysjewelry.com
            </a>
            <a href="mailto:support@moodysjewelry.com" className="block text-[13px] font-mono text-[#CFAB60] mt-1 hover:underline">
              support@moodysjewelry.com
            </a>
            <div className="text-[11px] text-[#9E9AA3] mt-2">Direct diamond concierge inquiries</div>
          </div>

          {/* Physical Showrooms */}
          <div className="p-6 rounded-xl bg-[#0A0A0D] border border-[#CFAB60]/20">
            <div className="flex items-center gap-2 text-[#CFAB60] text-[11px] font-mono tracking-widest uppercase mb-3">
              <MapPin className="w-4 h-4 text-[#CFAB60]" />
              FLAGSHIP SHOWROOMS
            </div>
            <div className="text-[14px] text-[#F0EBE1]">2014 Utica Square</div>
            <div className="text-[13px] text-[#9E9AA3]">Tulsa, OK 74114</div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#CFAB60]">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon-Sat 10:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono text-[#9E9AA3] border-t border-[#CFAB60]/10 pt-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              American Gem Society (AGS) Member
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              GIA Graduate Gemologists On-Site
            </span>
          </div>
          <div>© {new Date().getFullYear()} Moody's Jewelry, Inc. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
};
