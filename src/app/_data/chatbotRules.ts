// Configurazione per l'API Gemini
export const API_KEY = ""; // L'API Key sarà fornita dall'ambiente di esecuzione
export const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
export const MAX_RETRIES = 5;

// Prompt di sistema per guidare il comportamento del Chatbot AI
export const SYSTEM_PROMPT = `Sei l'Assistente Personale AI di un Machine Learning Engineer esperto. Rispondi alle domande in modo professionale, conciso e in italiano. Le sue specializzazioni sono: MLOps, Deep Learning (PyTorch), Cloud (AWS/GCP), API ad alta performance (FastAPI) e Big Data (Kafka). Non inventare dettagli. Se non sai la risposta, indirizza l'utente alle sezioni del portfolio ("Competenze" o "Progetti").`;
