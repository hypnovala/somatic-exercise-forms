'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getEntries, getStoredEntries, isUsingDemoData, STORAGE_EVENT } from '@/lib/storage';
import { FormSlug, SavedFormEntry } from '@/types/forms';

export function useSavedForms(slug?: FormSlug) {
  const [entries, setEntries] = useState(getEntries());
  const [storedEntries, setStoredEntries] = useState<SavedFormEntry[]>(getStoredEntries());
  const [demoMode, setDemoMode] = useState(isUsingDemoData());

  const refresh = useCallback(() => {
    setEntries(getEntries());
    setStoredEntries(getStoredEntries());
    setDemoMode(isUsingDemoData());
  }, []);

  useEffect(() => {
    const handleStorage = () => refresh();

    refresh();
    window.addEventListener('storage', handleStorage);
    window.addEventListener(STORAGE_EVENT, handleStorage as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener(STORAGE_EVENT, handleStorage as EventListener);
    };
  }, [refresh]);

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
