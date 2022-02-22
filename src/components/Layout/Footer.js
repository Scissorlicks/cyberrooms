import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<>
			<div className='flex flex-col items-center justify-center my-8'>
				<div className='flex flex-row mt-4'>
					<a href='https://discord.gg/CyberRooms' className='social'>
						<FaDiscord />
					</a>
					<a href='https://twitter.com/CyberRooms' className='social'>
						<FaTwitter />
					</a>
				</div>
				<a
					className='mt-4 text-sm text-white transition-all duration-300 opacity-75 hover:text-purple-600 hover:opacity-100'
					href='https://www.illusivemedia.co/'
					target='_blank'
					rel='noreferrer'
				>
					Developed by Illusive Media
				</a>

				<a href='Documents/TOS/TOS.html'>
				
				Terms of Service

				</a>


			</div>
			
		</>
	);
}
