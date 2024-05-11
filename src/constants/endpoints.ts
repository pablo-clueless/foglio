const baseUrl = import.meta.env.VITE_API_URL

export const endpoints = (param?: string | null, query?: string | null) => {
	const auth = {
		signup: `${baseUrl}/auth/signup`,
		signin: `${baseUrl}/auth/signin`,
		me: `${baseUrl}/auth/me`,
	}

	const job = {
		create: `${baseUrl}/job`,
		findAll: `${baseUrl}/job?${query}`,
		findOne: `${baseUrl}/job/${param}`,
		update: `${baseUrl}/job/${param}`,
		remove: `${baseUrl}/job/${param}`,
	}

	const team = {
		create: `${baseUrl}/team`,
		findAll: `${baseUrl}/team?${query}`,
		findOne: `${baseUrl}/team/${param}`,
		update: `${baseUrl}/team/${param}`,
		remove: `${baseUrl}/team/${param}`,
	}

	return {
		auth,
		job,
		team,
	}
}
