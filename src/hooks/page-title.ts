import { useEffect } from "react"

const usePageTitle = (title: string) => {
	useEffect(() => {
		document.title = `${title} - TSL`
	}, [title])
}

export default usePageTitle
