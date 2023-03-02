import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_from_cart_list, update_cart_qty } from "../redux/cart/actions";
import {
	decrease_product_qty,
	increase_product_qty,
} from "../redux/products/actions";

const CartList = () => {
	const dispatch = useDispatch();
	const cart_list = useSelector((state) => state.cart_list);

	const deleteItem = (cart_detail) => {
		dispatch(remove_from_cart_list(cart_detail.id));
		dispatch(
			increase_product_qty(
				cart_detail.product_id,
				cart_detail.qty
			)
		);
	};

	const updateCart = (cart_detail, type) => {
		if (type == "increase" && cart_detail.product_qty > 0) {
			dispatch(update_cart_qty(cart_detail.id, type));
			dispatch(decrease_product_qty(cart_detail.product_id));
		}
		if (type == "decrease" && cart_detail.qty > 1) {
			dispatch(update_cart_qty(cart_detail.id, type));
			dispatch(increase_product_qty(cart_detail.product_id));
		}
	};

	return (
		<div class="space-y-6">
			{/* Cart Item */}
			{cart_list?.map((cart) => {
				return (
					<div class="cartCard">
						<div class="flex items-center col-span-6 space-x-6">
							{/* cart image */}
							<img
								class="lws-cartImage"
								src={cart.product_image}
								alt="product"
							/>
							{/* cart item info */}
							<div class="space-y-2">
								<h4 class="lws-cartName">
									{
										cart.product_title
									}
								</h4>
								<p class="lws-cartCategory">
									{
										cart.product_category
									}
								</p>
								<p>
									BDT{" "}
									<span class="lws-cartPrice">
										{
											cart.product_price
										}
									</span>
								</p>
							</div>
						</div>
						<div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
							{/* amount buttons */}
							<div class="flex items-center space-x-4">
								<button
									class="lws-incrementQuantity"
									onClick={() =>
										updateCart(
											cart,
											"increase"
										)
									}
								>
									<i class="text-lg fa-solid fa-plus"></i>
								</button>
								<span class="lws-cartQuantity">
									{cart.qty}
								</span>
								<button
									class="lws-decrementQuantity"
									onClick={() =>
										updateCart(
											cart,
											"decrease"
										)
									}
								>
									<i class="text-lg fa-solid fa-minus"></i>
								</button>
							</div>
							{/* price */}
							<p class="text-lg font-bold">
								BDT{" "}
								<span class="lws-calculatedPrice">
									{
										cart.total_price
									}
								</span>
							</p>
						</div>
						{/* delete button */}
						<div
							class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0"
							onClick={() =>
								deleteItem(cart)
							}
						>
							<button class="lws-removeFromCart">
								<i class="text-lg text-red-400 fa-solid fa-trash"></i>
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CartList;
