import { React } from "react";
import roadmap from "./roadmap.mp4";

export default function RoomVideo(props) {
	// let frameNumber = 0; // Start Video at Frame 0
	// const playbackConst = 250; // Lower Numbers  = Faster Playbackl
	// const roadMap = document.querySelector("#roadmap");
	// const roadScroll = roadMap.getBoundingClientRect();
	// const vid = document.querySelector("#room"); // Selecting Video
	// const scrollY = window.pageYOffset;

	// // Use requestAnimationFrame for smooth playback
	// function scrollPlay() {
	// 	if (scrollY >= roadScroll.top && scrollY <= roadScroll.bottom) {
	// 		frameNumber = roadScroll / playbackConst;
	// 		vid.currentTime = frameNumber;
	// 		window.requestAnimationFrame(scrollPlay);
	// 	}
	// }

	// window.requestAnimationFrame(scrollPlay);

	// console.log(roadScroll.top);

	return (
		<>
			<video
				id="room"
				className={`w-1/4 object-contain object-center ${props.position}`}
				atuobuffer="autobuffer"
				preload="preload"
				tabIndex="0"
				playsInline
			>
				<source type="video/mp4" src={roadmap} />
			</video>
		</>
	);
}
