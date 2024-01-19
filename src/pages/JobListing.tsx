import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"

import { Button, Loader } from "components"
import jobs from "jobs.json"

const Page = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const job = jobs.data.find((job) => job.id === id)

	if (!job) return <Loader />

	return (
		<main className="flex w-full flex-col gap-5 px-5 py-10 lg:px-60">
			<button onClick={() => navigate(-1)}>
				<ArrowLeft />
			</button>
			<div className="flex w-full items-center justify-between">
				<p className="text-xl text-gray-400 lg:text-2xl">{job.team}</p>
				<Button type="button">Apply for this position</Button>
			</div>
			<p className="text-xl font-semibold capitalize lg:text-3xl">
				{job.position}
			</p>
			<div className="flex w-full flex-wrap items-center gap-2">
				{job.tags.map((tag, index) => (
					<span
						key={index}
						className="rounded-xl bg-dark-300 px-2 capitalize text-gray-400">
						{tag}
					</span>
				))}
			</div>
			<div className="flex w-full flex-col gap-4">
				<p className="text-base text-gray-400 lg:text-lg">
					Posted By: <b className="text-light">{job.posted_by.name}</b>
				</p>
				<p className="text-base text-gray-400 lg:text-lg">
					Location: <b className="text-light">{job.location}</b>
				</p>
				<p className="text-base text-gray-400 lg:text-lg">
					Posted:{" "}
					<b className="text-light">
						{new Date(job.posted).toLocaleDateString("en-NG")}
					</b>
				</p>
			</div>
		</main>
	)
}

export default Page
