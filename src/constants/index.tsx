import { GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"

export const NavLinks = [
	{ name: "home", path: "/" },
	{ name: "explore", path: "/explore" },
	{ name: "jobs", path: "/job" },
	{ name: "recruiters", path: "/hire" },
	{ name: "about", path: "/about" },
]

export const FooterLinks = [
	{
		label: "for you",
		links: [
			{ name: "about", path: "/about" },
			{ name: "explore", path: "/explore" },
			{ name: "newsletter", path: "/" },
		],
	},
	{
		label: "for recruiters",
		links: [
			{ name: "hire", path: "/hire" },
			{ name: "search", path: "/search" },
			{ name: "post a job", path: "/" },
		],
	},
	{
		label: "company",
		links: [
			{ name: "support", path: "/" },
			{ name: "terms", path: "/" },
			{ name: "privacy", path: "/" },
		],
	},
]

export const Features = [
	{
		title: "Build your profile",
		subtitle:
			"A personal homepage featuring all of your ambitions and achievements",
		image: "/images/about.png",
	},
	{
		title: "Find your dream job",
		subtitle: "Search for your dream job and apply for it",
		image: "/images/about.png",
	},
	{
		title: "Scout the best talents",
		subtitle: "Explore the best talents in the world",
		image: "/images/about.png",
	},
	{
		title: "Connect with thousands of professionals",
		subtitle: "Find professionals with shared interests",
		image: "/images/about.png",
	},
]

export const Handles = [
	{
		name: "Github",
		logo: <GithubLogo />,
		url: "https://github.com/pablo-clueless/foglio",
	},
	{
		name: "Twitter",
		logo: <TwitterLogo />,
		url: "https://twitter.com/pablo_clueless",
	},
	{
		name: "Linkedin",
		logo: <LinkedinLogo />,
		url: "https://www.linkedin.com/in/samson-okunola/",
	},
]
