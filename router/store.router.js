const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/likePost", controller.likedController.likeBook);
router.get("/getLikedPost/:id", controller.likedController.getLikedById);

module.exports = {
  store: router
};
