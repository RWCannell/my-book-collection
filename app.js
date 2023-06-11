const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const logger = require("loglevel");
const db = require("./queries");

// Get environment variables specified in the .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4005;

// To serve static files such as images, CSS files, and JavaScript files
app.use(express.static("public"));

// Set all Express routes
const router = express.Router();
app.use("/", router);

router.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/html/home.html");
});
router.get("/books", db.getAllBooks);
router.get("/books/:id", db.getBookById);
router.post("/books", db.addBook);
router.put("/books/:id", db.updateBook);
router.delete("/books/:id", db.deleteBook);

app.listen(port, () => {
    logger.info(`Application running on port ${port}.`);
    logger.debug(`Application running on port ${port}.`);
});