import { FormEvent } from 'react'

interface iBotao {
  onClick: (event: FormEvent) => void
}
export function Botao({ onClick }: iBotao) {
  return (
    <button
      onClick={onClick}
      className="mt-5 w-full rounded-full bg-blue-400 px-4 py-2 font-bold text-white hover:bg-blue-500"
    >
      Hi :)
    </button>
  )
}
