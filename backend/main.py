from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import ChatRequest, ChatResponse
from llm_service import get_llm_service
from classifier import Classifier
from generator import Generator

app = FastAPI()

# CORS Configuration
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency Injection
llm = get_llm_service()
classifier = Classifier(llm)
generator = Generator(llm)

@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    # 1. Classify
    classification = classifier.classify(request.message)
    print(f"Intent classified as: {classification.intent}")

    if classification.intent == "off_topic":
        return ChatResponse(
            type="text", 
            content="Mi dispiace, posso rispondere solo a domande relative al mio profilo professionale, competenze o progetti. Come posso aiutarti in questo ambito?"
        )

    # 2. Generate
    if classification.intent == "page_generation":
        page_data = generator.generate_page(request.message)
        return ChatResponse(type="page", content=page_data)
    
    else: # intent == "chat"
        text_response = generator.generate_chat_response(request.message, visitor=request.visitor)
        return ChatResponse(type="text", content=text_response)

@app.get("/health")
def health_check():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
