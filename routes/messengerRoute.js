const router = require("express").Router();
const getFriends = require("../controller/messengerController");

// request comes here second from server.js
// we import getFriends from controller\messengerController.js
router.get("/get-friends", getFriends);

module.exports = router;
