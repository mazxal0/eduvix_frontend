'use client';

import React from 'react';

import { Col, Row } from 'antd';

import { StatCard, StatCardItem } from './StatCard';

type Props = {
  items: readonly StatCardItem[];
};

export function StatsRow({ items }: Props) {
  return (
    <Row gutter={[8, 16]}>
      {items.map((it) => (
        <Col key={it.key} xs={24} sm={12} lg={6}>
          <StatCard item={it} />
        </Col>
      ))}
    </Row>
  );
}
