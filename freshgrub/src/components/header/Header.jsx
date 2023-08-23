import React, { useRef } from "react";
import CustomNavbar from "../CustomNavbar.jsx";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({
	isFoodItem,
	isCategory,
	onAddCallback,
	onDeleteCallback,
}) => {
	const navigate = useNavigate();
	const location = useLocation();

	const routeChangeToLogin = () => {
		navigate("/login");
	};
	const routeChangeToSignup = () => {
		navigate("/signup");
	};

	return (
		<div className='container-fluid p-0 m-0'>
			<CustomNavbar
				isFoodItem={isFoodItem}
				buttonText={isCategory ? "Add" : ""}
				secondButtonText={isCategory ? "Delete" : ""}
				onAddCallback={onAddCallback}
				onDeleteCallback={onDeleteCallback}
			/>
		</div>
	);
};

export default Header;
