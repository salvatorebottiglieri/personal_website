'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { defaultProfile } from '../_data/bioContent';

// Definizione del tipo per il contesto
interface UserContextType {
    currentProfile: string;
    updateProfile: (profileKey: string) => void;
}

// Creazione del contesto con valori iniziali (che non verranno usati, ma sono necessari)
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider del contesto
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [currentProfile, setCurrentProfile] = useState<string>(defaultProfile);

    const updateProfile = (profileKey: string) => {
        setCurrentProfile(profileKey);
    };

    return (
        <UserContext.Provider value={{ currentProfile, updateProfile }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizzato per un facile accesso al contesto
export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
