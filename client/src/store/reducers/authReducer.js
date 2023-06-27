import { REGISTER_FAIL, REGISTER_SUCCESS } from "../types/authType";
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

export const authReducer = (state = authState, action) => {
	const { type, payload } = action;

	switch (type) {
		case REGISTER_FAIL:
			return {
				...state,
				loading: false,
				error: payload.error,
				authenticated: false,
				myInfo: "",
				loading: true,
			};

		case REGISTER_SUCCESS:
			const myInfo = tokenDecoded(payload.token);

			return {
				...state,
				myInfo: myInfo,
				successMessage: payload.successMessage,
				error: "",
				authenticated: true,
				loading: false,
			};

		default:
			break;
	}

	return state;
};
