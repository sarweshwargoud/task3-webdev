// DELETE/deleteBook.js
module.exports = (req, res, books) => {
  const id = parseInt(req.params.id, 10);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deleted = books.splice(index, 1)[0];
  // Return deleted item for confirmation
  return res.json({ message: "Book deleted successfully", deleted });
};
