"""Tests for Generator enriched prompt via VisitorInfo."""

from unittest.mock import MagicMock

from generator import Generator, SYSTEM_PROMPT_CHAT
from models import VisitorInfo


def test_visitor_complete_enriches_prompt():
    """Visitor with all fields → prompt contains full fragment."""
    mock_llm = MagicMock()
    mock_llm.generate_content.return_value = "Ciao!"
    gen = Generator(mock_llm)
    visitor = VisitorInfo(
        city="Milano",
        org="Accenture",
        referrer="linkedin.com",
        timezone="Europe/Rome",
    )

    gen.generate_chat_response("Ciao", visitor=visitor)

    call_kwargs = mock_llm.generate_content.call_args.kwargs
    prompt = call_kwargs["system_prompt"]
    assert "Informazioni disponibili sul visitatore:" in prompt
    assert "- Città: Milano" in prompt
    assert "- Organizzazione: Accenture" in prompt
    assert "- Referrer: linkedin.com" in prompt
    assert "- Fuso orario: Europe/Rome" in prompt
    assert prompt.startswith("Informazioni disponibili sul visitatore:")


def test_visitor_partial_only_city():
    """Visitor with only city → prompt contains only that field."""
    mock_llm = MagicMock()
    mock_llm.generate_content.return_value = "Ok"
    gen = Generator(mock_llm)
    visitor = VisitorInfo(city="Roma")

    gen.generate_chat_response("Ciao", visitor=visitor)

    call_kwargs = mock_llm.generate_content.call_args.kwargs
    prompt = call_kwargs["system_prompt"]
    assert "- Città: Roma" in prompt
    assert "- Organizzazione:" not in prompt
    assert "- Referrer:" not in prompt
    assert "- Fuso orario:" not in prompt


def test_visitor_empty_dict():
    """Visitor with all-None fields → prompt unchanged."""
    mock_llm = MagicMock()
    mock_llm.generate_content.return_value = "Ok"
    gen = Generator(mock_llm)
    visitor = VisitorInfo()  # all None

    gen.generate_chat_response("Ciao", visitor=visitor)

    call_kwargs = mock_llm.generate_content.call_args.kwargs
    prompt = call_kwargs["system_prompt"]
    assert prompt == SYSTEM_PROMPT_CHAT


def test_visitor_none():
    """visitor=None → prompt unchanged."""
    mock_llm = MagicMock()
    mock_llm.generate_content.return_value = "Ok"
    gen = Generator(mock_llm)

    gen.generate_chat_response("Ciao", visitor=None)

    call_kwargs = mock_llm.generate_content.call_args.kwargs
    prompt = call_kwargs["system_prompt"]
    assert prompt == SYSTEM_PROMPT_CHAT
