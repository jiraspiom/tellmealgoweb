import axios, { AxiosResponse } from 'axios'

interface DadosPost {
  segredo: string
  cor: string
}

// 'https://localhost:7110/v1/Segredo',
// https://tellmelu.onrender.com/v1/Segredo

const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchData(): Promise<any> {
  try {
    const response: AxiosResponse = await axios.get(apiUrl)
    return response.data
  } catch (error) {
    console.error('erro ao obter dados da api:', error)
    return null
  }
}

export const postData = async (data: DadosPost): Promise<AxiosResponse> => {
  try {
    console.log(data)
    const response: AxiosResponse = await axios.post(apiUrl, data)
    return response
  } catch (error) {
    throw new Error('Erro ao enviar a requisição POST')
  }
}
