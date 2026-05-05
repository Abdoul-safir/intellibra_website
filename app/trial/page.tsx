import type { Metadata } from 'next';
import TrialPage from './TrialPage';

export const metadata: Metadata = {
  title: 'IntelliBra Clinical Trial — Breast Cancer Screening Study, Cameroon',
  description:
    'Join the IntelliBra clinical trial — free, non-invasive breast cancer screening across 20 hospital sites in Cameroon. Women aged 25 and above. ANORA S.A.S / ABCRF.',
  keywords: [
    'IntelliBra',
    'clinical trial',
    'breast cancer screening',
    'Cameroon',
    'PACTR',
    'ultrasound AI',
    'ANORA',
    'ABCRF',
    'early detection',
  ],
  openGraph: {
    title: 'IntelliBra Clinical Trial — Cameroon 2025',
    description:
      'Free breast cancer screening for 2,840 women across all 10 regions of Cameroon. Non-invasive, AI-powered, portable device.',
    url: 'https://intellibra.org/trial',
  },
  alternates: {
    canonical: 'https://intellibra.org/trial',
  },
};

export default function Page() {
  return <TrialPage />;
}
