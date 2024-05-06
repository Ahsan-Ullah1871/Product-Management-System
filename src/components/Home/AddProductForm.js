import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_product } from "../redux/products/actions";

const AddProductForm = () => {
	const dispatch = useDispatch();
	const products_list = useSelector((state) => state.products);
	const [product_form, setProductForm] = useState(null);

	const onChangeValue = (key_name, value) => {
		setProductForm((prevState) => ({
			...prevState,
			[key_name]: value,
		}));
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(
			add_product({
				data: {
					...product_form,
					id: products_list.length + 1,
				},
			})
		);
		setProductForm(null);
		document.getElementById("techlab-addProductForm").reset();
	};

	return (
		<div>
			{/* Product Input Form */}
			<div class="formContainer">
				<h4 class="formTitle">Add New Product</h4>
				<form
					class="space-y-4 text-[#534F4F]"
					id="techlab-addProductForm"
					onSubmit={onSubmitHandler}
				>
					{/* product name */}
					<div class="space-y-2">
						<label for="name">Product Name</label>
						<input
							value={product_form?.title}
							class="addProductInput"
							id="techlab-inputName"
							type="text"
							id="name"
							onChange={(e) =>
								onChangeValue(
									"title",
									e.target.value
								)
							}
							required
						/>
					</div>
					{/* product category */}
					<div class="space-y-2">
						<label for="category">Category</label>
						<input
							value={product_form?.category}
							class="addProductInput"
							id="techlab-inputCategory"
							type="text"
							id="category"
							onChange={(e) =>
								onChangeValue(
									"category",
									e.target.value
								)
							}
							required
						/>
					</div>
					{/* product image url */}
					<div class="space-y-2">
						<label for="image">Image Url</label>
						<input
							value={product_form?.image_url}
							class="addProductInput"
							id="techlab-inputImage"
							type="text"
							id="image"
							onChange={(e) =>
								onChangeValue(
									"image_url",
									e.target.value
								)
							}
							required
						/>
					</div>
					{/* price & quantity container */}
					<div class="grid grid-cols-2 gap-8 pb-4">
						{/* price */}
						<div class="space-y-2">
							<label for="price">
								Price
							</label>
							<input
								value={
									product_form?.price
								}
								class="addProductInput"
								type="number"
								id="techlab-inputPrice"
								onChange={(e) =>
									onChangeValue(
										"price",
										e.target
											.value
									)
								}
								required
							/>
						</div>
						{/* quantity */}
						<div class="space-y-2">
							<label for="quantity">
								Quantity
							</label>
							<input
								value={
									product_form?.qty
								}
								class="addProductInput"
								type="number"
								id="techlab-inputQuantity"
								required
								onChange={(e) =>
									onChangeValue(
										"qty",
										e.target
											.value
									)
								}
							/>
						</div>
					</div>
					{/* submit button */}
					<button
						type="submit"
						id="techlab-inputSubmit"
						class="submit"
					>
						Add Product
					</button>
				</form>
			</div>
			{/* Product Input Form Ends */}
		</div>
	);
};

export default AddProductForm;
