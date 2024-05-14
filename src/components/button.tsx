import { ComponentProps } from "react"

export interface ButtonProps extends ComponentProps<'button'>{
}

export function Button({ children, ...props }: ButtonProps) {

  return (
    <button
      {...props}
      className='flex items-center gap-2 px-4 py-2 border text-cyan-button border-cyan-button rounded-sm 
     bg-white hover:bg-cyan-50 text-base font-semibold'>
      {children}
    </button>
  )
}
