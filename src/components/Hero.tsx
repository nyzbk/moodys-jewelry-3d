import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Gem, ShieldCheck, ChevronDown, Compass } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  totalFrames?: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, totalFrames = 60 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);

  const [, setCurrentFrame] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeChapter, setActiveChapter] = useState<string>('4.50ct Flawless Diamond & Platinum Cushion Architecture');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const total = totalFrames;
    const imgs: HTMLImageElement[] = new Array(total);

    // 1. Immediately fetch Frame 1 (<100ms first paint)
    const firstImg = new Image();
    firstImg.src = `/frames/frame_0001.webp?v=fast-v2`;
    firstImg.onload = () => {
      imgs[0] = firstImg;
      setIsLoaded(true);
      renderFrame(1);

      // 2. Progressive non-blocking preload for frames 2..total in small smooth batches
      let nextIdx = 2;
      const loadNextBatch = () => {
        const batchSize = 6;
        for (let b = 0; b < batchSize && nextIdx <= total; b++, nextIdx++) {
          const idx = nextIdx;
          const img = new Image();
          const frameStr = String(idx).padStart(4, '0');
          img.src = `/frames/frame_${frameStr}.webp?v=fast-v2`;
          img.onload = () => {
            if (currentFrameRef.current === idx) {
              renderFrame(idx);
            }
          };
          imgs[idx - 1] = img;
        }
        if (nextIdx <= total) {
          setTimeout(loadNextBatch, 15);
        }
      };
      loadNextBatch();
    };
    firstImg.onerror = () => {
      setIsLoaded(true);
    };
    imgs[0] = firstImg;
    imagesRef.current = imgs;}, [totalFrames]);

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = imagesRef.current[frameIndex - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    const imgRatio = 1920 / 1080;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Subtle luxury vignette
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, width * 0.25,
      width / 2, height / 2, Math.max(width, height) * 0.75
    );
    gradient.addColorStop(0, 'rgba(3, 7, 18, 0.15)');
    gradient.addColorStop(0.7, 'rgba(3, 7, 18, 0.45)');
    gradient.addColorStop(1, 'rgba(3, 7, 18, 0.85)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      const currentScroll = -rect.top;

      let progress = currentScroll / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      const frameNumber = Math.max(1, Math.min(totalFrames, Math.floor(progress * (totalFrames - 1)) + 1));
      currentFrameRef.current = frameNumber;
      setCurrentFrame(frameNumber);
      renderFrame(frameNumber);

      if (progress < 0.25) {
        setActiveChapter('4.50ct Flawless Diamond & Platinum Cushion Architecture');
      } else if (progress < 0.50) {
        setActiveChapter('Optical Light Dispersion & Prismatic Fire');
      } else if (progress < 0.75) {
        setActiveChapter('GIA Triple Excellent Facet Symmetry');
      } else {
        setActiveChapter('Master Tulsa Atelier Hand-Craftsmanship');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  const facetCount = 58;
  const scintillationIndex = Math.round(94 + scrollProgress * 5.9);

  return (
    <section id="diamond-tour" ref={containerRef} className="relative h-[450vh] bg-sapphire-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-4 sm:p-8 md:p-12">
        {/* Spatial Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Top Heritage & Gemological Telemetry Header */}
        <div className="relative z-10 w-full flex items-center justify-between pt-16 sm:pt-20 text-[11px] font-mono tracking-widest text-platinum-300">
          <div className="flex items-center gap-2 bg-sapphire-950/80 border border-platinum-200/20 px-3.5 py-1.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-diamond-fire animate-pulse" />
            <span className="text-platinum-100 font-semibold uppercase">
              MOODY’S PRIVATE VAULT // TULSA FLAGSHIP
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 bg-sapphire-950/80 border border-platinum-200/20 px-4 py-1.5 backdrop-blur-md">
            <span>FACETS: <strong className="text-diamond-fire">{facetCount} FACETS</strong></span>
            <span>SCINTILLATION: <strong className="text-white">{scintillationIndex}% BRILLIANCE</strong></span>
            <span>STATUS: {isLoaded ? <strong className="text-emerald-400">GIA CERTIFIED</strong> : <strong className="text-amber-400">CALIBRATING OPTICS...</strong>}</span>
          </div>
        </div>

        {/* Center Spatial Narrative */}
        <div className="relative z-10 my-auto max-w-4xl space-y-6 pointer-events-none">
          <div className="space-y-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2 bg-sapphire-900/80 border border-diamond-fire/40 px-3.5 py-1 text-diamond-fire font-sans text-xs tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Oklahoma’s Premier Diamond House Since 1960</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-2xl">
              For Life’s Most <br />
              <span className="italic font-normal text-diamond-fire">
                Profound Milestones.
              </span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-base text-platinum-300 font-sans leading-relaxed drop-shadow">
              Step into an intimate spatial study of light, fire, and master craftsmanship. Six Tulsa showrooms, three generations of trusted family guidance, and certified natural diamonds curated for eternity.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 pointer-events-auto">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-gradient-to-r from-sapphire-800 to-sapphire-900 hover:from-sapphire-700 hover:to-sapphire-800 text-white font-sans text-xs uppercase tracking-widest font-semibold border border-diamond-fire/60 hover:border-diamond-fire transition-all duration-300 shadow-xl hover:shadow-diamond-glow flex items-center gap-3"
            >
              <Gem className="w-4 h-4 text-diamond-fire" />
              <span>Reserve Private Salon Viewing</span>
            </button>

            <a
              href="#diamond-visualizer"
              className="px-6 py-4 bg-sapphire-950/80 hover:bg-sapphire-900 text-platinum-200 hover:text-white font-sans text-xs uppercase tracking-widest font-medium border border-platinum-200/20 hover:border-platinum-200/40 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <Compass className="w-4 h-4 text-diamond-champagne" />
              <span>Explore 4Cs Studio</span>
            </a>
          </div>
        </div>

        {/* Bottom Scroll Chapter Progression & Specifications */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4">
          {/* Active Spatial Chapter */}
          <div className="bg-sapphire-950/85 border border-platinum-200/20 p-4 max-w-md backdrop-blur-md space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-platinum-400">
              <span>Dynamic Spatial Phase</span>
              <span className="text-diamond-fire">{Math.round(scrollProgress * 100)}%</span>
            </div>
            <div className="text-xs sm:text-sm font-serif font-semibold text-platinum-100 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-diamond-fire shrink-0" />
              <span>{activeChapter}</span>
            </div>
            <div className="w-full bg-sapphire-900 h-1 mt-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-diamond-fire to-diamond-champagne h-full transition-all duration-200"
                style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
              />
            </div>
          </div>

          {/* Scroll Prompt */}
          <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono tracking-widest uppercase text-platinum-400 bg-sapphire-950/70 border border-platinum-200/20 px-4 py-2 backdrop-blur-sm">
            <span>Scroll To Rotate Diamond Facets</span>
            <ChevronDown className="w-4 h-4 text-diamond-fire animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
