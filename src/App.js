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
import CountDown from "./components/CountDown";
import Fade from "react-reveal/Fade";

function App() {
	return (
		<>
			<Nav />
			<div className='container px-10 mx-auto'>
				<Header title='Cyber Rooms'>
					<p>
						CyberRooms is a collection of 4,444 unique 3D rooms on the Ethereum
						Blockchain
					</p>
				</Header>

				<Fade bottom duration={2000}>
					<About>
						<ContentBlock title='About Us'>
							<p>
								We are the first official room NFT project in the metaverse!
								CyberRooms is a collection of 4,444 unique 3D rooms on the
								Ethereum Blockchain Every single item within the room has
								different variants and colors. We are looking to make an NFT
								like no other and make a long lasting community. We want holders
								to feel like Cyber Rooms are just like any other room in their
								home.
							</p>
							<p>
								We sincerely hope that you all enjoy Cyber Rooms as much as we
								do!
							</p>
						</ContentBlock>
					</About>
					<CountDown date='January 22, 2022 12:00:00 GMT-07:00' />
					<Rarity title='Rarity Information' />
				</Fade>

				<Roadmap title='Roadmap'>
					<Fade bottom duration={2000}>
						<RoadmapTile
							title='10 Rooms Airdropped to Random Holders'
							number='10%'
						>
							<p>
								Once different mint goals have been reached, there will be
								various giveaways to holders and donations to a charity of the
								community’s choice. These giveaways include ETH, Cyber Rooms NFT
								giveaways and multiple total IRL room revamps! More information
								in the discord.
							</p>
						</RoadmapTile>

						<RoadmapTile
							title='Community wallet +2 ETH'
							number='25%'
						></RoadmapTile>

						<RoadmapTile
							title="5 ETH Charity donation to community's choice"
							number='50%'
						></RoadmapTile>

						<RoadmapTile
							title='Community wallet +5 ETH'
							number='75%'
						></RoadmapTile>

						<RoadmapTile
							title='Total setup / Room revamp to one random holder'
							number='100%'
						>
							<p>& 5 ETH split to 10 random holders (.5 ETH each)</p>
						</RoadmapTile>

						<RoadmapTile title='Game Development'>
							<p>
								In Spring of 2022 we plan to release a VR game where you can
								connect your wallet and view your CyberRoom in VR! In the later
								months of 2022 we plan to revamp the base VR game into a more
								interactive / more objective based game. More information in the
								discord.
							</p>
						</RoadmapTile>

						<RoadmapTile title='Long Term Goal'>
							<p>
								Overall we want to have multiple companion drops over the span
								of the next few years to establish an entire house. What we mean
								by that is eventually adding other components such as living
								rooms, backyards, house fronts, bathrooms etc, kind of like
								building blocks to create your own virtual home with CyberRooms
								NFT. In conclusion our end goal is, our holders will be able to
								have their own virtual home that can be explored in VR. We want
								to build a long lasting community by giving back as much as we
								can. More information in the discord.
							</p>
						</RoadmapTile>
					</Fade>
				</Roadmap>

				<Team>
					<Fade bottom duration={2000}>
						<TeamMember
							name='Gavin'
							position='Founder'
							img='img/gav.jpg'
						></TeamMember>

						<TeamMember
							name='Luke'
							position='Founder'
							img='img/luke.jpg'
						></TeamMember>
					</Fade>
				</Team>

				<Footer />
			</div>
		</>
	);
}

export default App;
