import { Link } from "react-router-dom"

const Page = () => {
	return (
		<main className="flex w-full flex-col gap-5 px-5 py-10 lg:px-60">
			<section className="relative grid aspect-[3/1] w-full place-items-center overflow-hidden rounded-2xl bg-dark-300">
				<p className="text-4xl font-bold text-light lg:text-8xl">Foglio</p>
			</section>
			<section className="flex w-full flex-col lg:w-2/3">
				<p className="text-2xl font-semibold text-light lg:text-4xl">
					Every great opportunity starts with a good portfolio.
				</p>
				<p className="text-wrap text-base text-gray-400 lg:text-xl">
					Create your portfolio and show your skills to the world. Designed from the
					ground up to assist you in locating fresh prospects or your next
					outstanding hiring.
				</p>
				<Link to="/login" className="link accent text-base text-accent lg:text-xl">
					Get started
				</Link>
			</section>
			<section className="w-full"></section>
			<section className="grid aspect-[3/1] w-full place-items-center rounded-2xl border border-dark-300 bg-dark-300 p-4 text-light transition-all duration-300 hover:border-dark-100"></section>
		</main>
	)
}

export default Page
