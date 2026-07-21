from pydantic import BaseModel, Field
from typing import List, Optional, Union, Literal

class VisitorInfo(BaseModel):
    city: Optional[str] = None
    region: Optional[str] = None
    country: Optional[str] = None
    org: Optional[str] = None
    isp: Optional[str] = None
    referrer: Optional[str] = None
    timezone: Optional[str] = None

class BaseComponent(BaseModel):
    id: Optional[str] = None
    type: str

class HeroComponent(BaseComponent):
    type: Literal['hero']
    title: str
    subtitle: str
    backgroundImage: Optional[str] = None

class CardData(BaseModel):
    title: str
    description: str
    icon: Optional[str] = None
    link: Optional[str] = None
    tags: Optional[List[str]] = None

class CardGridComponent(BaseComponent):
    type: Literal['card_grid']
    cards: List[CardData]

class TextBlockComponent(BaseComponent):
    type: Literal['text_block']
    content: str
    alignment: Optional[Literal['left', 'center', 'right']] = 'left'

class ListItem(BaseModel):
    label: str
    value: Optional[str] = None

class ListComponent(BaseComponent):
    type: Literal['list']
    title: Optional[str] = None
    items: List[ListItem]
    style: Optional[Literal['bullet', 'ordered', 'key-value']] = 'bullet'

class StatItem(BaseModel):
    label: str
    value: str
    trend: Optional[str] = None

class StatsComponent(BaseComponent):
    type: Literal['stats']
    stats: List[StatItem]

# Recursive definition for SectionComponent
class SectionComponent(BaseComponent):
    type: Literal['section']
    title: Optional[str] = None
    content: List[Union[HeroComponent, 'SectionComponent', CardGridComponent, TextBlockComponent, ListComponent, StatsComponent]]

GeneratedPageData = Union[HeroComponent, SectionComponent, CardGridComponent, TextBlockComponent, ListComponent, StatsComponent]

class GeneratedPageResponse(BaseModel):
    title: str
    metaDescription: str
    components: List[GeneratedPageData]

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[dict]] = []
    visitor: Optional[VisitorInfo] = None

class ClassificationResponse(BaseModel):
    intent: Literal['chat', 'page_generation', 'off_topic']
    reason: Optional[str] = None

class ChatResponse(BaseModel):
    type: Literal['text', 'page']
    content: Union[str, GeneratedPageResponse]
