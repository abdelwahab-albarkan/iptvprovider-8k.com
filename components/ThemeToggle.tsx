"use client";

import React, { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

function readTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark" || attr === "light") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function savedTheme(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  listeners.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
  listeners.add(notify);
  // Follow the OS setting until the visitor picks a theme themselves
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = () => {
    if (!savedTheme()) applyTheme(media.matches ? "dark" : "light");
  };
  media.addEventListener("change", onChange);
  return () => {
    listeners.delete(notify);
    media.removeEventListener("change", onChange);
  };
}

interface ThemeToggleProps {
  withLabel?: boolean;
}

export default function ThemeToggle({ withLabel = false }: ThemeToggleProps) {
  // null during server render; the icons switch via CSS so nothing flashes
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, () => null);
  const isDark = theme === "dark";

  const toggle = () => {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked: the choice still applies for this page view
    }
  };

  return (
    <button
      type="button"
      className={`theme-toggle${withLabel ? " with-label" : ""}`}
      onClick={toggle}
      aria-label={withLabel ? undefined : "Dark mode"}
      aria-pressed={theme === null ? undefined : isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <svg className="theme-icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg className="theme-icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      {withLabel && <span>Dark mode</span>}
    </button>
  );
}
