import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
};

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-ink text-white hover:opacity-95',
  secondary: 'bg-sage text-white hover:opacity-95',
  ghost: 'bg-white text-ink ring-1 ring-mist hover:bg-canvas',
  danger: 'bg-warm text-ink hover:opacity-95',
};

export function Button({ className, variant = 'primary', type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:cursor-not-allowed disabled:opacity-60',
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
