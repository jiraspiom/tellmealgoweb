interface Props {
  onClick: (cor: string) => void
}
export function Indicador({ onClick }: Props) {
  const Clickar = (cor: string) => {
    onClick(cor)
  }
  return (
    <div className="flex flex-row">
      {/* <span
        onClick={() => Clickar('bg-gray-200')}
        className="mx-2 flex h-3 w-3 rounded-full bg-gray-200 p-2"
      ></span> */}
      <span
        className="botao-retro mx-2 flex h-3 w-3 rounded-full bg-gray-900 p-2 dark:bg-gray-700"
        onClick={() => Clickar('bg-gray-900')}
        onKeyDown={() => {}}
      />

      <span
        className="botao-retro mx-2 flex h-3 w-3 rounded-full bg-blue-600 p-2"
        onClick={() => Clickar('bg-blue-600')}
        onKeyDown={() => {}}
      />
      <span
        className="botao-retro mx-2 flex h-3 w-3 rounded-full bg-green-500 p-2"
        onClick={() => Clickar('bg-green-500')}
        onKeyDown={() => {}}
      />
      <span
        className="botao-retro mx-2 flex h-3 w-3 rounded-full bg-red-500 p-2"
        onClick={() => Clickar('bg-red-500')}
        onKeyDown={() => {}}
      />
      <span
        className="botao-retro mx-2 flex h-3 w-3 rounded-full bg-purple-500 p-2"
        onClick={() => Clickar('bg-purple-500')}
        onKeyDown={() => {}}
      />
      <span
        className="botao-retro mx-2 flex h-3 w-3 rounded-full bg-indigo-500 p-2"
        onClick={() => Clickar('bg-indigo-500')}
        onKeyDown={() => {}}
      />
      <span
        className="botao-retro mx-2 flex h-3 w-3 rounded-full bg-yellow-300 p-2"
        onClick={() => Clickar('bg-yellow-300')}
        onKeyDown={() => {}}
      />
      <span
        className="botao-retro mx-2 flex h-3 w-3 rounded-full bg-teal-500 p-2"
        onClick={() => Clickar('bg-teal-500')}
        onKeyDown={() => {}}
      />
    </div>
  )
}
