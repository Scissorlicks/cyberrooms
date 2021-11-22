import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useFBX, Bounds } from "@react-three/drei";
import Loader from "./Loader";

function Model() {
	const fbx = useFBX("/room.fbx");
	const ref = useRef();
	useFrame(() => (ref.current.rotation.y += 0.00125));
	return (
		<Bounds fit clip>
			<mesh ref={ref}>
				<primitive object={fbx} dispose={null} />
			</mesh>
			<OrbitControls makeDefault />
		</Bounds>
	);
}

function Lighting() {
	return (
		<>
			<ambientLight intensity={0.1} />
			<directionalLight position={[0, 0, 5]} />
			<spotLight intensity={1} />
		</>
	);
}

export default function View3D() {
	return (
		<>
			<Canvas camera={{ position: [0, 20, 20], fov: 70 }}>
				<Suspense fallback={<Loader />}>
					<Lighting />
					<Model />
				</Suspense>
			</Canvas>
		</>
	);
}
