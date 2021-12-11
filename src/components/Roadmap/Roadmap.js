import React from "react";
import RoomVideo from "./RoomVideo";

export default function Roadmap({ children, title }) {
	return (
		<div id='roadmap' className='relative my-36'>
			<h2 className='text-center mb-14'>{title}</h2>
			<div className='grid lg:grid-cols-4 auto-rows-auto'>
				<div className='lg:col-span-3 lg:col-start-1 lg:col-end-4'>
					{children}
				</div>
			</div>
			<div className='absolute right-0 hidden top-1/4 w-full lg:block z-[-1] bg-primary'>
				<RoomVideo />
			</div>
		</div>
	);
}
