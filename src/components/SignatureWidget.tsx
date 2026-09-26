import React, { useState } from 'react';
import { Gem, Award, Shield, ArrowRight } from 'lucide-react';

export const SignatureWidget: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [shape, setShape] = useState<'round' | 'oval' | 'emerald' | 'cushion'>('round');
  const [carat, setCarat] = useState<number>(2.0);

  return (
    <section id="diamond-vault" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0A0A0D] text-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-['Montserrat'] uppercase tracking-[0.25em] text-[#CFAB60] block mb-3 font-semibold">
            Ernest Moody’s 75-Year Heritage · Tulsa, OK
          </span>
          <h2 className="text-3xl sm:text-5xl font-['Cormorant_Garamond'] font-normal text-white tracking-tight">
            75th Anniversary Diamond 4Cs Master Vault
          </h2>
          <p className="mt-4 text-[#9E9AA3] text-sm sm:text-base max-w-2xl mx-auto font-['Montserrat'] font-light">
            Every diamond in our vault is personally hand-selected for unmatched brilliance, fire, and scintillation across our 6 Tulsa area showrooms.
          </p>
        </div>

        <div className="bg-[#16171C] rounded-2xl p-6 sm:p-12 border border-[#CFAB60]/30 shadow-2xl">
          <div className="space-y-8">
            {/* Shape Selection */}
            <div>
              <label className="block text-xs font-['Montserrat'] uppercase tracking-wider text-[#CFAB60] mb-3 font-semibold">
                1. Select Certified Diamond Silhouette
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'round', name: 'Round Brilliant (58-Facet)' },
                  { id: 'oval', name: 'Elongated Oval' },
                  { id: 'emerald', name: 'Step-Cut Emerald' },
                  { id: 'cushion', name: 'Antique Cushion' }
                ].map(s => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setShape(s.id as any)}
                    className={`p-4 rounded-xl text-xs font-['Montserrat'] font-medium transition-all text-center flex flex-col items-center gap-2 ${
                      shape === s.id
                        ? 'bg-[#CFAB60] text-[#0A0A0D] font-bold shadow-lg'
                        : 'bg-[#0A0A0D] text-[#9E9AA3] border border-white/5 hover:border-[#CFAB60]/40'
                    }`}
                  >
                    <Gem className="w-5 h-5" />
                    <span>{s.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Carat Slider */}
            <div>
              <div className="flex justify-between items-center mb-2 font-['Montserrat']">
                <label className="text-xs uppercase tracking-wider text-[#CFAB60] font-semibold">
                  2. Desired Carat Weight
                </label>
                <span className="text-sm text-[#CFAB60] font-bold font-mono">
                  {carat.toFixed(2)} CARAT
                </span>
              </div>
              <input
                type="range"
                min="0.75"
                max="4.50"
                step="0.25"
                value={carat}
                onChange={(e) => setCarat(parseFloat(e.target.value))}
                className="w-full h-2 bg-[#0A0A0D] rounded-lg appearance-none cursor-pointer accent-[#CFAB60]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#9E9AA3] mt-2">
                <span>0.75 CT</span>
                <span>2.00 CT</span>
                <span>4.50+ CT</span>
              </div>
            </div>

            {/* Vault Assurance */}
            <div className="bg-[#0A0A0D] p-6 rounded-xl border border-[#CFAB60]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-xs font-['Montserrat'] text-[#9E9AA3]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#CFAB60]" />
                  <span>100% GIA Graded · Conflict-Free Ethical Sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#CFAB60]" />
                  <span>Lifetime Trade-Up & Free Cleaning at All 6 Tulsa Salons</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#CFAB60] text-[#0A0A0D] font-['Montserrat'] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-amber-300 transition-all btn-spring text-center flex items-center justify-center gap-2"
              >
                <span>Reserve Private Viewing Room</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
