const Books = require("../models/books.model");
const booksDal = require("../dal/index");
const utils = require("../utils/index");
const booksDto = require("../dto/books.dto");

exports.addBook = async (req) => {
  try {
    let {
      name,
      author,
      category,
      isbn,
      quantity,
      language,
      country,
      date,
      image,
      price,
      numberOfPage,
      descriptions
    } = req.body;

    const books = new Books({
      name,
      author,
      category,
      isbn,
      quantity,
      language,
      country,
      date,
      image,
      price,
      numberOfPage,
      descriptions
    });
    const json = await booksDal.books.create(books);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateQuantity = async (req) => {
  try {
    const { id } = req.query;
    const { quantity } = req.body;
    await booksDal.books.updateById(id, {
      quantity: quantity
    });
    const json = await booksDal.books.findById(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getBooksByCategory = async (req) => {
  try {
    const { category } = req.query;
    console.log(category);
    const json = await booksDal.books.find({ category: category });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
exports.getBookById = async (req) => {
  try {
    const { bookId } = req.query;
    const json = await booksDal.books.findById(bookId);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
