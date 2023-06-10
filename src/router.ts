import { Router } from "express";
import BooksController from "./controllers/BooksController";

const router = Router();
const booksController = new BooksController();

router.get('/', booksController.get);

export default router;