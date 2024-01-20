import { usePageTitle } from "hooks"
import { Button } from "components"

const Page = () => {
	usePageTitle("Hire Talents")

	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-60">
			<p className="text-sm text-accent lg:text-base">For Recruiters</p>
			<p className="text-2xl font-semibold lg:text-4xl">Find Talents</p>
			<p className="text-xl font-semibold text-gray-400 lg:text-2xl">
				Connect with the right candidates.
			</p>
			<Button type="button">Post a job</Button>
			<div className="my-5 grid w-full grid-cols-1 gap-5 lg:grid-cols-2"></div>
		</main>
	)
}

export default Page
