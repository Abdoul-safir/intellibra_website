'use client';

import Image from 'next/image';
import {
  ArrowLeft,
  Check,
  Clock3,
  Eye,
  FileText,
  ImagePlus,
  Plus,
  Save,
  Search,
  Send,
  Trash2,
  X,
} from 'lucide-react';
import * as React from 'react';
import { Link } from '../../i18n/navigation';
import { newsCategoryLabels, type NewsCategory } from '../../lib/news-content';
import {
  cloneNewsStudioArticle,
  createNewsStudioArticle,
  readNewsStudioArticles,
  writeNewsStudioArticles,
  type NewsStudioArticle,
  type NewsStudioStatus,
} from '../../lib/news-studio';
import { localize } from '../../lib/team-content';

type EditorLocale = 'en' | 'fr';
type StatusFilter = 'all' | NewsStudioStatus;

const categories: NewsCategory[] = ['milestone', 'field-notes', 'perspective', 'media'];
const statuses: NewsStudioStatus[] = ['draft', 'review', 'published'];

const copy = {
  en: {
    title: 'News studio',
    lead: 'Write, review and publish IntelliBra stories from the website project.',
    localNote: 'Stories are stored in this browser for now. Publishing makes them visible on the News page in this browser only.',
    newStory: 'New story',
    library: 'Your stories',
    empty: 'No local stories yet.',
    emptyLead: 'Create the first story to begin.',
    search: 'Search stories…',
    all: 'All',
    draft: 'Draft',
    review: 'In review',
    published: 'Published',
    untitled: 'Untitled story',
    select: 'Select a story to edit, or create a new one.',
    english: 'English',
    french: 'Français',
    titleField: 'Title',
    slug: 'Story URL',
    excerpt: 'Short editorial summary',
    body: 'Article body',
    category: 'Category',
    date: 'Publication date',
    readTime: 'Reading time',
    cover: 'Cover image',
    coverHelp: 'JPG, PNG or WebP under 750 KB',
    imageAlt: 'Image description',
    imageAltHelp: 'Describe the image for screen readers and search engines.',
    save: 'Save draft',
    sendReview: 'Send for review',
    publish: 'Publish locally',
    preview: 'Preview',
    delete: 'Delete',
    missingTitle: 'Add the English title before saving.',
    incomplete: 'Complete both languages, the cover and image descriptions before publishing.',
    duplicate: 'That story URL is already used.',
    saved: 'Draft saved.',
    reviewed: 'Story moved to review.',
    publishedMessage: 'Published in this browser. Open the News page to see it.',
    uploadLarge: 'Please choose an image under 750 KB.',
    back: 'Back to news',
    close: 'Close preview',
  },
  fr: {
    title: 'Studio actualités',
    lead: 'Rédigez, révisez et publiez les histoires IntelliBra depuis le projet du site.',
    localNote: 'Les articles sont actuellement stockés dans ce navigateur. La publication les rend visibles sur la page Actualités de ce navigateur uniquement.',
    newStory: 'Nouvel article',
    library: 'Vos articles',
    empty: 'Aucun article local.',
    emptyLead: 'Créez le premier article pour commencer.',
    search: 'Rechercher…',
    all: 'Tous',
    draft: 'Brouillon',
    review: 'En révision',
    published: 'Publié',
    untitled: 'Article sans titre',
    select: 'Sélectionnez un article ou créez-en un nouveau.',
    english: 'English',
    french: 'Français',
    titleField: 'Titre',
    slug: 'Adresse de l’article',
    excerpt: 'Résumé éditorial',
    body: 'Corps de l’article',
    category: 'Catégorie',
    date: 'Date de publication',
    readTime: 'Temps de lecture',
    cover: 'Image de couverture',
    coverHelp: 'JPG, PNG ou WebP de moins de 750 Ko',
    imageAlt: "Description de l’image",
    imageAltHelp: "Décrivez l’image pour les lecteurs d’écran et les moteurs de recherche.",
    save: 'Enregistrer',
    sendReview: 'Envoyer en révision',
    publish: 'Publier localement',
    preview: 'Aperçu',
    delete: 'Supprimer',
    missingTitle: "Ajoutez le titre anglais avant d’enregistrer.",
    incomplete: 'Complétez les deux langues, la couverture et les descriptions avant de publier.',
    duplicate: 'Cette adresse est déjà utilisée.',
    saved: 'Brouillon enregistré.',
    reviewed: 'Article envoyé en révision.',
    publishedMessage: 'Publié dans ce navigateur. Ouvrez la page Actualités pour le voir.',
    uploadLarge: 'Choisissez une image de moins de 750 Ko.',
    back: 'Retour aux actualités',
    close: "Fermer l’aperçu",
  },
};

