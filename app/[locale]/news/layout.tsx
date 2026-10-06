import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Milestones · IntelliBra',
  description: 'Follow IntelliBra milestones, field notes, research perspectives, and project updates.',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
