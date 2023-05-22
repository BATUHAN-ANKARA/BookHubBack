const authRouter = require("./auth.router").auth;
const userRouter = require("./user.router").user;
const ordersRouter = require("./orders.router").orders;
const storeRouter = require("./store.router").store;
const booksRouter = require("./books.router").books;

module.exports = {
  authRouter,
  userRouter,
  ordersRouter,
  storeRouter,
  booksRouter
};
