import axios from "axios";
import { GET_FRIENDS_SUCCESS } from "../types/messengerType";

export const getFriends = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get("/api/messenger/get-friends");
			dispatch({
				type: GET_FRIENDS_SUCCESS,
				payload: {
					friends: response.data.friends,
				},
			});
		} catch (error) {
			console.log(error.response.data);
		}
	};
};
