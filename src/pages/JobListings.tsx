import { Link } from "react-router-dom"

import jobs from "jobs.json"

const Page = () => {
	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-60">
			<p className="text-sm text-accent lg:text-base">For Talents</p>
			<p className="text-2xl font-semibold lg:text-4xl">Job Listing</p>
			<p className="text-xl font-semibold text-gray-400 lg:text-2xl">
				Find the perfect team for you.
			</p>
			<div className="my-5 w-full">
				<div className="grid w-full grid-cols-5 gap-3">
					<p className="text-base text-gray-400 lg:text-lg">Team</p>
					<p className="col-span-2 text-base text-gray-400 lg:text-lg">Position</p>
					<p className="text-base text-gray-400 lg:text-lg">Posted By</p>
					<p className="text-base text-gray-400 lg:text-lg">Posted</p>
				</div>
				{jobs.data.map((job) => (
					<div key={job.id} className="grid w-full grid-cols-5 gap-3 border-b py-4">
						<p className="text-base lg:text-lg">{job.team}</p>
						<Link
							to={`/jobs/${job.id}`}
							className="link col-span-2 text-base capitalize lg:text-lg">
							{job.position}
						</Link>
						<p className="text-base lg:text-lg">{job.posted_by.name}</p>
						<p className="text-base lg:text-lg">
							{new Date(job.posted).toLocaleDateString("en-NG")}
						</p>
					</div>
				))}
			</div>
		</main>
	)
}

export default Page
