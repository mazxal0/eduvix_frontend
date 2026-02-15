'use client';

import React from 'react';

import Link from 'next/link';

import styles from './page.module.scss';

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      {/* Юридический текст */}
      <p className={styles.legal}>
        Входя в систему, вы соглашаетесь с <Link href="/terms">Условиями использования</Link> и{' '}
        <Link href="/privacy">Политикой конфиденциальности</Link>
      </p>
    </div>
  );
}
