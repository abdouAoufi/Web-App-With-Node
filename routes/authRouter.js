const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();
// ? GET REQUEST
router.get("/login", authController.getLogin);
// ? POST REQUEST
router.post("/login", authController.postLogin);
// ? POST REQUEST
router.post("/logout" , authController.postLogout)
// ? GET REQUEST
router.get('/signup', authController.getSignup);
// ? POST REQUEST
router.post('/signup', authController.postSignup);

module.exports = router;
