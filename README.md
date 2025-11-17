📘 Book API — REST CRUD Application (Task 3)

A simple REST API built using Node.js and Express.js to manage a collection of books.
This project demonstrates core backend development concepts including routing, modularization, and CRUD operations.

📁 Project Structure

book-api/

├── GET/

│   └── getBooks.js

├── POST/

│   └── addBook.js

├── PUT/

│   └── updateBook.js

├── DELETE/

│   └── deleteBook.js

├── server.js

├── package.json

└── package-lock.json


GET/ → contains handler for GET /books

POST/ → contains handler for POST /books

PUT/ → contains handler for PUT /books/:id

DELETE/ → contains handler for DELETE /books/:id

server.js → central Express server that connects all routes

books data is stored in-memory (not in database)

🚀 Features

✔ Fetch all books
✔ Add a new book
✔ Update an existing book by ID
✔ Delete a book by ID
✔ Modular route-handling structure
✔ Simple and clean Express server

🛠️ Technologies Used

Node.js

Express.js

JavaScript (ES6)

Postman / Thunder Client for API testing

📦 Installation & Setup
1️⃣ Clone or download the project
cd book-api

2️⃣ Install dependencies
npm install

3️⃣ Start the server
npm start


You should see:

Server running on port 3000

📡 API Endpoints
🔹 GET /books

Fetch all books.

Example Response:

[
  { "id": 1, "title": "Atomic Habits", "author": "James Clear" },
  { "id": 2, "title": "The Alchemist", "author": "Paulo Coelho" }
]

🔹 POST /books

Add a new book.

Headers:

Content-Type: application/json


Body (JSON):

{
  "title": "Sapiens",
  "author": "Yuval Noah Harari"
}

🔹 PUT /books/:id

Update a book by ID.

Example:

PUT /books/1


Body:

{
  "title": "Atomic Habits - Updated Edition"
}

🔹 DELETE /books/:id

Delete a book by ID.

Example:

DELETE /books/2


Response:

{
  "message": "Book deleted successfully"
}

🧪 Testing the API

You can use:

🔸 Postman
🔸 Thunder Client (VS Code)
🔸 PowerShell / Terminal (Invoke-RestMethod / curl)

Example using PowerShell:
Invoke-RestMethod http://127.0.0.1:3000/books

Example using curl:
curl http://127.0.0.1:3000/books

📌 Notes

This project uses an in-memory array — data resets when the server restarts.

Folder-based routing is used to keep code modular and clean.

server.js acts as the main controller connecting all route files.
