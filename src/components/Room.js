import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF("/CyberRoom3D.gltf");
	return (
		<group ref={group} {...props} dispose={null}>
			<group position={[0.68, 2.78, -5.06]} scale={[3.52, 2.56, 2.84]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.WindowFrame.geometry}
					material={nodes.WindowFrame.material}
				>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.WindowL.geometry}
						material={nodes.WindowL.material}
						position={[-0.59, 0.03, 0.02]}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Handle.geometry}
							material={nodes.Handle.material}
							position={[0.04, 0.47, 0.04]}
						/>
					</mesh>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.WindowR.geometry}
						material={nodes.WindowR.material}
						position={[0.59, 0.03, 0.06]}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Handle001.geometry}
							material={nodes.Handle001.material}
							position={[-0.04, 0.47, 0.04]}
						/>
					</mesh>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Windows_Sill.geometry}
						material={materials.Sill_material}
						position={[0, 0, 0.1]}
					/>
				</mesh>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane012.geometry}
				material={materials["Material.013"]}
				position={[0, -0.01, 0]}
				scale={[4.77, 4.77, 4.77]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane005.geometry}
				material={materials.desktest}
				position={[-1.84, 1.52, -3.7]}
				rotation={[0, 1.56, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube004.geometry}
				material={materials["Material.035"]}
				position={[-4.05, 4.42, -4.54]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane001.geometry}
				material={materials["Material.012"]}
				position={[0.92, 3.95, -5.05]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[2.32, 1.98, 1.49]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane_Plane004.geometry}
				material={materials["Material.017"]}
				position={[4.32, 4.42, 2.07]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane_Plane001.geometry}
				material={materials["None.006"]}
				position={[4.32, 4.42, 2.07]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane_Plane003.geometry}
				material={materials["None.009"]}
				position={[4.32, 4.42, 2.23]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane_Plane002.geometry}
				material={materials["Material.018"]}
				position={[4.32, 4.42, 2.23]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane_Plane006.geometry}
				material={materials["Material.019"]}
				position={[4.32, 4.42, 2.49]}
				rotation={[1.23, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane_Plane005.geometry}
				material={materials["None.011"]}
				position={[4.32, 4.42, 2.49]}
				rotation={[1.23, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder017_Cylinder018.geometry}
				material={materials["Material.027"]}
				position={[-0.02, -0.16, 0]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cone_Cone001.geometry}
				material={materials["None.007"]}
				position={[4.29, 4.55, 3.12]}
				rotation={[Math.PI / 2, 0, -0.97]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane019_Plane021.geometry}
				material={materials["Material.029"]}
				position={[4.32, 4.39, 3.88]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane019_Plane001.geometry}
				material={materials["None.012"]}
				position={[4.32, 4.39, 3.88]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube002.geometry}
				material={nodes.Cube002.material}
				position={[-4.05, 4.42, -4.54]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube006.geometry}
				material={materials["Material.016"]}
				position={[-4.04, 4.42, -4.54]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube007.geometry}
				material={materials["Material.038"]}
				position={[-3.6, 5.09, -4.71]}
				scale={[0.33, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube008.geometry}
				material={materials["Material.037"]}
				position={[-3.78, 5.09, -4.67]}
				scale={[0.48, 0.2, 0.4]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube009.geometry}
				material={materials["Material.041"]}
				position={[-3.33, 5.11, -4.65]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube011.geometry}
				material={materials["Material.040"]}
				position={[-3.04, 4.63, -4.52]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cone_Cone002.geometry}
				material={materials["Material.002"]}
				position={[4.29, 4.55, 3.12]}
				rotation={[Math.PI / 2, 0, -0.97]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube005.geometry}
				material={materials["Material.003"]}
				position={[-4.05, 4.42, -4.54]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube010.geometry}
				material={nodes.Cube010.material}
				position={[-4.04, 4.42, -4.54]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube012.geometry}
				material={nodes.Cube012.material}
				position={[-3.33, 5.11, -4.63]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube013.geometry}
				material={materials["Material.020"]}
				position={[-3.78, 5.09, -4.67]}
				scale={[0.48, 0.2, 0.4]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube014.geometry}
				material={nodes.Cube014.material}
				position={[-3.05, 4.63, -4.52]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube015.geometry}
				material={nodes.Cube015.material}
				position={[-3.52, 4.33, -4.52]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube016.geometry}
				material={materials["Material.022"]}
				position={[-4.05, 4.42, -4.54]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube017.geometry}
				material={nodes.Cube017.material}
				position={[-4.05, 4.42, -4.54]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane013_Plane001_Plane013_Plane002.geometry}
				material={materials["None.013"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane013_Plane005.geometry}
				material={materials["Material.048"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.BezierCurve001_BezierCurve002.geometry}
				material={materials["Material.043"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder002_Cylinder006.geometry}
				material={materials["Material.049"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder003_Cylinder005.geometry}
				material={materials["Material.050"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder004_Cylinder001.geometry}
				material={materials["Material.053"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<group rotation={[Math.PI / 2, 0, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder003_Cylinder001_1.geometry}
					material={nodes.Cylinder003_Cylinder001_1.material}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder003_Cylinder001_2.geometry}
					material={nodes.Cylinder003_Cylinder001_2.material}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder003_Cylinder001_3.geometry}
					material={materials["Material.055"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane015_Plane007.geometry}
				material={materials["Material.076"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder001.geometry}
				material={materials["Material.044"]}
				position={[-0.24, 0.34, 3.01]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}
				scale={[1.32, 1.32, 1.32]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane008_Plane001.geometry}
				material={materials["Material.047"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane008_Plane011.geometry}
				material={materials["None.010"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane004.geometry}
				material={materials["Material.052"]}
				position={[21.83, -0.27, -23.09]}
				scale={[42.83, 42.83, 42.83]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube001.geometry}
				material={materials["Material.011"]}
				position={[-4.05, 4.42, -4.5]}
				scale={[0.28, 0.12, 0.23]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane007.geometry}
				material={materials["Material.010"]}
				position={[4.33, 4.01, 3.07]}
				rotation={[0, 1.57, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane017_Plane002.geometry}
				material={materials["Material.030"]}
				position={[4.37, 5.3, 3.77]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cone_Cone004.geometry}
				material={materials["Material.028"]}
				position={[4.29, 4.55, 3.12]}
				rotation={[Math.PI / 2, 0, -0.97]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane014.geometry}
				material={materials["Material.005"]}
				position={[0, -0.01, 0]}
				scale={[4.78, 4.78, 4.78]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane017_Plane001.geometry}
				material={materials["Material.034"]}
				position={[0, 1.13, 1.01]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube018_Cube007.geometry}
				material={materials["None.019"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane017_Plane003.geometry}
				material={materials["Material.032"]}
				position={[4.37, 5.3, 1.73]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube003_Cube008.geometry}
				material={materials["Material.078"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane006_Plane008.geometry}
				material={materials["Material.077"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane003.geometry}
				material={materials["Material.026"]}
				position={[2.85, 1.8, -1.35]}
				rotation={[0.11, 0, 0]}
				scale={[2.28, 2.28, 2.98]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane017_Plane016.geometry}
				material={materials["Material.033"]}
				position={[4.37, 5.31, 2.16]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane010.geometry}
				material={materials["Material.007"]}
				position={[3.74, 1.37, -3.9]}
				rotation={[-0.25, 1.56, 0.52]}
				scale={[0.55, 0.73, 0.89]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				material={materials["Material.008"]}
				position={[3.33, 0.59, -1.62]}
				rotation={[-Math.PI, 1.57, -Math.PI]}
				scale={[2.6, 0.97, 0.97]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane002.geometry}
				material={materials["Material.009"]}
				position={[2.94, -0.16, -1.71]}
				rotation={[-Math.PI, 1.57, -Math.PI]}
				scale={[2.91, 1.59, 1.83]}
			/>
			<group
				position={[-0.24, 0.34, 3.01]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}
				scale={[1.32, 1.32, 1.32]}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002.geometry}
					material={materials["None.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder002_1.geometry}
					material={materials["Material.031"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane.geometry}
				material={materials["Material.024"]}
				position={[2.72, 0.12, 3.01]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[1.17, 0.9, 0.9]}
			/>
		</group>
	);
}

useGLTF.preload("/CyberRoom3D.gltf");
