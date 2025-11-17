// POST/addBook.js
module.exports = (req, res, books) => {
  const { title, author } = req.body || {};
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required." });
  }

  const newBook = {
    id: books.length ? Math.max(...books.map(b => b.id)) + 1 : 1,
    title,
    author
  };

  books.push(newBook);
  return res.status(201).json(newBook);
};
