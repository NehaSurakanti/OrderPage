import CustomNavbar from "../../src/components/CustomNavbar";
import { useState, useEffect } from "react";
import { getAllCategories } from "../services/Categories/getAllCategories";
import MenuPack from "../components/menu-pack/MenuPack";

const UserHome = () => {
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

	return (
		<div>
			<CustomNavbar />
			<MenuPack title='categories' items={categories} />
		</div>
	);
};
export default UserHome;
