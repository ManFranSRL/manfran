'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue)] disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-dark)] shadow-[0_0_20px_rgba(0,160,216,0.3)] hover:shadow-[0_0_30px_rgba(0,160,216,0.5)]':
              variant === 'primary',
            'border border-[var(--color-blue)] text-[var(--color-blue)] hover:bg-[var(--color-blue)] hover:text-white':
              variant === 'secondary',
            'text-white/70 hover:text-white underline-offset-4 hover:underline':
              variant === 'ghost',
          },
          {
            'text-sm px-4 py-2 rounded-md': size === 'sm',
            'text-base px-6 py-3 rounded-lg': size === 'md',
            'text-lg px-8 py-4 rounded-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
