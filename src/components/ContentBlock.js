import React from "react";

export default function ContentBlock({ children, title }) {
	return (
		<>
			<div className="tile w-max">
				<h2>{title}</h2>
				{children}
				<div className="purple-bar"></div>
			</div>
		</>
	);
}
