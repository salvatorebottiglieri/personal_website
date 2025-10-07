import React from 'react';
import { useUser } from '../_context/UserContext';
import { bioContent } from '../_data/bioContent';
import { Brain, Briefcase, TrendingUp, LucideIcon } from 'lucide-react';

// Mappa le chiavi delle icone ai componenti Lucide effettivi
const iconMap: { [key: string]: LucideIcon } = {
    brain: Brain,
    briefcase: Briefcase,
    'trending-up': TrendingUp,
};

// Helper per il rendering sicuro del testo con grassetti
const renderTextWithEmphasis = (text: string) => {
    // Sostituisce i marcatori **grassetto** con l'elemento <strong>
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="text-accent font-extrabold">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

const Bio = () => {
    const { currentProfile } = useUser();
    const data = bioContent[currentProfile] || bioContent['Expert']; // Fallback

    const IconComponent = iconMap[data.icon];

    return (
        <div className="card p-8 rounded-xl shadow-2xl">
            <div id="bio-icon" className="flex justify-center mb-4">
                {IconComponent && <IconComponent className="w-10 h-10 text-accent" />}
            </div>
            <h3 id="bio-title" className="text-2xl font-bold text-center mb-4 text-white">
                {data.title}
            </h3>
            <p id="bio-text" className="text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
                {renderTextWithEmphasis(data.text)}
            </p>
        </div>
    );
};

export default Bio;
