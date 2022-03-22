import React from "react";

export default function Nav() {
	return (
		<div className='fixed z-50 top-4 left-4'>
			<div className='tile-nav'>
				<div className='flex flex-row flex-wrap'>
					<a href='#about'>About</a>
					<a href='#rarity'>Rarity</a>
					<a href='#roadmap'>Roadmap</a>
					<a href='#team'>Team</a>
				</div>
				<div className='purple-bar-bottom'></div>
			</div>
		</div>
	);
}
