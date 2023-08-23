import CustomNavbar from "./CustomNavbar";

const Base = ({ inFastFood, onAddCallback }) => {
	console.log("in fast food", inFastFood);
	return (
		<div className='container-fluid p-0 m-0'>
			<CustomNavbar
				buttonText={inFastFood ? "Add" : ""}

				onAddCallback={onAddCallback}
			/>
		</div>
	);
};

export default Base;
