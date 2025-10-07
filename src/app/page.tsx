'use client';

import React from 'react';
import { UserProvider } from './_context/UserContext';
import UserTypeSelector from './_components/UserTypeSelector';
import Bio from './_components/Bio';
import Chatbot from './_components/Chatbot';
import { Zap, Cpu, Settings, Server, Send, Menu, ArrowRight, Linkedin, Github, Mail } from 'lucide-react';

// Le componenti strutturali (Header, Footer, Sections) sono incluse direttamente qui per semplicità, 
// ma in una vera app Next.js andrebbero anch'esse spostate in _components.

const Header = () => (
    <header className="p-4 border-b border-secondary sticky top-0 bg-primary z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-accent">
                [Nome Ing.]
            </a>
            <nav className="hidden sm:flex space-x-6 text-sm font-medium">
                <a href="#about" className="hover:text-accent transition duration-300">Chi Sono</a>
                <a href="#skills" className="hover:text-accent transition duration-300">Competenza</a>
                <a href="#projects" className="hover:text-accent transition duration-300">Progetti</a>
                <a href="#contact" className="px-3 py-1 bg-accent text-primary rounded-lg hover:bg-opacity-80 transition duration-300">Contattami</a>
            </nav>
            <button className="sm:hidden text-accent">
                <Menu className="w-6 h-6" />
            </button>
        </div>
    </header>
);

const Footer = () => (
    <footer className="mt-12 py-8 border-t border-secondary text-gray-500 text-sm text-center">
        <div className="max-w-7xl mx-auto px-4">
            <p>&copy; 2024 [Il Tuo Nome]. Tutti i diritti riservati. | <span className="text-accent">Machine Learning Engineer</span></p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="https://linkedin.com/in/[tuo-profilo]" target="_blank" className="hover:text-accent transition duration-300"><Linkedin className="w-5 h-5" /></a>
                <a href="https://github.com/[tuo-profilo]" target="_blank" className="hover:text-accent transition duration-300"><Github className="w-5 h-5" /></a>
                <a href="mailto:tuaemail@esempio.com" className="hover:text-accent transition duration-300"><Mail className="w-5 h-5" /></a>
            </div>
        </div>
    </footer>
);

