import { avatar } from "assets/images"
import { UserProps } from "types"

export const User: UserProps = {
	about:
		"Builder. A lover of the web and the endless possibilities it brings. Passionate artist. Constantly endeavors to get better and surpass my threshold and deliver outstanding results.",
	contact: {
		twitter: "https://twitter.com/pablo_clueless",
		github: "https://github.com/pablo-clueless",
		linkedin: "https://linkedin.com/in/samson-okunola/",
		instagram: "https://instagram.com/pablo_clueless",
		website: "https://okunolasamson.vercel.app",
		codepen: "https://codepen.io/pablo-clueless",
	},
	email: "smsnicheal@gmail.com",
	id: "",
	image: avatar,
	location: "Lagos",
	name: "Samson Okunola",
	role: "Software Engineer",
	username: "pablo_clueless",
	website: "https://okunolasamson.vercel.app",
	education: [
		{
			id: "ea5684ac-e47d-49f9-b8a2-6d2caa2eef1b",
			institution: "Yaba College of Technology",
			url: "https://yeabatech.edu.ng",
			degree: "National Diploma",
			major: "Computer Sciene",
			location: "Lagos",
			from: 2020,
			to: 2024,
		},
	],
	experience: [
		{
			id: "4bf18075-52c0-472e-805c-b17fb8c34621",
			company: "OnboardNG",
			url: "https://onboard.com.ng",
			position: "Frontend Developer",
			from: 2023,
			to: 2022,
			description: "",
		},
		{
			id: "f74db2c9-ab4a-4a9e-a6bb-3548b0843de1",
			company: "Zummit Africa",
			url: "https://zummitafrica.com",
			position: "Lead Developer",
			from: 2022,
			to: 2023,
			description: "",
		},
	],
	projects: [
		{
			id: "4f54bb16-e7ac-42c4-bf5c-48ab5d94882e",
			title: "OlonaGirl",
			url: "https://olonagirl.vercel.app",
			year: 2024,
		},
		{
			id: "a61b3687-08ee-4d8e-b23a-416728e22525",
			title: "Onboard",
			url: "https://onboard.com.ng",
			year: 2023,
		},
		{
			id: "a301cf32-0c4b-4317-bbc3-d827f0367e12",
			title: "Zummit Africa",
			url: "https://development.d23rav6l6c7mra.amplifyapp.com/",
			year: 2023,
		},
	],
}
