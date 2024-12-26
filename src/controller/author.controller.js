import AuthorService from "../service/author.service.js";

class AuthorController {
  constructor() {
    this.authorService = new AuthorService();
  }
  async createAuthorController(req, res) {
    try {
      const body = req.body;
      const data = await this.authorService.createAuthor(body);
      res.statusCode = 201;
      res.send({
        message: "Author successfully created",
        success: true,
        author: data,
      });
    } catch (error) {
      res.statusCode = 400;
      res.send({
        message: error.message,
        success: false,
      });
    }
  }
  async getAuthorsController(req, res) {
    try {
      const query = req.query;
      const data = await this.authorService.getAuthors(query);
      res.send(data);
    } catch (error) {
      res.statusCode = 400;
      res.send({
        message: error.message,
      });
    }
  }
}

export default AuthorController;
