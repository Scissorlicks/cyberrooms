import React from "react";
import View3D from "./View3D";
import RarityTile from "./RarityTile";

function RarityCol({ children }) {
	return (
		<>
			<div className="flex justify-center items-center flex-col">
				{children}
			</div>
		</>
	);
}

export default function Rarity(props) {
	return (
		<>
			<div className="grid md:grid-cols-4 grid-cols-1 auto-rows-auto md:h-screen">
				<RarityCol>
					<RarityTile title="Title">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
							ea laborum, assumenda, ullam voluptatibus temporibus quo
							consectetur quae optio reprehenderit autem eius ex corporis eos.
						</p>
					</RarityTile>
					<RarityTile title="Title">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
							ea laborum, assumenda, ullam voluptatibus temporibus quo
							consectetur quae optio reprehenderit autem eius ex corporis eos.
						</p>
					</RarityTile>
				</RarityCol>
				<div className="md:col-span-2 md:col-start-2 h-1/2 my-auto row-start-1 col-span-1">
					<h2 className="text-center">{props.title}</h2>
					<View3D />
				</div>
				<RarityCol>
					<RarityTile title="Title">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
							ea laborum, assumenda, ullam voluptatibus temporibus quo
							consectetur quae optio reprehenderit autem eius ex corporis eos.
						</p>
					</RarityTile>
					<RarityTile title="Title">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
							ea laborum, assumenda, ullam voluptatibus temporibus quo
							consectetur quae optio reprehenderit autem eius ex corporis eos.
						</p>
					</RarityTile>
				</RarityCol>
			</div>
		</>
	);
}
