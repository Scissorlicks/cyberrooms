import React from "react";

function Nav() {
	return (
		<div className="fixed top-4 left-14">
			<ul>
				<li className="mb-2">
					<a href="#about">About</a>
				</li>
				<li className="mb-2">
					<a href="#rarity">Rarity</a>
				</li>
				<li className="mb-2">
					<a href="#roadmap">Roadmap</a>
				</li>
				<li className="mb-2">
					<a href="#team">Team</a>
				</li>
			</ul>
			<div className="fixed bg-purple-600 w-[0.15rem] h-36 left-8 top-0"></div>
		</div>
	);
}

export default Nav;
