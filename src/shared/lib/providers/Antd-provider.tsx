'use client';

import React from "react";
import { ConfigProvider, theme as antdTheme } from "antd";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
        token: {
          // ключевые токены под твою палитру
          colorPrimary: "var(--primary)",
          colorInfo: "var(--info)",
          colorSuccess: "var(--success)",
          colorWarning: "var(--warning)",
          colorError: "var(--destructive)",

          colorBgBase: "var(--background)",
          colorTextBase: "var(--foreground)",
          colorBorder: "var(--border)",

          borderRadius: 12, // можно связать с var(--radius) если хочешь
          fontSize: 16,
        },
        components: {
          Layout: {
            headerBg: "var(--card)",
            bodyBg: "var(--background)",
          },
          Card: {
            colorBgContainer: "var(--card)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
