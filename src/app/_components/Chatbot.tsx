'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader } from 'lucide-react';
import { API_URL, MAX_RETRIES, SYSTEM_PROMPT } from '../_data/chatbotRules';

interface ChatPart {
    text: string;
}

interface ChatMessage {
    role: "user" | "model";
    parts: ChatPart[];
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Scorri fino all'ultimo messaggio
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        // Messaggio di benvenuto
        if (isOpen && chatHistory.length === 0) {
            setTimeout(() => {
                addMessageToChat("Ciao! Sono l'Assistente AI di [Nome Ing.]. Chiedi informazioni sul suo stack, esperienza o progetti chiave!", 'model');
            }, 500);
        }
    }, [chatHistory, isOpen]);

    // Funzione per gestire l'API con retry
    const fetchWithRetry = async (payload: any, retries = 0): Promise<any> => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            if (retries < MAX_RETRIES) {
                const delay = Math.pow(2, retries) * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
                return fetchWithRetry(payload, retries + 1);
            }
            console.error("API call failed after max retries:", error);
            throw new Error("Impossibile connettersi all'assistente AI. Riprova più tardi.");
        }
    };

    // Aggiunge un messaggio al buffer della chat
    const addMessageToChat = (text: string, role: "user" | "model") => {
        const newMessage: ChatMessage = { role, parts: [{ text }] };
        setChatHistory(prev => [...prev, newMessage]);
    };

    const sendQuery = async () => {
        const message = inputMessage.trim();
        if (!message || isLoading) return;

        setInputMessage('');
        addMessageToChat(message, 'user');
        setIsLoading(true);

        const newHistory = [...chatHistory, { role: "user", parts: [{ text: message }] } as ChatMessage];

        const payload = {
            contents: newHistory,
            systemInstruction: {
                parts: [{ text: SYSTEM_PROMPT }]
            },
        };

        try {
            const result = await fetchWithRetry(payload);
            const aiResponseText = result.candidates?.[0]?.content?.parts?.[0]?.text || "Non sono riuscito a elaborare la risposta. Prova a riformulare la domanda.";
            
            // Aggiorna l'history con la risposta dell'AI
            setChatHistory(prev => [...prev, { role: "model", parts: [{ text: aiResponseText }] }]);

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Si è verificato un errore sconosciuto.";
            addMessageToChat(errorMessage, 'model');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="chatbot-container" className="flex flex-col items-end">
            {/* Finestra di Chat */}
            <div 
                id="chat-window" 
                className={`flex-col rounded-xl overflow-hidden mb-3 transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}
                style={{ maxWidth: '350px', width: '90vw', height: '400px', maxHeight: '80vh' }}
            >
                {/* Header della chat */}
                <div className="flex items-center justify-between bg-accent text-primary p-3 font-bold">
                    <span>Assistente AI di [Nome Ing.]</span>
                    <button onClick={() => setIsOpen(false)} className="hover:opacity-75">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                {/* Area Messaggi */}
                <div id="chat-messages" className="flex-1 p-4 overflow-y-auto space-y-3 bg-secondary">
                    {chatHistory.map((msg, index) => {
                        const isUser = msg.role === 'user';
                        const alignment = isUser ? 'justify-end' : 'justify-start';
                        const bgColorClass = isUser ? 'chat-message-user' : 'chat-message-ai';
                        const text = msg.parts[0].text;

                        return (
                            <div key={index} className={`flex ${alignment} mb-4`}>
                                <div className={`max-w-[85%] p-3 text-white text-sm shadow-md ${bgColorClass}`}>
                                    {text.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
                                </div>
                            </div>
                        );
                    })}
                    {isLoading && (
                        <div className="flex justify-start mb-4">
                            <div className="chat-message-ai p-3 rounded-lg text-sm italic opacity-75 flex items-center">
                                <Loader className="w-4 h-4 mr-2 animate-spin" /> L'AI sta scrivendo...
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>
                {/* Input Messaggio */}
                <div className="p-3 border-t border-gray-700 bg-primary">
                    <div className="flex">
                        <input 
                            type="text" 
                            id="chat-input" 
                            placeholder="Chiedi del mio stack o esperienza..." 
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') sendQuery(); }}
                            disabled={isLoading}
                            className="flex-1 p-2 rounded-l-lg bg-secondary text-white border border-gray-700 focus:outline-none focus:border-accent disabled:opacity-50"
                        />
                        <button 
                            onClick={sendQuery} 
                            disabled={isLoading || inputMessage.trim() === ''}
                            className="bg-accent text-primary p-2 rounded-r-lg hover:bg-opacity-80 transition duration-300 disabled:opacity-50"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottone di Apertura Chatbot */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-14 h-14 bg-accent text-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition duration-300"
            >
                {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
            </button>
        </div>
    );
};

export default Chatbot;
