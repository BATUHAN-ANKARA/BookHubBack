const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const userValidator = require("../validations/index");

router.post("/addBook", controller.booksController.addBook);
router.put("/updateQuentity", controller.booksController.updateQuentity);
router.get("/getBooksByCategory", controller.booksController.getBooksByCategory);
router.get("/getBookById", controller.booksController.getBookById);

module.exports = {
    books: router
  };