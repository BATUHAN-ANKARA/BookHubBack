const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/likeBook", controller.likedController.likeBook);
router.get("/getLikedBook/:id", controller.likedController.getLikedById);
router.post("/addToCart", controller.cartController.addToCart);
router.get("/getCart", controller.cartController.getCart);
router.post("/removeFromCart", controller.cartController.removeFromCart);
router.put("/updateCartItemQuantity", controller.cartController.updateCartItemQuantity);

module.exports = {
  store: router
};
