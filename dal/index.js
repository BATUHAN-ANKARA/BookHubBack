const userDal = require("./user.dal");
const booksDal = require("./books.dal");
const storeDal = require("./store.dal");

module.exports = {
  user: userDal,
  books: booksDal,
  store: storeDal,
};
