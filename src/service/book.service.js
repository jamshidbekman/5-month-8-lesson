import bookModel from "../models/book.model.js";

class BookService {
  constructor() {
    this.bookModel = bookModel;
  }
  async createBook({ title, authorId, pages, year }) {
    const book = await this.bookModel.create({ title, authorId, pages, year });
    return book;
  }
}

export default BookService;
