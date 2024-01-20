import { post } from "assets/images"

const Page = () => {
	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-60">
			<p className="text-sm text-accent lg:text-base">What is Foglio?</p>
			<p className="text-2xl font-semibold lg:text-4xl">Foglio</p>
			<p className="text-xl font-semibold text-gray-400 lg:text-2xl">
				Connecting professionals across the world.
			</p>
			<div className="my-5 aspect-[1.78/1] w-full rounded-2xl border">
				<img src={post} alt="" className="h-full w-full rounded-2xl" />
			</div>
			<div className="w-full">
				<p className="text-2xl font-semibold lg:text-4xl">
					You don't need to worry about curating your portfolio.{" "}
					<span className="text-accent">Foglio</span> will take care of that for you.
					You can focus on your skills and professional experience.{" "}
					<span className="text-accent">Foglio</span> will help you find the right
					talents for your team.
				</p>
			</div>
		</main>
	)
}

export default Page
