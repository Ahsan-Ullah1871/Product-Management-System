import React from "react";
import AddProductForm from "./Home/AddProductForm";
import Products from "./Home/Products";

const HomePage = () => {
	return (
		<div class="py-16">
			<div class="productWrapper">
				<Products />
				<AddProductForm />
			</div>
		</div>
	);
};

export default HomePage;
