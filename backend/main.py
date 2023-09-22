from fastapi import FastAPI, HTTPException
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
    except ValidationError as exception:
        raise HTTPException(
            status_code=500,
            detail="URL not valid",
            headers={"X-Error": f"Error: {str(exception)}"},
        )
    except Exception as exception:
        raise HTTPException(
            status_code=400,
            detail=str(exception),
            headers={"X-Error": f"Error: {str(exception)}"},
        )
