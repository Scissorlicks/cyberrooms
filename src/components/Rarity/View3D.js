import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import Loader from "./Loader";
import Model from "./Model";

function Lighting() {
	return (
		<>
			<ambientLight intensity={0.25} />
			<directionalLight position={[1, 1, 5]} />
			<spotLight intensity={0.25} />
		</>
	);
}

export default function View3D() {
	return (
		<>
			<Canvas camera={{ position: [-10, 5, 5], fov: 75 }}>
				<Suspense fallback={<Loader />}>
					<Lighting />
					<group position={[0, -1, 0]}>
						<Model />
						<OrbitControls makeDefault />
					</group>
				</Suspense>
			</Canvas>
		</>
	);
}
