import React from "react";
import Nav from "./components/Layout/Nav";
import Header from "./components/Header";
import About from "./components/About";
import ContentBlock from "./components/ContentBlock";
import Roadmap from "./components/Roadmap/Roadmap";
import RoadmapTile from "./components/Roadmap/RoadmapTile";
import Rarity from "./components/Rarity/Rarity";
import Team from "./components/Team/Team";
import TeamMember from "./components/Team/TeamMember";
import Footer from "./components/Layout/Footer";

function App() {
	return (
		<>
			<Nav />
			<div className='container mx-auto px-10'>
				<Header title='Cyber Rooms'>
					<p>
						CyberRooms is a collection of 4,444 unique 3D rooms on the Ethereum
						Blockchain
					</p>
				</Header>

				<About gif='/hd-room.png'>
					<ContentBlock title='About Us'>
						<p>
							We are the first official room NFT project in the metaverse!
							CyberRooms is a collection of 4,444 unique 3D rooms on the
							Ethereum Blockchain
						</p>
						<p>
							Every single item within the room has different variants and
							colors.
						</p>
					</ContentBlock>
				</About>

				<Rarity title='Rarity Information' />

				<Roadmap title='Roadmap'>
					<RoadmapTile title='Mint' number='01' done={false} current={true}>
						<p>
							Once different mint goals have been reached, there will be various
							giveaways to holders and donations to a charity of the community’s
							choice. These giveaways include ETH, Cyber Rooms NFT giveaways and
							multiple total IRL room revamps! More information in the discord.
						</p>
					</RoadmapTile>

					<RoadmapTile
						title='Game Development'
						number='02'
						done={false}
						current={false}
					>
						<p>
							In Spring of 2022 we plan to release a VR game where you can
							connect your wallet and view your CyberRoom in VR! In the later
							months of 2022 we plan to revamp the base VR game into a more
							interactive / more objective based game. More information in the
							discord.
						</p>
					</RoadmapTile>

					<RoadmapTile
						title='Long Term Goal'
						number='03'
						done={false}
						current={false}
					>
						<p>
							Overall we want to have multiple companion drops over the span of
							the next few years to establish an entire house. What we mean by
							that is eventually adding other components such as living rooms,
							backyards, house fronts, bathrooms etc, kind of like building
							blocks to create your own virtual home with CyberRooms NFT. In
							conclusion our end goal is, our holders will be able to have their
							own virtual home that can be explored in VR. We want to build a
							long lasting community by giving back as much as we can. More
							information in the discord.
						</p>
					</RoadmapTile>
				</Roadmap>

				<Team>
					<TeamMember
						name='Gavin'
						position='Founder'
						img='/hd-room.png'
					></TeamMember>

					<TeamMember
						name='Luke'
						position='Founder'
						img='/hd-room.png'
					></TeamMember>
				</Team>

				<Footer />
			</div>
		</>
	);
}

export default App;
