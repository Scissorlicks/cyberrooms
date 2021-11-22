import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<>
			<div className="flex justify-center items-center flex-col my-8">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
					quam?
				</p>
				<div className="flex flex-row mt-4">
					<FaDiscord />
					<FaTwitter />
				</div>
			</div>
		</>
	);
}
