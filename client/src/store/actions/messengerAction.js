import axios from "axios";

export const getFriends = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get("/api/messenger/get-friends");
			console.log("response >> ", response);
		} catch (error) {
			console.log(error.response.data);
		}
	};
};
