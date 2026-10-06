import { Link } from '../i18n/navigation';

// Real partner/sponsor entities named throughout the site's own trial
// documentation. Each links out to its real site where one exists publicly;
// otherwise it links to the relevant page on this site.
const partners = [
  { name: 'ANORA', href: 'https://anora.solutions', external: true },
  { name: 'ABCRF', href: '/trial#contact', external: false },
  { name: 'CNERSH', href: '/trial#contact', external: false },
  { name: 'PACTR', href: 'https://pactr.samrc.ac.za', external: true },
  { name: 'CNBCR', href: '/trial', external: false },
  { name: 'UICC', href: 'https://www.uicc.org', external: true },
];

function PartnerLink({ name, href, external }: (typeof partners)[number]) {
  const className =
    'mx-6 flex-shrink-0 font-heading text-lg font-medium tracking-wide text-gray-400 opacity-70 transition-all duration-200 hover:text-primary hover:opacity-100';
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {name}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {name}
    </Link>
  );
}

// Infinite scrolling strip of real partner/sponsor names, each clickable.
export function LogoMarquee() {
  const loop = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max items-center animate-[stats-ticker_24s_linear_infinite]">
        {loop.map((p, i) => (
          <PartnerLink key={`${p.name}-${i}`} {...p} />
        ))}
      </div>
    </div>
  );
}
