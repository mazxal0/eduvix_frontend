'use client';

import React from 'react';

import { Typography } from 'antd';

import styles from './DashboardHeader.module.scss';

type Props = {
  name: string;
  subtitle?: string;
};

export function DashboardHeader({ name, subtitle }: Props) {
  return (
    <div className={styles.root}>
      <Typography.Title level={2} className={styles.title}>
        С возвращением, {name}!
      </Typography.Title>

      {subtitle ? (
        <Typography.Text type="secondary" className={styles.subtitle}>
          {subtitle}
        </Typography.Text>
      ) : null}
    </div>
  );
}
