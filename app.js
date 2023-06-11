const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const logger = require("loglevel");
const db = require("./queries");

// Get environment variables specified in the .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4005;

// Serve static files such as images, HTML files, CSS files, and JS files from the public folder
app.use(express.static("public"));

// Set all Express routes
const router = express.Router();
router.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/home.html"));
});
router.get("/books", db.getAllBooks);
router.get("/books/:id", db.getBookById);
router.get("/books/:title", db.getBookByTitle);
router.post("/books", db.addBook);
router.put("/books/:id", db.updateBook);
router.delete("/books/:id", db.deleteBook);

app.use("/", router);
app.listen(port, () => {
    logger.info(`Application running on port ${port}.`);
    logger.debug(`Application running on port ${port}.`);
});