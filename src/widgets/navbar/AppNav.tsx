'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  BookOutlined,
  HomeOutlined,
  MenuOutlined,
  MessageOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Drawer, Grid, Layout, Menu, Typography } from 'antd';
import type { MenuProps } from 'antd';

import styles from './AppNav.module.scss';

const { Sider, Header } = Layout;
const { useBreakpoint } = Grid;

export type AppRole = 'student' | 'tutor';

export type AppNavItem = {
  key: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export type AppNavUser = {
  name: string;
  roleLabel: string; // "Student" / "Tutor"
  avatarUrl?: string;
};

type Props = {
  brand?: string;
  brandHref?: string;
  items: AppNavItem[];
  user: AppNavUser;
  mobileTitle?: string;
  siderWidth?: number;
};

function toMenuItems(items: AppNavItem[], pathname: string): MenuProps['items'] {
  return items.map((it) => ({
    key: it.key,
    icon: it.icon,
    label: <Link href={it.href}>{it.label}</Link>,
  }));
}

function resolveSelectedKey(items: AppNavItem[], pathname: string) {
  const found =
    items.find((it) => pathname === it.href) ??
    items
      .slice()
      .sort((a, b) => b.href.length - a.href.length)
      .find((it) => pathname.startsWith(it.href + '/'));
  return found?.key ? [found.key] : [];
}

export function AppNav({
  brand = 'EduVix',
  brandHref = '/',
  items,
  user,
  mobileTitle,
  siderWidth = 260,
}: Props) {
  const pathname = usePathname();
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    // закрываем меню при переходе по роуту
    setDrawerOpen(false);
  }, [pathname]);

  const selectedKeys = resolveSelectedKey(items, pathname);

  const title = mobileTitle ?? items.find((x) => x.key === selectedKeys[0])?.label ?? brand;

  const menu = (
    <div className={styles.menuWrap}>
      <div className={styles.brand}>
        <Link href={brandHref} className={styles.brandLink}>
          <div className={styles.brandIcon} />
          <span className={styles.brandText}>{brand}</span>
        </Link>
      </div>

      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        items={toMenuItems(items, pathname)}
        className={styles.menu}
      />

      <div className={styles.user}>
        <Avatar src={user.avatarUrl} size={36}>
          {!user.avatarUrl ? user.name?.[0]?.toUpperCase() : null}
        </Avatar>
        <div className={styles.userMeta}>
          <Typography.Text className={styles.userName}>{user.name}</Typography.Text>
          <Typography.Text type="secondary" className={styles.userRole}>
            {user.roleLabel}
          </Typography.Text>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <Header className={styles.mobileHeader}>
          <button
            className={styles.burger}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            type="button"
          >
            <MenuOutlined />
          </button>

          <div className={styles.mobileTitle}>
            <Typography.Text ellipsis>{title}</Typography.Text>
          </div>

          <Avatar src={user.avatarUrl} size={32}>
            {!user.avatarUrl ? user.name?.[0]?.toUpperCase() : null}
          </Avatar>
        </Header>

        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          placement="left"
          size={siderWidth}
          styles={{
            body: { padding: 0 },
            header: { display: 'none' },
          }}
        >
          {menu}
        </Drawer>
      </>
    );
  }

  return (
    <Sider
      width={siderWidth}
      className={styles.sider}
      breakpoint="md"
      collapsedWidth={0}
      theme="light"
    >
      {menu}
    </Sider>
  );
}

export const studentNavItems: AppNavItem[] = [
  { key: 'dashboard', label: 'Dashboard', href: '/student/dashboard', icon: <HomeOutlined /> },
  { key: 'find', label: 'Find Tutors', href: '/student/find-tutors', icon: <SearchOutlined /> },
  { key: 'homework', label: 'Homework', href: '/student/homework', icon: <BookOutlined /> },
  { key: 'messages', label: 'Messages', href: '/student/messages', icon: <MessageOutlined /> },
  { key: 'settings', label: 'Settings', href: '/student/settings', icon: <SettingOutlined /> },
];
