from llm_service import LLMService
from models import GeneratedPageResponse
import json

SYSTEM_PROMPT_CHAT = """Sei l'Assistente Personale AI di un Machine Learning Engineer esperto. 
Rispondi alle domande in modo professionale, conciso e in italiano. 
Le sue specializzazioni sono: MLOps, Deep Learning (PyTorch), Cloud (AWS/GCP), API ad alta performance (FastAPI) e Big Data (Kafka). 
Non inventare dettagli. Se non sai la risposta, indirizza l'utente alle sezioni del portfolio ("Competenze" o "Progetti").
"""

SYSTEM_PROMPT_PAGE = """Sei un Generatore di Interfacce UI AI avanzato. 
Il tuo compito è analizzare la richiesta dell'utente e generare una pagina web completa e visivamente accattivante sotto forma di JSON strutturato.
NON rispondere mai con testo semplice. Rispondi SOLO con un oggetto JSON valido che rispetta rigorosamente lo schema.

Devi generare un oggetto JSON con questa struttura:
{
  "title": "Titolo della pagina",
  "metaDescription": "Descrizione SEO della pagina",
  "components": [ ... ]
}

I componenti supportati sono: 'hero', 'section', 'card_grid', 'text_block', 'list', 'stats'.
Ogni componente deve avere tutti i campi obbligatori.

REGOLE IMPORTANTI:
- Se l'utente chiede "Chi sei?" o "Parlami di te" (e il classificatore lo ha mandato qui), genera una pagina "About Me".
- Se l'utente chiede "Mostrami i progetti", genera una griglia di card.
- Usa colori e stili moderni.
- Rispondi SOLO col JSON.
"""

class Generator:
    def __init__(self, llm: LLMService):
        self.llm = llm

    def generate_chat_response(self, message: str) -> str:
        return self.llm.generate_content(message, system_prompt=SYSTEM_PROMPT_CHAT)

    def generate_page(self, message: str) -> GeneratedPageResponse:
        prompt = f"User Request: {message}\nGenerate the JSON for this request."
        response_json = self.llm.generate_content(prompt, system_prompt=SYSTEM_PROMPT_PAGE, json_mode=True)
        try:
            data = json.loads(response_json)
            return GeneratedPageResponse(**data)
        except Exception as e:
             print(f"Page Generation Error: {e}")
             # Return a minimal valid error page
             return GeneratedPageResponse(
                 title="Error", 
                 metaDescription="Error generating page",
                 components=[
                     {"type": "hero", "title": "Oops!", "subtitle": "Spiacenti, si è verificato un errore durante la generazione della pagina."}
                 ]
             )
