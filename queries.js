const Pool = require('pg').Pool
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const getAllBooks = (request, response) => {
    pool.query('SELECT * FROM books ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      response.status(200).json(results.rows);
    });
}

const getBookById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM books WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      response.status(200).json(results.rows)
    });
}

const getBookByTitle = (request, response) => {
    const title = parseInt(request.params.title);

    pool.query('SELECT * FROM books WHERE title = $1', [title], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      response.status(200).json(results.rows)
    });
}

const addBook = (request, response) => {
    const { 
        title, 
        author,
        originallyPublished,
        readingStatus
    } = request.body;
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2, $3, $4) RETURNING *', [title, author, originallyPublished, readingStatus], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows[0].id);
      response.status(201).send(`Book added with Id: ${results.rows[0].id}`);
    })
}

const updateBook = (request, response) => {
    const id = parseInt(request.params.id);
    const { 
        title, 
        author,
        originallyPublished,
        readingStatus
    } = request.body;
  
    pool.query(
      'UPDATE books SET title = $1, author = $2, originallyPublished = $3, readingStatus = $4 WHERE id = $5',
      [title, author, originallyPublished, readingStatus, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Book with id '${id}' has been modified`);
      }
    )
  }

  const deleteBook = (request, response) => {
    const id = parseInt(request.params.id);
  
    pool.query('DELETE FROM books WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Book with id '${id}' deleted`);
    })
  }

  module.exports = {
    getAllBooks,
    getBookById,
    getBookByTitle,
    addBook,
    updateBook,
    deleteBook,
  }