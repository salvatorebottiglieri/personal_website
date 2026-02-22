import google.generativeai as genai
from openai import OpenAI
from abc import ABC, abstractmethod
from config import Config
import json

class LLMService(ABC):
    @abstractmethod
    def generate_content(self, prompt: str, system_prompt: str = None, json_mode: bool = False) -> str:
        pass

class GeminiService(LLMService):
    def __init__(self):
        genai.configure(api_key=Config.API_KEY)
        self.model = genai.GenerativeModel(Config.MODEL_NAME)

    def generate_content(self, prompt: str, system_prompt: str = None, json_mode: bool = False) -> str:
        generation_config = {}
        if json_mode:
            generation_config["response_mime_type"] = "application/json"
        
        # Merge system prompt if provided
        final_prompt = prompt
        if system_prompt:
             # Gemini supports system instructions but here we can just prepend or configure model
             self.model = genai.GenerativeModel(
                 Config.MODEL_NAME, 
                 system_instruction=system_prompt
             )

        try:
            response = self.model.generate_content(
                final_prompt,
                generation_config=generation_config
            )
            return response.text
        except Exception as e:
            print(f"Gemini Error: {e}")
            raise e

class GenericService(LLMService):
    def __init__(self):
        self.client = OpenAI(
            base_url=Config.LLM_BASE_URL,
            api_key="sk-no-key-required" # Usually not needed for local, but required by SDK
        )
        self.model_name = Config.MODEL_NAME

    def generate_content(self, prompt: str, system_prompt: str = None, json_mode: bool = False) -> str:
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        
        messages.append({"role": "user", "content": prompt})

        response_format = {"type": "json_object"} if json_mode else None

        try:
            response = self.client.chat.completions.create(
                model=self.model_name,
                messages=messages,
                response_format=response_format
            )
            return response.choices[0].message.content
        except Exception as e:
            print(f"Local/Generic LLM Error: {e}")
            raise e

def get_llm_service() -> LLMService:
    if Config.LLM_PROVIDER == "gemini":
        return GeminiService()
    else:
        return GenericService()
