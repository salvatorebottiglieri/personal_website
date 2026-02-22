import React, { useState, useEffect } from 'react';
import { Send, Sparkles, Loader } from 'lucide-react';
import { GeneratedPageData } from '../_data/DynamicContentSchema';

interface HeroChatProps {
    onGenerate?: (data: GeneratedPageData) => void;
}

const HeroChat = ({ onGenerate }: HeroChatProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:8000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input, history: [] })
            });

            if (!response.ok) {
                throw new Error("Backend connection failed");
            }

            const data = await response.json();

            if (data.type === 'page' && onGenerate) {
                onGenerate(data.content as GeneratedPageData);
            } else if (data.type === 'text') {
                // For now, just alert or log since this component is mainly for page gen trigger
                // Ideally, we would show a toast or transition to the Chatbot component
                alert(data.content);
            }

        } catch (error) {
            console.error("Error calling backend:", error);
            alert("Could not connect to the AI Backend. Ensure it's running on port 8000.");
        } finally {
            setIsLoading(false);
            setInput('');
        }
    };

    return (
        <div
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
        >
            <div className="w-full max-w-2xl mx-auto px-4">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-secondary ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start space-x-6 p-2">
                        <form onSubmit={handleSubmit} className="flex-1 flex items-center">
                            <Sparkles className={`w-6 h-6 text-accent ml-3 mr-4 ${isLoading ? 'animate-spin' : 'animate-pulse'}`} />
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything about my work..."
                                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg py-3"
                                autoFocus
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="p-3 bg-accent/10 hover:bg-accent/20 rounded-xl transition-colors duration-200 group-focus-within:bg-accent group-focus-within:text-white text-accent disabled:opacity-50"
                            >
                                {isLoading ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                            </button>
                        </form>
                    </div>
                </div>
                <p className={`text-center text-gray-500 mt-6 text-sm transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Press <kbd className="font-mono bg-gray-800 px-2 py-1 rounded text-xs text-gray-400">Enter</kbd> to begin the conversation
                </p>
            </div>
        </div>
    );
};

export default HeroChat;
