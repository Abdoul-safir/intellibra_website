import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function StoreBadges() {
  const t = useTranslations('home.app');
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="https://play.google.com/store/apps/details?id=com.intellibra.app"
        className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 transition-colors hover:bg-white/10"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 flex-shrink-0" aria-hidden="true">
          <path fill="#00D9FF" d="M3.6 2.4c-.4.3-.6.8-.6 1.4v16.4c0 .6.2 1.1.6 1.4l.1.1L13 12.5v-.2L3.7 2.3l-.1.1z" />
          <path fill="#FFC300" d="M16.1 15.6 13 12.5v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.8 2z" />
          <path fill="#FF3D57" d="M16.2 15.5 13 12.3 3.6 21.7c.4.4.9.4 1.6.1l11-6.3" />
          <path fill="#00F076" d="M16.2 9.1 5.2 2.8c-.7-.4-1.2-.3-1.6.1L13 12.3l3.2-3.2z" />
        </svg>
        <div className="text-left leading-tight">
          <p className="text-[.65rem] text-white/60">{t('googlePlayEyebrow')}</p>
          <p className="text-sm font-semibold text-white">{t('googlePlay')}</p>
        </div>
      </Link>

      <Link
        href="https://apps.apple.com/us/app/intellibra-pink-alert/id6746444080"
        className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 transition-colors hover:bg-white/10"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 flex-shrink-0 text-white" fill="currentColor" aria-hidden="true">
          <path d="M17.05 12.5c-.03-2.6 2.13-3.85 2.23-3.91-1.22-1.78-3.11-2.02-3.78-2.05-1.6-.17-3.15.95-3.97.95-.83 0-2.09-.93-3.44-.9-1.74.03-3.36 1.03-4.26 2.6-1.82 3.15-.46 7.8 1.31 10.36.87 1.25 1.9 2.66 3.25 2.61 1.31-.05 1.8-.84 3.39-.84s2.03.84 3.41.81c1.41-.02 2.3-1.27 3.15-2.53.99-1.44 1.4-2.85 1.42-2.92-.03-.01-2.72-1.05-2.75-4.18z" />
          <path d="M14.65 4.8c.71-.86 1.19-2.05 1.06-3.24-1.02.04-2.27.68-3 1.53-.66.75-1.24 1.98-1.08 3.14 1.14.09 2.3-.58 3.02-1.43z" />
        </svg>
        <div className="text-left leading-tight">
          <p className="text-[.65rem] text-white/60">{t('appStoreEyebrow')}</p>
          <p className="text-sm font-semibold text-white">{t('appStore')}</p>
        </div>
      </Link>
    </div>
  );
}
