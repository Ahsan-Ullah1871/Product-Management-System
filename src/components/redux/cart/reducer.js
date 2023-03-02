import { ADDTOCART, REMOVEFROMCARTLIST, UPDATECARTQTY } from "./actionTypes";

const initialState = [];

const nextId = (cartList) => {
	const maxID = cartList.reduce(
		(maxID, cart) => Math.max(maxID, cart.id),
		-1
	);

	return maxID + 1;
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDTOCART:
			const product_details = action.payload;
			return [
				...state,
				{
					id: nextId(state),
					qty: 1,
					product_id: product_details.id,
					product_title: product_details.title,
					product_category: product_details.category,
					product_price: product_details.price,
					product_image: product_details.image_url,
					product_qty: product_details.qty - 1,
					total_price:
						Number(product_details.price) * 1,
				},
			];

		case REMOVEFROMCARTLIST:
			return state.filter((cart) => cart.id !== action.payload);
		case UPDATECARTQTY:
			const { cart_id, type } = action.payload;
			switch (type) {
				case "increase":
					return state.map((cart) => {
						if (cart.id == cart_id) {
							return {
								...cart,
								qty:
									Number(
										cart.qty
									) + 1,
								product_qty:
									Number(
										cart.product_qty
									) - 1,
								total_price:
									Number(
										cart.product_price
									) *
									Number(
										cart.qty +
											1
									),
							};
						} else {
							return cart;
						}
					});
				case "decrease":
					return state.map((cart) => {
						if (cart.id == cart_id) {
							return {
								...cart,
								qty:
									Number(
										cart.qty
									) - 1,
								product_qty:
									Number(
										cart.product_qty
									) + 1,
								total_price:
									Number(
										cart.product_price
									) *
									Number(
										cart.qty -
											1
									),
							};
						} else {
							return cart;
						}
					});

				default:
					return state;
			}

		default:
			return state;
	}
};

export default reducer;
