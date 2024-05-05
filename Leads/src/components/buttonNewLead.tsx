import { ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
}

export function Button({ type, title }: ButtonProps) {
  return (
    <button
      type={type}
      className='px-4  border text-cyan-button border-cyan-button rounded-sm 
     bg-white hover:bg-cyan-50'>
      {title}
    </button>
  )
}
