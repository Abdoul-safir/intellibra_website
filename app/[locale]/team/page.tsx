import type { Metadata } from 'next';
import { TeamPageClient } from '../../../components/team/team-page-client';

export const metadata: Metadata = {
  title: 'Our Team · IntelliBra',
  description: 'Meet the clinicians, researchers, and builders advancing IntelliBra in Cameroon.',
};

export default function TeamPage() {
  return <TeamPageClient />;
}
