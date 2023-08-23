import { myAxios } from "../helper.js";

//change the post api call according to backend
export const createCategory = async (categoryData) => {
	try {
		const response = await myAxios.post("/foodStall/create", {
			name: categoryData.name,
			description: categoryData.description,
		});
		return response;
	} catch (err) {
		throw err;
	}
};
