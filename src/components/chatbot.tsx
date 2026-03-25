'use client';

import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import ChatbotCard from './chatbot-card';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:right-8 z-40">
        <Button
          size="icon"
          className="rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90"
          onClick={toggleChatbot}
          aria-label="Toggle Chatbot"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      </div>
      {isOpen && <ChatbotCard onClose={toggleChatbot} />}
    </>
  );
}
