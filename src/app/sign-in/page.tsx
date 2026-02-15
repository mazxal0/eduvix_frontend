'use client';

import React from 'react';

import Link from 'next/link';

import { Button } from '@/shared/ui/button/Button';
import { Input } from '@/shared/ui/input/Input';

import styles from './page.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.center}>
        {/* Логотип */}
        <Link href={'/'} className={styles.logo}>
          <div className={styles.logoIcon}>📘</div>
          <span className={styles.logoText}>EduVix</span>
        </Link>

        {/* Карточка */}
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 style={{ fontWeight: 600 }}>С возвращением</h1>
            <p>Войдите в свой аккаунт EduVix</p>
          </div>

          <form className={styles.form}>
            {/* Email */}
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="name@example.com" uiVariant="outline" />
            </div>

            {/* Пароль */}
            <div className={styles.field}>
              <div className={styles.passwordLabel}>
                <label htmlFor="password">Пароль</label>
                <Link href="/forgot-password">Забыли пароль?</Link>
              </div>

              <Input.Password id="password" placeholder="••••••••" uiVariant="outline" />
            </div>

            {/* Кнопка */}
            <Button intent="primary" uiSize="md" className={styles.submit} form="submit">
              Войти
            </Button>
          </form>

          {/* Регистрация */}
          <div className={styles.footer}>
            <span>Нет аккаунта?</span>
            <Link href="/sign-up">Зарегистрироваться</Link>
          </div>
        </div>

        {/* Юридический текст */}
        <p className={styles.legal}>
          Входя в систему, вы соглашаетесь с <Link href="/terms">Условиями использования</Link> и{' '}
          <Link href="/privacy">Политикой конфиденциальности</Link>
        </p>
      </div>
    </div>
  );
}
