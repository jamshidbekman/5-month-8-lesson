import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Kitob nomi kiritilishi shart."],
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: [true, "Kitob muallifining idsi kiritilishi shart."],
    },
    pages: {
      type: Number,
      min: 1,
      required: [true, "Kitob sahifalari soni kiritilishi shart."],
    },
    year: {
      type: Number,
      required: [true, "Kitob yili kiritilishi shart."],
    },
  },
  {
    versionKey: false,
  }
);

const bookModel = mongoose.model("books", bookSchema);

export default bookModel;
