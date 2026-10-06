'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { NewsMediaImage } from '../../lib/news-content';
import { localize } from '../../lib/team-content';

interface ArticleMediaCarouselProps {
  images: NewsMediaImage[];
  locale: string;
}

export function ArticleMediaCarousel({ images, locale }: ArticleMediaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  if (!activeImage) return null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-[#faf9f9]"
      role="region"
      aria-roledescription="carousel"
      aria-label={locale === 'fr' ? 'Préparation du site en images' : 'Site preparation images'}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 sm:aspect-[16/9]">
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={localize(activeImage.alt, locale)}
          fill
          sizes="(max-width: 1024px) 100vw, 820px"
          className="object-cover"
        />

        {images.length > 1 && (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/45 to-transparent px-4 pb-4 pt-12 sm:px-5 sm:pb-5">
            <button
              type="button"
              onClick={showPrevious}
              aria-label={locale === 'fr' ? 'Image précédente' : 'Previous image'}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-white/90 text-[#10233f] shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label={locale === 'fr' ? 'Image suivante' : 'Next image'}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-white/90 text-[#10233f] shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        )}
      </div>

      <p aria-live="polite" className="px-5 py-5 text-center text-[.7rem] font-semibold uppercase leading-5 tracking-[.16em] text-[#10233f] sm:px-8">
        {localize(activeImage.caption, locale)}
      </p>
    </div>
  );
}
