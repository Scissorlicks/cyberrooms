import React from "react";

export default function TeamMember({ children, name, img, position }) {
	return (
		<>
			<div className='tile flex flex-col justify-start items-start'>
				<img
					className='w-full h-auto rounded-md mb-5 object-contain'
					src={img}
					alt={name}
				/>
				<h3>{name}</h3>
				<h4 className='mb-0'>{position}</h4>
				{children}
				<div className='purple-bar-bottom'></div>
			</div>
		</>
	);
}
