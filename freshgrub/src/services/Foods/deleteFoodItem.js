import { myAxios } from "../helper.js";

export const deleteFoodItems = async (categoryName, id) => {
	try {
		const response = await myAxios.delete(`/menu/${categoryName}/delete/${id}`);
		return response;
	} catch (err) {
		throw err;
	}
};