const inputClass = 'mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#10233f] outline-none transition placeholder:text-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10';
const labelClass = 'text-xs font-semibold text-[#10233f]';

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function statusLabel(status: NewsStudioStatus, text: typeof copy.en) {
  if (status === 'published') return text.published;
  if (status === 'review') return text.review;
  return text.draft;
}

function statusClass(status: NewsStudioStatus) {
  if (status === 'published') return 'bg-emerald-50 text-emerald-700';
  if (status === 'review') return 'bg-amber-50 text-amber-700';
  return 'bg-gray-100 text-gray-500';
}

export function NewsStudio({ locale }: { locale: string }) {
  const text = locale === 'fr' ? copy.fr : copy.en;
  const [articles, setArticles] = React.useState<NewsStudioArticle[]>([]);
  const [draft, setDraft] = React.useState<NewsStudioArticle | null>(null);
  const [editorLocale, setEditorLocale] = React.useState<EditorLocale>('en');
  const [filter, setFilter] = React.useState<StatusFilter>('all');
  const [query, setQuery] = React.useState('');
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [notice, setNotice] = React.useState('');
  const fileInput = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => setArticles(readNewsStudioArticles()), []);

  React.useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(''), 3600);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const visible = React.useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return articles
      .filter((article) => filter === 'all' || article.status === filter)
      .filter((article) => !normalized || [
        article.title.en,
        article.title.fr,
        article.slug,
      ].some((value) => value.toLowerCase().includes(normalized)))
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }, [articles, filter, query]);

  function createStory() {
    setDraft(createNewsStudioArticle());
    setEditorLocale('en');
  }

  function editStory(article: NewsStudioArticle) {
    setDraft(cloneNewsStudioArticle(article));
    setEditorLocale('en');
  }

  function updateDraft(updater: (current: NewsStudioArticle) => NewsStudioArticle) {
    setDraft((current) => current ? updater(current) : current);
  }

  function updateLocalized(
    field: 'title' | 'excerpt' | 'body' | 'imageAlt',
    value: string,
  ) {
    updateDraft((current) => ({
      ...current,
      [field]: { ...current[field], [editorLocale]: value },
    }));
  }

  function ensureSlug() {
    updateDraft((current) => current.slug
      ? current
      : { ...current, slug: slugify(current.title.en) });
  }

  function persist(status: NewsStudioStatus) {
    if (!draft) return;
    const nextSlug = draft.slug || slugify(draft.title.en);
    if (!draft.title.en.trim()) {
      setNotice(text.missingTitle);
      setEditorLocale('en');
      return;
    }
    if (articles.some((article) => article.slug === nextSlug && article.id !== draft.id)) {
      setNotice(text.duplicate);
      return;
    }
    if (status === 'published') {
      const complete = draft.title.en.trim()
        && draft.title.fr.trim()
        && draft.excerpt.en.trim()
        && draft.excerpt.fr.trim()
        && draft.body.en.trim()
        && draft.body.fr.trim()
        && draft.image
        && draft.imageAlt.en.trim()
        && draft.imageAlt.fr.trim();
      if (!complete) {
        setNotice(text.incomplete);
        return;
      }
    }

    const saved: NewsStudioArticle = {
      ...draft,
      slug: nextSlug,
      status,
      updatedAt: new Date().toISOString(),
    };
    const next = articles.some((article) => article.id === saved.id)
      ? articles.map((article) => article.id === saved.id ? saved : article)
      : [saved, ...articles];
    setArticles(next);
    setDraft(cloneNewsStudioArticle(saved));
    writeNewsStudioArticles(next);
    setNotice(
      status === 'published'
        ? text.publishedMessage
        : status === 'review'
          ? text.reviewed
          : text.saved,
    );
  }

  function deleteStory() {
    if (!draft) return;
    const label = draft.title.en || text.untitled;
    if (!window.confirm(`${text.delete}: “${label}”?`)) return;
    const next = articles.filter((article) => article.id !== draft.id);
    setArticles(next);
    setDraft(null);
    writeNewsStudioArticles(next);
  }

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 750_000) {
      setNotice(text.uploadLarge);
      event.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') return;
      updateDraft((current) => ({
        ...current,
        image: reader.result as string,
        imageName: file.name,
      }));
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="min-h-screen bg-[#f8f6f6] pb-24 pt-32 md:pt-36">
      <header className="border-b border-black/[.06] bg-white px-4 py-9 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[92rem] flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-primary">
              <ArrowLeft className="h-4 w-4" />{text.back}
            </Link>
            <h1 className="mt-7 text-5xl font-medium tracking-[-.045em] text-[#10233f] sm:text-6xl">{text.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500">{text.lead}</p>
          </div>
          <button
            type="button"
            onClick={createStory}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:bg-primary-deep"
          >
            <Plus className="h-4 w-4" />{text.newStory}
          </button>
        </div>
      </header>

      <div className="mx-auto mt-6 max-w-[92rem] px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/[.045] px-4 py-3 text-sm leading-6 text-[#10233f]">
          <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p>{text.localNote}</p>
        </div>

        <div className="mt-6 grid min-h-[46rem] overflow-hidden rounded-[2rem] border border-black/[.06] bg-white shadow-[0_1.5rem_5rem_rgba(16,35,63,.07)] lg:grid-cols-[22rem_minmax(0,1fr)]">
          <aside className="border-b border-gray-100 bg-[#fcfbfb] lg:border-b-0 lg:border-r">
            <div className="border-b border-gray-100 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="font-body text-sm font-semibold text-[#10233f]">{text.library}</h2>
                  <p className="mt-1 text-xs text-gray-400">{articles.length} {articles.length === 1 ? 'story' : 'stories'}</p>
                </div>
                <button type="button" onClick={createStory} aria-label={text.newStory} className="grid h-9 w-9 place-items-center rounded-full bg-primary text-white">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <label className="relative mt-5 block">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={text.search} className="h-10 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm outline-none focus:border-primary" />
              </label>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {(['all', ...statuses] as StatusFilter[]).map((status) => (
                  <button
                    type="button"
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`rounded-full px-3 py-1.5 text-[.68rem] font-semibold transition ${
                      filter === status ? 'bg-[#10233f] text-white' : 'bg-gray-100 text-gray-500 hover:text-[#10233f]'
                    }`}
                  >
                    {status === 'all' ? text.all : statusLabel(status, text)}
                  </button>
                ))}
              </div>
            </div>

            <div className="max-h-[37rem] overflow-y-auto">
              {visible.length ? visible.map((article) => (
                <button
                  type="button"
                  key={article.id}
                  onClick={() => editStory(article)}
                  className={`w-full border-b border-gray-100 px-5 py-4 text-left transition hover:bg-white ${
                    draft?.id === article.id ? 'bg-white shadow-[inset_3px_0_0_#FF2C62]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`rounded-full px-2 py-1 text-[.6rem] font-semibold uppercase tracking-[.08em] ${statusClass(article.status)}`}>
                      {statusLabel(article.status, text)}
                    </span>
                    <time className="text-[.65rem] text-gray-400">{article.date}</time>
                  </div>
                  <h3 className="mt-3 line-clamp-2 font-body text-sm font-semibold leading-5 text-[#10233f]">
                    {localize(article.title, locale) || text.untitled}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-gray-400">
                    {localize(article.excerpt, locale) || article.slug || text.emptyLead}
                  </p>
                </button>
              )) : (
                <div className="px-6 py-14 text-center">
                  <FileText className="mx-auto h-7 w-7 text-gray-300" />
                  <p className="mt-4 text-sm font-semibold text-[#10233f]">{text.empty}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-400">{text.emptyLead}</p>
                </div>
              )}
            </div>
          </aside>

          <main className="min-w-0">
            {draft ? (
              <div className="flex h-full flex-col">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 px-5 py-4 sm:px-7">
                  <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1">
                    {(['en', 'fr'] as EditorLocale[]).map((language) => (
                      <button
                        type="button"
                        key={language}
                        onClick={() => setEditorLocale(language)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                          editorLocale === language ? 'bg-white text-[#10233f] shadow-sm' : 'text-gray-400'
                        }`}
                      >
                        {language === 'en' ? text.english : text.french}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => setPreviewOpen(true)} className="inline-flex h-10 items-center gap-2 rounded-full border border-gray-200 px-4 text-xs font-semibold text-[#10233f] transition hover:border-primary/40 hover:text-primary">
                      <Eye className="h-4 w-4" />{text.preview}
                    </button>
                    <button type="button" onClick={deleteStory} className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 text-gray-400 transition hover:border-red-200 hover:text-red-500" aria-label={text.delete}>
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid flex-1 gap-x-5 gap-y-6 overflow-y-auto p-5 sm:p-7 xl:grid-cols-2">
                  <label className={`block ${labelClass} xl:col-span-2`}>
                    {text.titleField}
                    <input
                      value={draft.title[editorLocale]}
                      onChange={(event) => updateLocalized('title', event.target.value)}
                      onBlur={ensureSlug}
                      className={`${inputClass} text-base font-semibold`}
                      placeholder={text.untitled}
                    />
                  </label>

                  <label className={`block ${labelClass} xl:col-span-2`}>
                    {text.slug}
                    <div className="mt-2 flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                      <span className="pl-4 text-sm text-gray-400">/news/</span>
                      <input
                        value={draft.slug}
                        onChange={(event) => updateDraft((current) => ({ ...current, slug: slugify(event.target.value) }))}
                        className="h-12 min-w-0 flex-1 bg-transparent px-1 pr-4 text-sm text-[#10233f] outline-none"
                        placeholder="story-url"
                      />
                    </div>
                  </label>

                  <label className={`block ${labelClass} xl:col-span-2`}>
                    {text.excerpt}
                    <textarea value={draft.excerpt[editorLocale]} onChange={(event) => updateLocalized('excerpt', event.target.value)} rows={3} className={`${inputClass} resize-y leading-6`} />
                  </label>

                  <label className={`block ${labelClass} xl:col-span-2`}>
                    {text.body}
                    <textarea value={draft.body[editorLocale]} onChange={(event) => updateLocalized('body', event.target.value)} rows={13} className={`${inputClass} min-h-72 resize-y leading-7`} placeholder={editorLocale === 'fr' ? 'Rédigez l’article…' : 'Write the article…'} />
                  </label>

                  <label className={`block ${labelClass}`}>
                    {text.category}
                    <select value={draft.category} onChange={(event) => updateDraft((current) => ({ ...current, category: event.target.value as NewsCategory }))} className={inputClass}>
                      {categories.map((category) => <option key={category} value={category}>{localize(newsCategoryLabels[category], locale)}</option>)}
                    </select>
                  </label>

                  <label className={`block ${labelClass}`}>
                    {text.date}
                    <input type="date" value={draft.date} onChange={(event) => updateDraft((current) => ({ ...current, date: event.target.value }))} className={inputClass} />
                  </label>

                  <label className={`block ${labelClass}`}>
                    {text.readTime}
                    <div className="relative">
                      <Clock3 className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <input type="number" min={1} max={30} value={draft.readMinutes} onChange={(event) => updateDraft((current) => ({ ...current, readMinutes: Number(event.target.value) || 1 }))} className={inputClass} />
                    </div>
                  </label>

                  <div className={`${labelClass}`}>
                    {text.cover}
                    <input ref={fileInput} type="file" accept="image/png,image/jpeg,image/webp" hidden onChange={handleImage} />
                    <button type="button" onClick={() => fileInput.current?.click()} className="mt-2 flex min-h-32 w-full items-center gap-4 rounded-2xl border border-dashed border-gray-300 bg-[#fcfbfb] p-3 text-left transition hover:border-primary/50">
                      {draft.image ? (
                        <span className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                          <Image src={draft.image} alt="" fill unoptimized className="object-cover" />
                        </span>
                      ) : (
                        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary/[.07] text-primary">
                          <ImagePlus className="h-6 w-6" />
                        </span>
                      )}
                      <span>
                        <b className="block text-sm text-[#10233f]">{draft.imageName || text.cover}</b>
                        <span className="mt-1 block text-xs font-normal text-gray-400">{text.coverHelp}</span>
                      </span>
                    </button>
                  </div>

                  <label className={`block ${labelClass} xl:col-span-2`}>
                    {text.imageAlt}
                    <input value={draft.imageAlt[editorLocale]} onChange={(event) => updateLocalized('imageAlt', event.target.value)} className={inputClass} />
                    <span className="mt-2 block text-[.7rem] font-normal leading-5 text-gray-400">{text.imageAltHelp}</span>
                  </label>
                </div>

                <footer className="sticky bottom-0 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-white/95 px-5 py-4 backdrop-blur-xl sm:px-7">
                  <span className={`rounded-full px-3 py-1.5 text-[.68rem] font-semibold uppercase tracking-[.08em] ${statusClass(draft.status)}`}>
                    {statusLabel(draft.status, text)}
                  </span>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <button type="button" onClick={() => persist('draft')} className="inline-flex h-10 items-center gap-2 rounded-full border border-gray-200 px-4 text-xs font-semibold text-[#10233f] transition hover:border-primary/40">
                      <Save className="h-4 w-4" />{text.save}
                    </button>
                    <button type="button" onClick={() => persist('review')} className="inline-flex h-10 items-center gap-2 rounded-full bg-[#10233f] px-4 text-xs font-semibold text-white transition hover:bg-[#173457]">
                      <Send className="h-4 w-4" />{text.sendReview}
                    </button>
                    <button type="button" onClick={() => persist('published')} className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-xs font-semibold text-white transition hover:bg-primary-deep">
                      <Check className="h-4 w-4" />{text.publish}
                    </button>
                  </div>
                </footer>
              </div>
            ) : (
              <div className="grid h-full min-h-[36rem] place-items-center px-6 text-center">
                <div>
                  <FileText className="mx-auto h-10 w-10 text-gray-200" />
                  <p className="mt-5 font-semibold text-[#10233f]">{text.select}</p>
                  <button type="button" onClick={createStory} className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white">
                    <Plus className="h-4 w-4" />{text.newStory}
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {notice && (
        <div role="status" className="fixed bottom-5 left-1/2 z-[90] -translate-x-1/2 rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white shadow-2xl">
          {notice}
        </div>
      )}

      {previewOpen && draft && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#111522]/70 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label={text.preview}>
          <div className="mx-auto min-h-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-5 py-4 backdrop-blur-xl">
              <span className="text-sm font-semibold text-[#10233f]">{text.preview}</span>
              <button type="button" onClick={() => setPreviewOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-gray-200 text-gray-500" aria-label={text.close}>
                <X className="h-4 w-4" />
              </button>
            </div>
            <article className="px-5 pb-20 pt-12 sm:px-10 lg:px-16">
              <div className="flex flex-wrap items-center gap-2 text-[.68rem] font-semibold uppercase tracking-[.14em] text-gray-400">
                <span className="text-primary">{localize(newsCategoryLabels[draft.category], editorLocale)}</span>
                <span>•</span><span>{draft.date}</span><span>•</span><span>{draft.readMinutes} min</span>
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-medium leading-[.98] tracking-[-.045em] text-[#10233f] sm:text-6xl">
                {draft.title[editorLocale] || text.untitled}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">{draft.excerpt[editorLocale]}</p>
              {draft.image && (
                <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-[1.75rem] bg-gray-100">
                  <Image src={draft.image} alt={draft.imageAlt[editorLocale]} fill unoptimized className="object-cover" />
                </div>
              )}
              <div className="mx-auto mt-12 max-w-3xl space-y-7">
                {draft.body[editorLocale].split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => (
                  <p key={index} className="text-lg leading-8 text-gray-700">{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
