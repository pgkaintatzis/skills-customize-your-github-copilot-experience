# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a simple REST API using FastAPI to practice route creation, request validation, and CRUD-style operations with Python.

## 📝 Tasks

### 🛠️ Build Core API Endpoints

#### Description
Create a FastAPI application with endpoints for managing a small in-memory collection of books. You will define routes, return JSON responses, and use path/query parameters.

#### Requirements
Completed program should:

- Create a FastAPI app and run it with Uvicorn
- Implement `GET /books` and `GET /books/{book_id}` endpoints
- Implement `POST /books` to add a new book to the in-memory list
- Return appropriate HTTP status codes for success and missing resources


### 🛠️ Add Validation and Update/Delete Operations

#### Description
Enhance your API by adding Pydantic models for validation and implementing update/delete routes for full CRUD behavior.

#### Requirements
Completed program should:

- Use a Pydantic model to validate incoming book data
- Implement `PUT /books/{book_id}` to update a book
- Implement `DELETE /books/{book_id}` to remove a book
- Include at least one query parameter (for example, filtering books by author)
