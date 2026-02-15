'use client';

import React from 'react';

import styles from './StatIcon.module.scss';

type Props = {
  icon: React.ReactNode;
  size?: number; // диаметр
  color?: string;
};

export function StatIcon({ icon, color, size = 40 }: Props) {
  return (
    <div
      className={styles.root}
      style={{
        width: size,
        height: size,
        color: color ? color : 'var(--secondary-foreground)',
      }}
    >
      {icon}
    </div>
  );
}
