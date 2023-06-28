'use client'
import { FormEvent, useState } from 'react'
import { Card } from './components/Card'

export default function Home() {
  const [text, setText] = useState('')
  const [records, setRecords] = useState<string[]>([])

  const handSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setRecords([...records, text].reverse())
    setText('')
  }

  return (
    <div>
      <form onSubmit={handSubmit} className="flex">
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="text-blue-500"
        />
        <button type="submit">Salvar</button>
      </form>
      <ul>
        <div className="">
          {records.map((record, index) => (
            <li key={index}>
              <Card titulo={record} />
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}
