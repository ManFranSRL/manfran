import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'outline' | 'subtle'
  className?: string
}

export function Badge({ children, variant = 'subtle', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full',
        {
          'bg-[var(--color-blue)] text-white': variant === 'blue',
          'border border-[var(--color-blue)] text-[var(--color-blue)]': variant === 'outline',
          'bg-white/5 text-white/60': variant === 'subtle',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
