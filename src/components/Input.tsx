import { InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ type, placeholder, ...props }: InputProps) {
  return (
    <div
      className="w-56 h-8 p-2 gap-2 flex items-center rounded-sm border-2 border-text_hover"
      {...props}
    >
      <Search className="text-text_hover" />
      <input
        className="w-full h-full bg-background  outline-none  rounded-sm  text-text text-sm font-normal"
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
