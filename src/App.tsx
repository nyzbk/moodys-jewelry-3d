import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HorizontalWorks } from './components/HorizontalWorks';
import { InteractiveBento } from './components/InteractiveBento';
import { KineticMarquee } from './components/KineticMarquee';
import { SignatureWidget } from './components/SignatureWidget';
import { MagneticCTA } from './components/MagneticCTA';
import { VipAppointmentModal } from './components/VipAppointmentModal';
import { Footer } from './components/Footer';
import type { Showroom, VaultPiece } from './data/jewelryData';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedShowroom, setPreselectedShowroom] = useState<Showroom | null>(null);
  const [preselectedPiece, setPreselectedPiece] = useState<VaultPiece | null>(null);
  const [preselectedDiamondSpec] = useState<{
    shape: string;
    carat: number;
    color: string;
    clarity: string;
  } | null>(null);

  const handleOpenBooking = (showroom?: Showroom) => {
    setPreselectedShowroom(showroom || null);
    setPreselectedPiece(null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0D] text-[#F0EBE1] flex flex-col font-['Montserrat',sans-serif] selection:bg-[#CFAB60] selection:text-[#0A0A0D] overflow-x-clip">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main className="flex-grow">
        {/* Section 1: Jack Roberts SOTA 240-Frame Canvas Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />
        
        {/* Section 2: Meta AI Pinned Horizontal Scroll Gallery (300vh) */}
        <HorizontalWorks onOpenBooking={() => handleOpenBooking()} />

        {/* Section 3: Interactive Bento Grid with Live Telemetry */}
        <InteractiveBento onOpenBooking={() => handleOpenBooking()} />

        {/* Section 4: Kinetic Marquee Ribbon */}
        <KineticMarquee />

        {/* Bespoke Ring Builder & Carat Visualizer Widget */}
        <SignatureWidget onOpenBooking={handleOpenBooking} />

        {/* Section 5: Premium Magnetic CTA with Multi-Contact Intelligence */}
        <MagneticCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      <Footer />

      <VipAppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedShowroom={preselectedShowroom}
        preselectedPiece={preselectedPiece}
        preselectedDiamondSpec={preselectedDiamondSpec}
      />
    </div>
  );
}

export default App;
