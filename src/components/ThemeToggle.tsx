import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'dark' | 'light';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('shadia-theme') as Theme | null;
    const initial: Theme = stored
      ? stored
      : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'; // default light
    setTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('shadia-theme', next);
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.track('theme_toggle', { from: theme, to: next });
    }
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        style={{
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 9999,
          background: 'transparent',
          border: '1px solid var(--border)',
          cursor: 'pointer',
          color: 'var(--ink-3)',
        }}
      >
        <span style={{ width: 16, height: 16 }} />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999,
        background: 'transparent',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        color: 'var(--ink-3)',
        transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)';
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--ink-3)';
        (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface-raised)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink-3)';
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
        (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
      }}
    >
      {theme === 'dark' ? (
        <Sun size={16} strokeWidth={1.75} />
      ) : (
        <Moon size={16} strokeWidth={1.75} />
      )}
    </button>
  );
}
