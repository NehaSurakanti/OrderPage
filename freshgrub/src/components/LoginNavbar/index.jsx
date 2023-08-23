import React from "react";
import { NavLink as ReactLink } from "react-router-dom";
import logo from "../pages/logo5.jpg";

import {
	Button,
	NavItem,
	NavLink,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	UncontrolledDropdown,
} from "reactstrap";

const LoginNavbar = ({ login, logout, onSignUpCallback, onLogoutCallback }) => {
	return (
		<div>
			<Navbar color='dark' drak expand='md' fixed=''>
				<NavbarBrand tag={ReactLink} style={{ color: "white" }}>
					<img src={logo} width='40' height='40' alt='' />
					FreshGrub
				</NavbarBrand>
				<NavbarToggler onClick={function noRefCheck() {}} />
				{/* {!isFoodItem
					? buttonText &&
					  secondButtonText &&
					  onAddCallback &&
					  onDeleteCallback && (
							<NavItem>
								<Button
									color='primary'
									onClick={onAddCallback}
									style={{ marginRight: "20px" }}
								>
									{buttonText}
								</Button>
								<Button color='primary' onClick={onDeleteCallback}>
									{secondButtonText}
								</Button>
							</NavItem>
					  )
					: buttonText &&
					  onAddCallback && (
							<NavItem>
								<Button color='primary' onClick={onAddCallback}>
									{buttonText}
								</Button>
							</NavItem>
					  )} */}
				<NavItem>
					<Button color='primary' onClick={onSignUpCallback}>
						{"SignUp"}
					</Button>
				</NavItem>
				<NavItem>
					<Button color='primary' onClick={onLogoutCallback}>
						{"Logout"}
					</Button>
				</NavItem>
			</Navbar>
		</div>
	);
};

export default LoginNavbar;
