import FoodCard from "../components/FoodCard";
import Header from "../components/ItemsHeader";
import CustomModal from "../components/Modal";
import { useState } from "react";
import { TextField, Popover } from "@mui/material";
import Modal from "../components/Modal";

const FoodForm = () => {
	return (
		<>
			<TextField id='outlined-basic' label='Name' variant='outlined' />
			<TextField id='outlined-basic' label='Price' variant='outlined' />
			<TextField id='outlined-basic' label='Url' variant='outlined' />
		</>
	);
};

const Fastfood = () => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{/* <Header
				buttonText={"Add"}
				title={"FASTFOOD"}
				onButtonClick={(event) => {
					console.log("button clicked");
					setOpen(true);
				}}
			/> */}
			<Header isCategory onAddCallback={() => console.log("added")} />
			<div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
				<FoodCard
					name='Chicken Pizza'
					img={"https://i.ibb.co/9gy1Jbr/it17.jpg"}
					price={"350"}
				/>
				<FoodCard
					name='Chicken Fried Rice'
					img={"https://i.ibb.co/wCv1Pq7/it13.jpg"}
					price={"250"}
				/>
				<FoodCard
					name='Chicken Manchuria'
					img={"https://i.ibb.co/2k2mLjS/it7.jpg"}
					price={"250"}
				/>
				<FoodCard
					name='Burger'
					img={"https://i.ibb.co/WvFKpmV/it5.jpg"}
					price={"370"}
				/>
			</div>
			<Modal open={open} modalCloseCallback={handleClose}>
				<FoodForm />
			</Modal>
		</>
	);
};

export default Fastfood;
