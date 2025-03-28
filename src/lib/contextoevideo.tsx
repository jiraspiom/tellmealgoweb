// // Função para renderizar o conteúdo do post com vídeos incorporados
// const renderPostContent = (content: string) => {
//   // Regex para encontrar links do YouTube
//   const youtubeRegex =
//     /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)(?:&[^ ]+)?/g

//   // Dividir o conteúdo em partes (texto e links do YouTube)
//   const parts = []
//   let lastIndex = 0
//   let match = null

//   // Encontrar todos os links do YouTube no conteúdo
//   while ((match = youtubeRegex.exec(content)) !== null) {
//     // Adicionar o texto antes do link
//     if (match.index > lastIndex) {
//       parts.push({
//         type: 'text',
//         content: content.substring(lastIndex, match.index),
//       })
//     }

//     // Adicionar o link do YouTube
//     parts.push({
//       type: 'youtube',
//       videoId: match[1],
//       url: match[0],
//     })

//     lastIndex = match.index + match[0].length
//   }

//   // Adicionar o texto restante após o último link
//   if (lastIndex < content.length) {
//     parts.push({
//       type: 'text',
//       content: content.substring(lastIndex),
//     })
//   }

//   // Renderizar as partes
//   return parts.map((part, index) => {
//     if (part.type === 'text') {
//       return (
//         <div key={index} className="whitespace-pre-line">
//           {part.content}
//         </div>
//       )
//     } else if (part.type === 'youtube') {
//       return (
//         <div key={index} className="my-2">
//           <div className="text-blue-200 hover:underline mb-1">{part.url}</div>
//           <iframe
//             width="100%"
//             height="200"
//             src={`https://www.youtube.com/embed/${part.videoId}`}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="rounded-md"
//           ></iframe>
//         </div>
//       )
//     }
//     return null
//   })
// }
