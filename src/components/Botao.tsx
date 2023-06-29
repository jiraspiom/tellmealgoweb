import { FormEvent } from 'react'

interface iBotao {
  onClick: (event: FormEvent) => void
}
export function Botao({ onClick }: iBotao) {
  return (
    <div>
      <button
        onClick={onClick}
        className="mb-2 mr-2 mt-2 rounded-full bg-blue-400  px-8 py-2 font-bold text-white hover:bg-blue-500"
      >
        Hi :)
      </button>
    </div>
  )
}
