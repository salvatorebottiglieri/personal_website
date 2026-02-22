'use client';

import React from 'react';
import { UserProvider } from './_context/UserContext';
import HeroChat from './_components/HeroChat';
import GeneratedPage from './_components/GeneratedPage';
import { GeneratedPageData } from './_data/DynamicContentSchema';

const HomePage = () => {
    const [generatedData, setGeneratedData] = React.useState<null | GeneratedPageData>(null);

    return (
        <UserProvider>
            <main className="min-h-screen flex flex-col items-center justify-center bg-primary overflow-hidden relative">
                {generatedData && (
                    <GeneratedPage
                        data={generatedData}
                        onClose={() => setGeneratedData(null)}
                    />
                )}

                {/* Minimal Background Element or Gradient */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]" />
                </div>

                <div className="z-10 w-full max-w-4xl text-center px-4 mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
                        Hello, I&apos;m Salvatore.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light mb-12">
                        Machine Learning Engineer building the future.
                    </p>
                </div>

                <div className="z-10 w-full">
                    <HeroChat onGenerate={setGeneratedData} />
                </div>
            </main>
        </UserProvider>
    );
};

export default HomePage;
