// Definisce l'interfaccia per il contenuto di una singola bio
export interface BioProfile {
    label: string;
    title: string;
    text: string;
    icon: string; // Nome dell'icona Lucide
}

// Definisce il tipo per l'oggetto completo del contenuto della bio
export type BioContent = {
    [key: string]: BioProfile;
};

// Contenuto dinamico in base al visitatore
export const bioContent: BioContent = {
    Expert: {
        label: "Esperto ML / Tech",
        title: "Architetto di Sistemi ML Scalabili",
        text: `Con 5 anni di esperienza, mi focalizzo sull'implementazione di **architetture MLOps** end-to-end. Ho sviluppato e messo in produzione oltre 12 modelli, garantendo **latenze sotto i 50ms** per sistemi di raccomandazione in tempo reale. Esperto in Deep Learning (PyTorch) e infrastruttura su AWS/GCP (Kubernetes, SageMaker).`,
        icon: 'brain'
    },
    Recruiter: {
        label: "Recruiter / HR",
        title: "Professionista ML: Impatto e Affidabilità",
        text: `Sono un Machine Learning Engineer con un track record di **successo misurabile** nella trasformazione dei dati in valore aziendale. Cinque anni di esperienza nella gestione del ciclo di vita completo del ML. Cerco opportunità per guidare e implementare soluzioni AI che migliorino il **margine operativo** e l'efficienza produttiva.`,
        icon: 'briefcase'
    },
    Business: {
        label: "Business / Manager",
        title: "AI Strategica per il Ritorno sull'Investimento (ROI)",
        text: `Aiuto le aziende a sbloccare il potenziale dei loro dati. Mi specializzo nella creazione di sistemi predittivi **affidabili e scalabili** (manutenzione predittiva, ottimizzazione logistica) che si traducono direttamente in **ROI**. Il mio focus è sulla semplicità del deployment e sulla chiarezza dei risultati ottenibili dall'AI.`,
        icon: 'trending-up'
    }
};

export const defaultProfile = 'Expert';
