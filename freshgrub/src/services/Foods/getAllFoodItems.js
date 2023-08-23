import { myAxios } from "../helper.js";

export const getAllFoodItems = async (categoryId) => {
	try {
		const response = await myAxios.get(`/menu/${categoryId}`);
		return response;
	} catch (err) {
		throw err;
	}
};
