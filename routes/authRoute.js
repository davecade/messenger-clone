const router = require("express").Router();
const { userRegister, userLogin } = require("../controller/authController");

// request comes here second from server.js
router.post("/user-register", userRegister);

router.post("/user-login", userLogin);

module.exports = router;
