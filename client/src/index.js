import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import alertTemplate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
	timeout: 5000,
	positions: positions.BOTTOM_CENTER,
	transitions: transitions.SCALE,
};

root.render(
	<Provider store={store}>
		<AlertProvider template={alertTemplate} {...options}>
			<App />
		</AlertProvider>
	</Provider>
);
