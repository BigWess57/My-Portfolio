// components/DarkModeToggle.tsx
"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "theme"; // "dark" | "light"

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  // initialize from localStorage / prefers-color-scheme
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "dark") {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      } else if (saved === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      } else {
        // no saved preference -> follow OS preference
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
      }
    } catch (e) {
      // fallback if localStorage denied
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // toggle handler
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch (e) {
      /* ignore storage errors */
    }
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="relative inline-flex items-center h-8 w-14 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300"
      // color background: light -> neutral-200, dark -> primary-500 (example)
      style={{ backgroundColor: isDark ? undefined : undefined }}
    >
      {/* track */}
      <span
        className={`absolute inset-0 rounded-full transition-colors ${
          isDark ? "bg-primary-500/90" : "bg-neutral-200"
        }`}
        aria-hidden
      />
      {/* thumb */}
      <span
        className={`relative inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {/* icon (sun/moon) */}
        <svg
          className={`absolute inset-0 m-auto h-4 w-4 transition-opacity ${isDark ? "opacity-100" : "opacity-0"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
        <svg
          className={`absolute inset-0 m-auto h-4 w-4 transition-opacity ${isDark ? "opacity-0" : "opacity-100"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </span>
    </button>
  );
}
