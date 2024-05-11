export type HttpError = {
	response: {
		data: {
			error: boolean
			message: string
		}
	}
}
