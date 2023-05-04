const userDal = require("./user.dal");
const booksDal = require("./books.dal");
const storeDal = require("./store.dal");
const likedDal = require("./liked.dal");
const ordersDal = require("./orders.dal");

module.exports = {
  user: userDal,
  books: booksDal,
  store: storeDal,
  liked: likedDal,
  orders: ordersDal
};
