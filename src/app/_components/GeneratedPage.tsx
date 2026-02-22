import React from 'react';
import { GeneratedPageData } from '../_data/DynamicContentSchema';
import DynamicComponentRenderer from './DynamicPageRenderer';
import { ArrowLeft } from 'lucide-react';

interface GeneratedPageProps {
    data: GeneratedPageData;
    onClose: () => void;
}

const GeneratedPage: React.FC<GeneratedPageProps> = ({ data, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 bg-primary overflow-y-auto animate-in fade-in duration-500">
            {/* Minimal Header */}
            <div className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-primary/80 backdrop-blur-md border-b border-white/5">
                <button
                    onClick={onClose}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Back to Home</span>
                </button>
                <div className="text-sm text-gray-400 font-mono">
                    Generated for you
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
                <div className="space-y-12">
                    {data.components.map((component, index) => (
                        <DynamicComponentRenderer key={`${component.type}-${index}`} component={component} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GeneratedPage;
