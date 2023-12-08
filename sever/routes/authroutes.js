const express = require("express");
const authController = require("../controllers/authController")
const router = express.Router();


router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/profileClient", authController.profileClient);
router.post("/loginclinic", authController.loginClinic);
router.post("/authen", authController.authenticate);
router.post("/EditInfo",authController.EditInfo);
router.put("/SaveInfo",authController.SaveInfo);

module.exports = router;