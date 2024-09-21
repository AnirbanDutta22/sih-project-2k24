const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  verifyEmailOTP,
} = require("../controllers/user/userauth.controller");
const authHandler = require("../middlewares/authHandler.js");

router.route("/user-register").post(registerUser);
router.route("/user/email-verify").post(verifyEmailOTP);
router.route("/user-login").post(loginUser);
router
  .route("/user-logout")
  .post(authHandler({ userType: "user" }), logoutUser);

module.exports = router;
