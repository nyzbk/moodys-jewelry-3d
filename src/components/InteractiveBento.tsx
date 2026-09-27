import React, { useState } from 'react';
import { Award, Compass, Sparkles, Sliders, CheckCircle2, ShieldCheck, Gem } from 'lucide-react';

interface InteractiveBentoProps {
  onOpenBooking: () => void;
}

export const InteractiveBento: React.FC<InteractiveBentoProps> = ({ onOpenBooking }) => {
  const [cut, setCut] = useState<'round' | 'oval' | 'emerald' | 'radiant'>('round');
  const [carat, setCarat] = useState<'1.5' | '2.5' | '3.75'>('2.5');
  const [metal, setMetal] = useState<'platinum' | 'yellow' | 'rose'>('platinum');

  return (
    <section id="gemological-capabilities" className="relative py-28 md:py-36 bg-[#0A0A0D] text-[#F0EBE1] overflow-hidden border-t border-[#CFAB60]/15">
      {/* Ambient Radial Glow (Meta AI Standard) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#CFAB60]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#16171C]/90 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#CFAB60] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#CFAB60]" />
              OPTICAL BRILLIANCE & GEMOLOGY / 03
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[40px] md:text-[56px] leading-[0.95] text-[#F0EBE1]">
              The Triple-Excellence Benchmark.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#9E9AA3] max-w-md font-['Montserrat',sans-serif] leading-relaxed">
            Every diamond in our vault is evaluated across strict optical symmetry tolerances to ensure maximum light return and fire.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Interactive Diamond Ring Simulator (Col Span 2) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-[#16171C]/80 border border-[#CFAB60]/30 p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#CFAB60]/20 pb-4 mb-6">
                <span className="text-[11px] font-mono text-[#CFAB60] tracking-widest uppercase flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#CFAB60]" />
                  CUSTOM ENGAGEMENT SUITE
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#CFAB60]/20 text-[#CFAB60] text-[10px] font-mono font-bold">
                  GIA CERTIFIED
                </span>
              </div>

              <h3 className="font-['Cormorant_Garamond',serif] text-[24px] md:text-[30px] text-[#F0EBE1] mb-2">
                Configure your engagement heirloom.
              </h3>
              <p className="text-[13px] text-[#9E9AA3] mb-6">
                Select diamond cut, carat weight benchmark, and noble precious metal setting.
              </p>

              {/* Cut Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#9E9AA3] block mb-2 uppercase">1. Diamond Cut:</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['round', 'oval', 'emerald', 'radiant'] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCut(c)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        cut === c
                          ? 'bg-[#CFAB60] text-[#0A0A0D] font-bold shadow-md shadow-[#CFAB60]/20'
                          : 'bg-[#0A0A0D]/80 text-[#F0EBE1] border border-[#CFAB60]/20 hover:border-[#CFAB60]/50'
                      }`}
                    >
                      {c === 'round' ? 'Round Brilliant' : c === 'oval' ? 'Oval Cut' : c === 'emerald' ? 'Emerald Step' : 'Radiant Cut'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Carat Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#9E9AA3] block mb-2 uppercase">2. Carat Weight Tier:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['1.5', '2.5', '3.75'] as const).map((crt) => (
                    <button
                      key={crt}
                      onClick={() => setCarat(crt)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        carat === crt
                          ? 'bg-[#CFAB60] text-[#0A0A0D] font-bold shadow-md shadow-[#CFAB60]/20'
                          : 'bg-[#0A0A0D]/80 text-[#F0EBE1] border border-[#CFAB60]/20 hover:border-[#CFAB60]/50'
                      }`}
                    >
                      {crt === '1.5' ? '1.50 CT • F/VS1' : crt === '2.5' ? '2.50 CT • E/VVS2' : '3.75 CT • D/IF'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Metal Selection */}
              <div>
                <span className="text-[11px] font-mono text-[#9E9AA3] block mb-2 uppercase">3. Precious Metal Setting:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['platinum', 'yellow', 'rose'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMetal(m)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        metal === m
                          ? 'bg-[#CFAB60] text-[#0A0A0D] font-bold shadow-md shadow-[#CFAB60]/20'
                          : 'bg-[#0A0A0D]/80 text-[#F0EBE1] border border-[#CFAB60]/20 hover:border-[#CFAB60]/50'
                      }`}
                    >
                      {m === 'platinum' ? '950 Pure Platinum' : m === 'yellow' ? '18K Yellow Gold' : '18K Rose Gold'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#CFAB60]/20 flex items-center justify-between">
              <div className="text-[11px] font-mono text-[#CFAB60]">
                PROFILE: {cut.toUpperCase()} • {carat} CT • {metal.toUpperCase()}
              </div>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-lg bg-[#CFAB60] text-[#0A0A0D] font-mono text-[11px] font-bold uppercase hover:bg-[#dfbd72] transition-colors"
              >
                Inquire With Specifications
              </button>
            </div>
          </div>

          {/* Card 2: 80+ Years Provenance */}
          <div className="rounded-2xl bg-[#16171C]/80 border border-[#CFAB60]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#CFAB60] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Award className="w-4 h-4 text-[#CFAB60]" />
                OKLAHOMA HERITAGE
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[54px] font-bold text-[#F0EBE1] leading-none mb-2">
                80+
              </div>
              <div className="text-[13px] text-[#CFAB60] font-medium mb-3">
                Years of Continuous Family Trust
              </div>
              <p className="text-[13px] text-[#9E9AA3] font-['Montserrat',sans-serif] leading-relaxed">
                Founded in 1944. Still family owned and operated by Tyler Jones and the Moody family, upholding Oklahoma's highest standard of jewelry integrity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#CFAB60]/15 flex items-center gap-2 text-[11px] font-mono text-[#9E9AA3]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Verified Tulsa Provenance
            </div>
          </div>

          {/* Card 3: 7 Showroom Locations */}
          <div className="rounded-2xl bg-[#16171C]/80 border border-[#CFAB60]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#CFAB60] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Compass className="w-4 h-4 text-[#CFAB60]" />
                REGIONAL REACH
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[54px] font-bold text-[#F0EBE1] leading-none mb-2">
                7
              </div>
              <div className="text-[13px] text-[#CFAB60] font-medium mb-3">
                Tulsa Metro Showroom Salons
              </div>
              <p className="text-[13px] text-[#9E9AA3] font-['Montserrat',sans-serif] leading-relaxed">
                Utica Square, Sheridan Headquarters, Woodland Hills, Broken Arrow, South Memorial, Bixby, and Owasso.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#CFAB60]/15 flex items-center gap-2 text-[11px] font-mono text-[#9E9AA3]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Convenient Regional Access
            </div>
          </div>

          {/* Card 4: 100% GIA Certified Diamonds */}
          <div className="md:col-span-2 rounded-2xl bg-[#16171C]/80 border border-[#CFAB60]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#CFAB60] text-[11px] font-mono tracking-widest uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-[#CFAB60]" />
                GRADUATION GEMOLOGY STANDARDS
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[36px] md:text-[44px] text-[#F0EBE1] leading-tight mb-2">
                Zero Compromise. GIA Graded.
              </div>
              <p className="text-[14px] text-[#9E9AA3] font-['Montserrat',sans-serif] leading-relaxed mb-6">
                We refuse misleading in-house certifications. Every center diamond is independently graded by the Gemological Institute of America (GIA), laser-inscribed on the girdle for security.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#CFAB60]/15">
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F0EBE1]">100%</div>
                <div className="text-[11px] font-mono text-[#9E9AA3]">Conflict-Free</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F0EBE1]">Lifetime</div>
                <div className="text-[11px] font-mono text-[#9E9AA3]">Diamond Upgrade</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F0EBE1]">Complimentary</div>
                <div className="text-[11px] font-mono text-[#9E9AA3]">Cleaning & Inspection</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F0EBE1]">CW21</div>
                <div className="text-[11px] font-mono text-[#9E9AA3]">Certified Watchmaker</div>
              </div>
            </div>
          </div>

          {/* Card 5: Direct Executive Leadership */}
          <div className="md:col-span-2 rounded-2xl bg-[#16171C]/80 border border-[#CFAB60]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#CFAB60] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Gem className="w-4 h-4 text-[#CFAB60]" />
                EXECUTIVE DIAMOND ACQUISITIONS
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[36px] md:text-[44px] text-[#F0EBE1] leading-tight mb-2">
                Direct Antwerp Sourcing.
              </div>
              <p className="text-[14px] text-[#9E9AA3] font-['Montserrat',sans-serif] leading-relaxed mb-4">
                President Tyler Jones travels directly to Antwerp and world diamond bourses to hand-select rare diamonds, cutting out middlemen markups for Oklahoma clients.
              </p>
            </div>
            <div className="pt-4 border-t border-[#CFAB60]/15 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#CFAB60]">tjones@moodysjewelry.com</span>
              <span className="text-[11px] font-mono text-[#9E9AA3]">President Direct Line</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
