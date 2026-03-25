'use client';

import { X, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

interface ChatbotCardProps {
  onClose: () => void;
}

export default function ChatbotCard({ onClose }: ChatbotCardProps) {
  return (
    <div className="fixed bottom-20 right-4 sm:right-8 z-50">
      <div className="bg-card/80 backdrop-blur-lg border border-border/50 rounded-xl shadow-2xl w-[calc(100vw-2rem)] sm:w-96 h-[70vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-border/50">
          <h3 className="font-semibold flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            Chat with my AI Agent
          </h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex-grow p-2">
          <iframe
            src="https://devfolio-agent.streamlit.app/?embed=true"
            className="w-full h-full border-0 rounded-b-lg"
            title="DevFolio AI Agent"
            allow="camera; microphone; autoplay; encrypted-media; display-capture"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
