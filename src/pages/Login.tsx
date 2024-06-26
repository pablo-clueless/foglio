import { GithubLogo, GoogleLogo } from "@phosphor-icons/react"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import axios from "axios"

import { Button, Input, Spinner } from "components"
import { useUserStore } from "store/z-store/user"
import { endpoints } from "constants/endpoints"
import { usePageTitle } from "hooks"
import { HttpError } from "types"

const initialValues = { email: "", password: "" }

const Page = () => {
	usePageTitle("Continue the journey")
	const { signIn } = useUserStore()
	const navigate = useNavigate()

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (payload: typeof initialValues) =>
			axios.post(`${endpoints().auth.signin}`, payload),
		onSuccess: ({ data }) => {
			const { token, user } = data?.data
			signIn(user, token)
			navigate("/me")
		},
		onError: ({ response }: HttpError) => {
			const { message } = response.data
			alert(message)
		},
	})

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (values) => {
			mutateAsync(values)
		},
	})

	return (
		<main className="grid h-screen w-screen place-items-center bg-dark-400/90 bg-grid-background bg-right-top bg-no-repeat bg-blend-multiply">
			<div className="flex w-4/5 max-w-[350px] flex-col items-center rounded-2xl bg-dark-200 p-4">
				<Button type="button">
					<GoogleLogo /> Login with Google
				</Button>
				<Button type="button">
					<GithubLogo /> Login with Github
				</Button>
				<hr className="my-5 w-full bg-dark-100" />
				<p className="text-center text-lg lg:text-xl">Continue with your email</p>
				<form
					onSubmit={handleSubmit}
					className="my-4 flex w-full flex-col items-center gap-4">
					<Input
						typed="email"
						id="email"
						onChange={handleChange}
						error={errors.email}
						placeholder="Email"
					/>
					<Input
						typed="password"
						id="password"
						onChange={handleChange}
						error={errors.password}
						placeholder="Password"
					/>
					<Button type="submit">{isPending ? <Spinner /> : "Login"}</Button>
				</form>
				<Link to="/" className="link flex items-center gap-1 text-lg">
					Home
				</Link>
			</div>
		</main>
	)
}

export default Page
