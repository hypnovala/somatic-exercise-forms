import { clsx } from 'clsx';

export function cn(...classes: Array<string | false | null | undefined>) {
  return clsx(classes);
}

export function formatDate(input: string) {
  if (!input) return 'Not set';

  try {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(input));
  } catch {
    return input;
  }
}

export function formatDateTime(input: string) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date(input));
  } catch {
    return input;
  }
}

export function percentComplete(current: number, total: number) {
  if (!total) return 0;
  return Math.round((current / total) * 100);
}
