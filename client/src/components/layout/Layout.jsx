import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import Chatbot from '../sections/Chatbot';

export default function Layout({ children }) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Header setIsChatbotOpen={setIsChatbotOpen} />
      <main className="flex-grow">{children}</main>
        <Chatbot
        isOpen={isChatbotOpen}
        setIsOpen={setIsChatbotOpen}
      />
      <Footer />
    </div>
  );
}