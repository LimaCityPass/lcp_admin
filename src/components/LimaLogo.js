import React from "react";
import lcpLogo from "../assets/logowhite.png";
import { Row, Col } from "antd";
import styled from "styled-components";

const TextContainer = styled.div`
	font-family: "Poppins", sans-serif;
	font-size: 1.2em;
	color: #fff;
`;

class LimaLogo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let imgStyle = {};
		if (this.props.type && this.props.type === "default") {
			imgStyle = { height: "auto", width: "50px" };
		}

		return (
			<Row type="flex" align="middle">
				<Col span={8}>
					<img src={lcpLogo} style={imgStyle} />
				</Col>
				<Col span={16}>
					<TextContainer>{this.props.children}</TextContainer>
				</Col>
			</Row>
		);
	}
}

export default LimaLogo;
