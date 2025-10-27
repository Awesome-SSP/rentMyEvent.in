import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "btn",
  {
    variants: {
      variant: {
        default: 'btn-primary',
        destructive: 'btn-primary',
        outline: 'btn-outline',
        secondary: 'btn-secondary',
        ghost: 'btn-outline',
        link: 'text-blue hover:underline bg-transparent border-none',
      },
      size: {
        default: '',
        sm: 'text-sm px-3 py-2',
        lg: 'text-lg px-8 py-4',
        icon: 'w-10 h-10 p-0',
        'icon-sm': 'w-8 h-8 p-0',
        'icon-lg': 'w-12 h-12 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
