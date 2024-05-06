import {
	ADDPRODUCT,
	DECREASEPRODUCTQUANTITY,
	INCREASEPRODUCTQUANTITY,
} from "./actionTypes";

export const add_product = (data) => {
	return { type: ADDPRODUCT, payload: data };
};
export const increase_product_qty = (product_id, value) => {
	return { type: INCREASEPRODUCTQUANTITY, payload: { product_id, value } };
};

export const decrease_product_qty = (product_id) => {
	return { type: DECREASEPRODUCTQUANTITY, payload: product_id };
};
