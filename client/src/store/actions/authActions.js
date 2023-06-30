import axios from "axios";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from "../types/authType";

export const userRegister = (data) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/api/messenger/user-register", data);

			// This is where we set the token to local storage
			localStorage.setItem("authToken", response.data.token);

			// here we dispatch the action
			dispatch({
				type: REGISTER_SUCCESS,
				payload: {
					successMessage: response.data.successMessage,
					token: response.data.token,
				},
			});
		} catch (error) {
			dispatch({
				type: REGISTER_FAIL,
				payload: {
					errorMessage: error.response.data.error.errorMessage,
				},
			});
		}
	};
};

export const userLogin = (data) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/api/messenger/user-login", data);

			// This is where we set the token to local storage
			localStorage.setItem("authToken", response.data.token);

			// here we dispatch the action
			dispatch({
				type: LOGIN_SUCCESS,
				payload: {
					successMessage: response.data.successMessage,
					token: response.data.token,
				},
			});
		} catch (error) {
			dispatch({
				type: LOGIN_FAIL,
				payload: {
					errorMessage: error.response.data.error.errorMessage,
				},
			});
		}
	};
};
