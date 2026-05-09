'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export interface ElegantSlide {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
  href?: string;
  cta?: string;
}

interface ElegantCarouselProps {
  slides: ElegantSlide[];
  slideDuration?: number;
}

export default function ElegantCarousel({
  slides,
  slideDuration = 6000,
}: ElegantCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const TRANSITION_DURATION = 700;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setProgress(0);
      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, [currentIndex, goToSlide, slides.length]);

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, goToSlide, slides.length]);

  useEffect(() => {
    if (isPaused) return;
    progressRef.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 100 / (slideDuration / 50)));
    }, 50);
    intervalRef.current = setInterval(goNext, slideDuration);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext, slideDuration]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) (diff > 0 ? goNext : goPrev)();
  };

  const currentSlide = slides[currentIndex];
  const fadeBase = 'transition-all duration-700 ease-out';
  const fadeState = isTransitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0';

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-border/40 bg-card/40 backdrop-blur-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Accent wash */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}26 0%, transparent 70%)`,
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 p-5 sm:p-8 md:p-12 lg:p-16">
        {/* Left: Text */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className={`${fadeBase} ${fadeState}`}>
            {/* Index */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span
                className="block h-px w-10 sm:w-14"
                style={{ backgroundColor: currentSlide.accent }}
              />
              <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-mono">
                {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            <h3 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground mb-3 sm:mb-4">
              {currentSlide.title}
            </h3>

            <p
              className="text-sm sm:text-base font-medium tracking-wide uppercase mb-4 sm:mb-6"
              style={{ color: currentSlide.accent }}
            >
              {currentSlide.subtitle}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-prose">
              {currentSlide.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {currentSlide.href && (
                <a
                  href={currentSlide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all hover:scale-[1.02]"
                  style={{
                    borderColor: `${currentSlide.accent}66`,
                    color: currentSlide.accent,
                    backgroundColor: `${currentSlide.accent}14`,
                  }}
                >
                  {currentSlide.cta ?? 'View Project'}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border/60 bg-background/40 text-foreground/80 hover:text-foreground hover:bg-background/70 transition flex items-center justify-center"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={goNext}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border/60 bg-background/40 text-foreground/80 hover:text-foreground hover:bg-background/70 transition flex items-center justify-center"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative order-1 lg:order-2 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5]">
          <div
            className={`${fadeBase} ${fadeState} relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl border border-border/50 shadow-2xl`}
            style={{
              background: `linear-gradient(135deg, ${currentSlide.accent}1f 0%, hsl(var(--background)) 100%)`,
            }}
          >
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              className="absolute inset-0 w-full h-full object-contain p-2 sm:p-3"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${currentSlide.accent}1a 0%, transparent 60%)`,
              }}
            />
          </div>

          {/* Decorative corners */}
          <div
            className="absolute -top-2 -left-2 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-t-2 rounded-tl-xl"
            style={{ borderColor: currentSlide.accent }}
          />
          <div
            className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-b-2 rounded-br-xl"
            style={{ borderColor: currentSlide.accent }}
          />
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative px-5 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row gap-3 sm:gap-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="flex-1 text-left group min-w-0"
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            >
              <div className="relative h-[2px] w-full bg-border/50 overflow-hidden rounded-full">
                <div
                  className="absolute left-0 top-0 h-full transition-all duration-200 ease-linear rounded-full"
                  style={{
                    width:
                      index === currentIndex
                        ? `${progress}%`
                        : index < currentIndex
                        ? '100%'
                        : '0%',
                    backgroundColor:
                      index === currentIndex ? currentSlide.accent : 'hsl(var(--muted-foreground))',
                  }}
                />
              </div>
              <span
                className={`mt-2 block text-[10px] sm:text-xs font-medium tracking-wide uppercase truncate transition-colors ${
                  index === currentIndex ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground/80'
                }`}
              >
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
