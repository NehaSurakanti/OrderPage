import { Fragment, useState, useEffect } from "react";
import Header from "../components/header/Header";
import MenuPack from "../components/menu-pack/MenuPack.jsx";
import CustomModal from "../components/Modal";
import {
	Box,
	Typography,
	Autocomplete,
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	Button,
	DialogActions,
} from "@mui/material";
import { createCategory } from "../services/Categories/createCategory";
import { getAllCategories } from "../services/Categories/getAllCategories";
import { deleteCategories } from "../services/Categories/deleteCategory";

const VendorHome = () => {
	const [modal, setModal] = useState({
		add: false,
		delete: false,
	});
	const [formData, setFormData] = useState({
		name: "",
		description: "",
	});
	const [deleteId, setDeleteId] = useState("");

	const [categories, setCategories] = useState([]);

	const getAllCategoriesWrapper = async () => {
		const response = await getAllCategories();
		setCategories(
			response?.data?.foodStalls.map((foodStall) => {
				return { id: foodStall.id, name: foodStall.stallName };
			})
		);
	};

	useEffect(() => {
		getAllCategoriesWrapper();
	}, []);

	const onCreateHandler = async () => {
		console.log("formData: ", formData);
		await createCategory(formData);
		getAllCategoriesWrapper();
		setModal((prev) => ({ ...prev, add: false }));
	};

	const onDeleteHandler = async (id) => {
		console.log("delete Id: ", deleteId);
		await deleteCategories(deleteId);
		getAllCategoriesWrapper();
		setModal((prev) => ({ ...prev, delete: false }));
	};

	const onNameChange = (event) => {
		setFormData({ ...formData, name: event.target.value });
	};

	const onDescriptionChange = (event) => {
		setFormData({ ...formData, description: event.target.value });
	};

	const addModalCloseCallback = () => {
		console.log("onclose");
		setModal((prev) => ({ ...prev, add: false }));
		setFormData({ name: "", description: "" });
	};

	const deleteModalCloseCallback = () => {
		setModal((prev) => ({ ...prev, delete: false }));
	};

	return (
		<Fragment>
			<Header
				isCategory
				onAddCallback={() => setModal((prev) => ({ ...prev, add: true }))}
				onDeleteCallback={() => setModal((prev) => ({ ...prev, delete: true }))}
			/>
			<MenuPack title={'categories'} items={categories} />
			<Dialog open={modal.add} onClose={addModalCloseCallback}>
				<DialogTitle>{"Create a Category"}</DialogTitle>
				<DialogContent>
					<TextField
						id='outlined-basic'
						label='Name'
						variant='outlined'
						value={formData.name}
						onChange={onNameChange}
					/>
					<TextField
						id='outlined-basic'
						label='Description'
						variant='outlined'
						value={formData.description}
						onChange={onDescriptionChange}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						disabled={
							formData?.name === "" || formData?.name === undefined
								? true
								: false
						}
						onClick={onCreateHandler}
					>
						Add
					</Button>
					<Button onClick={addModalCloseCallback}>Cancel</Button>
				</DialogActions>
			</Dialog>
			<Dialog open={modal.delete} onClose={deleteModalCloseCallback}>
				<DialogTitle>{"Delete a Category"}</DialogTitle>
				<DialogContent>
					<Autocomplete
						id='combo-box-demo'
						options={categories}
						renderOption={(props, option) => <li {...props}>{option.name}</li>}
						sx={{ width: 300 }}
						onChange={(event, newValue) => {
							console.log(newValue);
							if (newValue !== null) {
								setDeleteId(newValue.id);
							} else {
								setDeleteId(null);
							}
						}}
						getOptionLabel={(option) => {
							return option.name;
						}}
						renderInput={(params) => <TextField {...params} label='Category' />}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						disabled={deleteId === null || deleteId === "" ? true : false}
						onClick={onDeleteHandler}
					>
						Delete
					</Button>
					<Button onClick={deleteModalCloseCallback}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
};
export default VendorHome;
