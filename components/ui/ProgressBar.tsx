import { cn } from '@/lib/utils';

type ProgressBarProps = {
  value: number;
  label?: string;
  className?: string;
};

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  return (
    <div className={cn('space-y-2', className)} aria-label={label}>
      {label ? <div className="flex justify-between text-sm text-stone"><span>{label}</span><span>{value}%</span></div> : null}
      <div className="h-3 rounded-full bg-mist">
        <div className="h-3 rounded-full bg-sky transition-all" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
    </div>
  );
}
