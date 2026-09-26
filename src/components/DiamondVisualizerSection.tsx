import React, { useState } from 'react';
import { DIAMOND_CUTS, type DiamondCut } from '../data/jewelryData';
import { Sparkles, Sliders, CheckCircle, ArrowRight, Eye } from 'lucide-react';

interface VisualizerProps {
  onSelectDiamondSpec: (spec: { shape: string; carat: number; color: string; clarity: string }) => void;
}

export const DiamondVisualizerSection: React.FC<VisualizerProps> = ({ onSelectDiamondSpec }) => {
  const [selectedCut, setSelectedCut] = useState<DiamondCut>(DIAMOND_CUTS[0]);
  const [carat, setCarat] = useState<number>(2.50);
  const [color, setColor] = useState<string>('D');
  const [clarity, setClarity] = useState<string>('VVS1');

  // Approximate face-up millimeter calculation based on carat weight
  const mmDiameter = (6.5 * Math.pow(carat, 1 / 3)).toFixed(1);

  const colors = [
    { grade: 'D', desc: 'Completely Colorless (Pinnacle)' },
    { grade: 'E', desc: 'Colorless (Minute Traces)' },
    { grade: 'F', desc: 'Colorless (GIA Rare)' },
    { grade: 'G', desc: 'Near Colorless (Exceptional Value)' },
    { grade: 'H', desc: 'Near Colorless (Warm Tint Under Scope)' }
  ];

  const clarities = [
    { grade: 'FL', desc: 'Flawless (No Inclusions Under 10x)' },
    { grade: 'IF', desc: 'Internally Flawless' },
    { grade: 'VVS1', desc: 'Very, Very Slightly Included' },
    { grade: 'VS1', desc: 'Very Slightly Included' }
  ];

  return (
    <section id="diamond-visualizer" className="relative py-24 bg-sapphire-900 border-t border-b border-platinum-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sapphire-950 border border-diamond-fire/30 text-diamond-fire font-sans text-xs tracking-widest uppercase">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive 4Cs Gemological Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Calibrate Your Rare Diamond.
          </h2>
          <p className="text-sm sm:text-base text-platinum-300 font-sans leading-relaxed">
            Every diamond in Moody’s private vaults is individually hand-selected by GIA graduate gemologists. Adjust cut geometry, carat proportions, and optical clarity below to preview your ideal centerpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Shape Selector & Interactive Sliders (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-sapphire-950/70 p-6 sm:p-8 border border-platinum-200/15 backdrop-blur-sm">
            {/* 1. Shape Selection */}
            <div className="space-y-3">
              <label className="block text-xs font-mono tracking-widest uppercase text-platinum-400">
                1. Select Diamond Silhouette ({selectedCut.name})
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DIAMOND_CUTS.map((cut) => (
                  <button
                    key={cut.id}
                    onClick={() => setSelectedCut(cut)}
                    className={`p-3 text-center border transition-all duration-300 flex flex-col items-center gap-2 ${
                      selectedCut.id === cut.id
                        ? 'border-diamond-fire bg-sapphire-850 shadow-md shadow-diamond-glow/30'
                        : 'border-platinum-200/10 bg-sapphire-900/50 hover:border-platinum-200/30'
                    }`}
                  >
                    <div className="w-12 h-12 overflow-hidden rounded-full border border-platinum-200/20">
                      <img src={cut.image} alt={cut.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-serif font-bold text-white">{cut.name}</span>
                    <span className="text-[10px] text-diamond-fire font-mono">{cut.facets} Facets</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Carat Weight Slider */}
            <div className="space-y-4 pt-4 border-t border-platinum-200/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono tracking-widest uppercase text-platinum-400">
                  2. Center Stone Carat Weight
                </label>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-serif font-bold text-diamond-fire">{carat.toFixed(2)} ct</span>
                  <span className="text-xs font-mono text-platinum-400">~{mmDiameter} mm spread</span>
                </div>
              </div>

              <input
                type="range"
                min="0.75"
                max="5.00"
                step="0.05"
                value={carat}
                onChange={(e) => setCarat(parseFloat(e.target.value))}
                className="w-full h-2 bg-sapphire-800 rounded-lg appearance-none cursor-pointer accent-diamond-fire"
              />

              <div className="flex justify-between text-[10px] font-mono text-platinum-400">
                <span>0.75 ct</span>
                <span>1.50 ct</span>
                <span>2.50 ct (Popular)</span>
                <span>3.50 ct</span>
                <span>5.00 ct (Statement)</span>
              </div>
            </div>

            {/* 3. Color Grade Selector */}
            <div className="space-y-3 pt-4 border-t border-platinum-200/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono tracking-widest uppercase text-platinum-400">
                  3. Colorless Spectrum Grade
                </label>
                <span className="text-xs font-serif font-semibold text-white">Grade {color}</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {colors.map((c) => (
                  <button
                    key={c.grade}
                    onClick={() => setColor(c.grade)}
                    className={`py-2 text-center border font-mono text-xs transition-colors ${
                      color === c.grade
                        ? 'bg-diamond-fire/20 border-diamond-fire text-white font-bold'
                        : 'bg-sapphire-900 border-platinum-200/10 text-platinum-300 hover:border-platinum-200/30'
                    }`}
                  >
                    {c.grade}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Clarity Grade Selector */}
            <div className="space-y-3 pt-4 border-t border-platinum-200/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono tracking-widest uppercase text-platinum-400">
                  4. Optical Clarity Purity
                </label>
                <span className="text-xs font-serif font-semibold text-white">{clarity}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {clarities.map((cl) => (
                  <button
                    key={cl.grade}
                    onClick={() => setClarity(cl.grade)}
                    className={`py-2 text-center border font-mono text-xs transition-colors ${
                      clarity === cl.grade
                        ? 'bg-diamond-fire/20 border-diamond-fire text-white font-bold'
                        : 'bg-sapphire-900 border-platinum-200/10 text-platinum-300 hover:border-platinum-200/30'
                    }`}
                  >
                    {cl.grade}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Calibrated Diamond Preview & In-Store Inquiry (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-sapphire-950 via-sapphire-900 to-sapphire-950 p-6 sm:p-8 border border-diamond-fire/30 shadow-2xl relative space-y-6">
            <div className="flex items-center justify-between border-b border-platinum-200/15 pb-4">
              <span className="text-xs font-mono tracking-widest uppercase text-diamond-champagne">
                Calibrated Gem Specification
              </span>
              <span className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-700/50 px-2 py-0.5 font-mono">
                GIA Triple Excellent
              </span>
            </div>

            {/* High-Resolution Stone Visual Simulation */}
            <div className="relative aspect-square overflow-hidden bg-sapphire-950 border border-platinum-200/20 flex items-center justify-center p-6 group">
              <img
                src={selectedCut.image}
                alt={selectedCut.name}
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sapphire-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-platinum-300 bg-sapphire-950/90 border border-platinum-200/20 px-3 py-1.5 backdrop-blur-sm">
                <span>{selectedCut.name}</span>
                <span className="text-diamond-fire font-bold">{carat.toFixed(2)} ct • {color}/{clarity}</span>
              </div>
            </div>

            {/* Stone Description */}
            <div className="space-y-2 text-xs font-sans text-platinum-300 leading-relaxed">
              <p className="font-serif text-sm font-semibold text-white">
                {selectedCut.description}
              </p>
              <div className="flex items-center gap-2 text-diamond-fire text-[11px]">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{selectedCut.lightCharacteristics}</span>
              </div>
            </div>

            {/* Diamond Summary Points */}
            <div className="space-y-1.5 pt-2 border-t border-platinum-200/10 text-[11px] text-platinum-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Hand-Inspected in Tulsa Under 40x Stereoscopic Loupe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Complimentary 100% Lifetime Diamond Trade-Up Privilege</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Conflict-Free Kimberley Process Certified</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onSelectDiamondSpec({
                shape: selectedCut.name,
                carat,
                color,
                clarity
              })}
              className="w-full py-4 bg-gradient-to-r from-sapphire-800 to-sapphire-700 hover:from-sapphire-700 hover:to-sapphire-600 text-white font-sans text-xs uppercase tracking-widest font-semibold border border-diamond-fire transition-all duration-300 shadow-lg hover:shadow-diamond-glow flex items-center justify-center gap-2 group"
            >
              <Eye className="w-4 h-4 text-diamond-fire" />
              <span>Inspect This Stone in a Tulsa Showroom</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
