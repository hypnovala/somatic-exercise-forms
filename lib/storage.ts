import { demoEntries } from '@/data/demo';
import { FormSlug, FormValuesMap, ProgressStatus, SavedFormEntry } from '@/types/forms';

const STORAGE_KEY = 'somatic-exercise-forms';
export const STORAGE_EVENT = 'somatic-forms-updated';

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function emitStorageUpdate() {
  if (!canUseStorage()) return;
  window.dispatchEvent(new CustomEvent(STORAGE_EVENT));
}

export function getStoredEntries(): SavedFormEntry[] {
  if (!canUseStorage()) return [];

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as SavedFormEntry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getEntries() {
  const stored = getStoredEntries();
  return stored.length ? stored : demoEntries;
}

export function isUsingDemoData() {
  return getStoredEntries().length === 0;
}

export function getEntry<T>(slug: FormSlug) {
  return getEntries().find((entry) => entry.slug === slug) as SavedFormEntry<T> | undefined;
}

export function getStoredEntry<T>(slug: FormSlug) {
  return getStoredEntries().find((entry) => entry.slug === slug) as SavedFormEntry<T> | undefined;
}

export function saveEntry<K extends FormSlug>(slug: K, title: string, values: FormValuesMap[K], status: ProgressStatus) {
  if (!canUseStorage()) return;

  const timestamp = new Date().toISOString();
  const filtered = getStoredEntries().filter((entry) => entry.slug !== slug);
  const previous = getStoredEntry<FormValuesMap[K]>(slug);

  const nextEntry: SavedFormEntry<FormValuesMap[K]> = {
    slug,
    title,
    values,
    status,
    updatedAt: timestamp,
    completedAt: status === 'completed' ? timestamp : previous?.completedAt,
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...filtered, nextEntry]));
  emitStorageUpdate();
}

export function clearEntry(slug: FormSlug) {
  if (!canUseStorage()) return;
  const nextEntries = getStoredEntries().filter((entry) => entry.slug !== slug);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextEntries));
  emitStorageUpdate();
}

export function getProgressSummary() {
  const entries = getEntries();
  const completed = entries.filter((entry) => entry.status === 'completed').length;
  return {
    total: entries.length,
    completed,
    drafts: entries.filter((entry) => entry.status === 'draft').length,
    demoMode: isUsingDemoData(),
  };
}
