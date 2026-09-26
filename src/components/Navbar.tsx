import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Phone, Calendar, Menu, X } from 'lucide-react';
import { SHOWROOMS_DATA, type Showroom } from '../data/jewelryData';

interface NavbarProps {
  onOpenBooking: (showroom?: Showroom) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showroomsDropdown, setShowroomsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-sapphire-950/90 backdrop-blur-md border-b border-platinum-200/10 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-sapphire-950/80 via-sapphire-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Heritage Crest */}
            <a href="#" className="flex items-center gap-3 group text-left">
              <div className="w-10 h-10 rounded-full border border-diamond-fire/40 bg-sapphire-900/60 flex items-center justify-center group-hover:border-diamond-fire transition-colors duration-300">
                <Sparkles className="w-5 h-5 text-diamond-fire" />
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wider text-platinum-50 group-hover:text-white transition-colors">
                  MOODY’S
                </span>
                <span className="block text-[9px] tracking-widest text-platinum-400 font-sans uppercase">
                  Fine Jewelry & Diamonds • Tulsa Est. 1960
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-platinum-300">
              <a href="#diamond-visualizer" className="hover:text-diamond-fire transition-colors">
                The 4Cs Studio
              </a>
              
              {/* Showrooms Hover Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setShowroomsDropdown(true)}
                onMouseLeave={() => setShowroomsDropdown(false)}
              >
                <a
                  href="#showrooms"
                  className="flex items-center gap-1.5 hover:text-diamond-fire transition-colors py-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-diamond-fire" />
                  <span>6 Tulsa Showrooms</span>
                </a>

                {/* Dropdown Menu */}
                {showroomsDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-sapphire-900/95 backdrop-blur-xl border border-platinum-200/20 shadow-2xl p-3 space-y-2 mt-1 rounded-sm">
                    <p className="text-[10px] tracking-widest text-platinum-400 font-semibold px-2 py-1 uppercase border-b border-platinum-200/10">
                      Select Your Nearest Salon
                    </p>
                    {SHOWROOMS_DATA.map((showroom) => (
                      <button
                        key={showroom.id}
                        onClick={() => {
                          setShowroomsDropdown(false);
                          onOpenBooking(showroom);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-sapphire-800/80 rounded transition-colors group flex items-start justify-between"
                      >
                        <div>
                          <div className="text-[11px] font-semibold text-platinum-100 group-hover:text-diamond-fire transition-colors">
                            {showroom.name}
                          </div>
                          <div className="text-[9px] text-platinum-400 truncate max-w-[190px]">
                            {showroom.address}
                          </div>
                        </div>
                        <span className="text-[9px] text-diamond-champagne font-mono">Book VIP</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#vault-collections" className="hover:text-diamond-fire transition-colors">
                The Vault
              </a>
              <a href="#custom-atelier" className="hover:text-diamond-fire transition-colors">
                Bespoke Atelier
              </a>
            </nav>

            {/* Direct Phone & VIP Appointment CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:9188343371"
                className="flex items-center gap-2 text-xs font-mono text-platinum-300 hover:text-diamond-fire transition-colors"
                title="Call Flagship Showroom"
              >
                <Phone className="w-3.5 h-3.5 text-diamond-champagne" />
                <span>(918) 834-3371</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 bg-gradient-to-r from-sapphire-800 to-sapphire-900 hover:from-sapphire-700 hover:to-sapphire-800 text-platinum-50 border border-diamond-fire/50 hover:border-diamond-fire text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-diamond-glow flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-diamond-fire" />
                <span>VIP Viewing</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 bg-sapphire-850 border border-diamond-fire/40 text-[10px] uppercase tracking-wider text-diamond-fire"
              >
                VIP Salon
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-platinum-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-sapphire-950/98 border-b border-platinum-200/20 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-xs uppercase tracking-widest">
              <a
                href="#diamond-visualizer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-platinum-200 hover:text-diamond-fire py-2 border-b border-platinum-200/10"
              >
                The 4Cs Diamond Studio
              </a>
              <a
                href="#showrooms"
                onClick={() => setMobileMenuOpen(false)}
                className="text-platinum-200 hover:text-diamond-fire py-2 border-b border-platinum-200/10"
              >
                6 Tulsa Showroom Locations
              </a>
              <a
                href="#vault-collections"
                onClick={() => setMobileMenuOpen(false)}
                className="text-platinum-200 hover:text-diamond-fire py-2 border-b border-platinum-200/10"
              >
                The Vault Collections
              </a>
              <a
                href="#custom-atelier"
                onClick={() => setMobileMenuOpen(false)}
                className="text-platinum-200 hover:text-diamond-fire py-2 border-b border-platinum-200/10"
              >
                Custom Design Atelier
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:9188343371"
                className="flex items-center justify-center gap-2 py-3 bg-sapphire-900 border border-platinum-200/20 text-xs font-mono text-platinum-200"
              >
                <Phone className="w-4 h-4 text-diamond-champagne" />
                <span>Call Flagship: (918) 834-3371</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-gradient-to-r from-sapphire-800 to-sapphire-700 text-white border border-diamond-fire text-xs font-semibold uppercase tracking-widest text-center"
              >
                Reserve VIP Champagne Viewing
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
