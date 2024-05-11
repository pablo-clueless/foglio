import { ArrowRight } from "@phosphor-icons/react"
import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

import { Avatar, Backdrop, Button, EditProfile, Loader } from "components"
import { useGlobalContext, usePageTitle } from "hooks"
import { endpoints } from "constants/endpoints"
import { UserProps } from "types"
import { instance } from "utils"

const Page = () => {
	const navigate = useNavigate()
	usePageTitle("@me")

	const { data: user } = useQuery<UserProps>({
		queryFn: () =>
			instance
				.get(`${endpoints(String()).auth.me}`)
				.then(({ data }) => data?.data),
		queryKey: ["get-user"],
	})

	const { openEditor, handleOpenEditor } = useGlobalContext()

	if (!user) return <Loader />

	return (
		<>
			{openEditor === "edit" && (
				<Backdrop onClose={() => handleOpenEditor(null)}>
					<EditProfile />
				</Backdrop>
			)}
			<main className="w-full bg-dark-400/95 bg-grid-background bg-cover bg-center bg-no-repeat px-5 py-10 bg-blend-multiply lg:px-60">
				<div className="flex w-full items-center justify-between">
					<button onClick={() => navigate(-1)}>
						<ArrowRight className="rotate-180" />
					</button>
					<Button onClick={() => handleOpenEditor("edit")}>Edit Profile</Button>
				</div>
				<div className="mt-20 flex w-full flex-col gap-5">
					<div className="flex w-full items-center gap-5">
						<Avatar alt={user.name} size="lg" src={user.imageUrl} />
						<div className="flex flex-col">
							<h2 className="text-xl lg:text-4xl">{user.name}</h2>
							<p className="text-lg text-accent">@{user.username}</p>
							<a
								href={user.website}
								target="_blank"
								className="my-1 rounded-2xl bg-gray-800 px-3">
								{user.website}
							</a>
							<div className="flex items-center gap-4">
								{user.contact &&
									Object.keys(user.contact).map((key) => (
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
					<p>{user.about}</p>
					<div className="flex w-full flex-col gap-10 text-lg lg:text-xl">
						<div className="grid w-full grid-cols-3 gap-4">
							<p className="text-gray-400">Projects</p>
							<div className="col-span-2 w-full"></div>
						</div>
						<div className="grid w-full grid-cols-3 gap-4">
							<p className="text-gray-400">Work Experience</p>
							<div className="col-span-2 w-full"></div>
						</div>
						<div className="grid w-full grid-cols-3 gap-4">
							<p className="text-gray-400">Education</p>
							<div className="col-span-2 w-full"></div>
						</div>
						<div className="grid w-full grid-cols-3 gap-4">
							<p className="text-gray-400">Certifications</p>
							<div className="col-span-2 w-full"></div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Page
