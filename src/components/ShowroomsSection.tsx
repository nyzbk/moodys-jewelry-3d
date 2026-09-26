import React, { useState } from 'react';
import { SHOWROOMS_DATA, type Showroom } from '../data/jewelryData';
import { MapPin, Phone, Clock, UserCheck, Calendar, CheckCircle2 } from 'lucide-react';

interface ShowroomsProps {
  onOpenBooking: (showroom: Showroom) => void;
}

export const ShowroomsSection: React.FC<ShowroomsProps> = ({ onOpenBooking }) => {
  const [selectedShowroom, setSelectedShowroom] = useState<Showroom>(SHOWROOMS_DATA[0]);

  return (
    <section id="showrooms" className="relative py-24 bg-sapphire-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sapphire-900 border border-platinum-200/20 text-diamond-champagne font-sans text-xs tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-diamond-fire" />
            <span>Oklahoma’s Most Respected Showrooms</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Six Tulsa Showrooms. Three Generations.
          </h2>
          <p className="text-sm sm:text-base text-platinum-300 font-sans leading-relaxed">
            Wherever you are in the Tulsa metropolitan area, a master gemologist and private consultation suite awaits you. Walk in or schedule a private champagne appointment.
          </p>
        </div>

        {/* Showrooms Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SHOWROOMS_DATA.map((showroom) => (
            <button
              key={showroom.id}
              onClick={() => setSelectedShowroom(showroom)}
              className={`px-4 py-2.5 text-xs font-sans tracking-wider uppercase transition-all duration-300 border ${
                selectedShowroom.id === showroom.id
                  ? 'bg-sapphire-850 border-diamond-fire text-white shadow-md shadow-diamond-glow/20'
                  : 'bg-sapphire-900/40 border-platinum-200/10 text-platinum-400 hover:border-platinum-200/30 hover:text-platinum-200'
              }`}
            >
              {showroom.name}
            </button>
          ))}
        </div>

        {/* Active Showroom Detailed Spotlight Card */}
        <div className="bg-sapphire-900/70 border border-platinum-200/15 p-6 sm:p-10 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Showroom Imagery & Atmosphere (5 cols) */}
          <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-platinum-200/20 group">
            <img
              src={selectedShowroom.image}
              alt={selectedShowroom.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sapphire-950 via-transparent to-black/30" />
            
            <div className="absolute bottom-4 left-4 right-4 bg-sapphire-950/90 border border-platinum-200/20 p-3 backdrop-blur-sm">
              <p className="text-[10px] font-mono tracking-widest text-platinum-400 uppercase">
                {selectedShowroom.district}
              </p>
              <h4 className="text-sm font-serif font-bold text-white">
                {selectedShowroom.name}
              </h4>
            </div>
          </div>

          {/* Right: Showroom Details & Reservation (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-diamond-fire">
                Showroom Provenance
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {selectedShowroom.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-platinum-300">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-platinum-400 font-mono text-[11px] uppercase">
                  <MapPin className="w-3.5 h-3.5 text-diamond-fire" />
                  <span>Address</span>
                </div>
                <p className="text-platinum-100 font-medium pl-5">{selectedShowroom.address}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-platinum-400 font-mono text-[11px] uppercase">
                  <Phone className="w-3.5 h-3.5 text-diamond-champagne" />
                  <span>Direct Line</span>
                </div>
                <a href={`tel:${selectedShowroom.phone.replace(/[^0-9]/g, '')}`} className="text-platinum-100 font-medium pl-5 hover:text-diamond-fire transition-colors">
                  {selectedShowroom.phone}
                </a>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-platinum-400 font-mono text-[11px] uppercase">
                  <Clock className="w-3.5 h-3.5 text-platinum-400" />
                  <span>Hours of Operation</span>
                </div>
                <p className="text-platinum-100 font-medium pl-5">{selectedShowroom.hours}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-platinum-400 font-mono text-[11px] uppercase">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Senior Consultant</span>
                </div>
                <p className="text-platinum-100 font-medium pl-5">{selectedShowroom.consultant}</p>
              </div>
            </div>

            {/* Signature Amenities */}
            <div className="pt-4 border-t border-platinum-200/10">
              <p className="text-[11px] font-mono tracking-widest uppercase text-platinum-400 mb-3">
                On-Site Facilities & Master Services
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedShowroom.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-platinum-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-diamond-fire shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking(selectedShowroom)}
                className="px-6 py-3.5 bg-gradient-to-r from-sapphire-800 to-sapphire-700 hover:from-sapphire-700 hover:to-sapphire-600 text-white font-sans text-xs uppercase tracking-widest font-semibold border border-diamond-fire transition-all duration-300 shadow-lg hover:shadow-diamond-glow flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-diamond-fire" />
                <span>Reserve VIP Viewing At This Location</span>
              </button>

              <a
                href={`tel:${selectedShowroom.phone.replace(/[^0-9]/g, '')}`}
                className="px-5 py-3.5 bg-sapphire-950 hover:bg-sapphire-850 text-platinum-200 hover:text-white font-mono text-xs uppercase tracking-wider border border-platinum-200/20 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-diamond-champagne" />
                <span>Call {selectedShowroom.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
