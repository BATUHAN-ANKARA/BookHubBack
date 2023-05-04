const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/createOrder", controller.ordersController.createOrder);
router.put("/orderSuccess", controller.ordersController.updateOrderStatusSuccess);
router.put("/orderFail", controller.ordersController.updateOrderStatusFail);
router.get("/getOrderByUserSuccess", controller.ordersController.getOrderByUserSuccess);
router.get("/getOrderByUserFail", controller.ordersController.getOrderByUserFail);
router.get("/getOrderByUserWaiting", controller.ordersController.getOrderByUserWaiting);

module.exports = {
  orders: router
};
