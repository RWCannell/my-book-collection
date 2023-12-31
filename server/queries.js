const Pool = require("pg").Pool
const dotenv = require("dotenv");
const logger = require("loglevel");

dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const getAllBooks = (_, response) => {
    pool.query("SELECT * FROM books ORDER BY id ASC", (error, result) => {
      if (error) {
        throw error
      }
      logger.info(result.rows);
      logger.debug(result.rows);
      const data = result.rows.map(row => {
        return {
          id: row.id,
          title: row.title,
          author: row.author,
          publishedYear: row["originally_published"],
          readingStatus: row["reading_status"],
          readMoreUrl: row["read_more_url"]
        };
      });
      response.status(200).json(data);
    });
}

const getBookById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query("SELECT * FROM books WHERE id = $1", [id], (error, result) => {
      if (error) {
        throw error
      }
      logger.debug(result.rows);
      response.status(200).json(result.rows)
    });
}

const getBookByTitle = (request, response) => {
    const title = parseInt(request.params.title);

    pool.query("SELECT * FROM books WHERE title = $1", [title], (error, result) => {
      if (error) {
        throw error
      }
      logger.debug(result.rows);
      response.status(200).json(result.rows)
    });
}

const addBook = (request, response) => {
    const { 
        title, 
        author,
        originallyPublished,
        readingStatus,
        readMoreUrl
    } = request.body;
  
    pool.query("INSERT INTO users (name, email) VALUES ($1, $2, $3, $4, $5) RETURNING *", [title, author, originallyPublished, readingStatus, readMoreUrl], (error, result) => {
      if (error) {
        throw error
      }
      logger.debug(result.rows[0].id);
      response.status(201).send(`Book added with Id: ${result.rows[0].id}`);
    })
}

const updateBook = (request, response) => {
    const id = parseInt(request.params.id);
    const { 
        title, 
        author,
        originallyPublished,
        readingStatus,
        readMoreUrl
    } = request.body;
  
    pool.query(
      "UPDATE books SET title = $1, author = $2, originallyPublished = $3, readingStatus = $4, readMoreUrl = $5 WHERE id = $6",
      [title, author, originallyPublished, readingStatus, readMoreUrl, id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Book with id "${id}" has been modified`);
      }
    )
  }

  const deleteBook = (request, response) => {
    const id = parseInt(request.params.id);
  
    pool.query("DELETE FROM books WHERE id = $1", [id], (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Book with id "${id}" deleted`);
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