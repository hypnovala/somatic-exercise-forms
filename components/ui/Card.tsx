import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-[28px] border border-mist bg-card shadow-calm', className)} {...props} />;
}
