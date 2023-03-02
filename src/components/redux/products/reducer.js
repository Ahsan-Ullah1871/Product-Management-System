import {
	ADDPRODUCT,
	DECREASEPRODUCTQUANTITY,
	INCREASEPRODUCTQUANTITY,
} from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDPRODUCT:
			return [...state, action.payload.data];
		case INCREASEPRODUCTQUANTITY:
			const { product_id, value } = action.payload;
			return state.map((product) => {
				if (product.id == product_id) {
					return {
						...product,
						qty: value
							? product.qty + value
							: product.qty + 1,
					};
				} else {
					return product;
				}
			});
		case DECREASEPRODUCTQUANTITY:
			return state.map((product) => {
				if (product.id == action.payload) {
					return {
						...product,
						qty:
							Number(product.qty) > 0
								? Number(product.qty) -
								  1
								: 0,
					};
				} else {
					return product;
				}
			});

		default:
			return state;
	}
};

export default reducer;
