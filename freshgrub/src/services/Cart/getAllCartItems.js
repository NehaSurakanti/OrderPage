import { myAxios } from "../helper.js";


const getAllItemsInCart = async (userId) => {
    try {
		const response = await myAxios.get(`/cart/${userId}`);
        console.log(userId +"from service");
		return response;
	} catch (err) {
		throw err;
	}
};

export default getAllItemsInCart;
