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

	const getNewState = (state, newState) => ({ ...state, ...newState });

	switch (type) {
		case REGISTER_FAIL:
		case LOGIN_FAIL:
			return getNewState(state, {
				error: payload.errorMessage,
				successMessage: "",
				authenticated: false,
				myInfo: "",
				loading: true,
			});

		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			return getNewState(state, {
				myInfo: tokenDecoded(payload.token),
				successMessage: payload.successMessage,
				error: "",
				authenticated: true,
				loading: false,
			});

		case SUCCESS_MESSAGE_CLEAR:
			return getNewState(state, { successMessage: "" });

		case ERROR_CLEAR:
			return getNewState(state, { error: "" });

		default:
			return state;
	}
};
