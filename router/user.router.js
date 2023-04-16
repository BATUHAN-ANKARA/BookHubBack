const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const userValidator = require("../validations/index");

router.post("/signUp", controller.userController.signUp);
router.post("/signIn", controller.userController.signIn);
router.get("/getUser/:id", controller.userController.getUser);
router.put("/updateAvatar", [userValidator.userValidator.validateUpdateAvatar()], controller.userController.updateAvatar);
router.put("/createPassword/:id", [userValidator.userValidator.validateCreatePassword()], controller.userController.createPassword);

module.exports = {
  user: router
};
