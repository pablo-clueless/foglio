import { useFormik } from "formik"

import { Button, Input } from "components"
import { usePageTitle } from "hooks"

const Page = () => {
	usePageTitle("Newsletter")

	const { errors, handleChange, handleSubmit, values } = useFormik({
		initialValues: { email: "" },
		onSubmit: (values, { resetForm }) => {
			console.log(values)
			resetForm()
		},
	})

	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-60">
			<p className="text-sm text-accent lg:text-base">For Updates</p>
			<p className="text-2xl font-semibold lg:text-4xl">Newsletter</p>
			<p className="text-xl font-semibold text-gray-400 lg:text-2xl">
				Keep up with the latest news and updates.
			</p>
			<form
				onSubmit={handleSubmit}
				className="mt-4 flex w-full flex-col gap-2 lg:w-[400px]">
				<Input
					typed="email"
					id="email"
					value={values.email}
					onChange={handleChange}
					placeholder="Email"
					error={errors.email}
				/>
				<Button type="submit">Submit</Button>
			</form>
			<div className="my-5 grid w-full grid-cols-1 gap-5 lg:grid-cols-3"></div>
		</main>
	)
}

export default Page
