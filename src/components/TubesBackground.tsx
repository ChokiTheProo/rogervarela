import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const randomColors = (count: number) =>
  new Array(count)
    .fill(0)
    .map(
      () =>
        '#' +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0')
    );

interface TubesBackgroundProps {
  className?: string;
  enableClickInteraction?: boolean;
  initialColors?: string[];
  initialLightsColors?: string[];
}

export function TubesBackground({
  className,
  enableClickInteraction = true,
  initialColors = ['#f967fb', '#53bc28', '#6958d5'],
  initialLightsColors = ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'],
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (!canvasRef.current) return;
      try {
        // @ts-ignore - external ESM module
        const mod = await import(
          /* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
        );
        if (!mounted || !canvasRef.current) return;
        const TubesCursor = mod.default;
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: initialColors,
            lights: {
              intensity: 200,
              colors: initialLightsColors,
            },
          },
        });
        tubesRef.current = app;
      } catch (err) {
        console.error('Failed to load TubesCursor:', err);
      }
    };

    init();

    return () => {
      mounted = false;
      tubesRef.current?.destroy?.();
      tubesRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    tubesRef.current.tubes.setColors(randomColors(3));
    tubesRef.current.tubes.setLightsColors(randomColors(4));
  };

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      className={cn('absolute inset-0 w-full h-full', className)}
      aria-hidden="true"
    />
  );
}

export default TubesBackground;
