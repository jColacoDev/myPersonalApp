import "./NeonScroll.scss"
import React from 'react'

export default function NeonScroll() {
  return (
    <div className="NeonScroll">
        <div className="main">
	<div className="head">
		<h1 className="headline">News and Future</h1>
		<h2 className="subhead">
            This page is dedicated to ideas for current and future development!
            <br/> If you are interested, contact me to make it our project! 
		</h2>
		<div className="article-meta">
			<div className="author">
				<svg id="author-avatar" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
					<title id="avatarTitle">Author Avatar</title>
					<desc id="avatarDesc">
						A cartoon avatar of a smiling purple square on a blue
						background.
					</desc>
					<mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
						<rect width="36" height="36" rx="72" fill="white"></rect>
					</mask>
					<g mask="url(#mask__beam)">
						<rect width="36" height="36" fill="#0ebeff"></rect>
						<rect x="0" y="0" width="36" height="36" transform="translate(6 6) rotate(192 18 18) scale(1)" fill="#754cac" rx="6"></rect>
						<g transform="translate(0 2) rotate(-2 18 18)">
							<path d="M13,19 a1,0.75 0 0,0 10,0" fill="white"></path>
							<rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect>
							<rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect>
						</g>
					</g>
				</svg>
				<div className="author__info">
					<p className="byline">By: Penny Pen</p>
					<p className="dateline">June 21, 2021</p>
				</div>
			</div>
			<p className="article-tags">
				<span className="tag">culture</span> <span className="tag">games</span>
				<span className="tag featured">featured</span>
			</p>
		</div>
	</div>
	<div className="content">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
			quidem est minima quam! Laborum odit quidem earum perferendis eius
			laudantium perspiciatis similique deleniti delectus suscipit, cum
			corrupti facere reprehenderit esse.
		</p>
		<p>
			Animi aut, atque quibusdam similique distinctio enim iure, blanditiis
			rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo,
			libero dolore atque magni, ullam nihil corrupti et illo earum?
		</p>
		<p>
			Quos, ad? Et, iure. Officia fuga unde quibusdam nemo modi perspiciatis
			quisquam consectetur voluptates, dolore ab eaque voluptatem corporis
			placeat consequatur itaque qui asperiores. Consequuntur quas vitae
			animi est ea!
		</p>
		<p>
			Accusantium nemo labore corrupti laudantium! Quo reprehenderit ea
			perspiciatis temporibus! Illo sapiente harum fuga molestias temporibus
			iste animi. Velit, tenetur mollitia sit magni nulla quos veniam
			molestias consectetur aliquam eaque.
		</p>
		<p>
			Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit
			laboriosam voluptatum similique, fugit culpa enim! Suscipit labore
			odit porro assumenda, molestiae aperiam laboriosam explicabo nemo
			soluta facere sed libero magnam. Odio.
		</p>

		<aside>
			<p>Quos, ad? Et, iure. Libero dolore atque magni.</p>
		</aside>

		<figure>
			<img src="https://assets.codepen.io/t-1/freddy-g-lhy1lY3CyLI-unsplash.jpg" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
			<figcaption>Photo by Freddy G</figcaption>
		</figure>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
			quidem est minima quam! Laborum odit quidem earum perferendis eius
			laudantium perspiciatis similique deleniti delectus suscipit, cum
			corrupti facere reprehenderit esse. Sed officia ipsum, soluta
			quibusdam enim quisquam ea atque nulla sunt temporibus, dolorum veniam
			dolor aspernatur quod. Praesentium vitae exercitationem quod,
			inventore eius quidem ea sit, nemo reprehenderit voluptatum officia.
		</p>
		<p>
			Animi aut, atque quibusdam similique distinctio enim iure, blanditiis
			rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo,
			libero dolore atque magni, ullam nihil corrupti et illo earum?
		</p>
		<p>
			Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit
			laboriosam voluptatum similique, fugit culpa enim! Suscipit labore
			odit porro assumenda, molestiae aperiam laboriosam explicabo nemo
			soluta facere sed libero magnam. Odio.
		</p>
		<p>
			Quae, cumque blanditiis? Nisi rem ullam, ducimus qui praesentium,
			temporibus mollitia ex voluptatibus aut accusamus reprehenderit soluta
			eius expedita dicta adipisci debitis repudiandae quibusdam laborum
			possimus cupiditate quidem doloribus quas.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae
			debitis reiciendis nam molestias, iure, recusandae magnam cupiditate
			ut dolore aliquam nesciunt ipsum sit illum nihil quibusdam mollitia
			veritatis maiores.
		</p>
		<h2>Game Over?</h2>

		<p>
			Animi aut, atque quibusdam similique distinctio enim iure, blanditiis
			rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo,
			libero dolore atque magni, ullam nihil corrupti et illo earum?
		</p>

		<figure>
			<img src="https://assets.codepen.io/t-1/element5-digital-dwcC-OJ-bRs-unsplash.jpg" alt="three neon-lit skee ball lanes. " />
			<figcaption>Photo by Element5 Digital</figcaption>
		</figure>
		<p>
			Velit vero esse quisquam accusantium? Dolore alias, quaerat quod
			excepturi officiis ipsa placeat officia necessitatibus illo, vero
			quasi esse aut. Doloremque nesciunt placeat animi saepe tempore
			aspernatur, officia vitae laudantium!
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
			quidem est minima quam! Laborum odit quidem earum perferendis eius
			laudantium perspiciatis similique deleniti delectus suscipit, cum
			corrupti facere reprehenderit esse.
		</p>
		<p>
			Aperiam est ab harum alias quae rem, cumque vero. Dolore possimus quas
			eius dolor voluptatibus cumque velit, ratione aspernatur voluptatem?
			Nulla voluptatem quaerat placeat error, ipsam alias dignissimos odit
			excepturi?
		</p>
		<p>
			Consectetur sed, itaque modi fugit asperiores similique maxime
			voluptatum incidunt labore vero cumque provident, deleniti nam?
			Molestiae impedit nostrum soluta quo iure, iste, nobis expedita minus
			ad officia dolor saepe.
		</p>
		<aside>
			<p>Labore vero cumque provident, deleniti nam, cumque vero.</p>
		</aside>
		<p>
			Consectetur sed, itaque modi fugit asperiores similique maxime
			voluptatum incidunt labore vero cumque provident, deleniti nam?
			Molestiae impedit nostrum soluta quo iure, iste, nobis expedita minus
			ad officia dolor saepe.
		</p>
		<p>
			Aperiam est ab harum alias quae rem, cumque vero. Dolore possimus quas
			eius dolor voluptatibus cumque velit, ratione aspernatur voluptatem?
			Nulla voluptatem quaerat placeat error, ipsam alias dignissimos odit
			excepturi?
		</p>
	</div>
</div>
    </div>
  )
}
