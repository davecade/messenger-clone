const User = require("../models/authModel");

const getFriends = async (req, res) => {
	try {
		const friendGet = await User.find({});
		res.status(200).json({ successMessage: true, friends: friendGet });
		// const response = await axios.get("/api/messenger/get-friends");
		// console.log("response >> ", response);
	} catch (error) {
		console.log(error.response.data);
		res.status(500).json({
			error: {
				errorMessage: "Internal Server error",
			},
		});
	}
};

module.exports = getFriends;
