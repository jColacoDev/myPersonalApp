import "./NeonScroll.scss"
import React from 'react'
import PDFmaker from "../../Components/PDFmaker/PDFmaker"

export default function NeonScroll() {
return (
<div id="NeonScroll" className="NeonScroll">
	<div className="main">
		<div className="head">
			<h1 className="headline">News and Future</h1>
			<h2 className="subhead">
				This page is dedicated to ideas for current and future development!
				<br/> If you are interested, contact me to make it our project! 
			</h2>
			<div className="article-meta">
				<div className="author">
					<div className="author__info">
						<p className="byline">By: João Colaço</p>
						<p className="dateline">November, 2022</p>
					</div>
				</div>
				<p className="article-tags">
					<span className="tag">web Development</span> <span className="tag">Electronics</span>
					<span className="tag featured">connected</span>
				</p>
			</div>
		</div>
		<div className="content">
			<h2>Condominium Management App</h2>
			<p>
				Nowadays most buildings have poor condominium administration due to the lack of transparency. I intent to build an app for condominium management, working as a network for tenants where one can share alerts and oversee all matters related.
				<br />Moreover, I want to integrate the smart building concept through a system of sensors and actuators connected to the internet (IoT) for enhancement of security and efficiency.
			</p>

			<h2>Geological Tree</h2>
			<p>
				As time goes by it's hard to keep track of our family history. I want to build an App to store and display our Geological Tree. This tree will be scoped to family degree and can grow as much as the user creates leafs. Other users may be added as family to help create leafs.
				<br />A leaf is a family member, with personal information and a remembering text highlight.
			</p>
			<h2>myKingdom</h2>
			<p>
				What if Kings had web developers? I'm talking middle ages!
				<br /> I'm building an App promoting tourism and culture where one must conquer challenges by visiting places in Portugal, making use of GPS. Castles, Churches and other points of interest would fall into categories, display local information and keep a personal record.
			</p>
			<h2>Weather Station</h2>
			<p>
				Using rain, wind, solar and air quality sensors with Arduino platform and other electronics to publish values in realtime dashboards over the internet.
			</p>
			<h2>Solar powerbank for domestic use</h2>
			<p>
				I want to build a solar powerbank based in lithium batteries and photovaltaic panels, managed by uControlled system. 
				<br /> The system will check the input batteries, testing for capacity and the input PV panels for efficiency, reporting in real time. It will be possible to remove and add these in a modular fashion, allowing controlled growth of the power bank according to current needs.
				<br /> The output is given in 5V, 12V, 24V DC and 230V AC in controlled sin wave.
				<br />All data is computed, displayed and controlled through digital dashboards.   
			</p>

			<div id="PDFgenerator">
				<PDFmaker></PDFmaker>
			</div>

			{/* <figure>
				<img src="https://assets.codepen.io/t-1/freddy-g-lhy1lY3CyLI-unsplash.jpg" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
				<figcaption>Photo by Freddy G</figcaption>
			</figure> */}
			{/* <figure>
				<img src="https://assets.codepen.io/t-1/element5-digital-dwcC-OJ-bRs-unsplash.jpg" alt="three neon-lit skee ball lanes. " />
				<figcaption>Photo by Element5 Digital</figcaption>
			</figure> 
			
			<aside>
				<p>Frontend: <strong>React Next</strong> Backend: <strong> Node Express</strong> with <strong>PostgreSQL database</strong>.
				<br />Electronics: 
				</p>
			</aside>

			*/}
		</div>
	</div>
</div>

)}
