import Image from 'next/image';

import { Landing } from '@/screens';

import { AppFooter, AppHeader } from '@/widgets';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <AppHeader />
      <Landing />
      <AppFooter />
    </div>
  );
}
