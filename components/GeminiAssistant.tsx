import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { askGemini } from '../services/geminiService';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

const GeminiAssistant: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '0', sender: 'bot', text: language === 'ua' ? 'Вітаю! Я можу розповісти про ГО «Нейзац». Що вас цікавить?' : 'Hello! I can tell you about Neusatz NGO. What would you like to know?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const answer = await askGemini(input, language);
    
    setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: 'bot', text: answer }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-primary-700 text-white p-4 rounded-full shadow-lg hover:bg-primary-800 transition-all transform hover:scale-105 flex items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={20} />
        <span className="font-semibold text-sm hidden md:inline">{t.nav.assistant}</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-amber-50 rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-fade-in-up" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-primary-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-secondary-400" />
              <h3 className="font-semibold text-sm">Neusatz AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-300 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto bg-amber-50/50 space-y-3" ref={scrollRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.sender === 'user'
                    ? 'bg-primary-600 text-white rounded-tr-none'
                    : 'bg-white/95 border border-stone-200 text-stone-800 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white/95 border border-stone-200 px-4 py-2 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150"></span>
                 </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white/95 border-t border-stone-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about our projects..."
              className="flex-grow px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary-700 text-white p-2 rounded-lg hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;
