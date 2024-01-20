import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"

import { Button } from "components"

const Page = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	return (
		<main className="flex w-full flex-col gap-5 px-5 py-10 lg:px-60">
			<button onClick={() => navigate(-1)}>
				<ArrowLeft />
			</button>
			<div className="flex w-full flex-col">
				<div className="flex w-full items-center justify-between">
					<p className="text-xl text-gray-400 lg:text-2xl">Team</p>
					<Button type="button">Apply for this position</Button>
				</div>
				<p className="text-xl font-semibold capitalize lg:text-3xl">
					Position {id}
				</p>
			</div>
		</main>
	)
}

export default Page
