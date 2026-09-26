import React from 'react';
import { SHOWROOMS_DATA } from '../data/jewelryData';
import { Sparkles, Shield, Heart, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sapphire-950 border-t border-platinum-200/10 text-platinum-300 font-sans text-xs">
      {/* Trust & Accreditations Banner */}
      <div className="border-b border-platinum-200/10 py-12 bg-sapphire-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 flex flex-col items-center">
              <Shield className="w-6 h-6 text-diamond-fire" />
              <h5 className="font-serif font-bold text-white text-sm">GIA Certified Diamonds</h5>
              <p className="text-[11px] text-platinum-400">Independently graded for triple excellent optical cut & polish.</p>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <Award className="w-6 h-6 text-diamond-champagne" />
              <h5 className="font-serif font-bold text-white text-sm">Tulsa Bench Goldsmiths</h5>
              <p className="text-[11px] text-platinum-400">Master craftsmen on-premises in our Midtown Tulsa laboratory.</p>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <Heart className="w-6 h-6 text-diamond-fire" />
              <h5 className="font-serif font-bold text-white text-sm">Conflict-Free Diamonds</h5>
              <p className="text-[11px] text-platinum-400">Strict adherence to the international Kimberley Process protocol.</p>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <Sparkles className="w-6 h-6 text-diamond-champagne" />
              <h5 className="font-serif font-bold text-white text-sm">Lifetime Ring Spa & Care</h5>
              <p className="text-[11px] text-platinum-400">Complimentary sonic cleaning, prong inspections, and polishing forever.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Showrooms Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & History (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-diamond-fire/40 bg-sapphire-900/60 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-diamond-fire" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                MOODY’S JEWELRY
              </span>
            </div>
            <p className="text-xs text-platinum-400 leading-relaxed max-w-sm">
              Founded in 1960 by Ernest Moody, our family has had the honor of helping generations of Tulsa couples celebrate engagements, anniversaries, and family milestones with exceptional diamonds and handcrafted heirlooms.
            </p>
            <div className="pt-2 text-xs font-mono text-platinum-400">
              Direct Flagship Line:{' '}
              <a href="tel:9188343371" className="text-diamond-fire hover:underline">
                (918) 834-3371
              </a>
            </div>
          </div>

          {/* Six Tulsa Showrooms Directory (8 cols) */}
          <div className="md:col-span-8 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-diamond-champagne">
              Six Tulsa Metropolitan Showroom Locations
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SHOWROOMS_DATA.map((showroom) => (
                <div key={showroom.id} className="p-3 bg-sapphire-900/30 border border-platinum-200/10 space-y-1">
                  <span className="font-serif font-semibold text-white block text-xs">
                    {showroom.name}
                  </span>
                  <p className="text-[11px] text-platinum-400 leading-tight">
                    {showroom.address}
                  </p>
                  <a
                    href={`tel:${showroom.phone.replace(/[^0-9]/g, '')}`}
                    className="text-[11px] font-mono text-diamond-fire block pt-1 hover:underline"
                  >
                    {showroom.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-platinum-200/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-platinum-500">
          <p>© {new Date().getFullYear()} Moody’s Jewelry, Inc. All rights reserved. Locally owned and operated in Tulsa, OK.</p>
          <div className="flex items-center gap-6">
            <a href="#diamond-visualizer" className="hover:text-platinum-300">4Cs Guide</a>
            <a href="#showrooms" className="hover:text-platinum-300">Showrooms</a>
            <a href="#vault-collections" className="hover:text-platinum-300">The Vault</a>
            <a href="#custom-atelier" className="hover:text-platinum-300">Custom Atelier</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
