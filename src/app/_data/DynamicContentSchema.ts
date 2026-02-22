export type ComponentType = 'hero' | 'section' | 'card_grid' | 'text_block' | 'list' | 'stats';

export interface BaseComponent {
    id: string;
    type: ComponentType;
}

export interface HeroComponent extends BaseComponent {
    type: 'hero';
    title: string;
    subtitle: string;
    backgroundImage?: string; // Optional URL or gradient class
}

export interface SectionComponent extends BaseComponent {
    type: 'section';
    title?: string;
    content: ComponentData[]; // Nested components
}

export interface CardData {
    title: string;
    description: string;
    icon?: string; // Name of Lucide icon
    link?: string;
    tags?: string[];
}

export interface CardGridComponent extends BaseComponent {
    type: 'card_grid';
    cards: CardData[];
}

export interface TextBlockComponent extends BaseComponent {
    type: 'text_block';
    content: string; // Markdown supported
    alignment?: 'left' | 'center' | 'right';
}

export interface ListItem {
    label: string;
    value?: string;
}

export interface ListComponent extends BaseComponent {
    type: 'list';
    title?: string;
    items: ListItem[];
    style?: 'bullet' | 'ordered' | 'key-value';
}

export interface StatItem {
    label: string;
    value: string;
    trend?: string; // e.g., "+10%"
}

export interface StatsComponent extends BaseComponent {
    type: 'stats';
    stats: StatItem[];
}

export type ComponentData =
    | HeroComponent
    | SectionComponent
    | CardGridComponent
    | TextBlockComponent
    | ListComponent
    | StatsComponent;

export interface GeneratedPageData {
    title: string;
    metaDescription: string;
    components: ComponentData[];
}
