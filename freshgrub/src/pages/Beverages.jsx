
import FoodCard from "../components/FoodCard";

const Beverages = () => {
	return (
		<div style={{ display: "flex", gap: "15px" }}>
			<FoodCard
				name='Chocolate Smoothie'
				img={"https://i.ibb.co/qx0DpNB/it19.jpg"}
				price={"350"}
			/>

			<FoodCard
				name='Peach Iced Tea'
				img={"https://i.ibb.co/JB2KMCq/it16.jpg"}
				price={"250"}
			/>
			<FoodCard
				name='Frozen Orange Prosecco'
				img={"https://i.ibb.co/6XddBVZ/it15.jpg"}
				price={"370"}
			/>
			<FoodCard
				name='Iced Green Tea'
				img={"https://i.ibb.co/KF4mYMJ/it10.jpg"}
				price={"370"}
			/>
			<FoodCard
				name='Chocolate Coffee'
				img={"https://i.ibb.co/VB2zk8j/it9.jpg"}
				price={"370"}
			/>
			<FoodCard
				name='Vanilla Strawberry Iced Tea'
				img={"https://i.ibb.co/RSZZ4PX/it2.jpg"}
				price={"370"}
			/>
		</div>
	);
};


export default Beverages;

