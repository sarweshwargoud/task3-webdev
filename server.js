const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

// In-memory books data
let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" }
];

// IMPORT ROUTE HANDLERS
const getBooks = require("./GET/getBooks");
const addBook = require("./POST/addBook");
const updateBook = require("./PUT/updateBook");
const deleteBook = require("./DELETE/deleteBook");

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Book API is running");
});

// GET ALL BOOKS
app.get("/books", (req, res) => getBooks(req, res, books));

// ADD BOOK
app.post("/books", (req, res) => addBook(req, res, books));

// UPDATE BOOK
app.put("/books/:id", (req, res) => updateBook(req, res, books));

// DELETE BOOK
app.delete("/books/:id", (req, res) => deleteBook(req, res, books));

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
