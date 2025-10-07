'use client';

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

// Componente per i pulsanti di selezione del profilo
const UserTypeSelector = () => {
    const { currentProfile, updateProfile } = useUser();

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(bioContent).map(([key, data]) => {
                const isSelected = key === currentProfile;
                const IconComponent = iconMap[data.icon];

                return (
                    <button
                        key={key}
                        data-profile={key}
                        onClick={() => updateProfile(key)}
                        className={`
                            profile-button px-5 py-2 rounded-full border border-accent transition duration-300 hover:opacity-80 text-sm md:text-base
                            ${isSelected 
                                ? 'bg-accent text-primary shadow-lg' 
                                : 'bg-primary text-accent border-accent'
                            }
                        `}
                    >
                        {IconComponent && <IconComponent className="w-4 h-4 inline mr-1" />}
                        {data.label}
                    </button>
                );
            })}
        </div>
    );
};

export default UserTypeSelector;
