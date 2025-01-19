'use server'
import type { DadoSegredo } from '@/lib/interfaces'
import { revalidatePath } from 'next/cache'

interface DadosPost {
  segredo: string
  cor: string
}

export const getData = async (): Promise<DadoSegredo[]> => {
  const url = String(process.env.NEXT_PUBLIC_API)

  const headers = new Headers()

  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Fetch GET error:', error)
    throw error
  }
}

export const postData = async (data: DadosPost) => {
  const url = String(process.env.NEXT_PUBLIC_API)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    // todo retirado por que esta dando erro
    revalidatePath('/')

    return response.json()
  } catch (error) {
    console.error('Fetch POST error:', error)
    throw error
  }
}

export const postLike = async (id: string) => {
  const url = String(process.env.NEXT_PUBLIC_API)

  const data = { id: id }

  try {
    const response = await fetch(`${url}/like`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    // todo retirado por que esta dando erro
    revalidatePath('/')

    return response.json()
  } catch (error) {
    console.error('Fetch POST error:', error)
    throw error
  }
}
