import { useEffect, useState, useTransition } from "react"
import { useLocation } from "react-router-dom"

const useConcurrentTransition = () => {
	const location = useLocation()
	const [oldLocation, setOldLocation] = useState(location)
	const [, startTransition] = useTransition()

	useEffect(() => {
		setOldLocation((oldLocation) =>
			oldLocation.pathname !== location.pathname ||
			oldLocation.search !== location.search
				? location
				: oldLocation
		)
	}, [location])

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		startTransition(() => {})
	}, [oldLocation])

	return oldLocation
}

export default useConcurrentTransition
