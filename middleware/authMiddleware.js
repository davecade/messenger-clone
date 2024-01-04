const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
	const { authToken } = req.cookies;

	if (authToken) {
		const decodedToken = await jwt.verify(authToken, process.env.SECRET);
		req.myId = decodedToken.id;
		next();
	} else {
		res.status(400).json({
			error: {
				errorMessage: ["Please login first"],
			},
		});
	}
};

module.exports = authMiddleware;
