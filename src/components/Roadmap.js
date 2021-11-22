import React from "react";
// import RoomVideo from "RoomVideo";

export default function Roadmap({ children, title }) {
	return (
		<>
			<h2 className="text-center mb-14">{title}</h2>
			<div className="grid grid-cols-2 auto-rows-auto">
				<div className="col-span-1">{children}</div>
				<div className="md:hidden">{/* <RoomVideo /> */}</div>
			</div>
		</>
	);
}
