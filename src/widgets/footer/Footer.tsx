'use client';

import Link from 'next/link';

import { BookOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';

import styles from './Footer.module.scss';

const { Footer } = Layout;
const { Text } = Typography;

export function AppFooter() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <div className={styles.footerBrandTop}>
              <span className={styles.footerLogo}>
                <BookOutlined />
              </span>
              <span className={styles.footerName}>EduVix</span>
            </div>

            <p className={styles.footerDesc}>
              Платформа для репетиторов и учеников: расписание, домашка, сообщения, аналитика.
            </p>
          </div>

          {/* Product */}
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Product</div>
            <a className={styles.footerLink} href="#features">
              Features
            </a>
            <a className={styles.footerLink} href="#tutors">
              Find Tutors
            </a>
            <a className={styles.footerLink} href="#pricing">
              Pricing
            </a>

            {/* FAQ — внешний ресурс */}
            <a
              className={styles.footerLink}
              href="https://your-faq-link"
              target="_blank"
              rel="noreferrer"
            >
              FAQ
            </a>
          </div>

          {/* Company */}
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Company</div>
            <a className={styles.footerLink} href="#about">
              About Us
            </a>
            <a className={styles.footerLink} href="#blog">
              Blog
            </a>
            <a className={styles.footerLink} href="#careers">
              Careers
            </a>
            <a className={styles.footerLink} href="#contact">
              Contact
            </a>
          </div>

          {/* Legal */}
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Legal</div>
            <Link className={styles.footerLink} href="/privacy">
              Privacy Policy
            </Link>
            <Link className={styles.footerLink} href="/terms">
              Terms of Service
            </Link>
            <a className={styles.footerLink} href="#trust">
              Trust & Safety
            </a>
          </div>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <Text className={styles.footerCopy}>
            © {new Date().getFullYear()} EduVix. All rights reserved.
          </Text>
        </div>
      </div>
    </Footer>
  );
}
