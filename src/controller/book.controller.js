import BookService from "../service/book.service.js";

class BookController {
  constructor() {
    this.bookService = new BookService();
  }
  async createBookController(req, res) {
    try {
      const body = req.body;
      const data = await this.bookService.createBook(body);
      res.send({
        message: "Book successfully created",
        success: true,
        book: data,
      });
    } catch (error) {
      res.statusCode = 400;
      res.send({
        message: error.message,
        success: true,
      });
    }
  }
}

export default BookController;
