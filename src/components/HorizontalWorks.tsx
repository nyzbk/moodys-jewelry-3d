import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface VaultItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  benchmark: string;
  features: string[];
}

const VAULT_ITEMS: VaultItem[] = [
  {
    id: 'utica-square',
    category: 'FLAGSHIP SALON',
    title: 'The Utica Square Diamond Salon',
    subtitle: 'Tulsa’s premier luxury address for high jewelry & private viewing.',
    description: 'Designed like an intimate European salon, featuring soundproof diamond viewing enclaves, high-intensity color-calibrated daylight lamps, and complimentary reserve champagne service.',
    benchmark: 'PRIVATE SALON',
    features: ['Soundproof Viewing Enclaves', 'Calibrated Color D65 Lights', 'White-Glove Diamond Concierge'],
  },
  {
    id: 'gem-lab',
    category: 'GRADUATE GEMOLOGY',
    title: 'The Master Gemological Lab',
    subtitle: 'Advanced optical spectroscopy & laser inscription verification.',
    description: 'Staffed by resident GIA Graduate Gemologists using binocular microscopes, ultraviolet fluorescence chambers, and Sarine 3D optical proportional scanners.',
    benchmark: 'GIA CERTIFIED',
    features: ['Sarine 3D Cut Scanners', 'Laser Inscription Optics', 'Insurance Appraisal Lab'],
  },
  {
    id: 'swiss-horology',
    category: 'MASTER WATCHMAKING',
    title: 'The Swiss Watchmaking Atelier',
    subtitle: 'CW21-certified servicing for the world’s finest timepieces.',
    description: 'A dust-free, positive-pressure cleanroom equipped with Swiss Witschi timing analyzers, ultrasonic cleaning baths, and OEM factory gaskets for Rolex, Tudor, and luxury Swiss calibers.',
    benchmark: 'CW21 CERTIFIED',
    features: ['Dust-Free Cleanroom', 'Witschi Timing Analyzers', 'Pressure Testing to 300m'],
  },
  {
    id: 'custom-bridal',
    category: 'BESPOKE ENGAGEMENT',
    title: 'The Custom Bridal Studio',
    subtitle: 'Turning sketches into hand-set platinum heirlooms.',
    description: 'From your first rough sketch or Pinterest board, we generate millimeter-accurate precision wax models, 3D prototypes you can try on, and hand-cast in pure 950 platinum or 18K gold.',
    benchmark: 'ONE-OF-A-KIND',
    features: ['3D Wax Resin Mockups', 'Hand-Selected Side Stones', 'Hand-Cut French Pave'],
  },
  {
    id: 'estate-vault',
    category: 'HISTORIC ARCHIVE',
    title: 'The Tulsa Estate Vault',
    subtitle: 'Rare vintage Art Deco & mid-century signed jewelry.',
    description: 'Carefully authenticated period jewelry from legendary estates: Edwardian filigree, Art Deco geometric diamond bracelets, and rare natural unheated Burmese rubies and Ceylon sapphires.',
    benchmark: 'CURATED ARCHIVE',
    features: ['Art Deco Originals', 'Unheated Fine Sapphires', 'Period Platinum Filigree'],
  },
];

interface HorizontalWorksProps {
  onOpenBooking: () => void;
}

export const HorizontalWorks: React.FC<HorizontalWorksProps> = ({ onOpenBooking }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-78%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#070709] text-[#F0EBE1]">
      {/* Sticky Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[1600px] mx-auto w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#CFAB60] uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#CFAB60]" />
              THE MOODY’S COLLECTIONS / 02
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[36px] md:text-[56px] leading-[0.95] text-[#F0EBE1]">
              Private Vaults & Master Ateliers.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#9E9AA3] max-w-md font-['Montserrat',sans-serif] leading-relaxed">
            Pan across our five flagship destinations, from Utica Square’s private diamond salon to our cleanroom Swiss horology laboratories.
          </p>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="relative w-full overflow-visible">
          <motion.div style={{ x }} className="flex gap-8 items-stretch will-change-transform">
            {VAULT_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="group relative w-[85vw] sm:w-[540px] md:w-[620px] flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#16171C] to-[#0D0E12] border border-[#CFAB60]/25 p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#CFAB60]/60 hover:shadow-[#CFAB60]/10"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#CFAB60]/15 pb-4 mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#CFAB60] uppercase">
                      [{String(index + 1).padStart(2, '0')}] // {item.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#CFAB60]/15 text-[#CFAB60] text-[11px] font-mono font-medium">
                      {item.benchmark}
                    </span>
                  </div>

                  <h3 className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[34px] leading-tight text-[#F0EBE1] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-[#CFAB60] font-medium mb-4 italic">
                    "{item.subtitle}"
                  </p>

                  <p className="text-[14px] md:text-[15px] text-[#9E9AA3] leading-relaxed mb-6 font-['Montserrat',sans-serif]">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-md bg-[#0A0A0D] border border-[#CFAB60]/20 text-[11px] font-mono text-[#F0EBE1]/80"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 rounded-xl bg-[#CFAB60]/15 border border-[#CFAB60]/40 text-[#CFAB60] hover:bg-[#CFAB60] hover:text-[#0A0A0D] text-[13px] font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-[#CFAB60]"
                  >
                    <span>Reserve Vault Viewing</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar at Bottom of Sticky Frame */}
        <div className="max-w-[1600px] mx-auto w-full mt-8">
          <div className="w-full h-1 bg-[#16171C] rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-[#CFAB60]"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#9E9AA3] mt-2">
            <span>VAULT 01: UTICA SQUARE</span>
            <span>VAULT 05: ESTATE VAULT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
