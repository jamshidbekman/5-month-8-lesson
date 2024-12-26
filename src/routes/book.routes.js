import { Router } from "express";
import BookController from "../controller/book.controller.js";

const bookRouter = Router();

const bookControler = new BookController();

bookRouter.post("/book", (req, res) => bookControler.createBookController(req, res));

export default bookRouter;
