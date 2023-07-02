import { useState } from 'react';
import Draggable from 'react-draggable';

type Message = {
  id: number;
  content: string;
};

const messages: Message[] = [
  { id: 1, content: 'Mensagem 1' },
  { id: 2, content: 'Mensagem 2' },
  { id: 3, content: 'Mensagem 3' },
  // Adicione mais mensagens se necessário
];

const Card = () => {
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null);

  const handleDragStop = () => {
    const nextMessageIndex = messages.findIndex(
      (message) => message.id === currentMessage?.id
    ) + 1;

    if (nextMessageIndex < messages.length) {
      setCurrentMessage(messages[nextMessageIndex]);
    } else {
      setCurrentMessage(null);
    }
  };

  return (
    <div>
      {currentMessage && (
        <Draggable onStop={handleDragStop}>
          <div style={{ width: '300px', height: '200px', border: '1px solid black', padding: '16px' }}>
            <p>{currentMessage.content}</p>
          </div>
        </Draggable>
      )}

      {!currentMessage && <p>Todas as mensagens foram exibidas.</p>}
    </div>
  );
};

export default Card;
