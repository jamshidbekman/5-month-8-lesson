import authorModel from "../models/author.model.js";
import bookModel from "../models/book.model.js";
import mongoose from "mongoose";

class AuthorService {
  constructor() {
    this.authorModel = authorModel;
    this.bookModel = bookModel;
  }
  async createAuthor({ name, country, birthYear }) {
    const author = await this.authorModel.create({ name, country, birthYear });
    return author;
  }
  async getAuthors({ name, id }) {
    if (name) {
      const authors = this.authorModel.aggregate([
        {
          $match: { name: name },
        },
        {
          $lookup: {
            localField: "_id",
            foreignField: "authorId",
            from: "books",
            as: "books",
            pipeline: [
              {
                $project: {
                  _id: "$_id",
                  title: "$title",
                  pages: "$pages",
                  year: "$year",
                },
              },
            ],
          },
        },
        {
          $project: {
            _id: "$_id",
            authorName: "$name",
            totalBooks: { $size: "$books" },
            totalPages: { $sum: "$books.pages" },
            avgPages: { $avg: "$books.pages" },
            books: "$books",
          },
        },
      ]);
      return authors;
    } else if (id) {
      const authors = this.authorModel.aggregate([
        {
          $match: { _id: new mongoose.Types.ObjectId(id) },
        },
        {
          $lookup: {
            localField: "_id",
            foreignField: "authorId",
            from: "books",
            as: "books",
            pipeline: [
              {
                $project: {
                  _id: "$_id",
                  title: "$title",
                  pages: "$pages",
                  year: "$year",
                },
              },
            ],
          },
        },
        {
          $project: {
            _id: "$_id",
            authorName: "$name",
            totalBooks: { $size: "$books" },
            totalPages: { $sum: "$books.pages" },
            avgPages: { $avg: "$books.pages" },
            books: "$books",
          },
        },
      ]);
      return authors;
    } else {
      const authors = this.authorModel.aggregate([
        {
          $lookup: {
            localField: "_id",
            foreignField: "authorId",
            from: "books",
            as: "books",
            pipeline: [
              {
                $project: {
                  _id: "$_id",
                  title: "$title",
                  pages: "$pages",
                  year: "$year",
                },
              },
            ],
          },
        },
        {
          $project: {
            _id: "$_id",
            authorName: "$name",
            totalBooks: { $size: "$books" },
            totalPages: { $sum: "$books.pages" },
            avgPages: { $avg: "$books.pages" },
            books: "$books",
          },
        },
      ]);
      return authors;
    }
  }
}

export default AuthorService;
