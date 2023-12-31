const formidable = require("formidable");
const validator = require("validator");
const registerModel = require("../models/authModel");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//request comes here 3rd from authRoute.js
module.exports.userRegister = (req, res) => {
	const form = formidable();

	form.parse(req, async (err, fields, files) => {
		const { userName, email, password, confirmPassword } = fields;

		const { image } = files;
		const error = [];

		if (!userName) {
			error.push("Please provide a username");
		}
		if (!email) {
			error.push("Please provide a Email");
		}
		if (email && !validator.isEmail(email)) {
			error.push("Please provide a Valid Email");
		}
		if (!password) {
			error.push("Please provide a password");
		}
		if (!confirmPassword) {
			error.push("Please provide a confirm password");
		}
		if (password && confirmPassword && password !== confirmPassword) {
			error.push("Your Password and Confirm Password does not match");
		}
		if (password && password.length < 6) {
			error.push("Please provide password with 6 characters");
		}
		if (Object.keys(files).length === 0) {
			error.push("Please provide user image");
		}
		if (error.length > 0) {
			res.status(400).json({
				error: {
					errorMessage: error,
				},
			});
		} else {
			const getImageName = image.originalFilename;
			const randNumber = Math.floor(Math.random() * 99999);
			const newImageName = `${randNumber}${getImageName}`;
			files.image.originalFilename = newImageName;

			const newPath =
				__dirname +
				`/../client/public/image/${files.image.originalFilename}`;

			try {
				const checkUser = await registerModel.findOne({
					email: email,
				});
				if (checkUser) {
					res.status(404).json({
						error: {
							errorMessage: ["Your email already exists"],
						},
					});
				} else {
					// Copies your image into image folder
					fs.copyFile(
						files.image.filepath,
						newPath,
						async (error) => {
							if (!error) {
								const userCreate = await registerModel.create({
									userName,
									email,
									password: await bcrypt.hash(password, 10),
									image: files.image.originalFilename,
								});

								// Here it creates the JWT
								const token = jwt.sign(
									{
										id: userCreate._id,
										email: userCreate.email,
										userName: userCreate.userName,
										image: userCreate.image,
										registerTime: userCreate.createdAt,
									},
									process.env.SECRET,
									{
										expiresIn: process.env.TOKEN_EXP,
									}
								);

								const options = {
									expires: new Date(
										Date.now() +
											process.env.COOKIE_EXP *
												24 *
												60 *
												60 *
												1000
									),
								};

								// Adds JWT to response
								// Also sends it back as a cookie
								// So in the browser, it will auto save as cookie
								// so that frontend has access to it
								res.status(201)
									.cookie("authToken", token, options)
									.json({
										successMessage:
											"Your Registration was successful",
										token,
									});
							} else {
								res.status(500).json({
									error: {
										errorMessage: ["Internal Server Error"],
									},
								});
							}
						}
					);
				}
			} catch (error) {
				res.status(500).json({
					error: {
						errorMessage: ["Internal Server Error"],
					},
				});
			}
		}
	}); // end Formidable
};

module.exports.userLogin = async (req, res) => {
	const error = [];
	const { email, password } = req.body;

	if (!email) {
		error.push("Please provide a Email");
	}
	if (!password) {
		error.push("Please provide a password");
	}
	if (email && !validator.isEmail(email)) {
		error.push("Please provide a Valid Email");
	}

	if (error.length > 0) {
		res.status(400).json({
			error: {
				errorMessage: error,
			},
		});
	} else {
		try {
			const checkUser = await registerModel
				.findOne({
					email: email,
				})
				.select("+password");

			if (!checkUser) {
				res.status(404).json({
					error: {
						errorMessage: ["Your email does not exists"],
					},
				});
			}

			const checkPassword = await bcrypt.compare(
				password,
				checkUser.password
			);

			if (!checkPassword) {
				res.status(404).json({
					error: {
						errorMessage: ["Your password does not match"],
					},
				});
			}

			// Here it creates the JWT
			const token = jwt.sign(
				{
					id: checkUser._id,
					email: checkUser.email,
					userName: checkUser.userName,
					image: checkUser.image,
					registerTime: checkUser.createdAt,
				},
				process.env.SECRET,
				{
					expiresIn: process.env.TOKEN_EXP,
				}
			);

			const options = {
				expires: new Date(
					Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000
				),
			};

			// Adds JWT to response
			// Also sends it back as a cookie
			// So in the browser, it will auto save as cookie
			// so that frontend has access to it
			res.status(201).cookie("authToken", token, options).json({
				successMessage: "Login Successful",
				token,
			});
		} catch (error) {
			res.status(500).json({
				error: {
					errorMessage: ["Internal Server Error"],
				},
			});
		}
	}
};
