import React, { useState } from "react";

function ListingCard({ item, onDeleteItem }) {
	const [liked, setLiked] = useState(false);

	function handleDeleteClick() {
		fetch(`http://localhost:6001/listings/${item.id}`, {
			method: "DELETE",
		})
			.then((r) => r.json)
			.then(onDeleteItem(item));
	}

	return (
		<li className="card">
			<div className="image">
				<span className="price">$0</span>
				<img src={item.image} alt={item.description} />
			</div>

			<div className="details">
				{liked ? (
					<button
						className="emoji-button favorite active"
						onClick={() => setLiked(false)}
					>
						★
					</button>
				) : (
					<button
						className="emoji-button favorite"
						onClick={() => setLiked(true)}
					>
						☆
					</button>
				)}
				<strong>{item.description}</strong>
				<span> · {item.location}</span>
				<button className="emoji-button delete" onClick={handleDeleteClick}>
					🗑
				</button>
			</div>
		</li>
	);
}

export default ListingCard;
