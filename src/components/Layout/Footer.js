import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<>
			<div className='flex flex-col items-center justify-center my-8'>
				{/* <p>Copyright Information</p> */}
				<div className='flex flex-row mt-4'>
					<a href='https://discord.gg/CyberRooms' className='social'>
						<FaDiscord />
					</a>
					<a href='https://twitter.com/CyberRooms' className='social'>
						<FaTwitter />
					</a>
				</div>
			</div>
		</>
	);
}
