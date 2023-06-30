import {
	ERROR_CLEAR,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	SUCCESS_MESSAGE_CLEAR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
} from "../types/authType";
import jwt_decode from "jwt-decode";

const authState = {
	loading: true,
	authenticated: false,
	error: "",
	successMessage: "",
	myInfo: "",
};

const tokenDecoded = (token) => {
	if (token) {
		const decoded = jwt_decode(token);
		const expTime = new Date(decoded.exp * 1000);
		if (new Date() > expTime) {
			localStorage.removeItem("authToken");
			return null;
		}
		return decoded;
	}
	return null;
};

// This is where refresh the state if there is a token existing
const getToken = localStorage.getItem("authToken");
if (getToken) {
	const getInfo = tokenDecoded(getToken);
	if (getInfo) {
		authState.myInfo = getInfo;
		authState.authenticated = true;
		authState.myInfo = getInfo;
	}
}

export const authReducer = (state = authState, action) => {
	const { type, payload } = action;

	switch (type) {
		case REGISTER_FAIL:
			return {
				...state,
				error: payload.errorMessage,
				successMessage: "",
				authenticated: false,
				myInfo: "",
				loading: true,
			};

		case LOGIN_FAIL:
			return {
				...state,
				error: payload.errorMessage,
				successMessage: "",
				authenticated: false,
				myInfo: "",
				loading: true,
			};

		case REGISTER_SUCCESS:
			return {
				...state,
				myInfo: tokenDecoded(payload.token),
				successMessage: payload.successMessage,
				error: "",
				authenticated: true,
				loading: false,
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				myInfo: tokenDecoded(payload.token),
				successMessage: payload.successMessage,
				error: "",
				authenticated: true,
				loading: false,
			};

		case SUCCESS_MESSAGE_CLEAR:
			return {
				...state,
				successMessage: "",
			};

		case ERROR_CLEAR:
			return {
				...state,
				error: "",
			};

		default:
			break;
	}

	return state;
};
