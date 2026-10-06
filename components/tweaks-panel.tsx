'use client';

// TEMPORARY — remove once design decisions are final (see lib/tweaks-context.tsx).

import * as React from 'react';
import { RotateCcw, Settings2, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { tweakGroups, useTweaks } from '../lib/tweaks-context';

export function TweaksPanel() {
  const pathname = usePathname();
  const { tweaks, setTweak, resetTweaks } = useTweaks();
  const [open, setOpen] = React.useState(false);
  const segments = pathname.split('/').filter(Boolean);
  const page = segments.length === 1
    ? 'home'
    : segments.length === 2 && segments[1] === 'trial'
      ? 'trial'
      : segments.length === 2 && segments[1] === 'team'
        ? 'team'
        : segments.length === 2 && segments[1] === 'news'
          ? 'news'
          : segments.length === 2 && segments[1] === 'contact'
            ? 'contact'
          : null;
  const visibleGroups = page
    ? tweakGroups.filter((group) => group.pages.includes(page))
    : [];

  if (!page || visibleGroups.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[100] max-w-[calc(100vw-2rem)]">
      {open ? (
        <div className="w-[22rem] max-w-full overflow-hidden rounded-3xl border border-black/[.08] bg-white/95 shadow-[0_1.5rem_5rem_rgba(21,21,21,.18)] backdrop-blur-2xl">
          <div className="flex items-start justify-between border-b border-gray-100 px-5 py-4">
            <div>
              <p className="text-[.65rem] font-semibold uppercase tracking-[.18em] text-primary">
                Concept lab
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                {page === 'home'
                  ? 'Compare homepage directions'
                  : page === 'trial'
                    ? 'Compare trial details'
                    : page === 'team'
                      ? 'Compare team directions'
                      : page === 'news'
                        ? 'Compare newsroom directions'
                        : 'Compare contact form styles'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close design tweaks panel"
              className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-[65vh] space-y-5 overflow-y-auto px-5 py-4">
            {visibleGroups.map((group) => (
              <div key={group.key}>
                <p className="mb-2 text-[.65rem] font-semibold uppercase tracking-[.14em] text-gray-400">
                  {group.label}
                </p>
                <div className="space-y-1.5">
                  {group.choices.map((choice) => (
                    <button
                      key={choice.value}
                      type="button"
                      onClick={() => setTweak(group.key, choice.value)}
                      className={`w-full rounded-2xl border px-3.5 py-3 text-left transition-[background-color,border-color,color,transform] ${
                        tweaks[group.key] === choice.value
                          ? 'border-primary bg-primary text-white shadow-sm'
                          : 'border-gray-100 bg-gray-50 text-gray-700 hover:-translate-y-px hover:border-primary/20 hover:bg-primary/[.04]'
                      }`}
                    >
                      <span className="block text-xs font-semibold">{choice.label}</span>
                      {choice.description && (
                        <span
                          className={`mt-0.5 block text-[.68rem] leading-snug ${
                            tweaks[group.key] === choice.value ? 'text-white/75' : 'text-gray-400'
                          }`}
                        >
                          {choice.description}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 px-5 py-3">
            <button
              type="button"
              onClick={resetTweaks}
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 transition-colors hover:text-gray-800"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset to recommended
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open design tweaks panel"
          className="flex items-center gap-2 rounded-full border border-black/[.08] bg-white/95 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-[0_.75rem_2rem_rgba(21,21,21,.12)] backdrop-blur-xl transition-transform hover:-translate-y-0.5"
        >
          <Settings2 className="h-4 w-4 text-primary" />
          {page === 'home'
            ? 'Hero lab'
            : page === 'trial'
              ? 'Trial lab'
            : page === 'team'
                ? 'Team lab'
                : page === 'news'
                  ? 'News lab'
                  : 'Contact lab'}
        </button>
      )}
    </div>
  );
}
