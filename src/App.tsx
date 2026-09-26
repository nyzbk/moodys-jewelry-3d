import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureWidget } from './components/SignatureWidget';
import { DiamondVisualizerSection } from './components/DiamondVisualizerSection';
import { ShowroomsSection } from './components/ShowroomsSection';
import { VaultSection } from './components/VaultSection';
import { AtelierSection } from './components/AtelierSection';
import { Footer } from './components/Footer';
import { VipAppointmentModal } from './components/VipAppointmentModal';
import type { Showroom, VaultPiece } from './data/jewelryData';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedShowroom, setPreselectedShowroom] = useState<Showroom | null>(null);
  const [preselectedPiece, setPreselectedPiece] = useState<VaultPiece | null>(null);
  const [preselectedDiamondSpec, setPreselectedDiamondSpec] = useState<{
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

  const handleSelectPiece = (piece: VaultPiece) => {
    setPreselectedPiece(piece);
    setPreselectedShowroom(null);
    setIsBookingOpen(true);
  };

  const handleSelectDiamondSpec = (spec: { shape: string; carat: number; color: string; clarity: string }) => {
    setPreselectedDiamondSpec(spec);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0D] text-[#FFFFFF] flex flex-col font-['Montserrat'] selection:bg-[#CFAB60] selection:text-[#0A0A0D]">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} totalFrames={60} />
        
        {/* Bespoke 75th Anniversary Diamond 4Cs Master Vault Widget */}
        <SignatureWidget onOpenBooking={() => handleOpenBooking()} />

        <DiamondVisualizerSection onSelectDiamondSpec={handleSelectDiamondSpec} />
        <ShowroomsSection onOpenBooking={handleOpenBooking} />
        <VaultSection onSelectPiece={handleSelectPiece} />
        <AtelierSection onOpenBooking={() => handleOpenBooking()} />
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
