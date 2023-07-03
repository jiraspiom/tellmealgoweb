import React, { useEffect, useState } from 'react'
import fs from 'fs/promises'
import path from 'path'

export default function Download(urlimg: string): React.JSX.Element {
  const imageUrl = urlimg
  const [localImageUrl, setLocalImageUrl] = useState<string | null>(null)

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(imageUrl)
      const blob = await response.blob()

      const reader = new FileReader()
      reader.onloadend = async () => {
        const buffer = Buffer.from(reader.result as ArrayBuffer)

        const fileName = 'nome_da_imagem.jpg' // Defina um nome de arquivo adequado
        const imagePath = path.join(process.cwd(), 'public', fileName) // Define o caminho para o diretório público
        await fs.writeFile(imagePath, buffer)

        setLocalImageUrl(`/${fileName}`)
      }

      reader.readAsArrayBuffer(blob)
    }

    fetchImage()
  }, [imageUrl])

  return <div>{localImageUrl && <img src={localImageUrl} alt="Imagem" />}</div>
}
