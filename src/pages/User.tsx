import { useParams } from "react-router-dom"

const Page = () => {
	const { username } = useParams()

	return (
		<main className="w-full px-5 py-10 lg:px-60">
			<div className="">User {username}</div>
		</main>
	)
}

export default Page
