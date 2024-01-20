export type UserProps = {
	id: string
	username: string
	name: string
	role: string
	location: string
	about: string
	website: string
	email: string
	image: string
	contact: {
		[key: string]: string
	}
	projects: ProjectProps[]
	education: EducationProps[]
	experience: ExperienceProps[]
}

export type ProjectProps = {
	id: string
	title: string
	url: string
	year: number
}

export type EducationProps = {
	id: string
	institution: string
	url: string
	degree: string
	major: string
	location: string
	from: number
	to: number
}

export type ExperienceProps = {
	id: string
	company: string
	url: string
	position: string
	from: number
	to: number
	description: string
}

export type TestimonialProps = {
	id: string
	name: string
	image: string
	company: string
	content: string
}
