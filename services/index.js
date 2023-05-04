const userService = require("./user.service");
const ordersService = require("./orders.service");
const fileService = require("./file.service");
const likedService = require("./liked.service");

module.exports = {
  user: userService,
  orders: ordersService,
  file: fileService,
  liked: likedService
};
