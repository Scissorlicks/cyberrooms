import React from "react";

export default function Roadmap({ children, title }) {
	return (
		<div id='roadmap' className='my-36'>
			<h2 className='text-center mb-14'>{title}</h2>
			<div className='grid lg:grid-cols-4 auto-rows-auto'>
				<div className='lg:col-span-3 lg:col-start-1 lg:col-end-4'>
					{children}
				</div>
				<div className='lg:hidden'>{/* <RoomVideo /> */}</div>
			</div>
		</div>
	);
}
