import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_count_words_valid_url():
    url_data = {"url": "https://example.com"}
    response = client.post("/count-words/", json=url_data)
    assert response.status_code == 200
    assert "word_count" in response.json()


def test_count_words_invalid_url():
    url_data = {"url": "invalid_url"}
    response = client.post("/count-words/", json=url_data)
    assert response.status_code == 400
    assert "detail" in response.json()
