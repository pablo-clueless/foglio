import { GithubLogo, GoogleLogo } from "@phosphor-icons/react"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import axios from "axios"

import { Button, Input, Spinner } from "components"
import { User } from "constants/user"
import { useStore } from "store"

const Page = () => {
	const navigate = useNavigate()
	const { login } = useStore()

	const { isPending } = useMutation({
		mutationFn: (email: string) =>
			axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, { email }),
		onSuccess: (data) => console.log(data),
		onError: (error) => console.log(error),
	})

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues: { email: "" },
		onSubmit: () => {
			login(User)
			navigate("/")
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
				<p className="text-center text-lg lg:text-xl">
					Enter your email and we will send you a magic link
				</p>
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
