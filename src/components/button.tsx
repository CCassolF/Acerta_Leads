import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'


export interface ButtonProps extends ComponentProps<'button'>{}

export function Button({ className, children, ...props }: ButtonProps) {

  return (
    <button
      {...props}
      className={
        twMerge(
          'flex items-center gap-2 px-4 py-2 border text-cyan-button border-cyan-button rounded-sm bg-white hover:bg-cyan-50 text-base font-semibold', 
          className
        )
      }
    >
      {children}
    </button>
  )
}
