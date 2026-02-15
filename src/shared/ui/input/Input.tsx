'use client';

import React from 'react';

import { Input as AntInput } from 'antd';
import type {
  InputProps as AntInputProps,
  PasswordProps as AntPasswordProps,
  SearchProps as AntSearchProps,
  TextAreaProps as AntTextAreaProps,
} from 'antd/es/input';

import styles from './Input.module.scss';

type UIInputVariant = 'outline' | 'filled' | 'ghost';
type UIInputTone = 'default' | 'success' | 'warning' | 'error' | 'info';
type UIInputSize = 'sm' | 'md' | 'lg';

type UIProps = {
  uiVariant?: UIInputVariant;
  tone?: UIInputTone;
  uiSize?: UIInputSize;
  fullWidth?: boolean;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(' ');
}

// AntD 6: Input variant = 'outlined' | 'filled' | 'borderless'
function mapVariant(v: UIInputVariant): AntInputProps['variant'] {
  switch (v) {
    case 'filled':
      return 'filled';
    case 'ghost':
      return 'borderless';
    default:
      return 'outlined'; // outline -> outlined
  }
}

// AntD 6: size = 'small' | 'middle' | 'large'
function mapSize(s: UIInputSize): AntInputProps['size'] {
  if (s === 'sm') return 'small';
  if (s === 'lg') return 'large';
  return 'middle';
}

// AntD 6: status = 'error' | 'warning' (success/info делаем стилями)
function mapStatus(t: UIInputTone): AntInputProps['status'] {
  if (t === 'error') return 'error';
  if (t === 'warning') return 'warning';
  return undefined;
}

/** ========= Base Input ========= */

export type InputProps = Omit<AntInputProps, 'variant' | 'size' | 'status'> & UIProps;

export function Input({
  uiVariant = 'outline',
  uiSize = 'md',
  tone = 'default',
  fullWidth = true,
  className,
  ...rest
}: InputProps) {
  return (
    <AntInput
      {...rest}
      variant={mapVariant(uiVariant)}
      size={mapSize(uiSize)}
      status={mapStatus(tone)}
      className={cx(
        styles.root,
        styles[`v_${uiVariant}`],
        styles[`s_${uiSize}`],
        tone !== 'default' && styles[`t_${tone}`],
        fullWidth && styles.fullWidth,
        className,
      )}
    />
  );
}

/** ========= Password ========= */

export type InputPasswordProps = Omit<AntPasswordProps, 'variant' | 'size' | 'status'> & UIProps;

Input.Password = function InputPassword({
  uiVariant = 'outline',
  uiSize = 'md',
  tone = 'default',
  fullWidth = true,
  className,
  ...rest
}: InputPasswordProps) {
  return (
    <AntInput.Password
      {...rest}
      variant={mapVariant(uiVariant)}
      size={mapSize(uiSize)}
      status={mapStatus(tone)}
      className={cx(
        styles.root,
        styles[`v_${uiVariant}`],
        styles[`s_${uiSize}`],
        tone !== 'default' && styles[`t_${tone}`],
        fullWidth && styles.fullWidth,
        className,
      )}
    />
  );
};

/** ========= Search ========= */

export type InputSearchProps = Omit<AntSearchProps, 'variant' | 'size' | 'status'> & UIProps;

Input.Search = function InputSearch({
  uiVariant = 'outline',
  uiSize = 'md',
  tone = 'default',
  fullWidth = true,
  className,
  ...rest
}: InputSearchProps) {
  return (
    <AntInput.Search
      {...rest}
      variant={mapVariant(uiVariant)}
      size={mapSize(uiSize)}
      status={mapStatus(tone)}
      className={cx(
        styles.root,
        styles[`v_${uiVariant}`],
        styles[`s_${uiSize}`],
        tone !== 'default' && styles[`t_${tone}`],
        fullWidth && styles.fullWidth,
        className,
      )}
    />
  );
};

export type InputTextAreaProps = Omit<AntTextAreaProps, 'status'> & UIProps;

Input.TextArea = function InputTextArea({
  uiVariant = 'outline',
  uiSize = 'md',
  tone = 'default',
  fullWidth = true,
  className,
  ...rest
}: InputTextAreaProps) {
  return (
    <AntInput.TextArea
      {...rest}
      status={mapStatus(tone)}
      className={cx(
        styles.root,
        styles.textarea,
        styles[`v_${uiVariant}`],
        styles[`s_${uiSize}`],
        tone !== 'default' && styles[`t_${tone}`],
        fullWidth && styles.fullWidth,
        className,
      )}
    />
  );
};
