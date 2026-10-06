'use client';

// Deployment design state captured from the concept lab on 2026-07-19.

import * as React from 'react';

export interface Tweaks {
  hero: 'split' | 'centered' | 'bento' | 'editorial' | 'clinical' | 'story';
  crisis_layout: 'cinematic' | 'editorial' | 'evidence' | 'mosaic';
  stats: 'matrix' | 'editorial' | 'cards' | 'ticker' | 'ring';
  journey: 'timeline' | 'cards' | 'carousel';
  registry: 'collapsed' | 'hidden';
  eligibility_layout: 'snapshot' | 'split' | 'steps';
  sites_layout: 'coverage' | 'network' | 'directory';
  team_layout: 'collective' | 'mosaic';
  news_layout: 'dispatch' | 'journal';
  contact_form: 'outlined' | 'soft' | 'canvas';
}

export interface TweakGroup {
  key: keyof Tweaks;
  label: string;
  pages: ('home' | 'trial' | 'team' | 'news' | 'contact')[];
  choices: { value: string; label: string; description?: string }[];
}

export const tweakGroups: TweakGroup[] = [
  {
    key: 'hero',
    label: 'Homepage hero',
    pages: ['home'],
    choices: [
      { value: 'split', label: 'Product split', description: 'Balanced story and dashboard' },
      { value: 'centered', label: 'Editorial center', description: 'Quiet, typography-led opening' },
      { value: 'bento', label: 'Impact bento', description: 'Proof-forward modular layout' },
      { value: 'editorial', label: 'Oversized editorial', description: 'Bold headline with product stage' },
      { value: 'clinical', label: 'Clinical signal', description: 'Dark, precise and research-led' },
      { value: 'story', label: 'Human story', description: 'Photography-led emotional opening' },
    ],
  },
  {
    key: 'crisis_layout',
    label: 'Crisis story layout',
    pages: ['home'],
    choices: [
      { value: 'cinematic', label: 'Cinematic image', description: 'The current immersive direction' },
      { value: 'editorial', label: 'Editorial story', description: 'Oversized type with a portrait crop' },
      { value: 'evidence', label: 'Evidence rail', description: 'High-contrast clinical storytelling' },
      { value: 'mosaic', label: 'Impact mosaic', description: 'Image, headline and context in balance' },
    ],
  },
  {
    key: 'stats',
    label: 'Crisis stat boxes',
    pages: ['home'],
    choices: [
      {
        value: 'matrix',
        label: 'Evidence matrix',
        description: 'A precise, aligned clinical dashboard',
      },
      { value: 'editorial', label: 'Editorial numbers' },
      { value: 'cards', label: 'Cards' },
      { value: 'ticker', label: 'Ticker row' },
      { value: 'ring', label: 'Progress rings' },
    ],
  },
  {
    key: 'journey',
    label: 'Our Journey',
    pages: ['home'],
    choices: [
      { value: 'timeline', label: 'Timeline' },
      { value: 'cards', label: 'Cards' },
      { value: 'carousel', label: 'Scroll carousel' },
    ],
  },
  {
    key: 'registry',
    label: 'Trial registry section',
    pages: ['trial'],
    choices: [
      { value: 'collapsed', label: 'Collapsed' },
      { value: 'hidden', label: 'Hidden' },
    ],
  },
  {
    key: 'eligibility_layout',
    label: 'Eligibility section',
    pages: ['trial'],
    choices: [
      {
        value: 'snapshot',
        label: 'Quick snapshot',
        description: 'One compact eligibility signal',
      },
      {
        value: 'split',
        label: 'Clear decision',
        description: 'Eligible and check-first columns',
      },
      {
        value: 'steps',
        label: 'Three essentials',
        description: 'A guided, step-by-step summary',
      },
    ],
  },
  {
    key: 'sites_layout',
    label: 'Recruiting centers',
    pages: ['trial'],
    choices: [
      {
        value: 'coverage',
        label: 'Coverage grid',
        description: 'A modern regional card system',
      },
      {
        value: 'network',
        label: 'National network',
        description: 'Every hospital visible at a glance',
      },
      {
        value: 'directory',
        label: 'Compact directory',
        description: 'Focused expandable hospital list',
      },
    ],
  },
  {
    key: 'team_layout',
    label: 'Team page direction',
    pages: ['team'],
    choices: [
      {
        value: 'collective',
        label: 'Collective portrait',
        description: 'A warm group photograph with editorial profile cards',
      },
      {
        value: 'mosaic',
        label: 'Portrait mosaic',
        description: 'An image-led collage with a compact people directory',
      },
    ],
  },
  {
    key: 'news_layout',
    label: 'News page direction',
    pages: ['news'],
    choices: [
      {
        value: 'dispatch',
        label: 'Editorial dispatch',
        description: 'A refined magazine grid led by the latest milestone',
      },
      {
        value: 'journal',
        label: 'Field journal',
        description: 'A documentary opening with newspaper-style stories',
      },
    ],
  },
  {
    key: 'contact_form',
    label: 'Contact form style',
    pages: ['contact'],
    choices: [
      {
        value: 'outlined',
        label: 'Crisp outline',
        description: 'Clear white fields with precise borders',
      },
      {
        value: 'soft',
        label: 'Soft surface',
        description: 'Quiet filled boxes with generous rounding',
      },
      {
        value: 'canvas',
        label: 'Form canvas',
        description: 'White input boxes grouped on a soft panel',
      },
    ],
  },
];

export const deploymentTweaks: Tweaks = {
  hero: 'centered',
  crisis_layout: 'mosaic',
  stats: 'matrix',
  journey: 'timeline',
  registry: 'hidden',
  eligibility_layout: 'split',
  sites_layout: 'coverage',
  team_layout: 'mosaic',
  news_layout: 'dispatch',
  contact_form: 'outlined',
};

interface TweaksContextValue {
  tweaks: Tweaks;
  setTweak: (key: keyof Tweaks, value: string) => void;
  resetTweaks: () => void;
}

const TweaksContext = React.createContext<TweaksContextValue | null>(null);

export function TweaksProvider({ children }: { children: React.ReactNode }) {
  const [tweaks, setTweaks] = React.useState<Tweaks>(deploymentTweaks);

  const setTweak = React.useCallback((key: keyof Tweaks, value: string) => {
    setTweaks((prev) => ({ ...prev, [key]: value } as Tweaks));
  }, []);

  const resetTweaks = React.useCallback(() => {
    setTweaks(deploymentTweaks);
  }, []);

  const value = React.useMemo(
    () => ({ tweaks, setTweak, resetTweaks }),
    [tweaks, setTweak, resetTweaks],
  );

  return <TweaksContext.Provider value={value}>{children}</TweaksContext.Provider>;
}

export function useTweaks() {
  const ctx = React.useContext(TweaksContext);
  if (!ctx) throw new Error('useTweaks must be used within TweaksProvider');
  return ctx;
}
