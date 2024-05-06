import React from "react";
import BillDetails from "./Cart/BillDetails";
import CartList from "./Cart/CartList";

const CartPage = () => {
	return (
		<div class="py-16">
			<div class="container 2xl:px-8 px-2 mx-auto">
				<h2 class="mb-8 text-xl font-bold">
					Shopping Cart
				</h2>
				<div class="cartListContainer">
					<CartList />
					<BillDetails />
				</div>
			</div>
		</div>
	);
};

export default CartPage;
