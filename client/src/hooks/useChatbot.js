import { useState } from 'react';
import { sendChatMessage } from '../services/api';

export function useChatbot(initialMessage = null) {
  const [messages, setMessages] = useState(
    initialMessage
      ? [{ role: 'bot', content: initialMessage }]
      : [{ role: 'bot', content: 'Hi! I\'m NetraSecure AI. Ask me about passwords, phishing, URL safety, or deepfakes.' }]
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (userMessage) => {
    if (!userMessage.trim() || loading) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage.trim() }]);
    setLoading(true);
    setError(null);

    try {
      const response = await sendChatMessage(userMessage);
      const botReply = response.data.reply;
      setMessages(prev => [...prev, { role: 'bot', content: botReply }]);
    } catch (err) {
      setError('Failed to get response. Please try again.');
      setMessages(prev => [...prev, { role: 'bot', content: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'bot', content: 'Chat cleared. How can I help you today?' }]);
    setError(null);
  };

  return { messages, loading, error, sendMessage, clearChat };
}