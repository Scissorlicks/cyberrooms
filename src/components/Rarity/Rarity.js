import React from "react";
import View3D from "./View3D";
import RarityTile from "./RarityTile";

function RarityCol({ children }) {
	return (
		<>
			<div className='flex justify-center items-center flex-col col-span-2'>
				{children}
			</div>
		</>
	);
}

export default function Rarity(props) {
	return (
		<>
			<div
				id='rarity'
				className='grid lg:grid-cols-4 grid-cols-1 auto-rows-auto lg:h-screen'
			>
				<div className='lg:col-span-2 lg:col-start-1 lg:h-1/2 h-[50vh] lg:my-auto mb-28 row-start-1 col-span-1'>
					<View3D />
				</div>
				<RarityCol>
					<h2 className='text-center mb-5'>{props.title}</h2>
					<RarityTile title='Desktop Setup'>
						<ul className='list-outside ml-4 list-disc'>
							<li>
								<h4>PC</h4>
								<p>
									3 different variants. The most rare being the watercooled PC
									and the most common being the regular PC with no LEDs.
								</p>
							</li>
							<li>
								<h4>Monitor</h4>
								<p>
									4 different variants. The most rare being four monitors and
									the most common being a single monitor.
								</p>
							</li>
							<li>
								<h4>Keyboard and Mouse</h4>
								<p>
									3 different variants. The most rare being a large mousepad
									with LEDs on the outer edge and the most common being a small
									mousepad.
								</p>
							</li>
						</ul>

						<p>Each item discussed will have different color variants.</p>
					</RarityTile>
					<RarityTile title='Wall'>
						<ul className='list-outside ml-4 list-disc'>
							<li>
								<p>
									6 different colors. The most rare being purple and the most
									common being grey.
								</p>
							</li>
							<li>
								<p>
									4 different decorations. The most rare being a neon ETH sign
									and the most common being a painting.
								</p>
							</li>
							<li>
								<h4>TV</h4>
								<p>
									3 different variants. The most rare being a projector and the
									most common being the small TV.
								</p>
							</li>
						</ul>
						<p>Each item discussed will have different color variants.</p>
					</RarityTile>
					<RarityTile title='Furniture'>
						<ul className='list-outside ml-4 list-disc'>
							<li>
								<h4>Bed</h4>
								<p>
									2 different variants. The most rare being the messy bed and
									the most common being the normal bed.
								</p>
							</li>
							<li>
								<h4>Desk</h4>
								<p>
									3 different variants. The most rare being the floating desk
									and the most common being the straight desk.
								</p>
							</li>
							<li>
								<h4>Sofa</h4>
								<p>
									3 different variants. The most rare being the lovesac and the
									most common being the square sofa.
								</p>
							</li>
							<li>
								<h4>Chair</h4>
								<p>
									4 different variants. The most rare being a throne and the
									most common being the office chair.
								</p>
							</li>
							<li>
								<h4>Rug</h4>
								<p>
									2 different variants. The most rare being the circle rug and
									the most common being the square rug.
								</p>
							</li>
						</ul>
						<p>Each item discussed will have different color variants.</p>
					</RarityTile>
					<RarityTile title='Shelf'>
						<ul className='list-outside ml-4 list-disc'>
							<li>
								<p>
									2 different variants. The most rare being the pipe shelf and
									the most common being the floating shelf.
								</p>
							</li>
							<li>
								<h4>Top Shelf</h4>
								<p>
									3 different variants. The most rare being the fish tank and
									the most common being the battle axe.
								</p>
							</li>
							<li>
								<h4>Bottom Shelf</h4>
								<p>
									5 different variants. The most rare being the ETH statue and
									the most common being the books.
								</p>
							</li>
						</ul>
						<p>Each item discussed will have different color variants.</p>
					</RarityTile>
					<RarityTile title='Ultra Rooms'>
						<p>
							There will be a limited number of Ultra Rooms within the total
							supply, all are one of one hand made. For example one of the Ultra
							Rooms will be a prison cell. The window will have bars, there will
							be a metal toilet / sink and everything else you could imagine a
							prison cell would have. All of the variants within the room will
							be specific for the theme.
						</p>
						<p className='font-bold'>
							Will you be able to mint an Ultra Room?{" "}
						</p>
					</RarityTile>
				</RarityCol>
			</div>
		</>
	);
}
