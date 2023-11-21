const express = require("express");
const authController = require("../controllers/authController")
const router = express.Router();


router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/loginclinic", authController.loginClinic);
router.post("/authen", authController.authenticate);
router.post("/EditInfo",authController.EditInfo);

module.exports = router;