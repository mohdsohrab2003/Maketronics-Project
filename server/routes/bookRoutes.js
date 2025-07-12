const express = require('express');
const bookRoutes = express.Router(); // ✅ call the function, not assign it
const bookData = require('../book.json');

// ✅ fix parameter order: (req, res) not (res, req)
bookRoutes.get('/api/bookdata', (req, res) => {
  res.json(bookData); // ✅ use json() for structured response
});

module.exports = bookRoutes;
