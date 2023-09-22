import re
import requests

from bs4 import BeautifulSoup


def count_words_on_page(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    text = soup.get_text()
    words = re.findall("\w+", text)
    return len(words)
