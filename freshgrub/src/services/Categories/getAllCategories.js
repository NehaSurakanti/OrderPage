import { myAxios } from "../helper.js";

//change the post api call according to backend
export const getAllCategories = async () => {
	try {
		const response = await myAxios.get("/foodStall/getAllStalls");
		return response;
	} catch (err) {
		throw err;
	}
};
