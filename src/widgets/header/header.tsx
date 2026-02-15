'use client';

import Link from 'next/link';
import { Layout, Menu, Drawer, Space, Typography, Grid } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useMemo, useState } from 'react';
import styles from "./header.module.scss"
import { Button } from '@/shared/ui';

const { Header } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

export function AppHeader() {
  const screens = useBreakpoint();
  const isDesktop = !!screens.md;

  const [open, setOpen] = useState(false);

  const navItems: MenuProps['items'] = useMemo(
    () => [
      { key: 'features', label: <Link href="/#features" className={styles.link_header}>Возможности</Link> },
      // { key: 'tutors', label: <Link href="/#tutors" className={styles.link_header}>Найти репетитора</Link> },
      { key: 'how', label: <Link href="/#how-it-works" className={styles.link_header}>Как это работает</Link> },
      { key: 'pricing', label: <Link href="/#pricing" className={styles.link_header}>Подписки</Link> },
      // { key: 'reviews', label: <Link href="/#reviews" className={styles.link_header}>Отзывы</Link> },
    ],
    []
  );

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        background: 'var(--background)',
        borderBottom: '1px solid var(--border)',
        paddingInline: 0,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 140 }}
        >
          {/* Мини-иконка (не книга) — просто квадрат как бренд-бейдж */}
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: 'var(--primary)',
            }}
          />
          <Text style={{ color: 'var(--foreground)', fontSize: 18, fontWeight: 600 }}>
            EduVix
          </Text>
        </Link>

        {/* Center: Nav (desktop) */}
        {isDesktop ? (
          <Menu
            mode="horizontal"
            items={navItems}
            selectable={false}
            style={{
              flex: 1,
              minWidth: 0,
              justifyContent: 'center',
              background: 'transparent',
              borderBottom: 'none',
              color: 'var(--muted-foreground)',
            }}
          />
        ) : (
          <div style={{ flex: 1 }} />
        )}

        {/* Right: Actions */}
        {isDesktop ? (
          <Space size={20}>
            <Link href="/signin">
              <Button intent="text">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button intent="primary">Get Started</Button>
            </Link>
          </Space>
        ) : (
          <>
            <Button
              intent="text"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            />
            <Drawer
              title="Menu"
              placement="right"
              open={open}
              onClose={() => setOpen(false)}
              size={320}
            >
              <Menu
                mode="vertical"
                items={navItems}
                selectable={false}
                onClick={() => setOpen(false)}
              />
              <div style={{ marginTop: 16 }}>
                <Space orientation="vertical" style={{ width: '100%' }} size={10}>
                  <Link href="/signin" onClick={() => setOpen(false)}>
                    <Button block>Sign In</Button>
                  </Link>
                  <Link href="/signup" onClick={() => setOpen(false)}>
                    <Button block intent="primary">
                      Get Started
                    </Button>
                  </Link>
                </Space>
              </div>
            </Drawer>
          </>
        )}
      </div>
    </Header>
  );
}
