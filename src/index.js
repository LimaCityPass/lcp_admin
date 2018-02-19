import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import authStore from "./stores/auth_store";
import Routes from "./routes";

import "./index.less";
import registerServiceWorker from "./registerServiceWorker";

// babel export default...
let DevTools = require("./lib/devTools");
DevTools = DevTools.default;

render(
	<Provider store={authStore}>
		<div>
			<DevTools />
			<Routes />
		</div>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
