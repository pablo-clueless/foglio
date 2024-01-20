import { useFormik } from "formik"

import { Button, Input } from "components"
import { usePageTitle } from "hooks"

const initialValues = { name: "", email: "", subject: "", message: "" }

const Page = () => {
	usePageTitle("Help Center")

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (values) => console.log(values),
	})

	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-60">
			<p className="text-sm text-accent lg:text-base">Get in touch</p>
			<p className="text-2xl font-semibold lg:text-4xl">Help Center</p>
			<p className="text-xl font-semibold text-gray-400 lg:text-2xl">
				Talk to us, we're here to help.
			</p>
			<div className="my-5 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
				<div className="flex w-full flex-col gap-5 text-xl lg:gap-10 lg:text-xl">
					<div className="flex w-full flex-col">
						<p>Address</p>
						<p className="text-gray-400">Lagos, Nigeria 100261</p>
					</div>
					<div className="flex w-full flex-col">
						<p>Email</p>
						<a
							href="mailto:smsnmicheal@gmail.com"
							className="link dark_100 text-gray-400">
							smsnmicheal@gmail.com
						</a>
					</div>
					<div className="flex w-full flex-col">
						<p>Phone</p>
						<a href="tel:+2349023966260" className="link dark_100 text-gray-400">
							+2349023966260
						</a>
					</div>
				</div>
				<div className="w-full">
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
						<Input
							typed="text"
							id="name"
							onChange={handleChange}
							label="Name"
							error={errors.name}
						/>
						<Input
							typed="email"
							id="email"
							onChange={handleChange}
							label="Email"
							error={errors.email}
						/>
						<Input
							typed="text"
							id="subject"
							onChange={handleChange}
							label="Subject"
							error={errors.subject}
						/>
						<Input
							as="textarea"
							id="message"
							onChange={handleChange}
							label="Message"
							error={errors.message}
						/>
						<Button type="submit" width="w-[100px]">
							Submit
						</Button>
					</form>
				</div>
			</div>
		</main>
	)
}

export default Page
