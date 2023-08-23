
import FoodCard from "../components/FoodCard";

const Meals = () => {
	return (
		<div style={{ display: "flex", gap: "15px" }}>
			<FoodCard
				name='Rice with curries'
				img={"https://i.ibb.co/pwSbMGv/it14.jpg"}
				price={"350"}
			/>
			
			<FoodCard
				name='Roti and Panneer'
				img={"https://i.ibb.co/h9crRyg/it11.jpg"}
				price={"250"}
			/>
			<FoodCard
				name='Rice with curries'
				img={"https://i.ibb.co/FbppwDC/it6.jpg"}
				price={"370"}
			/>
            <FoodCard
				name='Rice with dal'
				img={"https://i.ibb.co/GsWpWpB/it4.jpg"}
				price={"370"}
			/>
		</div>
	);
};

export default Meals;
