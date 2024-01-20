import { Link } from "react-router-dom"
import { useFormik } from "formik"

import { Button, Input } from "components"
import { Features } from "constants"

const Page = () => {
	const { errors, handleChange, handleSubmit, values } = useFormik({
		initialValues: { email: "" },
		onSubmit: (values, { resetForm }) => {
			console.log(values)
			resetForm()
		},
	})

	return (
		<main className="flex w-full flex-col gap-5 px-5 py-10 lg:gap-20 lg:px-60">
			<section className="shadow-glow-2xl grid aspect-[3/2] w-full place-items-center rounded-2xl bg-gradient-to-r from-main via-accent to-light p-1 lg:aspect-[3/1]">
				<div className="grid h-full w-full place-items-center rounded-2xl bg-dark-300">
					<p className="text-5xl font-bold text-light lg:text-8xl">Foglio</p>
				</div>
			</section>
			<section className="grid w-full place-items-center">
				<div className="flex w-full flex-col items-center text-center xl:w-2/3">
					<p className="text-4xl font-semibold text-light lg:text-6xl">
						Every great opportunity starts with a good portfolio.
					</p>
					<p className="text-wrap text-xl text-gray-400 lg:text-3xl">
						Create your portfolio and show your skills to the world. Designed from the
						ground up to assist you in locating fresh prospects or your next
						outstanding hiring.
					</p>
					<Link to="/login" className="link main text-main lg:text-2xl">
						Get started
					</Link>
				</div>
			</section>
			<section className="grid w-full place-items-center"></section>
			<section className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
				{Features.map((feature, index) => (
					<div key={index} className="w-full">
						<div className="aspect-[3/2] w-full overflow-hidden rounded-3xl border-[1px]">
							<img src={feature.image} alt="" className="h-full w-full object-cover" />
						</div>
						<div className="w-full">
							<p className="text-xl lg:text-2xl">{feature.title}</p>
							<p className="text-accent lg:text-lg">{feature.subtitle}</p>
						</div>
					</div>
				))}
			</section>
			<section className="grid w-full place-items-center">
				<div className="flex flex-col items-center">
					<p className="text-2xl font-bold text-light lg:text-4xl">
						Subscribe to our newsletter to get updates.
					</p>
					<p className="text-gray-400 lg:text-xl">
						We promise not to spam you with emails.
					</p>
					<form
						onSubmit={handleSubmit}
						className="my-5 flex w-full flex-col items-center gap-5 lg:w-[400px]">
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
				</div>
			</section>
			<section className="grid w-full place-items-center rounded-2xl border border-dark-300 bg-dark-300 p-4 py-20 text-light transition-all duration-300 hover:border-dark-100">
				<div className="flex w-full flex-col items-center gap-5 text-center">
					<p className="text-xl text-gray-400 lg:text-3xl">
						Time to create the Foglio of your dreams.
					</p>
					<p className="text-center text-4xl font-bold lg:text-6xl">
						Get started with <span className="text-accent">Foglio</span> today.
					</p>
					<Button as="link" to="/login">
						Create a Foglio account
					</Button>
				</div>
			</section>
		</main>
	)
}

export default Page
