import { useParams } from "react-router-dom"

import { usePageTitle } from "hooks"

const Page = () => {
	const { username } = useParams()

	usePageTitle(`@${username}`)

	return (
		<main className="w-full px-5 py-10 lg:px-60">
			<div className="">User {username}</div>
		</main>
	)
}

export default Page
