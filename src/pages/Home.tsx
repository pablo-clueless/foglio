import { Link } from "react-router-dom"
import { useFormik } from "formik"

import { Button, Input } from "components"
import { Features } from "constants"
import { usePageTitle } from "hooks"

const Page = () => {
	usePageTitle("Build the perfect portfolio")

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
				<div className="size-[300px] rounded-2xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
						x="0px"
						y="0px"
						viewBox="0 0 100 100"
						className="fill-none stroke-accent"
						id="cubes"
						xmlSpace="preserve">
						<path d="M94.3,52.1c0-0.1,0-0.2-0.1-0.3l-0.1-0.1c0-0.1-0.1-0.1-0.2-0.2l-4.3-2.2l4.1-2.1c0.1,0,0.2-0.1,0.2-0.1l0.1-0.1  c0.1-0.1,0.1-0.2,0.1-0.2l0.1-0.1c0-0.1,0.1-0.2,0.1-0.3l0-19.4c0-0.1,0-0.3-0.1-0.4l-0.1-0.1c-0.1-0.1-0.1-0.2-0.2-0.2l-18.5-9.3  c-0.3-0.1-0.6-0.1-0.8,0l-5.3,2.7v-4.7c0-0.2,0-0.3-0.1-0.4l-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2L50.4,5.1c-0.3-0.1-0.6-0.1-0.8,0  l-18.4,9.2l-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2l-0.1,0.1c-0.1,0.1-0.1,0.3-0.1,0.4v6l-5.3-2.7c-0.3-0.1-0.6-0.1-0.8,0L6.1,27.7  L6,27.7c-0.1,0.1-0.1,0.1-0.2,0.2L5.8,28c-0.1,0.1-0.1,0.3-0.1,0.4v19.3l0,0.1c0,0.1,0,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.3  c0,0,0.1,0.1,0.2,0.2l4.1,2.1l-4.1,2.1L6,52.8c-0.1,0.1-0.1,0.1-0.2,0.2l-0.1,0.1c0,0.1-0.1,0.2-0.1,0.3l0,19.4l0,0.1  c0,0.1,0,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.3c0,0,0.1,0.1,0.2,0.2l18.4,9.2l0.1,0c0.2,0.1,0.4,0.1,0.6,0l5.5-2.7v4.7l0.1,0.3  c0,0.1,0.1,0.1,0.1,0.2l0.1,0.1c0.1,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0,0l18.5,9.3l0.1,0c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1  l18.5-9.2l0.1-0.1c0,0,0.1-0.1,0.1-0.1l0.2-0.3c0-0.1,0-0.1,0-0.2l0-6.2l5.3,2.7l0,0c0.2,0.1,0.5,0.1,0.7,0l18.5-9.2  c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0,0,0l0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.3l0-19.2l0,0L94.3,52.1z M92.5,45.9  L76,54.2V36.9l16.5-8.3V45.9z M75.1,19l16.3,8.2l-16.3,8.2l-16.3-8.2L75.1,19z M69.2,40.1L69.2,40.1c-0.1-0.2-0.2-0.2-0.3-0.3  l-11.3-5.7v-5.5l16.5,8.3l0,17.2l-4.8-2.4V40.5C69.3,40.4,69.3,40.2,69.2,40.1z M32.5,42l16.5,8.3l0,17.2l-16.5-8.3V42z M31.2,39.7  l-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2l-0.1,0.1c-0.1,0.1-0.1,0.2-0.1,0.3l0,12.6l-4.8,2.4V38.2L42.4,30v4.2L31.2,39.7z M33.7,40.5  L50,32.4l16.3,8.2L50,48.7L33.7,40.5z M50.9,50.3L67.5,42v17.2l-16.5,8.3V50.3z M67.5,20.8l-11.2,5.6l-0.1,0.1  c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.3-0.1,0.5v6l-4.8-2.4v-5.9l16.5-8.3V20.8z M50,6.9l16.3,8.2L50,23.3l-16.3-8.2L50,6.9z   M32.5,16.6l16.5,8.3l0,5.9l-4.8,2.4v-4.7c0-0.2,0-0.3-0.2-0.5c-0.1-0.1-0.2-0.2-0.3-0.2l-11.3-5.7V16.6z M24.9,20.3l16.3,8.2  l-16.3,8.2L8.6,28.5L24.9,20.3z M7.5,47.2V30L24,38.2l0,17.2L7.5,47.2z M7.5,72.3V55L24,63.3l0,17.2L7.5,72.3z M24.9,61.7L8.6,53.5  l3.7-1.9l12.2,6.1l0.1,0c0.2,0.1,0.4,0.1,0.6,0l5.4-2.7v3.7L24.9,61.7z M30.8,65.2c-0.1,0.1-0.1,0.3-0.1,0.4v12.5l-4.8,2.4V63.3  l5.3-2.7l4.2,2.1l-4.1,2l-0.1,0.1l0,0C31,64.9,30.9,65,30.8,65.2l0.5,0.2L30.8,65.2z M32.5,84.3V67.1l16.5,8.3l0,17.2L32.5,84.3z   M50,73.8l-16.3-8.2l3.7-1.9l12.2,6.1l0.1,0c0.2,0.1,0.4,0.1,0.6,0l12.3-6.1l3.7,1.9L50,73.8z M67.5,84.3l-16.5,8.3V75.4l16.5-8.3  V84.3z M69.3,76.8V65.6c0-0.2,0-0.3-0.1-0.4l-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2l-4.2-2.1l4.1-2.1l0.3-0.2c0.1-0.1,0.1-0.1,0.1-0.2  l0.1-0.1c0-0.1,0-0.1,0-0.2l0-0.4l4.8,2.4l0,17.2L69.3,76.8z M75.1,60.4l-5.8-2.9v-3.7l5.3,2.7l0.1,0c0.2,0.1,0.4,0.1,0.7,0  l12.3-6.1l3.7,1.9L75.1,60.4z M92.5,71L76,79.2V62l16.5-8.3V71z" />
					</svg>
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
				<div className="flex flex-col items-center text-center">
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
