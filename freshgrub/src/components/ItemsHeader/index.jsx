import React from "react";
import { Box, Typography, Button } from "@mui/material";

const headerStyles = {
	display: "flex",
	justifyContent: "center",
	paddingLeft: "10px",
	paddingRight: "10px",
	paddingTop: "20px",
	paddingBottom: "20px",
	position: "sticky",
	width: "100%",
	gap: "30px",
	borderRadius: "30px",
};

const buttonStyles = {
	fontColor: "white",
	width: "150px",
};

const Header = ({ title, onButtonClick, buttonText }) => {
	return (
		<Box sx={headerStyles}>
			<Box display='flex' justifyContent={"flex-end"} width='50%'>
				<Typography variant='h4' color={"white"}>
					{title}
				</Typography>
			</Box>
			<Box
				display='flex'
				alignItems={"flex-start"}
				justifyContent={"center"}
				width='50%'
			>
				<Button
					sx={buttonStyles}
					variant='contained'
					size='small'
					onClick={onButtonClick}
				>
					{buttonText}
				</Button>
			</Box>
		</Box>
	);
};

export default Header;
