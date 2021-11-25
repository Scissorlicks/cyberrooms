import React from "react";

export default function ButtonLocked({ icon, text }) {
	return (
		<button className='py-2 px-4 bg-purple-600 hover:bg-purple-500 transition-all duration-300 ease-in-out rounded-sm leading-none uppercase tracking-wider opacity-50 pointer-events-none'>
			{icon === undefined ? "" : { icon }} {text}
		</button>
	);
}
