import React from "react";
import gif from "../img/gif.mp4";

export default function About({ children }) {
	return (
		<>
			<div className='grid gap-10 lg:grid-cols-3 lg:auto-rows-auto lg:h-screen my-36 lg:gap-0'>
				<div
					id='about'
					className='flex items-center justify-center lg:col-span-2 lg:col-end-3 lg:row-start-1'
				>
					{children}
				</div>
				<div className='flex flex-col items-center justify-center col-span-1 row-start-2 overflow-hidden lg:col-span-2 lg:col-start-2 lg:row-start-1 bg-primary'>
					<video
						src={gif}
						className='w-full mix-blend-lighten'
						autoPlay
						loop
						muted
					/>
				</div>
			</div>
		</>
	);
}
