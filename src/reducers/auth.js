import { List, Map } from "immutable";
import * as ActionTypes from "../actions/actionTypes";

const initialState = Map({
	loggedIn: false,
	userData: null,
	token: null
});

export function auth(state = initialState, action = null) {
	const { type, payload } = action;
	switch (type) {
		case ActionTypes.LOGIN:
			return state
				.set("loggedIn", true)
				.set("token", payload.token)
				.set("userData", payload.user);
		case ActionTypes.LOGOUT:
			return state.set("loggedIn", false).set("token", "");
		default:
			return state;
	}
}
