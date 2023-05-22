const Books = require("../models/books.model");

const BooksDataAccess = {
  async create(booksModel) {
    return await booksModel.save();
  },
  async updateById(id, body) {
    return await Books.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Books.findOne(where);
  },
  async find(where) {
    return await Books.find(where);
  },
  async findById(id) {
    return await Books.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Books.findOne(where).populate(populate);
  }
};

module.exports = BooksDataAccess;
