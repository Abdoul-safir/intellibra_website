'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../i18n/navigation';
import { cn } from '../lib/utils';

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
] as const;

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border p-0.5 text-xs font-semibold',
        light ? 'border-white/25' : 'border-black/10',
      )}
    >
      {locales.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            aria-current={active}
            className={cn(
              'rounded-full px-2.5 py-1 transition-colors',
              active
                ? 'bg-primary text-white'
                : light
                  ? 'text-white/70 hover:text-white'
                  : 'text-gray-500 hover:text-gray-900',
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
