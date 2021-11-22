import React from "react";

export default function Nav() {
	return (
		<div className='fixed z-50 top-4 left-4'>
			<div className='tile-nav'>
				<ul className='flex flex-row'>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#rarity'>Rarity</a>
					</li>
					<li>
						<a href='#roadmap'>Roadmap</a>
					</li>
					<li>
						<a href='#team'>Team</a>
					</li>
				</ul>
				<div className='purple-bar-bottom'></div>
			</div>
		</div>
	);
}
