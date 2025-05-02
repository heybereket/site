export default function Home() {
	const birthDate = new Date("2008-09-10");
	const today = new Date();

	const yearDiff = today.getFullYear() - birthDate.getFullYear();
	const hasHadBirthdayThisYear =
		today.getMonth() > birthDate.getMonth() ||
		(today.getMonth() === birthDate.getMonth() &&
			today.getDate() >= birthDate.getDate());

	const age = hasHadBirthdayThisYear ? yearDiff : yearDiff - 1;

	return (
		<div className="min-h-screen bg-white">
			<main className="p-8 text-black">
				<p>
					sup, im bereket. i took a pretty unconventional path to get where i am
					today.
				</p>

				<br />

				<b>a lil bit about me</b>
				<ul>
					<li>• {age} yrs old</li>
					<li>• i&apos;m 6&apos;4</li>
					<li>• ethopian 🇪🇹, born in kenya 🇰🇪, raised in canada 🇨🇦</li>
					<li>• currently living in toronto, canada</li>
					<li>• started coding when i was 10 years old 💻</li>
					<li>• dropped out of high school in grade 10</li>
					<li>• 26k+ followers on twitter</li>
					<li>• black belt in taekwondo 🥋</li>
				</ul>

				<br />

				<b>philosophy</b>
				<ul>
					<li>• cracked beats polished</li>
					<li>• chaos breeds clarity</li>
					<li>• demos over decks</li>
				</ul>

				<br />

				<b>where i&apos;ve worked</b>
				<ul>
					<li>• co-founder, cto @ butler (raised $1.2m)</li>
					<li>• swe intern @ shopify</li>
					<li>• founding engineer @ tunnel (neo &apos;23)</li>
					<li>• founding engineer @ aviato</li>
					<li>• co-founder @ buildergroop (7k+ members)</li>
				</ul>

				<br />

				<b>what ive done</b>
				<ul>
					<li>• had 2 successful startup exits</li>
					<li>• 1m+ mau across all my apps</li>
					<li>• product hunt maker of the year (runner up) &apos;21</li>
					<li>• won many international hackathons (nasa, etc)</li>
					<li>• programming captain @ frc 6070 (robotics)</li>
				</ul>

				<br />

				<b>on the news</b>
				<ul>
					<li>
						•{" "}
						<a
							href="https://www.businessinsider.com/12-year-old-developer-bereket-semagn-startup-projects-product-hunt-2021-7"
							target="_blank"
							rel="noreferrer"
						>
							https://www.businessinsider.com/12-year-old-developer-bereket-semagn-startup-projects-product-hunt-2021-7
						</a>
					</li>
					<li>
						•{" "}
						<a
							href="https://www.producthunt.com/newsletters/archive/7981"
							target="_blank"
							rel="noreferrer"
						>
							https://www.producthunt.com/newsletters/archive/7981
						</a>
					</li>
					<li>
						•{" "}
						<a
							href="https://www.producthunt.com/stories/announcing-the-golden-kitty-awards-2021-winners"
							target="_blank"
							rel="noreferrer"
						>
							https://www.producthunt.com/stories/announcing-the-golden-kitty-awards-2021-winners
						</a>
					</li>
					<li>
						•{" "}
						<a
							href="https://spaceq.ca/canadians-are-global-finalists-in-the-space-apps-challenge/"
							target="_blank"
							rel="noreferrer"
						>
							https://spaceq.ca/canadians-are-global-finalists-in-the-space-apps-challenge/
						</a>
					</li>
				</ul>

				<br />

				<b>how to reach me</b>
				<ul>
					<li>
						•{" "}
						<a
							href="mailto:semagnbereket@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							email
						</a>
					</li>
					<li>
						•{" "}
						<a
							href="https://www.linkedin.com/in/bereketsemagn"
							target="_blank"
							rel="noreferrer"
						>
							linkedin
						</a>
					</li>
					<li>
						•{" "}
						<a href="https://x.com/heybereket" target="_blank" rel="noreferrer">
							twitter (x)
						</a>
					</li>
				</ul>
			</main>
		</div>
	);
}
