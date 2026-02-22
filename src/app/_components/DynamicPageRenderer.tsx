import React from 'react';
import { ComponentData, HeroComponent, SectionComponent, CardGridComponent, TextBlockComponent, ListComponent, StatsComponent } from '../_data/DynamicContentSchema';
import * as Icons from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// Helper to resolve Lucide icons dynamically
const IconResolver = ({ name, className }: { name: string; className?: string }) => {
    const iconName = name as keyof typeof Icons;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    return <IconComponent className={className} />;
};

const HeroRenderer = ({ data }: { data: HeroComponent }) => (
    <div className={`relative w-full h-[60vh] flex flex-col items-center justify-center text-center p-8 overflow-hidden rounded-3xl mb-8 ${data.backgroundImage?.startsWith('http') ? '' : data.backgroundImage || 'bg-gradient-to-br from-gray-900 to-gray-800'}`}>
        {data.backgroundImage?.startsWith('http') && (
            <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={data.backgroundImage} alt="Hero Background" className="w-full h-full object-cover opacity-50" />
            </div>
        )}
        <div className="relative z-10 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6 drop-shadow-md">
                {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light drop-shadow-sm">
                {data.subtitle}
            </p>
        </div>
    </div>
);

const SectionRenderer = ({ data }: { data: SectionComponent }) => (
    <div className="w-full my-12">
        {data.title && (
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-accent pl-4">
                {data.title}
            </h2>
        )}
        <div className="space-y-8">
            {data.content.map((child, index) => (
                <DynamicComponentRenderer key={`${child.type}-${index}`} component={child} />
            ))}
        </div>
    </div>
);

const CardGridRenderer = ({ data }: { data: CardGridComponent }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.cards.map((card, index) => (
            <div key={index} className="group relative bg-secondary/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-white/5 transition duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                    {card.icon && (
                        <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                            <IconResolver name={card.icon} className="w-6 h-6" />
                        </div>
                    )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{card.description}</p>
                {card.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {card.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        ))}
    </div>
);

const TextBlockRenderer = ({ data }: { data: TextBlockComponent }) => (
    <div className={`prose prose-invert max-w-none ${data.alignment === 'center' ? 'text-center mx-auto' : data.alignment === 'right' ? 'text-right ml-auto' : 'text-left'}`}>
        <ReactMarkdown>{data.content}</ReactMarkdown>
    </div>
);

const ListRenderer = ({ data }: { data: ListComponent }) => (
    <div className="w-full">
        {data.title && <h3 className="text-xl font-semibold text-white mb-4">{data.title}</h3>}
        {data.style === 'key-value' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5">
                        <span className="text-gray-400 font-medium">{item.label}</span>
                        <span className="text-white font-semibold">{item.value}</span>
                    </div>
                ))}
            </div>
        ) : (
            <ul className={`space-y-2 ${data.style === 'ordered' ? 'list-decimal pl-5' : 'list-disc pl-5'} text-gray-300`}>
                {data.items.map((item, index) => (
                    <li key={index}>
                        <span className="font-medium text-white">{item.label}</span>
                        {item.value && <span className="text-gray-400"> - {item.value}</span>}
                    </li>
                ))}
            </ul>
        )}
    </div>
);

const StatsRenderer = ({ data }: { data: StatsComponent }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
        {data.stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                {stat.trend && <div className="text-xs text-green-400 mt-2">{stat.trend}</div>}
            </div>
        ))}
    </div>
);

const DynamicComponentRenderer = ({ component }: { component: ComponentData }) => {
    switch (component.type) {
        case 'hero': return <HeroRenderer data={component} />;
        case 'section': return <SectionRenderer data={component} />;
        case 'card_grid': return <CardGridRenderer data={component} />;
        case 'text_block': return <TextBlockRenderer data={component} />;
        case 'list': return <ListRenderer data={component} />;
        case 'stats': return <StatsRenderer data={component} />;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        default: return <div className="text-red-500">Unknown component type: {(component as any).type}</div>;
    }
};

export default DynamicComponentRenderer;
