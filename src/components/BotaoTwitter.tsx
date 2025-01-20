import type { FormEvent } from 'react'
import { Button } from './ui/button'

interface iBotao {
  onClick?: (event: FormEvent) => void
  novaCor: string
}
export default function BotaoTwitter({ onClick, novaCor }: iBotao) {
  console.log(':)')
  return (
    <div>
      <Button
        onClick={onClick}
        type="submit"
        className={`botao-retro mb-2 mr-2  mt-2 rounded-full  bg-blue-400 px-8 py-2 font-bold text-white hover:bg-blue-500 ${novaCor}`}
      >
        Hi :)
      </Button>
    </div>
  )
}
