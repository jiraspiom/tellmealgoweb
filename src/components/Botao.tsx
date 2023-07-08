import { FormEvent } from 'react'

interface iBotao {
  onClick: (event: FormEvent) => void
  novaCor: string
}
export function Botao({ onClick, novaCor }: iBotao) {
  // const valorNumero = parseInt(novaCor.slice(-3))
  // const novoValor = valorNumero + 100
  // const novaCorHover = `hover:${novaCor.slice(0, -3) + novoValor}`
  console.log(':)')
  return (
    <div>
      <button
        onClick={onClick}
        className={`mb-2 mr-2  mt-2 rounded-full  bg-blue-400 px-8 py-2 font-bold text-white hover:bg-blue-500 ${novaCor}`}
      >
        Hi :)
      </button>
    </div>
  )
}
