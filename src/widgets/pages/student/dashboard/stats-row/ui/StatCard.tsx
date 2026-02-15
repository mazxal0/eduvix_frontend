'use client';

import React from 'react';

import { Card, Typography } from 'antd';

import { StatIcon } from '@/shared/ui';

import styles from './StatCard.module.scss';

export type StatCardItem = {
  key: string;
  label: string;
  value: React.ReactNode;
  icon: React.ReactNode; // позже добавим
};

type Props = {
  item: StatCardItem;
};

export function StatCard({ item }: Props) {
  return (
    <Card className={styles.card} variant={'outlined'}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Typography.Text type="secondary" className={styles.label}>
            {item.label}
          </Typography.Text>
          <div className={styles.value}>{item.value}</div>
        </div>

        {item.icon ? <StatIcon icon={item.icon} /> : null}
      </div>
    </Card>
  );
}
