import React from "react";

import { Layout, Menu, Icon, Button } from "antd";
import LimaLogo from "../components/LimaLogo";
import { Link } from "react-router-dom";
import lcpLogo from "../assets/logowhite.png";
import styled from "styled-components";

import _ from "lodash";

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
	font-family: "Quicksand", sans-serif;
`;

const Dashboard = class extends React.Component {
	state = {
		collapsed: false,
		selected: []
	};

	constructor(props) {
		super(props);
		this.getSelected = this.getSelected.bind(this);
	}

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};

	onSelect = data => {
		this.getSelected();
	};

	getSelected() {
		const pathChunks = this.props.location.pathname.split("/");
		const last = pathChunks[pathChunks.length - 1];
		console.log(pathChunks);

		if (last === "admin") {
			this.setState(prevState => {
				return { ...prevState, selected: ["overview"] };
			});
		} else {
			this.setState(prevState => {
				return { ...prevState, selected: [last] };
			});
		}
	}

	componentDidMount() {
		this.getSelected();
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
						selectedKeys={this.state.selected}
						onSelect={this.onSelect}
						style={{
							fontFamily: "Quicksand"
						}}
					>
						<Menu.Item key="overview">
							{/* <Link to={"/admin/users"} /> */}
							<Icon type="dashboard" />
							<span>Overview</span>
						</Menu.Item>

						<Menu.Item key="users">
							{/* <Link to={"/admin/users"} /> */}
							<Icon type="user" />
							<span>Users</span>
						</Menu.Item>

						<Menu.Item key="attractions">
							{/* <Link to={"/admin/attractions"} /> */}
							<Icon type="environment" />
							<span>Attractions</span>
						</Menu.Item>

						<Menu.Item key="routes">
							{/* <Link to={"/admin/routes"} /> */}
							<Icon type="share-alt" />
							<span>Routes</span>
						</Menu.Item>

						<Menu.Item key="tickets">
							{/* <Link to={"/admin/tickets"} /> */}
							<Icon type="qrcode" />
							<span>Tickets</span>
						</Menu.Item>

						<Menu.Item key="partners">
							{/* <Link to={"/admin/tickets"} /> */}
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
							{/* <Switch>
								{console.log(this.props.match)}
								<Route
									exact
									path="/admin/users"
									component={AdminUsersPage}
								/>
								<Route
									exact
									path="/admin/attractions"
									component={AdminAttractionsPage}
								/>
								<Route
									exact
									path="/admin/tickets"
									component={AdminTicketsPage}
								/>
							</Switch> */}
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
