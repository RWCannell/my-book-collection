const dotenv = require("dotenv");
const express = require("express");
const logger = require("loglevel");
const db = require("./queries");


// Get environment variables specified in the .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Setup backend routes
const router = express.Router();
logger.info(`MY BOOK COLLECTION backend start`);
router.get("/health", async (_, res) => {
    res.send({ status: "ok" });
});
router.get("/api", (_, res) => {
    res.json({ message: "Express Server says Hello!!!" });
});
router.get("/api/books", db.getAllBooks);
router.get("/api/books/:id", db.getBookById);
router.get("/api/books/:title", db.getBookByTitle);
router.post("/api/books", db.addBook);
router.put("/api/books/:id", db.updateBook);
router.delete("/api/books/:id", db.deleteBook);
router.use(express.json());

// Serve static files such as images, HTML files, CSS files, and JS files from the public folder
app.use(express.static("public"));
app.use("/", router);
app.listen(port, () => {
    logger.info(`Application running on port ${port}.`);
    logger.debug(`Application running on port ${port}.`);
});