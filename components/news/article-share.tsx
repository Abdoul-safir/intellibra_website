'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Facebook, Linkedin, Mail, Share2 } from 'lucide-react';

interface ArticleShareProps {
  title: string;
  url: string;
  locale: string;
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const field = document.createElement('textarea');
  field.value = value;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  document.execCommand('copy');
  field.remove();
}

export function ArticleShare({ title, url, locale }: ArticleShareProps) {
  const fr = locale === 'fr';
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function handleCopy() {
    await copyText(url);
    setCopied(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 2200);
  }

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
      }
    }
    await handleCopy();
  }

  const socialButtonClass =
    'grid h-11 w-11 place-items-center rounded-full border border-gray-200 bg-white text-[#10233f] transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/[.06] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

  return (
    <div className="mt-9 flex flex-col gap-5 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-[.65rem] font-semibold uppercase tracking-[.16em] text-primary">
          {fr ? 'Partager cette histoire' : 'Share this story'}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          {fr ? 'Diffusez une information utile.' : 'Help useful information travel further.'}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-[#10233f] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Share2 className="h-4 w-4" aria-hidden />
          {fr ? 'Partager' : 'Share'}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className={socialButtonClass}
          aria-label={copied ? (fr ? 'Lien copié' : 'Link copied') : (fr ? 'Copier le lien' : 'Copy link')}
          title={copied ? (fr ? 'Lien copié' : 'Link copied') : (fr ? 'Copier le lien' : 'Copy link')}
        >
          {copied ? <Check className="h-4 w-4 text-emerald-600" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
        </button>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={socialButtonClass}
          aria-label={fr ? 'Partager sur LinkedIn' : 'Share on LinkedIn'}
          title={fr ? 'Partager sur LinkedIn' : 'Share on LinkedIn'}
        >
          <Linkedin className="h-4 w-4" aria-hidden />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={socialButtonClass}
          aria-label={fr ? 'Partager sur Facebook' : 'Share on Facebook'}
          title={fr ? 'Partager sur Facebook' : 'Share on Facebook'}
        >
          <Facebook className="h-4 w-4" aria-hidden />
        </a>
        <a
          href={`mailto:?subject=${encodedTitle}&body=${encodeURIComponent(`${title}\n\n${url}`)}`}
          className={socialButtonClass}
          aria-label={fr ? 'Partager par e-mail' : 'Share by email'}
          title={fr ? 'Partager par e-mail' : 'Share by email'}
        >
          <Mail className="h-4 w-4" aria-hidden />
        </a>
      </div>
      <p className="sr-only" aria-live="polite">{copied ? (fr ? 'Lien copié.' : 'Link copied.') : ''}</p>
    </div>
  );
}
