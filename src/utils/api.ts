import { revalidatePath } from 'next/cache'

interface DadosPost {
  segredo: string
  cor: string
}

interface DadoSegredo {
  cor: string
  coracao: null
  dataAt: string
  id: string
  segredo: string
  urlImage: string
  __v: number
}

export const getData = async (): Promise<DadoSegredo[]> => {
  try {
    const response = await fetch('https://tellmelu.onrender.com/v1/Segredo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
  try {
    console.log('dados post', data)

    const response = await fetch('https://tellmelu.onrender.com/v1/Segredo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    revalidatePath('/')

    return response.json()
  } catch (error) {
    console.error('Fetch POST error:', error)
    throw error
  }
}
