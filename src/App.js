import React from "react";
import Header from "./components/Header";
import ContentBlock from "./components/ContentBlock";
import Roadmap from "./components/Roadmap";
import RoadmapTile from "./components/RoadmapTile";
import Rarity from "./components/Rarity";
import Team from "./components/Team";
import Footer from "./components/Footer";
import room from "./img/header-room.png";

function App() {
	return (
		<>
			<div className="container mx-auto px-10">
				<Header title="Cyber Rooms">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
						distinctio, obcaecati, in aspernatur accusantium excepturi dolor
						necessitatibus a tempore aliquid magni recusandae quidem, atque
						libero.
					</p>
				</Header>

				<div className="grid lg:grid-cols-3 lg:auto-rows-auto lg:h-screen my-36 gap-5 lg:gap-0">
					<div className="flex justify-center items-center lg:col-span-2 lg:col-end-3 lg:row-start-1">
						<ContentBlock title="About Cyber Rooms">
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Obcaecati, facere. Facilis ipsa a velit amet deleniti quidem,
								repellat cum sequi quos magni rem eaque dolor?
							</p>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Obcaecati, facere. Facilis ipsa a velit amet deleniti quidem,
								repellat cum sequi quos magni rem eaque dolor?
							</p>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Obcaecati, facere. Facilis ipsa a velit amet deleniti quidem,
								repellat cum sequi quos magni rem eaque dolor?
							</p>
						</ContentBlock>
					</div>
					<div className="flex justify-center items-center col-span-1 lg:col-span-2 lg:col-start-2 lg:row-start-1 row-start-2 flex-col">
						<img src={room} alt="" />
						<h1 className="absolute">ANIMATED GIF</h1>
					</div>
				</div>

				<Rarity title="Rarity Information" />

				<div className="my-36">
					<Roadmap title="Roadmap">
						<RoadmapTile title="Title" number="01" done={true} current={false}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
								asperiores ipsam a facilis veritatis! Voluptatum, dolor
								molestiae ad eveniet magnam maiores rem sequi possimus
								voluptatem?
							</p>
						</RoadmapTile>

						<RoadmapTile title="Title" number="02" done={false} current={true}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
								asperiores ipsam a facilis veritatis! Voluptatum, dolor
								molestiae ad eveniet magnam maiores rem sequi possimus
								voluptatem?
							</p>
						</RoadmapTile>

						<RoadmapTile title="Title" number="03" done={false} current={false}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
								asperiores ipsam a facilis veritatis! Voluptatum, dolor
								molestiae ad eveniet magnam maiores rem sequi possimus
								voluptatem?
							</p>
						</RoadmapTile>
					</Roadmap>
				</div>

				<Team />
				<Footer />
			</div>
		</>
	);
}

export default App;
