const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/likeBook", controller.likedController.likeBook);
router.get("/getLikedBook/:id", controller.likedController.getLikedById);
router.get("/isLiked", controller.likedController.isLiked);
router.post("/addToCart", controller.cartController.addToCart);
router.get("/getCart", controller.cartController.getCart);
router.post("/removeFromCart", controller.cartController.removeFromCart);
router.put("/updateCartItemQuantity", controller.cartController.updateCartItemQuantity);
router.post("/clearCart", controller.cartController.clearCart);

module.exports = {
  store: router
};
