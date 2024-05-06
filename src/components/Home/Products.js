import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart, update_cart_qty } from "../redux/cart/actions";
import { decrease_product_qty } from "../redux/products/actions";

const Products = () => {
	const products_list = useSelector((state) => state.products);
	const cart_list = useSelector((state) => state.cart_list);

	const dispatch = useDispatch();
	const cartHandler = (product) => {
		if (product.qty > 0) {
			const isCartExist = cart_list.filter(
				(cart) => cart.product_id == product.id
			);

			if (isCartExist?.length > 0) {
				dispatch(
					update_cart_qty(
						isCartExist[0].id,
						"increase"
					)
				);
			} else {
				dispatch(add_to_cart(product));
			}
			dispatch(decrease_product_qty(product.id));
		}
	};

	console.log(cart_list);
	return (
		<div
			class="productContainer"
			id="techlab-productContainer"
		>
			{products_list.length == 0 && (
				<p className=" ">
					No products found. But you can add new produt
					.
				</p>
			)}
			{/* product item */}
			{products_list?.map((product) => {
				return (
					<div class="techlab-productCard">
						<img
							class="techlab-productImage"
							src={product.image_url}
							alt="product"
						/>
						<div class="p-4 space-y-2">
							<h4 class="techlab-productName">
								{product.title}
							</h4>
							<p class="techlab-productCategory">
								{product.category}
							</p>
							<div class="flex items-center justify-between pb-2">
								<p class="productPrice">
									BDT{" "}
									<span class="techlab-price">
										{
											product.price
										}
									</span>
								</p>
								<p class="productQuantity">
									QTY{" "}
									<span class="techlab-quantity">
										{
											product.qty
										}
									</span>
								</p>
							</div>
							<button
								class="techlab-btnAddToCart"
								onClick={() =>
									cartHandler(
										product
									)
								}
							>
								Add To Cart
							</button>
						</div>
					</div>
				);
			})}
			{/* product item ends */}
		</div>
	);
};

export default Products;
