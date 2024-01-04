const User = require("../models/authModel");

const getFriends = async (req, res) => {
	const myId = req.myId;
	try {
		const friendGet = await User.find({});

		const filteredUser = friendGet.filter(
			(friend) => String(friend._id) !== String(myId)
		);
		res.status(200).json({ successMessage: true, friends: filteredUser });
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
