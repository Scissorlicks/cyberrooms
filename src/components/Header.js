import React from "react";
import firstRoom from "../img/hd-room.png";

export default function Header({ children, title }) {
	return (
		<>
			<div className='h-screen flex justify-center items-center flex-col'>
				<img
					src={firstRoom}
					alt='Cyber Rooms 3D NFT'
					className='filter drop-shadow-xl z-0 animate-bounce-low lg:w-[40%] w-full'
				/>
				<div className='tile text-center -mt-10'>
					<div className='purple-bar-bottom'></div>
					<h1>{title}</h1>
					{children}
				</div>
			</div>
		</>
	);
}
