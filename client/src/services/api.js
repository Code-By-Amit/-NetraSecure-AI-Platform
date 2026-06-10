import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

export const scanUrl = (url) => api.post('/scan-url', { url });
export const sendChatMessage = (message) => api.post('/chat', { message });
export const submitContact = (formData) => api.post('/contact', formData);

export default api;