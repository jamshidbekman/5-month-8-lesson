import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Muallif ismi kiritilishi shart."],
      unique: [true, "Muallif allaqachon mavjud."],
    },
    country: {
      type: String,
      required: [true, "Muallif tug'ilgan mamlakat kiritilishi shart."],
    },
    birthYear: {
      type: Number,
    },
  },
  {
    versionKey: false,
  }
);

const authorModel = mongoose.model("authors", authorSchema);

export default authorModel;
