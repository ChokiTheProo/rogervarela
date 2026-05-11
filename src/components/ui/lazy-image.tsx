import { useState, memo } from 'react';
import { Skeleton } from './skeleton';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  skeletonClassName?: string;
  eager?: boolean;
}

export const LazyImage = memo(function LazyImage({
  src,
  alt,
  className,
  containerClassName,
  skeletonClassName,
  eager = false,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn('relative', containerClassName)}>
      {!isLoaded && (
        <Skeleton
          className={cn('absolute inset-0 w-full h-full', skeletonClassName)}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        // @ts-expect-error - fetchpriority is valid HTML
        fetchpriority={eager ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        {...props}
      />
    </div>
  );
});
