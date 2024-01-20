import { usePageTitle } from "hooks"

const Page = () => {
	usePageTitle("Find Jobs")

	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-60">
			<p className="text-sm text-accent lg:text-base">For Talents</p>
			<p className="text-2xl font-semibold lg:text-4xl">Job Listing</p>
			<p className="text-xl font-semibold text-gray-400 lg:text-2xl">
				Find the perfect team for you.
			</p>
			<div className="mt-10 w-full">
				<div className="grid w-full grid-cols-5 gap-3">
					<p className="text-base text-gray-400 lg:text-lg">Team</p>
					<p className="col-span-2 text-base text-gray-400 lg:text-lg">Position</p>
					<p className="text-base text-gray-400 lg:text-lg">Posted By</p>
					<p className="text-base text-gray-400 lg:text-lg">Posted</p>
				</div>
			</div>
		</main>
	)
}

export default Page
