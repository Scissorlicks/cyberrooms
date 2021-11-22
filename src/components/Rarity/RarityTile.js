import React from "react";

export default function RarityTile({ children, title }) {
	return (
		<>
			<div className="tile mb-5">
				<h3>{title}</h3>
				{children}
				<div className="purple-bar"></div>
			</div>
		</>
	);
}
