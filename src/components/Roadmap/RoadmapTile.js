import React from "react";

export default function RoadmapTile({
	children,
	title,
	number,
	done,
	current,
}) {
	return (
		<>
			<div className={`tile mb-10 ${done && "line-through"}`}>
				<h4>{title}</h4>
				{children}
				<div className='absolute -left-4 h-full flex justify-center items-center flex-col'>
					<div
						className={done === true ? "progress-bar done" : "progress-bar"}
					></div>
					<div
						className={`progress-bar-circle ${done && "done"} ${
							current && "done"
						}`}
					>
						<div
							className={
								current === true
									? "w-full h-full absolute done animate-ping rounded-full"
									: "hidden"
							}
						></div>
					</div>
				</div>
				{number !== undefined ? (
					<div
						className={`tile-number ${done && "text-purple-600"} ${
							current === true ? "animate-pulse" : ""
						}`}
					>
						{number} Minted
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
}
