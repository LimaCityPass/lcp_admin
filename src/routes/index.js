import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { syncHistoryWithStore } from "react-router-redux";

import Dashboard from "../pages/Dashboard";

export default class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path="/admin" component={Dashboard} />
				</div>
			</BrowserRouter>
		);
	}
}
