import React from "react";

function TeamMember({ children, name, img, position }) {
	return (
		<>
			<div className="tile flex flex-col justify-start items-start">
				<div className="aspect-w-1 aspect-h-1 mb-5">
					<img className="w-full h-full roudned-lg" src={img} alt={name} />
				</div>
				<h3>{name}</h3>
				<h4>{position}</h4>
				{children}
				<div className="purple-bar-bottom"></div>
			</div>
		</>
	);
}

export default function Team() {
	return (
		<div className="my-36 md:my-0 md:h-screen flex justify-center items-center flex-col">
			<h2 className="text-center mb-10">The Team</h2>
			<div className="grid md:grid-cols-3 gap-10 auto-rows-auto w-3/4">
				<TeamMember name="Name" position="Lead"></TeamMember>

				<TeamMember name="Name" position="Lead"></TeamMember>

				<TeamMember name="Name" position="Lead"></TeamMember>
			</div>
		</div>
	);
}
