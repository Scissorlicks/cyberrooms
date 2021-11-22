import React from "react";

export default function About({ children, gif }) {
	return (
		<>
			<div className='grid lg:grid-cols-3 lg:auto-rows-auto lg:h-screen my-36 gap-5 lg:gap-0'>
				<div
					id='about'
					className='flex justify-center items-center lg:col-span-2 lg:col-end-3 lg:row-start-1'
				>
					{children}
				</div>
				<div className='flex justify-center items-center col-span-1 lg:col-span-2 lg:col-start-2 lg:row-start-1 row-start-2 flex-col'>
					<img src={gif} alt='Cyber Rooms NFTs' className='w-3/4' />
				</div>
			</div>
		</>
	);
}
