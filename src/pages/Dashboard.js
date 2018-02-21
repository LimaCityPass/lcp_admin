import React from "react";
import PropTypes from "prop-types";

import { Switch, Route, Link } from "react-router-dom";

import { Layout, Menu, Icon } from "antd";
import lcpLogo from "../assets/logowhite.png";
import styled from "styled-components";

import _ from "lodash";

import OverviewPage from "./Overview";
import UsersPage from "./Users";
import AttractionsPage from "./Attractions";
import RoutesPage from "./Routes";
import TicketsPage from "./Tickets";
import PartnersPage from "./Partners";

const { Header, Content, Footer, Sider } = Layout;

const WrapLogo = styled.div`
	margin-top: 20px;
	margin-bottom: 30px;
	text-align: center;
	padding: 10px;
`;

const FooterText = styled.div`
	margin-bottom: 20px;
	font-weight: 300;
	text-align: center;
	vertical-align: text-bottom;
`;

const HeaderText = styled.div`
	margin-left: 20px;
	font-size: 18px;
	font-family: "Quicksand", sans-serif;
`;

const Dashboard = class extends React.Component {
	static contextTypes = {
		router: PropTypes.object
	};

	state = {
		collapsed: false,
		lastSelected: [],
		selected: []
	};

	constructor(props, context) {
		super(props, context);
		this.getSelected = this.getSelected.bind(this);
	}

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};

	onSelect = data => {
		this.getSelected(data);
	};

	getSelected({ item, key, selectedKeys }) {
		this.context.router.push(`admin/${key}`);

		const pathChunks = this.props.location.pathname.split("/");
		const lastChunck = pathChunks[pathChunks.length - 1];
		console.log(pathChunks);

		if (lastChunck === "admin") {
			this.setState(prevState => {
				return { ...prevState, selected: ["overview"] };
			});
		} else {
			this.setState(prevState => {
				return { ...prevState, selected: [lastChunck] };
			});
		}
	}

	render() {
		return (
			<Layout style={{ minHeight: "100vh" }}>
				<Sider
					collapsible
					breakpoint="lg"
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
					fixed
				>
					<WrapLogo>
						<img
							src={lcpLogo}
							style={{
								width: "auto",
								height: this.state.collapsed ? "40px" : "120px"
							}}
						/>
					</WrapLogo>

					<Menu
						theme="dark"
						defaultSelectedKeys={["overview"]}
						mode="inline"
						// selectedKeys={this.state.selected}
						onSelect={this.onSelect}
						style={{
							fontFamily: "Quicksand"
						}}
					>
						<Menu.Item key="overview">
							<Link to={"/admin"} />
							<Icon type="dashboard" />
							<span>Overview</span>
						</Menu.Item>

						<Menu.Item key="users">
							<Link to={"/admin/users"} />
							<Icon type="user" />
							<span>Users</span>
						</Menu.Item>

						<Menu.Item key="attractions">
							<Link to={"/admin/attractions"} />
							<Icon type="environment" />
							<span>Attractions</span>
						</Menu.Item>

						<Menu.Item key="routes">
							<Link to={"/admin/routes"} />
							<Icon type="share-alt" />
							<span>Routes</span>
						</Menu.Item>

						<Menu.Item key="tickets">
							<Link to={"/admin/tickets"} />
							<Icon type="qrcode" />
							<span>Tickets</span>
						</Menu.Item>

						<Menu.Item key="partners">
							<Link to={"/admin/partners"} />
							<Icon type="skin" />
							<span>Partners</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: "#fff", padding: 0 }} fixed>
						<HeaderText>
							{_.capitalize(this.state.selected)}
						</HeaderText>
					</Header>

					<Content style={{ margin: "0 16px" }}>
						<div style={{ padding: 24, minHeight: 360 }}>
							<Switch>
								<Route
									exact
									path="/admin"
									component={OverviewPage}
								/>
								<Route
									exact
									path="/admin/users"
									component={UsersPage}
								/>
								<Route
									exact
									path="/admin/attractions"
									component={AttractionsPage}
								/>
								<Route
									exact
									path="/admin/routes"
									component={RoutesPage}
								/>
								<Route
									exact
									path="/admin/tickets"
									component={TicketsPage}
								/>
								<Route
									exact
									path="/admin/partners"
									component={PartnersPage}
								/>
							</Switch>
						</div>
					</Content>
					<Footer style={{ height: 48 }}>
						<FooterText>
							Lima City Pass ©{new Date().getFullYear()}
							{/* Created with <Icon type="heart" /> by BMR */}
						</FooterText>
					</Footer>
				</Layout>
			</Layout>
		);
	}
};

export default Dashboard;
