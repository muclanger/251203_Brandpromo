import React, { useState, useEffect, useRef } from 'react';
import { MessageCircleIcon, XIcon } from './Icon';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentNodeKey, setCurrentNodeKey] = useState('start');
  const messagesEndRef = useRef(null);

  const chatTree = {
    start: {
      text: "Hallo! 👋 Wie kann ich helfen?",
      options: [
        { text: "Dienstleistungen", next: "services" },
        { text: "Preisinformationen", next: "pricing" },
        { text: "Kontakt", next: "contact" },
      ],
    },
    services: {
      text: "Wir bieten Video-Editing, Grafikdesign und Automatisierung. Was interessiert Sie?",
      options: [
        { text: "Video", next: "video" },
        { text: "Design", next: "design" },
        { text: "Zurück", next: "start" },
      ],
    },
    pricing: {
      text: "Nutzen Sie unseren Rechner auf der Preis-Seite für eine genaue Schätzung!",
      options: [
        { text: "Zum Rechner", action: () => { window.location.href = '/preise'; setIsOpen(false); } },
        { text: "Zurück", next: "start" },
      ],
    },
    contact: {
      text: "Schreiben Sie uns an info@brandpromo.de",
      options: [
        { text: "Danke!", next: "end" },
        { text: "Zurück", next: "start" },
      ],
    },
    video: { text: "Schnitt, Color Grading, Sound Design - wir machen alles.", options: [{ text: "Cool", next: "start" }] },
    design: { text: "Logos, Branding, Social Media Assets.", options: [{ text: "Cool", next: "start" }] },
    end: { text: "Gerne! 👋", options: [{ text: "Neustart", next: "start" }] },
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) handleNodeChange('start');
  }, [isOpen]);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleNodeChange = (key) => {
    setCurrentNodeKey(key);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: chatTree[key].text }]);
    }, 400);
  };

  const handleOption = (opt) => {
    setMessages(prev => [...prev, { sender: 'user', text: opt.text }]);
    if (opt.action) opt.action();
    else if (opt.next) handleNodeChange(opt.next);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="btn-brand w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
          <MessageCircleIcon />
        </button>
      )}
      {isOpen && (
        <div className="bg-[#1f1f1f] border border-gray-700 w-80 h-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-brand p-4 flex justify-between items-center text-white">
            <span className="font-bold">Assistent</span>
            <button onClick={() => setIsOpen(false)}><XIcon className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#1a1a1a]">
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble p-3 text-sm rounded-xl max-w-[85%] ${m.sender}`}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-[#222] border-t border-gray-700 grid grid-cols-1 gap-2">
            {chatTree[currentNodeKey]?.options?.map((opt, i) => (
              <button key={i} onClick={() => handleOption(opt)} className="text-xs bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded text-left transition">
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;