import { useFormik } from "formik"

import { Button, Input } from "components"
import { usePageTitle } from "hooks"

const Page = () => {
	usePageTitle("Search Foglio")

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues: { query: "" },
		onSubmit: (values) => console.log(values),
	})

	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-60">
			<p className="text-sm text-accent lg:text-base">Search Foglio</p>
			<p className="text-2xl font-semibold lg:text-4xl">Search</p>
			<p className="text-xl font-semibold text-gray-400 lg:text-2xl">
				Comb the database for the best fit.
			</p>
			<div className="mt-10 w-full">
				<form onSubmit={handleSubmit} className="w-full lg:w-[400px]">
					<Input
						typed="text"
						id="query"
						onChange={handleChange}
						placeholder="Find talents..."
						error={errors.query}
					/>
					<Button type="submit">Search</Button>
				</form>
			</div>
		</main>
	)
}

export default Page
