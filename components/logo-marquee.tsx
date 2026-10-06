import Image from 'next/image';

const partners = [
  { name: 'MINSANTE', src: '/images/partners/minsante.png', width: 167, height: 160 },
  { name: 'MINPOSTEL', src: '/images/partners/minpostel.png', width: 159, height: 160 },
  { name: 'APME', src: '/images/partners/apme.png', width: 160, height: 160 },
  { name: 'Fonds Proto', src: '/images/partners/fonds-proto.png', width: 160, height: 160 },
  { name: 'Orange', src: '/images/partners/orange.png', width: 160, height: 160 },
  { name: 'Futurize', src: '/images/partners/futurize.png', width: 468, height: 127, wide: true },
];

// Infinite scrolling strip of partner logos. The list is rendered twice so the
// loop is seamless; the second copy is hidden from assistive technology.
export function LogoMarquee() {
  const loop = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <ul className="flex w-max items-center animate-[stats-ticker_30s_linear_infinite] hover:[animation-play-state:paused]">
        {loop.map((partner, index) => {
          const duplicate = index >= partners.length;
          return (
            <li
              key={`${partner.name}-${index}`}
              aria-hidden={duplicate || undefined}
              className="mx-7 flex h-16 flex-shrink-0 items-center sm:mx-10"
            >
              <Image
                src={partner.src}
                alt={duplicate ? '' : partner.name}
                title={partner.name}
                width={partner.width}
                height={partner.height}
                className={`${partner.wide ? 'h-9 sm:h-10' : 'h-14 sm:h-16'} w-auto object-contain`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
