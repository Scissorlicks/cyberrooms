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
			<div className="tile mb-10">
				<h3>{title}</h3>
				<p>{children}</p>
				<div className="absolute -left-4 h-full flex justify-center items-center flex-col">
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
				<div className="tile-number">{number}</div>
			</div>
		</>
	);
}
