const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');

// Ruta para obtener todos los libros
router.get('/books', BookController.getAllBooks);

// Ruta para obtener un libro por ID
router.get('/books/:id', BookController.getBookById);

// Ruta para crear un nuevo libro
router.post('/books', BookController.createBook);

// Ruta para actualizar un libro por ID
router.put('/books/:id', BookController.updateBook);

// Ruta para eliminar un libro por ID
router.delete('/books/:id', BookController.deleteBook);

module.exports = router;
