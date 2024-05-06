import { ADDTOCART, REMOVEFROMCARTLIST, UPDATECARTQTY } from "./actionTypes";

export const add_to_cart = (product_details) => {
	return { type: ADDTOCART, payload: product_details };
};

export const update_cart_qty = (cart_id, type) => {
	return { type: UPDATECARTQTY, payload: { cart_id, type } };
};

export const remove_from_cart_list = (cart_id) => {
	return { type: REMOVEFROMCARTLIST, payload: cart_id };
};
