import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function RarityTile({ children, title }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='relative w-full mb-5'>
				<div
					className='tile mb-0 hover:scale-100 cursor-pointer'
					onClick={() => setIsOpen(!isOpen)}
				>
					<h3 className='mb-0'>{title}</h3>
					<button
						className='absolute right-5'
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen === true ? <FaMinus /> : <FaPlus />}
					</button>
				</div>
				{isOpen && <div className='mt-3 tile hover:scale-100'>{children}</div>}
				<div className='purple-bar'></div>
			</div>
		</>
	);
}
