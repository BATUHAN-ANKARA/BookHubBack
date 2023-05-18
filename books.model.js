const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true
    },
    author: {
      type: Schema.Types.String,
      required: false
    },
    category: {
      type: Schema.Types.String,
      required: true
    },
    language: {
      type: Schema.Types.String,
      required: false
    },
    country: {
      type: Schema.Types.String,
      required: false,
      min: 4
    },
    date: {
      type: Schema.Types.Date,
      required: false
    },
    stores: {
      type: Schema.Types.String,
      required: false
    },
    isban: {
      type: Schema.Types.String,
      required: true
    },
    quentity: {
      type: Schema.Types.Number,
      required: true
    },
    image: {
      type: Schema.Types.String,
      required: false
    },
    price: {
      type: Schema.Types.Number,
      required: false
    }
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Books = mongoose.model("Books", booksSchema, "books");

module.exports = Books;
