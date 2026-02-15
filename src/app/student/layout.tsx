import type { Metadata } from 'next';

import Layout from 'antd/es/layout';
import Content from 'antd/es/layout';

import { AppNav, studentNavItems } from '@/widgets';

import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Student Dashboard | EduVix',
  description: 'Управляйте занятиями, домашними заданиями и общением с репетиторами в EduVix.',
  applicationName: 'EduVix',

  robots: {
    index: false,
    follow: false,
  },

  referrer: 'strict-origin-when-cross-origin',

  openGraph: {
    title: 'Student Dashboard | EduVix',
    description: 'Все инструменты ученика для эффективного обучения в одном месте.',
    siteName: 'EduVix',
    type: 'website',
  },
};

const SIDER_WIDTH = 260;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className={styles.shell}>
      {/* Левый sidebar / мобильный header */}
      <AppNav
        items={studentNavItems}
        user={{ name: 'alex', avatarUrl: 'qwe', roleLabel: 'Student' }}
        siderWidth={SIDER_WIDTH}
      />

      {/* Правая часть */}
      <Layout className={styles.content}>
        <Content
          style={{
            padding: 16,
            background: '#f5f5f5',
            minHeight: '100vh',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
