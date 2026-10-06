'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useTweaks } from '../../lib/tweaks-context';

const icons = ['/icons/User Group.png', '/icons/Hospital.png', '/icons/Clock.png', '/icons/Pay.png'];
const pcts = [12.5, 25, 60, 80];

const matrixCopy = {
  en: {
    title: 'Four signals shaping the urgency for earlier access.',
    categories: ['Lifetime risk', 'Screening access', 'Late diagnosis', 'Cost burden'],
  },
  fr: {
    title: "Quatre signaux qui soulignent l’urgence d’un accès plus précoce.",
    categories: ['Risque au cours de la vie', 'Accès au dépistage', 'Diagnostic tardif', 'Charge financière'],
  },
};

function useStats() {
  const t = useTranslations('home');
  const raw = t.raw('crisisStats') as { value: string; label: string }[];
  return raw.map((s, i) => ({ ...s, icon: icons[i]!, pct: pcts[i]! }));
}

function Ring({ pct }: { pct: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16 -rotate-90">
      <circle cx="32" cy="32" r={r} fill="none" stroke="currentColor" strokeWidth="6" className="text-white/10" />
      <motion.circle
        cx="32"
        cy="32"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        className="text-primary"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c - (c * pct) / 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

function EditorialVariant() {
  const stats = useStats();
  return (
    <div className="border-y border-gray-200">
      {stats.map((s, i) => (
        <motion.div
          key={s.value}
          className="group grid grid-cols-1 sm:grid-cols-[minmax(0,10rem)_1fr] items-baseline gap-x-8 gap-y-1 border-b border-gray-200 py-7 last:border-b-0 sm:py-8"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-heading text-6xl font-medium leading-none tabular-nums text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-7xl">
            {s.value}
          </span>
          <p className="max-w-xl text-base text-gray-500 sm:text-lg">
            <span className="mr-2 inline-block h-px w-6 -translate-y-1.5 bg-primary/50 align-middle" />
            {s.label}.
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function CardsVariant() {
  const stats = useStats();
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {stats.map((s, i) => (
        <div
          key={s.value}
          className={`rounded-2xl p-8 text-left ${i === 0 ? 'bg-primary text-white' : 'bg-white border border-gray-200'}`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${i === 0 ? 'bg-white' : 'bg-primary/10'}`}>
            <Image src={s.icon} alt="" width={24} height={24} />
          </div>
          <p className={`text-4xl font-semibold mb-2 ${i === 0 ? 'text-white' : 'text-primary'}`}>{s.value}</p>
          <p className={i === 0 ? 'text-white/90' : 'text-gray-700'}>{s.label}.</p>
        </div>
      ))}
    </motion.div>
  );
}

function EvidenceMatrixVariant() {
  const stats = useStats();
  const locale = useLocale();
  const copy = locale === 'fr' ? matrixCopy.fr : matrixCopy.en;

  return (
    <motion.div
      className="overflow-hidden rounded-[2rem] bg-[#101827] text-white shadow-[0_1.5rem_4rem_rgba(16,24,39,.14)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-70px' }}
    >
      <div className="border-b border-white/10 px-6 py-5 sm:px-8 md:px-9 md:py-6">
        <h3 className="max-w-2xl font-heading text-xl font-medium leading-snug tracking-[-.02em] text-white sm:text-2xl">
          {copy.title}
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          return (
            <article
              key={stat.value}
              className="group grid min-h-[14rem] cursor-pointer grid-rows-[1fr_auto] border-t border-white/10 px-5 py-7 transition-colors hover:bg-white/[.045] sm:px-6 lg:border-r lg:border-t-0 lg:last:border-r-0"
            >
              <div className="flex flex-col justify-end pb-6">
                <p className="text-[.65rem] font-semibold uppercase tracking-[.15em] text-white/40">
                  {copy.categories[index]}
                </p>
                <p className="mt-3 font-heading text-[3.25rem] font-medium leading-none tracking-[-.045em] text-white transition-colors duration-300 group-hover:text-primary sm:text-6xl">
                  {stat.value}
                </p>
              </div>

              <div>
                <p className="min-h-[4.5rem] text-sm leading-6 text-white/62">{stat.label}.</p>
                <div className="mt-5 h-px overflow-hidden bg-white/10">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </motion.div>
  );
}

function RingVariant() {
  const stats = useStats();
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl bg-gray-900 p-6 md:p-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {stats.map((s) => (
        <div key={s.value} className="flex flex-col items-center text-center gap-4 py-4">
          <div className="relative flex items-center justify-center">
            <Ring pct={s.pct} />
            <span className="absolute text-sm font-semibold text-white">{s.value}</span>
          </div>
          <p className="text-gray-400 text-sm max-w-[12rem]">{s.label}.</p>
        </div>
      ))}
    </motion.div>
  );
}

function TickerVariant() {
  const stats = useStats();
  const loop = [...stats, ...stats];
  return (
    <motion.div
      className="rounded-2xl bg-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex w-max animate-[stats-ticker_28s_linear_infinite]">
        {loop.map((s, i) => (
          <div key={i} className="flex items-center gap-4 px-10 py-8 border-r border-white/10 whitespace-nowrap">
            <span className="text-3xl font-semibold text-primary">{s.value}</span>
            <span className="text-gray-400 text-sm max-w-[14rem] whitespace-normal">{s.label}.</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function CrisisStats() {
  const { tweaks } = useTweaks();
  if (tweaks.stats === 'matrix') return <EvidenceMatrixVariant />;
  if (tweaks.stats === 'ring') return <RingVariant />;
  if (tweaks.stats === 'ticker') return <TickerVariant />;
  if (tweaks.stats === 'cards') return <CardsVariant />;
  return <EditorialVariant />;
}
