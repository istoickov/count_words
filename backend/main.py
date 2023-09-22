from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import URLInput
from service import count_words_on_page

from validators import url, ValidationError

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/count-words/")
def count_words(data: URLInput):
    try:
        url(data.url)
        count = count_words_on_page(data.url)
        return {"word_count": count}
    except ValidationError as e:
        return {"error": "url not valid"}
    except Exception as e:
        return {"error": str(e)}
