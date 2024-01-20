import { useEffect } from "react"

const usePageTitle = (title: string) => {
	useEffect(() => {
		document.title = `${title} - Foglio`
	}, [title])
}

export default usePageTitle
