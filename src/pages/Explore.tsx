const Page = () => {
	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-60">
			<p className="text-sm text-accent lg:text-base">For Networking</p>
			<p className="text-2xl font-semibold lg:text-4xl">Explore</p>
			<p className="text-xl font-semibold text-gray-400 lg:text-2xl">
				Connect with thousands of professionals around the world.
			</p>
			<div className="my-5 grid w-full grid-cols-1 gap-5 lg:grid-cols-3"></div>
		</main>
	)
}

export default Page