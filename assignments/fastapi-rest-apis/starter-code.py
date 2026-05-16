"""Starter FastAPI assignment scaffold.

Run locally:
    uvicorn starter-code:app --reload
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Books API")


class Book(BaseModel):
    title: str
    author: str
    year: int


books = [
    {"id": 1, "title": "Clean Code", "author": "Robert C. Martin", "year": 2008},
    {"id": 2, "title": "Fluent Python", "author": "Luciano Ramalho", "year": 2015},
]


@app.get("/books")
def get_books(author: str | None = None):
    if author:
        return [b for b in books if b["author"].lower() == author.lower()]
    return books


@app.get("/books/{book_id}")
def get_book(book_id: int):
    for book in books:
        if book["id"] == book_id:
            return book
    raise HTTPException(status_code=404, detail="Book not found")


@app.post("/books", status_code=201)
def create_book(book: Book):
    next_id = max((b["id"] for b in books), default=0) + 1
    new_book = {"id": next_id, **book.model_dump()}
    books.append(new_book)
    return new_book


@app.put("/books/{book_id}")
def update_book(book_id: int, book: Book):
    for i, existing in enumerate(books):
        if existing["id"] == book_id:
            updated = {"id": book_id, **book.model_dump()}
            books[i] = updated
            return updated
    raise HTTPException(status_code=404, detail="Book not found")


@app.delete("/books/{book_id}", status_code=204)
def delete_book(book_id: int):
    for i, book in enumerate(books):
        if book["id"] == book_id:
            books.pop(i)
            return None
    raise HTTPException(status_code=404, detail="Book not found")
