import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import store from "./components/redux/store";

function App() {
	const [pageState, setPageState] = useState({
		home_page: true,
		cart_page: false,
	});

	//
	const { home_page, cart_page } = pageState;
	return (
		<Provider store={store}>
			<Header setPageState={setPageState} />
			{home_page && <HomePage />}
			{cart_page && <CartPage />}
		</Provider>
	);
}

export default App;

