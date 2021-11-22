import { Html, useProgress } from "@react-three/drei";

function Loader() {
	const { progress } = useProgress();
	return (
		<Html center>
			<h3 className='text-center'>
				{progress}% <br />
				Loading
			</h3>
		</Html>
	);
}

export default Loader;
