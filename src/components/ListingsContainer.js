import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, onDeleteItem, search }) {
	const displayItems = items.filter((item) =>
		item.description.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<main>
			<ul className="cards">
				{displayItems.map((item) => (
					<ListingCard item={item} onDeleteItem={onDeleteItem} />
				))}
			</ul>
		</main>
	);
}

export default ListingsContainer;
