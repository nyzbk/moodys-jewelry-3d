import React, { useState } from 'react';
import { VAULT_PIECES, type VaultPiece } from '../data/jewelryData';
import { Sparkles, Eye, ArrowUpRight, Check } from 'lucide-react';

interface VaultProps {
  onSelectPiece: (piece: VaultPiece) => void;
}

export const VaultSection: React.FC<VaultProps> = ({ onSelectPiece }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Bridal Solitaire', 'Custom Halo', 'Estate Collection', 'Designer Trunk', 'Swiss Horology'];

  const filteredPieces = filter === 'All'
    ? VAULT_PIECES
    : VAULT_PIECES.filter(p => p.category === filter);

  return (
    <section id="vault-collections" className="relative py-24 bg-sapphire-900 border-t border-platinum-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sapphire-950 border border-diamond-fire/30 text-diamond-fire font-sans text-xs tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Moody’s Curated Vault</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Rare Heirlooms & Certified Solitaires.
            </h2>
            <p className="text-sm text-platinum-300 font-sans leading-relaxed">
              From historic GIA-graded natural diamonds to exclusive authorized trunk show releases from Effy and certified Swiss timepieces.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-sans tracking-wider uppercase transition-colors border ${
                  filter === cat
                    ? 'bg-sapphire-800 border-diamond-fire text-white'
                    : 'bg-sapphire-950/60 border-platinum-200/10 text-platinum-400 hover:text-white hover:border-platinum-200/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece) => (
            <div
              key={piece.id}
              className="bg-sapphire-950/80 border border-platinum-200/15 group hover:border-diamond-fire/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative aspect-[4/3] overflow-hidden bg-sapphire-900">
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sapphire-950 via-transparent to-black/30" />
                  
                  {piece.badge && (
                    <span className="absolute top-3 left-3 bg-sapphire-950/90 border border-diamond-fire/40 text-diamond-champagne text-[10px] font-mono uppercase tracking-wider px-2.5 py-1">
                      {piece.badge}
                    </span>
                  )}

                  <span className="absolute bottom-3 right-3 bg-sapphire-900/90 border border-platinum-200/20 text-white font-serif text-sm font-bold px-3 py-1">
                    {piece.price}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-diamond-fire">
                      {piece.category} • {piece.metal}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-diamond-fire transition-colors mt-1">
                      {piece.title}
                    </h3>
                    <p className="text-xs font-mono text-platinum-300 mt-1">
                      {piece.carat}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-2 border-t border-platinum-200/10 text-[11px] text-platinum-300 font-sans">
                    {piece.details.slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-diamond-fire shrink-0" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectPiece(piece)}
                  className="w-full py-3 bg-sapphire-900 hover:bg-sapphire-800 text-platinum-200 hover:text-white font-sans text-xs uppercase tracking-widest font-semibold border border-platinum-200/20 hover:border-diamond-fire transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  <Eye className="w-3.5 h-3.5 text-diamond-fire" />
                  <span>Reserve In-Store Viewing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
