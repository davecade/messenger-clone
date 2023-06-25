const router = require("express").Router();
const { userRegister } = require("../controller/authController");

// request comes here second from server.js
router.post("/user-register", userRegister);

module.exports = router;
