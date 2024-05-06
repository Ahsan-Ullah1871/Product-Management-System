import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const BillDetails = () => {
	const cartList = useSelector((state) => state.cart_list);
	const AllCartListTotalPrice = (cartList) => {
		const sum = cartList.reduce(
			(sum, cart) => sum + cart.total_price,
			0
		);
		return sum;
	};

	return (
		<div>
			<div class="billDetailsCard">
				<h4 class="mt-2 mb-8 text-xl font-bold text-center">
					Bill Details
				</h4>
				<div class="space-y-4">
					{/* sub total */}
					<div class="flex items-center justify-between">
						<p>Sub Total</p>
						<p>
							BDT{" "}
							<span class="techlab-subtotal">
								{AllCartListTotalPrice(
									cartList
								)}
							</span>
						</p>
					</div>
					{/* Discount */}
					<div class="flex items-center justify-between">
						<p>Discount</p>
						<p>
							BDT{" "}
							<span class="techlab-discount">
								0
							</span>
						</p>
					</div>
					{/* VAT */}
					<div class="flex items-center justify-between">
						<p>VAT</p>
						<p>
							BDT <span class="vat">0</span>
						</p>
					</div>
					{/* Total */}
					<div class="flex items-center justify-between pb-4">
						<p class="font-bold">TOTAL</p>
						<p class="font-bold">
							BDT{" "}
							<span class="techlab-total">
								{AllCartListTotalPrice(
									cartList
								)}
							</span>
						</p>
					</div>
					<button class="placeOrderbtn">
						place order
					</button>
				</div>
			</div>
		</div>
	);
};

export default BillDetails;
