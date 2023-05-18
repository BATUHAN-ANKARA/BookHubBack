const orderDal = require("../dal/index");
const Orders = require("../models/orders.model");

exports.createOrder = async (req) => {
  try {
    const { bookId, user } = req.body;
    foundUser = await orderDal.user.findById(user);
    foundBook = await orderDal.books.findById(bookId);
    const order = new Orders({
      userId: user,
      userFullName: foundUser.fullName,
      bookId: bookId,
      bookName: foundBook.name,
      cost: foundBook.price
    });
    const json = await orderDal.orders.create(order);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateOrderStatusSuccess = async (req, res) => {
  try {
    const { id } = req.query;
    await orderDal.orders.updateById(id, {
      status: 1
    });
    const json = await orderDal.orders.findById(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateOrderStatusFail = async (req, res) => {
  try {
    const { id } = req.query;
    await orderDal.orders.updateById(id, {
      status: -1
    });
    const json = await orderDal.orders.findById(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getOrderByUserSuccess = async (req, res) => {
  try {
    const { id } = req.query;
    const json = await orderDal.orders.find({ userId: id, status: 1 });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getOrderByUserFail = async (req, res) => {
  try {
    const { id } = req.query;
    const json = await orderDal.orders.find({ userId: id, status: -1 });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getOrderByUserWaiting = async (req, res) => {
  try {
    const { id } = req.query;
    const json = await orderDal.orders.find({ userId: id, status: 0 });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
