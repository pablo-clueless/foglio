export type UserProps = {
	about: string
	contact: {
		[key: string]: string
	}
	education?: EducationProps[]
	email: string
	experience?: ExperienceProps[]
	id: string
	imageUrl: string
	location: string
	name: string
	projects?: ProjectProps[]
	role: string
	username: string
	website: string
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

export type CertificationProps = {
	id: string
	title: string
	issuedBy: string
	year: number
	url: string
	description: string
}

export type TestimonialProps = {
	id: string
	name: string
	image: string
	company: string
	content: string
}
