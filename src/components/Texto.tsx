interface iTexto {
  value: string
  onChange: (text: string) => void
}

export function Texto({ value, onChange }: iTexto) {
  return (
    <div>
      <div className="mb-2 mt-2 px-2 pt-2">
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          className=" col-span-5 row-span-2 w-full bg-transparent text-lg font-medium text-gray-400"
          placeholder="What's happening?"
        />
      </div>
    </div>
  )
}
