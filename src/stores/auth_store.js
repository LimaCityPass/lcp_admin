import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";
import DevTools from "../lib/devTools";

const enhancer = compose(applyMiddleware(thunk), DevTools.instrument());

function configureStore(initialState) {
	const store = createStore(rootReducer, initialState, enhancer);

	if (module.hot) {
		module.hot.accept("../reducers", () =>
			store.replaceReducer(require("../reducers"))
		);
	}

	return store;
}

export default configureStore();
