import { GithubLogo, GoogleLogo } from "@phosphor-icons/react"
import { useFormik } from "formik"

import { Button, Input } from "components"

const Page = () => {
	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues: { email: "" },
		onSubmit: (values) => console.log(values),
	})

	return (
		<main className="grid h-screen w-screen place-items-center">
			<div className="flex w-4/5 max-w-[350px] flex-col items-center rounded-2xl bg-dark-300 p-4">
				<Button type="button">
					<GoogleLogo /> Login with Google
				</Button>
				<Button type="button">
					<GithubLogo /> Login with Github
				</Button>
				<hr className="my-5 w-full bg-dark-100" />
				<form
					onSubmit={handleSubmit}
					className="flex w-full flex-col items-center gap-4">
					<Input
						typed="email"
						id="email"
						onChange={handleChange}
						error={errors.email}
						placeholder="Email"
					/>
					<Button type="submit">Login</Button>
				</form>
			</div>
		</main>
	)
}

export default Page
