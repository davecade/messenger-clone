const mongoose = require("mongoose");

// Here just connected mongodb database to our app
const databaseConnect = () => {
	mongoose
		.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Mongodb Database Connected");
		})
		.catch((error) => {
			console.log(error);
		});
};

module.exports = databaseConnect;
