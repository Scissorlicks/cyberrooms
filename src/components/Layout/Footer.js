import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<>
			<div className='flex justify-center items-center flex-col my-8'>
				<p>Copyright Information</p>
				<div className='flex flex-row mt-4'>
					<a href='about' className='social'>
						<FaDiscord />
					</a>
					<a href='about' className='social'>
						<FaTwitter />
					</a>
				</div>
			</div>
		</>
	);
}
