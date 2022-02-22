import React from "react";

export default function Button({ icon, text }) {
	console.log("Here");
	return (
			<a href="publicdapp\index.html">
				<button className='py-2 px-4 bg-purple-600 hover:bg-purple-500 transition-all duration-300 ease-in-out rounded-sm leading-none animate-glow uppercase tracking-wider'>
					{icon === undefined ? "" : { icon }} {text}
				</button>
			</a>
	);
}
