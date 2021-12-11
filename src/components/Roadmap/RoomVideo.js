import { React } from "react";
import roadmap from "../../img/roadmap.mp4";
import Fade from "react-reveal/Fade";

export default function RoomVideo(props) {
	return (
		<>
			<Fade duration={1500}>
				<video
					id='room'
					className='w-3/4 h-full ml-auto mix-blend-lighten'
					preload='preload'
					autoPlay
					muted
				>
					<source type='video/mp4' src={roadmap} />
				</video>
			</Fade>
		</>
	);
}
