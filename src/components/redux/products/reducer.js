import {
	ADDPRODUCT,
	DECREASEPRODUCTQUANTITY,
	INCREASEPRODUCTQUANTITY,
} from "./actionTypes";

const initialState = [
	{
		id: 1,
		title: "Apple",
		category: "Fruits",
		image_url: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGV8ZW58MHx8MHx8fDA%3D",
		price: "1.99",
		qty: "100",
	},
	{
		id: 2,
		title: "Banana",
		category: "Fruits",
		image_url: "https://images.unsplash.com/photo-1605666807892-8c11d020bede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJhbmFuYXxlbnwwfHwwfHx8MA%3D%3D",
		price: "0.99",
		qty: "150",
	},
	{
		id: 3,
		title: "Orange",
		category: "Fruits",
		image_url: "https://images.unsplash.com/photo-1609424572698-04d9d2e04954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fE9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
		price: "1.49",
		qty: "80",
	},
	{
		id: 4,
		title: "Grapes",
		category: "Fruits",
		image_url: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R3JhcGVzfGVufDB8fDB8fHww",
		price: "2.49",
		qty: "120",
	},
	{
		id: 5,
		title: "Watermelon",
		category: "Fruits",
		image_url: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
		price: "3.99",
		qty: "50",
	},
	{
		id: 6,
		title: "Mango",
		category: "Fruits",
		image_url: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ298ZW58MHx8MHx8fDA%3D",
		price: "2.99",
		qty: "90",
	},
	{
		id: 7,
		title: "Pineapple",
		category: "Fruits",
		image_url: "https://images.unsplash.com/photo-1517260911058-0fcfd733702f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBpbmVhcHBsZXxlbnwwfHwwfHx8MA%3D%3D",
		price: "3.49",
		qty: "70",
	},
	{
		id: 8,
		title: "Strawberry",
		category: "Fruits",
		image_url: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D",
		price: "4.99",
		qty: "60",
	},
];
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
