import { Snackbar, Alert } from "@mui/material";

const CustomSnackBar = ({
	open,
	text,
	duration,
	onCloseCallback,
	severity,
}) => {
	return (
		<Snackbar open={open} autoHideDuration={duration} onClose={onCloseCallback}>
			<Alert
				onClose={onCloseCallback}
				severity={severity}
				sx={{ width: "100%" }}
			>
				{text}
			</Alert>
		</Snackbar>
	);
};

export default CustomSnackBar;
