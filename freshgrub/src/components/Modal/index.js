import {
	Box,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	Button,
	DialogActions,
} from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "#0a071a;",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const CustomModal = (
	openModal,
	title,
	children,
	modalCloseCallback,
	actionBtns
) => {
	return (
		<Dialog open={openModal} onClose={modalCloseCallback}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<TextField id='outlined-basic' label='name' variant='outlined' />
			</DialogContent>
			<DialogActions>{actionBtns}</DialogActions>
		</Dialog>
	);
};

export default CustomModal;
