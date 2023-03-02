import React from "react";
import { useSelector } from "react-redux";

const Header = ({ setPageState }) => {
	const cartList = useSelector((state) => state.cart_list);
	const AllCartListTotalPrice = (cartList) => {
		const sum = cartList.reduce((sum, cart) => sum + cart.qty, 0);
		return sum;
	};

	return (
		<nav class="bg-[#171C2A] py-4">
			<div class="navBar">
				<a
					href="#"
					onClick={() =>
						setPageState({
							home_page: true,
							cart_page: false,
						})
					}
				>
					<img
						src="/images/logo.png"
						alt="LWS"
						class="max-w-[140px]"
					/>
				</a>

				<div class="flex gap-4">
					<a
						href="#"
						class="navHome"
						id="lws-home"
						onClick={() =>
							setPageState({
								home_page: true,
								cart_page: false,
							})
						}
					>
						{" "}
						Home{" "}
					</a>
					<a
						href="#"
						class="navCart"
						id="lws-cart"
						onClick={() =>
							setPageState({
								home_page: false,
								cart_page: true,
							})
						}
					>
						<i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
						<span id="lws-totalCart">
							{AllCartListTotalPrice(
								cartList
							)}
						</span>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Header;
