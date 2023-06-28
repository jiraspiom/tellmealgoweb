import { FormEvent } from 'react'

interface iBotao {
  onClick: (event: FormEvent) => void
}
export function Botao({ onClick }: iBotao) {
  return (
    <button
      onClick={onClick}
      className="float-right mr-8 mt-5 rounded-full bg-blue-400 px-8 py-2 font-bold text-white hover:bg-blue-500"
    >
      Hi :)
    </button>
  )
}
