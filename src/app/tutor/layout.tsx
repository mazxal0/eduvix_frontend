import type { Metadata } from 'next';

import { AppNav, studentNavItems } from '@/widgets';

export const metadata: Metadata = {
  title: 'Tutor Dashboard | EduVix',
  description: 'Управляйте учениками, расписанием и уроками на платформе EduVix.',
  applicationName: 'EduVix',

  robots: {
    index: false,
    follow: false,
  },

  referrer: 'strict-origin-when-cross-origin',

  openGraph: {
    title: 'Tutor Dashboard | EduVix',
    description: 'Все инструменты репетитора для управления учениками и занятиями в одном месте.',
    siteName: 'EduVix',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppNav
        items={studentNavItems}
        user={{ name: 'alex', avatarUrl: 'qwe', roleLabel: 'tutor' }}
      />
      {children}
    </>
  );
}
