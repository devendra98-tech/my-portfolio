import { useCallback, useLayoutEffect, useState } from "react";
import { hexToRgb, normalizeHex } from "../utils/color";

const STORAGE_KEY = "preferred-accent-hex";

const DEFAULT_LIGHT = "#00a01d";
const DEFAULT_DARK = "#34d399";

type ThemeMode = "light" | "dark";

function defaultHexForTheme(theme: ThemeMode): string {
  return theme === "dark" ? DEFAULT_DARK : DEFAULT_LIGHT;
}

function readStoredAccent(theme: ThemeMode): string {
  if (typeof window === "undefined") return defaultHexForTheme(theme);
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw) {
    const n = normalizeHex(raw);
    if (n) return n;
  }
  return defaultHexForTheme(theme);
}

function applyAccentToDocument(hex: string) {
  const root = document.documentElement;
  root.style.setProperty("--accent-color", hex);
  const rgb = hexToRgb(hex);
  if (rgb) {
    root.style.setProperty(
      "--focus-ring-color",
      `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.32)`
    );
  }
  root.style.setProperty("--scroll-button-color", hex);
}

export function useAccentColor(theme: ThemeMode) {
  const [accentHex, setAccentHexState] = useState(() =>
    readStoredAccent(theme)
  );

  useLayoutEffect(() => {
    applyAccentToDocument(accentHex);
  }, [accentHex]);

  const setAccentHex = useCallback((hex: string) => {
    const n = normalizeHex(hex);
    if (!n) return;
    setAccentHexState(n);
    window.localStorage.setItem(STORAGE_KEY, n);
  }, []);

  return { accentHex, setAccentHex };
}
