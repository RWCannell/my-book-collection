const express = require("express");
const { json, urlencoded } = require("body-parser");
const dotenv = require("dotenv");
const db = require("./queries");

dotenv.config();

const app = express();
const port = process.env.PORT || 4005;

app.use(json());
app.use(
    urlencoded({
      extended: true,
    })
);

app.get("/", (request, response) => {
    response.json({ info: "My Book Collection built with Node, Express, and PostgreSQL" })
});
app.get("/books", db.getAllBooks);
app.get("/books/:id", db.getBookById);
app.post("/books", db.addBook);
app.put("/books/:id", db.updateBook);
app.delete("/books/:id", db.deleteBook);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});