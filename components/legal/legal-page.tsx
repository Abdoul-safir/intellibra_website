import { ArrowUpRight, Clock3, ShieldCheck } from 'lucide-react';
import { Link } from '../../i18n/navigation';
import { getLegalDocument, type LegalDocumentKey } from '../../lib/legal-content';

export function LegalPage({ locale, documentKey }: { locale: string; documentKey: LegalDocumentKey }) {
  const document = getLegalDocument(locale, documentKey);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#111522] pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div aria-hidden className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-primary/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-3 py-1.5 text-xs font-semibold text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {document.draftLabel}
          </span>
          <h1 className="mt-8 max-w-5xl font-heading text-5xl font-medium leading-[.95] tracking-[-.05em] sm:text-6xl lg:text-[5.5rem]">
            {document.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">{document.summary}</p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              [document.updatedLabel, document.updated],
              [document.scopeLabel, document.scope],
              [document.ownerLabel, document.owner],
            ].map(([label, value], index) => (
              <div key={label} className="bg-[#111522]/90 px-5 py-4">
                <div className="flex items-center gap-2 text-white/35">
                  {index === 0 ? <Clock3 className="h-3.5 w-3.5" /> : <ShieldCheck className="h-3.5 w-3.5" />}
                  <span className="text-[.62rem] font-semibold uppercase tracking-[.14em]">{label}</span>
                </div>
                <p className="mt-2 text-sm text-white/75">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.35fr_1fr] lg:px-8">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[.65rem] font-semibold uppercase tracking-[.16em] text-gray-400">{document.contentsLabel}</p>
            <nav className="mt-5 border-l border-gray-200" aria-label={document.contentsLabel}>
              {document.sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`} className="flex gap-3 border-l border-transparent px-4 py-2.5 text-sm text-gray-500 transition-colors hover:border-primary hover:text-primary">
                  <span className="text-[.65rem] font-semibold text-gray-300">{String(index + 1).padStart(2, '0')}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0">
            <div className="rounded-2xl border border-primary/20 bg-primary/[.05] p-5 text-sm leading-6 text-gray-700">
              <strong className="font-semibold text-primary">{document.draftLabel}.</strong> {document.draftNotice}
            </div>

            <div className="mt-12">
              {document.sections.map((section, index) => (
                <article key={section.id} id={section.id} className="scroll-mt-32 border-t border-gray-200 py-10 first:border-t-0 first:pt-0">
                  <div className="grid gap-4 sm:grid-cols-[4rem_1fr]">
                    <span className="text-xs font-semibold tracking-[.14em] text-primary">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h2 className="text-3xl font-semibold text-gray-950 md:text-4xl">{section.title}</h2>
                      <div className="mt-5 space-y-4">
                        {section.body.map((paragraph) => (
                          <p key={paragraph} className="max-w-3xl text-base leading-8 text-gray-600">{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets && (
                        <ul className="mt-6 divide-y divide-gray-100 border-y border-gray-100">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex gap-3 py-3.5 text-sm leading-6 text-gray-600">
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 rounded-[2rem] bg-[#111522] p-7 text-white sm:p-9">
              <h2 className="text-3xl font-semibold">{document.contactTitle}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">{document.contactBody}</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white">
                contact@anora.solutions
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
