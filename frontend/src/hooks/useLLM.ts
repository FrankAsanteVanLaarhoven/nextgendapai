import { useState } from 'react';

export function useLLM() {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);

  function sendMessage(content: string) {
    setMessages((msgs) => [...msgs, { role: 'user', content }]);
    // In a real implementation, call LLM API and append AI response
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { role: 'ai', content: 'AI response to: ' + content }]);
    }, 500);
  }

  return { messages, sendMessage };
} 