import React from "react";

export default function Team({ children }) {
	return (
		<div
			id='team'
			className='my-36 md:my-0 lg:h-screen flex justify-center items-center flex-col'
		>
			<h2 className='text-center mb-10'>The Team</h2>
			<div className='grid lg:grid-cols-2 gap-10 auto-rows-auto md:w-3/4 w-full'>
				{children}
			</div>
			<p className='mt-16 lg:text-xl text-lg'>
				More info about us in the Discord
			</p>
		</div>
	);
}
