import productReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	products: productReducer,
	cart_list: cartReducer,
});

export default rootReducer;
