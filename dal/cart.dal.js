const Cart = require("../models/cart.model");

const CartDataAccess = {
  async create(cartModel) {
    return await cartModel.save();
  },
  async updateById(id, body) {
    return await Cart.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Cart.findOne(where);
  },
  async find(where) {
    return await Cart.find(where);
  },
  async findById(id) {
    return await Cart.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Cart.findOne(where).populate(populate);
  }
};

module.exports = CartDataAccess;
