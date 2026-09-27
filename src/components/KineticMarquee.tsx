import React from 'react';
import { Sparkles, Gem, Award, ShieldCheck, Compass } from 'lucide-react';

export const KineticMarquee: React.FC = () => {
  const items = [
    { text: 'ESTABLISHED 1944 • TULSA, OK', icon: Award },
    { text: '7 TULSA METRO SHOWROOMS', icon: Compass },
    { text: '100% GIA GRADED DIAMONDS', icon: Gem },
    { text: 'CW21 SWISS MASTER WATCHMAKERS', icon: ShieldCheck },
    { text: 'UTICA SQUARE PRIVATE VAULT SALON', icon: Sparkles },
    { text: 'DIRECT ANTWERP DIAMOND IMPORTERS', icon: Gem },
    { text: 'OKLAHOMA’S FAVORITE JEWELER', icon: Award },
  ];

  return (
    <div className="relative py-8 bg-[#070709] border-y border-[#CFAB60]/25 overflow-hidden">
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-12 pr-12">
            {items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <div key={itemIdx} className="flex items-center gap-4 text-nowrap">
                  <Icon className="w-4 h-4 text-[#CFAB60]" />
                  <span className="font-['Cormorant_Garamond',serif] text-[20px] md:text-[24px] tracking-wider text-[#F0EBE1]">
                    {item.text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CFAB60]/50 mx-2" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
