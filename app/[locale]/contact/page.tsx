'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '../../../components/ui/button';
import { useTweaks } from '../../../lib/tweaks-context';

const fieldClasses = {
  outlined:
    'mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-base text-gray-950 outline-none transition-[border-color,box-shadow,background-color] placeholder:text-gray-300 hover:border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10',
  soft:
    'mt-2 w-full rounded-2xl border border-transparent bg-[#f4f5f7] px-4 py-3.5 text-base text-gray-950 outline-none transition-[border-color,box-shadow,background-color] placeholder:text-gray-300 hover:bg-[#eef0f3] focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/10',
  canvas:
    'mt-2 w-full rounded-xl border border-white bg-white px-4 py-3.5 text-base text-gray-950 shadow-[0_8px_24px_rgba(16,35,63,.06)] outline-none transition-[border-color,box-shadow] placeholder:text-gray-300 hover:border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10',
} as const;

export default function ContactPage() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const { tweaks } = useTweaks();
  const fieldClass = fieldClasses[tweaks.contact_form];
  const formClass = tweaks.contact_form === 'canvas'
    ? 'space-y-8 rounded-[2rem] bg-[#f6f7f9] p-5 sm:p-7 lg:p-8'
    : 'space-y-9';

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#111522] pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div aria-hidden className="absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-primary/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <h1 className="font-heading text-6xl font-medium leading-[.92] tracking-[-.055em] sm:text-7xl lg:text-[6.5rem]">
            {t('hero.title')}
          </h1>
          <div className="max-w-xl lg:mb-2 lg:justify-self-end">
            <h2 className="text-2xl font-semibold">{t('intro.title')}</h2>
            <p className="mt-3 text-lg leading-relaxed text-white/55">{t('intro.body')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
          <div>
            {submitted ? (
              <div className="flex min-h-[34rem] flex-col items-start justify-center border-y border-gray-200 py-14" aria-live="polite">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h2 className="mt-8 text-4xl font-semibold text-gray-950 md:text-5xl">{t('form.successTitle')}</h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">{t('form.successBody')}</p>
                <Button type="button" variant="outline" size="lg" className="mt-8" onClick={() => setSubmitted(false)}>
                  {t('form.sendAnother')}
                </Button>
              </div>
            ) : (
              <form
                className={formClass}
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-7 sm:grid-cols-2">
                  <label className="block text-xs font-semibold uppercase tracking-[.12em] text-gray-500">
                    {t('form.firstName')}
                    <input name="firstName" type="text" className={fieldClass} autoComplete="given-name" required />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-[.12em] text-gray-500">
                    {t('form.lastName')}
                    <input name="lastName" type="text" className={fieldClass} autoComplete="family-name" required />
                  </label>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <label className="block text-xs font-semibold uppercase tracking-[.12em] text-gray-500">
                    {t('form.email')}
                    <input name="email" type="email" className={fieldClass} autoComplete="email" required />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-[.12em] text-gray-500">
                    {t('form.phone')}
                    <input name="phone" type="tel" className={fieldClass} autoComplete="tel" />
                  </label>
                </div>

                <label className="block text-xs font-semibold uppercase tracking-[.12em] text-gray-500">
                  {t('form.organization')}
                  <input name="organization" type="text" className={fieldClass} autoComplete="organization" />
                </label>

                <label className="relative block text-xs font-semibold uppercase tracking-[.12em] text-gray-500">
                  {t('form.subject')}
                  <select name="subject" className={`${fieldClass} appearance-none pr-12`} defaultValue="general">
                    <option value="general">{t('form.subjectOptions.general')}</option>
                    <option value="partnership">{t('form.subjectOptions.partnership')}</option>
                    <option value="media">{t('form.subjectOptions.media')}</option>
                    <option value="support">{t('form.subjectOptions.support')}</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 text-gray-400" />
                </label>

                <label className="block text-xs font-semibold uppercase tracking-[.12em] text-gray-500">
                  {t('form.message')}
                  <textarea name="message" rows={5} className={`${fieldClass} resize-y`} required />
                </label>

                <fieldset>
                  <legend className="text-xs font-semibold uppercase tracking-[.12em] text-gray-500">{t('form.preferredMethod')}</legend>
                  <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
                    {[
                      ['email', t('form.email2')],
                      ['phone', t('form.phone2')],
                      ['either', t('form.either')],
                    ].map(([value, label], index) => (
                      <label key={value} className="inline-flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
                        <input type="radio" name="preferredMethod" value={value} defaultChecked={index === 0} className="h-4 w-4 accent-primary" />
                        {label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="flex flex-col gap-6 border-t border-gray-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex max-w-xl items-start gap-3 text-xs leading-5 text-gray-500">
                    <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 flex-shrink-0 rounded accent-primary" />
                    <span>{t('form.consent')}</span>
                  </label>
                  <Button type="submit" variant="pink" size="xl" className="flex-shrink-0 gap-2">
                    {t('form.send')}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-gray-100">
              <Image
                src="/images/contact-clinician.webp"
                alt="A clinician using IntelliBra technology"
                fill
                className="object-cover object-[34%_center]"
                sizes="(min-width: 1024px) 30vw, 100vw"
                priority
                unoptimized
              />
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-[#fff3f6] px-6 py-7 sm:px-7">
              <p className="text-[.65rem] font-semibold uppercase tracking-[.16em] text-primary">
                {t('card.eyebrow')}
              </p>
              <h2 className="mt-2 font-heading text-4xl font-medium leading-none tracking-[-.03em] text-gray-950">
                {t('card.title')}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">{t('card.body')}</p>
            </div>

            <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
              <div className="group flex gap-4 py-5">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={1.75} />
                <div>
                  <p className="text-[.68rem] font-semibold uppercase tracking-[.14em] text-gray-400">{t('card.addressLabel')}</p>
                  <p className="mt-1 text-sm text-gray-700">{t('card.address')}</p>
                </div>
              </div>
              <a
                href={`tel:${t('card.phone').replace(/[^+\d]/g, '')}`}
                className="group flex gap-4 py-5 transition-colors hover:text-primary"
              >
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={1.75} />
                <div>
                  <p className="text-[.68rem] font-semibold uppercase tracking-[.14em] text-gray-400">{t('card.phoneLabel')}</p>
                  <p className="mt-1 text-sm text-gray-700 transition-colors group-hover:text-primary">{t('card.phone')}</p>
                </div>
              </a>
              <a href={`mailto:${t('card.email')}`} className="group flex gap-4 py-5 transition-colors hover:text-primary">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={1.75} />
                <div>
                  <p className="text-[.68rem] font-semibold uppercase tracking-[.14em] text-gray-400">{t('card.emailLabel')}</p>
                  <p className="mt-1 break-all text-sm text-gray-700 transition-colors group-hover:text-primary">{t('card.email')}</p>
                </div>
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2.5 rounded-xl bg-gray-50 px-4 py-3 text-xs leading-5 text-gray-500">
              <Clock3 className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
              {t('card.responseTime')}
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