// Componente principale della Home Page
const HomePage = () => {
    return (
        <UserProvider>
            <Header />
            <main>
                {/* Sezione HERO - Impatto Iniziale */}
                <section className="py-16 md:py-24 text-center">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="mb-8 w-32 h-32 mx-auto rounded-full bg-secondary border-4 border-accent flex items-center justify-center shadow-lg">
                            <Zap className="w-16 h-16 text-accent" />
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
                            Engineering ML: <span className="text-gradient">Affidabilità e Valore</span> in Produzione
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Sono un Machine Learning Engineer che bridge il divario tra la Data Science e l'Ingegneria Software, garantendo **sistemi AI robusti e scalabili**.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#projects" className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transition duration-300">
                                Vedi l'Impatto sul Business
                            </a>
                            <a href="#skills" className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition duration-300">
                                Esplora lo Stack Tecnico
                            </a>
                        </div>
                    </div>
                </section>

                {/* Sezione ABOUT ME - Bio Dinamica */}
                <section id="about" className="py-16 bg-secondary">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-4 text-accent">Chi Sono (La mia Bio Dinamica)</h2>
                            <p className="text-gray-400 mb-6">Seleziona il tuo profilo per visualizzare la biografia più rilevante per te:</p>
                            <UserTypeSelector />
                        </div>
                        <Bio />
                    </div>
                </section>
                
                {/* Sezione SKILLS - Competenze Tecniche */}
                <section id="skills" className="py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-10 text-accent">La Mia Toolchain: Dal Data Science alla Deployment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="card p-6 rounded-xl shadow-2xl">
                                <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                                    <Cpu className="w-5 h-5 mr-2 text-accent" /> 1. Core ML & Modelling
                                </h3>
                                <p className="text-xs text-gray-400 mb-3">La scienza dietro le decisioni.</p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>**Deep Learning:** PyTorch, TensorFlow</li>
                                    <li>**Frameworks:** Scikit-learn, XGBoost, Pandas</li>
                                    <li>**Aree:** NLP, Time Series, Computer Vision</li>
                                </ul>
                            </div>
                            <div className="card p-6 rounded-xl shadow-2xl">
                                <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                                    <Settings className="w-5 h-5 mr-2 text-accent" /> 2. MLOps & Orchestrazione
                                </h3>
                                <p className="text-xs text-gray-400 mb-3">Produzione e automazione affidabile.</p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>**CI/CD & Infra:** Docker, Kubernetes (K8s), Helm</li>
                                    <li>**Orchestratori:** Airflow, MLflow (Tracking & Registry)</li>
                                    <li>**API/Serving:** FastAPI (Alta Latenza), Flask</li>
                                </ul>
                            </div>
                            <div className="card p-6 rounded-xl shadow-2xl">
                                <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                                    <Server className="w-5 h-5 mr-2 text-accent" /> 3. Cloud & Data Engineering
                                </h3>
                                <p className="text-xs text-gray-400 mb-3">Scalabilità e gestione dei flussi.</p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>**Cloud:** AWS (SageMaker, Lambda) / GCP (Vertex AI)</li>
                                    <li>**Big Data:** Kafka, Spark (basi)</li>
                                    <li>**Database:** PostgreSQL, MongoDB, Redis (caching)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sezione PROJECTS - Progetti con Focus sull'Impatto */}
                <section id="projects" className="py-16 bg-primary border-t border-secondary">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-10 text-accent">Progetti Chiave: Risultati e Tecnologia</h2>
                        <div className="space-y-12">
                            <div className="card p-6 rounded-xl shadow-2xl">
                                <h3 className="text-2xl font-bold mb-3 text-white">Sistema di Raccomandazione Ibrido</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                     <span className="project-tag px-3 py-1 rounded-full text-xs font-semibold">PyTorch</span>
                                     <span className="project-tag px-3 py-1 rounded-full text-xs font-semibold">Kubernetes</span>
                                     <span className="project-tag px-3 py-1 rounded-full text-xs font-semibold">Bassa Latenza</span>
                                </div>
                                <div className="md:grid md:grid-cols-3 gap-6 text-sm">
                                    <div className="md:col-span-2">
                                        <p className="text-gray-300 mb-3">
                                            Implementazione di un sistema di raccomandazione ibrido (Deep Learning + Content-Based) in grado di fornire suggerimenti personalizzati con una latenza media di **40ms**. L'architettura è interamente containerizzata e gestita da un pipeline **MLOps end-to-end**.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-accent mb-1">IMPATTO BUSINESS:</p>
                                        <ul className="list-disc list-inside text-gray-400">
                                            <li>Aumento del **25%** del Click-Through Rate (CTR).</li>
                                            <li>Scalabilità garantita fino a **10k richieste/secondo**.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-6 rounded-xl shadow-2xl">
                                <h3 className="text-2xl font-bold mb-3 text-white">Analisi Sentiment Aziendale in Tempo Reale</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                     <span className="project-tag px-3 py-1 rounded-full text-xs font-semibold">Hugging Face</span>
                                     <span className="project-tag px-3 py-1 rounded-full text-xs font-semibold">Serverless (AWS Lambda)</span>
                                     <span className="project-tag px-3 py-1 rounded-full text-xs font-semibold">CI/CD</span>
                                </div>
                                <div className="md:grid md:grid-cols-3 gap-6 text-sm">
                                    <div className="md:col-span-2">
                                        <p className="text-gray-300 mb-3">
                                            Sviluppo e fine-tuning di un modello BERT per la classificazione accurata del sentiment su canali social e recensioni. Il modello è deployato in ambiente **serverless** per minimizzare i costi operativi e massimizzare la scalabilità on-demand.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-accent mb-1">IMPATTO BUSINESS:</p>
                                        <ul className="list-disc list-inside text-gray-400">
                                            <li>**93%** di Accuratezza su benchmark proprietario.</li>
                                            <li>Riduzione del **40%** del tempo di risposta del team supporto clienti.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <a href="#" className="inline-flex items-center px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition duration-300">
                                Visualizza tutti i progetti su GitHub <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Sezione CTA / Contatti */}
                <section id="contact" className="py-16 text-center bg-secondary border-t border-secondary">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-4xl font-extrabold text-white mb-4">
                            Parliamo di Prossime Soluzioni AI
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            La tua azienda è pronta per un'AI "production-ready"? Contattami per una consulenza senza impegno.
                        </p>
                        <a href="mailto:tuaemail@esempio.com" className="inline-flex items-center px-10 py-4 bg-accent text-primary font-bold text-lg rounded-lg shadow-xl hover:bg-opacity-90 transition duration-300">
                            <Send className="w-5 h-5 mr-2" /> Invia una Mail
                        </a>
                    </div>
                </section>
            </main>
            
            <Chatbot />
            <Footer />
        </UserProvider>
    );
};

export default HomePage;
