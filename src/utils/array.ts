export const objectToArray = (obj: Record<string, string>) => {
	return Object.keys(obj).map((key) => {
		return {
			key,
			value: obj[key],
		}
	})
}
