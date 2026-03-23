import { clsx } from 'clsx';

export function cn(...classes: Array<string | false | null | undefined>) {
  return clsx(classes);
}

function getSafeDate(input: string) {
  if (!input) return null;

  const dateOnlyMatch = input.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (dateOnlyMatch) {
    const [, year, month, day] = dateOnlyMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  const parsed = new Date(input);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function formatDate(input: string) {
  if (!input) return 'Not set';

  const date = getSafeDate(input);

  if (!date) {
    return input;
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function formatDateTime(input: string) {
  const date = getSafeDate(input);

  if (!date) {
    return input;
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(date);
}

export function percentComplete(current: number, total: number) {
  if (!total) return 0;
  return Math.round((current / total) * 100);
}
