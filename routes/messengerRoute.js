const router = require("express").Router();
const getFriends = require("../controller/messengerController");
const authMiddleware = require("../middleware/authMiddleware");

// request comes here second from server.js
// we import getFriends from controller\messengerController.js
router.get("/get-friends", authMiddleware, getFriends);

module.exports = router;
