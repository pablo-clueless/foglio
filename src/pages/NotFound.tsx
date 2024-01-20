import { usePageTitle } from "hooks"
import { Button } from "components"

const Page = () => {
	usePageTitle("You seem lost")

	return (
		<main className="w-sreen relative grid h-screen place-items-center">
			<div className="!z-[1] flex flex-col items-center justify-center">
				<p className="stroked text-7xl font-bold lg:text-9xl">404</p>
				<p className="text-xl font-bold text-gray-400 lg:text-4xl">
					Page not found
				</p>
				<Button as="link" to="/">
					Go Home
				</Button>
			</div>
		</main>
	)
}

export default Page
