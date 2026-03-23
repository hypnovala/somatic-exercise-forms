'use client';

import { useEffect, useMemo, useState } from 'react';
import { getEntries, getStoredEntries, isUsingDemoData, STORAGE_EVENT } from '@/lib/storage';
import { FormSlug, SavedFormEntry } from '@/types/forms';

export function useSavedForms(slug?: FormSlug) {
  const [entries, setEntries] = useState(getEntries());
  const [storedEntries, setStoredEntries] = useState<SavedFormEntry[]>(getStoredEntries());
  const [demoMode, setDemoMode] = useState(isUsingDemoData());

  useEffect(() => {
    const refresh = () => {
      setEntries(getEntries());
      setStoredEntries(getStoredEntries());
      setDemoMode(isUsingDemoData());
    };

    refresh();
    window.addEventListener('storage', refresh);
    window.addEventListener(STORAGE_EVENT, refresh as EventListener);

    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener(STORAGE_EVENT, refresh as EventListener);
    };
  }, []);

  const currentEntry = useMemo(() => entries.find((entry) => entry.slug === slug), [entries, slug]);
  const currentStoredEntry = useMemo(() => storedEntries.find((entry) => entry.slug === slug), [storedEntries, slug]);

  return {
    entries,
    storedEntries,
    demoMode,
    currentEntry,
    currentStoredEntry,
  };
}
