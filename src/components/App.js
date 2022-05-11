import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
	const [items, setItems] = useState([]);
	const [search, setSearch] = useState("");

	function handleDeleteItem(deletedItem) {
		const updatedItems = items.filter((item) => item.id !== deletedItem.id);
		setItems(updatedItems);
	}

	useEffect(() => {
		fetch("http://localhost:6001/listings").then((r) =>
			r.json().then((data) =>
				setItems(
					data.map((item) => {
						return { ...item, liked: false };
					})
				)
			)
		);
	}, []);

	return (
		<div className="app">
			<Header search={search} setSearch={setSearch} />
			<ListingsContainer
				items={items}
				onDeleteItem={handleDeleteItem}
				search={search}
			/>
		</div>
	);
}

export default App;
