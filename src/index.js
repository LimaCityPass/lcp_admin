import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { ApolloProvider } from "react-apollo";

import authStore from "./stores/auth_store";
import Routes from "./routes";

import client from "./apollo/client";
import registerServiceWorker from "./registerServiceWorker";

import "./index.less";

// babel export default...
let DevTools = require("./lib/devTools");
DevTools = DevTools.default;

render(
	<ApolloProvider client={client}>
		<Provider store={authStore}>
			<div>
				<DevTools />
				<Routes />
			</div>
		</Provider>
	</ApolloProvider>,
	document.getElementById("root")
);
registerServiceWorker();
