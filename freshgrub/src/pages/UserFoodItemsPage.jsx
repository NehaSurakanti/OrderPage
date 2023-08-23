import CustomNavbar from "../../src/components/CustomNavbar";
import { useState, useEffect } from "react";
import { getAllFoodItems } from "../services/Foods/getAllFoodItems";
import MenuPack from "../components/menu-pack/MenuPack";
import { useParams, useLocation, Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import addToCart from "../services/Cart/addToCart";
import CustomSnackBar from "../components/CustomSnackBar";

const UserFoodItemsPage = () => {
	const params = useParams();

	const localStorageData = localStorage.getItem("data");
	const userId = JSON.parse(localStorageData).userId;
	console.log("userId: ", userId);

	const [open, setOpen] = useState(false);
	const [status, setStatus] = useState("");
	const [toastText, setToastText] = useState("");

	const [foodItems, setFoodItems] = useState([]);

	const getAllfoodItemsWrapper = async () => {
		try {
			const response = await getAllFoodItems(params.categoryId);
			console.log("response: ", response?.data?.menuItems);
			if (response !== null) {
				setFoodItems(
					response?.data?.menuItems?.map((foodStall) => {
						return {
							id: foodStall.id,
							name: foodStall.menuItemName,
							price: foodStall.price,
							image: foodStall.menuItemImage,
						};
					})
				);
			}
		} catch (err) {
			console.log("err: ", err);
		}
	};

	useEffect(() => {
		getAllfoodItemsWrapper();
	}, []);

	const cartClickHandler = async (id) => {
		console.log("clicked");
		const response = await addToCart(userId, {
			itemId: id,
			isOrdered: false,
		});
		console.log("response: ", response);
		if (response.status) {
			setStatus("success");
			setToastText("Added To Cart");
			setOpen(true);
		} else {
			setStatus("error");
			setToastText("Failed to add to Cart");
			setOpen(true);
		}
	};

	return (
		<div>
			<CustomNavbar />
			{foodItems !== undefined && foodItems.length > 0 ? (
				
				<div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
					
					{foodItems?.map((foodItem) => {
						return (
							<FoodCard
								key={foodItem.id}
								name={foodItem.name}
								img={foodItem.image}
								price={foodItem.price}
								forCart
								cartClickCallback={() => cartClickHandler(foodItem.id)}
							/>
						);
					})}
				</div>
			) : (
				<div
					style={{
						textAlign: "center",
						width: "100%",
						display: "block",
						gap: "15px",
						marginTop: "30px",
					}}
				>
					<h2>No Food Items</h2>
				</div>
			)}
			<Link to={`/user/cart/${userId}`}><button>Go to Cart</button></Link>
			<CustomSnackBar
				open={open}
				duration={3000}
				severity={status}
				onCloseCallback={() => setOpen(false)}
				text={toastText}
			/>
		</div>
	);
};
export default UserFoodItemsPage;
