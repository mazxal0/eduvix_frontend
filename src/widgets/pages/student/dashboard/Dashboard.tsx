'use client';

import React from 'react';

import {
  CheckSquareOutlined,
  FileDoneOutlined,
  RiseOutlined,
  StarOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Col, Row } from 'antd';

import styles from './Dashboard.module.scss';
import { DashboardHeader } from './dashboard-header';
import { StatsRow } from './stats-row';

export function StudentDashboardPage() {
  // пока заглушки (позже подцепим API)
  const userName = 'Emily';

  const stats = [
    { key: 'total', label: 'Всего уроков', value: 24, icon: <VideoCameraOutlined /> },
    { key: 'tutors', label: 'Активные учителя', value: 3, icon: <StarOutlined /> },
    { key: 'hw', label: 'Невыполненные задания', value: 1, icon: <FileDoneOutlined /> },
    { key: 'progress', label: 'Прогресс', value: '78%', icon: <RiseOutlined /> },
  ] as const;

  return (
    <div className={styles.page}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <DashboardHeader name={userName} subtitle="Вот что происходит в вашем обучении" />
        </Col>

        <Col span={24}>
          <StatsRow items={stats} />
        </Col>

        {/* дальше добавим: NextLesson + HomeworkPreview + Tutors + LearningProgress */}
      </Row>
    </div>
  );
}
