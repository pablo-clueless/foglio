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
}
