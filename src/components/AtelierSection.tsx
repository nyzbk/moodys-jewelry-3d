import React from 'react';
import { ATELIER_STEPS } from '../data/jewelryData';
import { Sparkles, Hammer, ArrowRight } from 'lucide-react';

interface AtelierProps {
  onOpenBooking: () => void;
}

export const AtelierSection: React.FC<AtelierProps> = ({ onOpenBooking }) => {
  return (
    <section id="custom-atelier" className="relative py-24 bg-sapphire-950 border-t border-platinum-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sapphire-900 border border-diamond-fire/30 text-diamond-fire font-sans text-xs tracking-widest uppercase">
            <Hammer className="w-3.5 h-3.5" />
            <span>Master Goldsmithing in Midtown Tulsa</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            The Bespoke Design Atelier.
          </h2>
          <p className="text-sm sm:text-base text-platinum-300 font-sans leading-relaxed">
            Unlike online jewelry brokers who drop-ship mass-manufactured rings, Moody’s operates full bench goldsmithing and laser-welding studios right here in Tulsa. Create an irreplaceable, one-of-a-kind treasure from concept to reality in 14 days.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATELIER_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-sapphire-900/40 border border-platinum-200/15 p-6 hover:border-diamond-fire/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-platinum-200/10 pb-3">
                  <span className="font-serif text-3xl font-bold text-diamond-fire/80 group-hover:text-diamond-fire transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-platinum-400 bg-sapphire-950 px-2 py-0.5 border border-platinum-200/10">
                    {step.timeframe}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-white group-hover:text-platinum-100 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-platinum-300 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6">
                <div className="w-full h-0.5 bg-sapphire-800 group-hover:bg-diamond-fire/50 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Consultation Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-sapphire-900 via-sapphire-850 to-sapphire-900 border border-diamond-fire/40 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-2xl font-bold text-white">
              Have an Heirloom Stone to Redesign or a Sketch in Mind?
            </h4>
            <p className="text-xs sm:text-sm text-platinum-300 font-sans max-w-2xl">
              Bring your inspiration images, ancestral diamonds, or rough sketches. We provide complimentary hand-renderings and exact wax models before any metal is cast.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-gradient-to-r from-sapphire-800 to-sapphire-700 hover:from-sapphire-700 hover:to-sapphire-600 text-white font-sans text-xs uppercase tracking-widest font-semibold border border-diamond-fire transition-all shadow-lg hover:shadow-diamond-glow flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-diamond-fire" />
            <span>Begin Custom Ring Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
