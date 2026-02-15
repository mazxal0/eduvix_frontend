'use client';

import React from 'react';

import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';
import clsx from 'clsx';

import styles from './Button.module.scss';

export type UIButtonIntent = 'primary' | 'secondary' | 'outline' | 'ghost' | 'text' | 'destructive';

export type UIButtonSize = 'sm' | 'md' | 'lg';

type ForbiddenAntdProps = {
  type?: never;
  size?: never;
  variant?: never;
};

export type UIButtonProps = Omit<AntButtonProps, 'type' | 'size' | 'variant'> &
  ForbiddenAntdProps & {
    intent?: UIButtonIntent;
    uiSize?: UIButtonSize;
    iconRight?: React.ReactNode; // 👈 добавили
  };

export function Button(props: UIButtonProps) {
  const { className, intent = 'primary', uiSize = 'md', iconRight, children, ...rest } = props;

  return (
    <AntButton
      {...rest}
      className={clsx(styles.btn, styles[`v_${intent}`], styles[`s_${uiSize}`], className)}
    >
      {/* AntD сам отрисует rest.icon слева, если ты передал icon */}
      {children && iconRight ? (
        <span className={styles.content}>
          <span className={styles.label}>{children}</span>
          <span className={styles.iconRight}>{iconRight}</span>
        </span>
      ) : (
        children
      )}
    </AntButton>
  );
}
