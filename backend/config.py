import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    API_KEY = os.getenv("API_KEY", "")
    LLM_PROVIDER = os.getenv("LLM_PROVIDER", "gemini") # "gemini" or "local"
    LLM_BASE_URL = os.getenv("LLM_BASE_URL", "http://localhost:11434/v1") # For local models
    MODEL_NAME = os.getenv("MODEL_NAME", "gemini-2.0-flash-exp") # or "llama3", etc.
