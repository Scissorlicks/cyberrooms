import React from "react";

export default function Roadmap({ children, title }) {
	return (
		<div id='roadmap' className='my-36'>
			<h2 className='text-center mb-14'>{title}</h2>
			<div className='grid lg:grid-cols-2 auto-rows-auto'>
				<div className='col-span-1'>{children}</div>
				<div className='lg:hidden'>{/* <RoomVideo /> */}</div>
			</div>
		</div>
	);
}
