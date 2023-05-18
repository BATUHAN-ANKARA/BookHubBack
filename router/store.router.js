const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/likeBook", controller.likedController.likeBook);
router.get("/getLikedBook/:id", controller.likedController.getLikedById);

module.exports = {
  store: router
};
