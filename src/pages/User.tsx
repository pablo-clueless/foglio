import { MapPin } from "@phosphor-icons/react"
import { useParams } from "react-router-dom"

import { usePageTitle } from "hooks"
import { Navbar } from "components"
import { exploreList } from "mock"

const Page = () => {
	const { username } = useParams()

	const user = exploreList.find((user) => user.username === username)

	usePageTitle(`@${username}`)

	if (!user) return null

	return (
		<>
			<Navbar />
			<main className="w-full px-5 py-10 text-light lg:px-60">
				<div className="flex w-full flex-col">
					<div className="flex w-full items-center gap-5">
						<div className="size-28 rounded-full border border-light">
							<img
								src={user.imageUrl}
								alt=""
								className="size-full rounded-full object-cover"
							/>
						</div>
						<div className="flex flex-col">
							<h2 className="text-4xl">{user.name}</h2>
							<p className="text-lg text-accent">@{user.username}</p>
							<a
								href={user.website}
								target="_blank"
								className="my-1 rounded-2xl bg-gray-800 px-3">
								{user.website}
							</a>
							<div className="flex items-center gap-4">
								{Object.keys(user.contact).map((key) => (
									<a
										key={key}
										href={user.contact[key as keyof typeof user.contact]}
										target="_blank"
										className="link">
										{key}
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="mt-4 flex w-full items-center gap-2 lg:w-1/2">
						<MapPin /> {user.location}
					</div>
					<div className="my-4 w-full lg:w-1/2">
						<p>{user.about}</p>
					</div>
					<div className="flex w-full flex-col gap-10 lg:w-2/3">
						<div className="flex w-full flex-col gap-2">
							<p className="text-gray-400">Projects</p>
							<div className="flex w-full max-w-[250px] items-start"></div>
						</div>
						<div className="flex w-full flex-col gap-2">
							<p className="text-gray-400">Education</p>
							<div className="flex w-full max-w-[250px] items-start"></div>
						</div>
						<div className="flex w-full flex-col gap-2">
							<p className="text-gray-400">Experience</p>
							<div className="flex w-full max-w-[250px] items-start"></div>
						</div>
						<div className="flex w-full flex-col gap-2">
							<p className="text-gray-400">Certification</p>
							<div className="flex w-full max-w-[250px] items-start"></div>
						</div>
						<div className="flex w-full flex-col gap-2">
							<p className="text-gray-400">Projects</p>
							<div className="flex w-full max-w-[250px] items-start"></div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Page
