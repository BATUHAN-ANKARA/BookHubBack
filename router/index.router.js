const authRouter = require("./auth.router").auth;
const userRouter = require("./user.router").user;
const ordersRouter = require("./orders.router").orders;
const storeRouter = require("./store.router").store;

module.exports = {
  authRouter,
  userRouter,
  ordersRouter,
  storeRouter
};
