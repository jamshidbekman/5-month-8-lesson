import { Router } from "express";
import AuthorController from "../controller/author.controller.js";

const authorRouter = Router();

const authorController = new AuthorController();

authorRouter.post("/author", (req, res) => authorController.createAuthorController(req, res));
authorRouter.get("/authors", (req, res) => authorController.getAuthorsController(req, res))

export default authorRouter;
