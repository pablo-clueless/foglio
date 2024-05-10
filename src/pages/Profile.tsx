import { ArrowRight, ArrowUpRight, DotsThree } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { Backdrop, EditProfile, Loader } from "components"
import { useGlobalContext, usePageTitle } from "hooks"
import { useUserStore } from "store/z-store/user"
import { endpoints } from "constants/endpoints"
import { objectToArray } from "utils"

const Page = () => {
	const [isCopied, setIsCopied] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const { user } = useUserStore()
	const navigate = useNavigate()
	usePageTitle("@me")

	const { data } = useQuery({
		queryFn: () => axios.get(`${endpoints(String(user?.id)).auth.me}`),
		queryKey: ["get-user"],
	})

	const { openEditor, handleOpenEditor } = useGlobalContext()

	const copy = async () => {
		navigator.clipboard.writeText(`https://foglio.vercel.app/${user?.username}`)
		setIsCopied(true)
		setTimeout(() => setIsOpen(false), 3000)
	}

	const handleClick = (e: MouseEvent) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClick)
		return () => document.removeEventListener("mousedown", handleClick)
	}, [])

	useEffect(() => {
		const timeout = setTimeout(() => setIsCopied(false), 2000)
		return () => clearTimeout(timeout)
	}, [isCopied])

	if (user === null) return <Loader />

	return (
		<>
			{openEditor === "edit" && (
				<Backdrop onClose={() => handleOpenEditor(null)}>
					<EditProfile />
				</Backdrop>
			)}
			{openEditor === "print" && (
				<Backdrop onClose={() => handleOpenEditor(null)}>
					<div className="h-full w-full rounded-2xl bg-dark-300 p-4">Print</div>
				</Backdrop>
			)}
			<main className="w-full bg-dark-400/95 bg-grid-background bg-cover bg-center bg-no-repeat px-5 py-10 bg-blend-multiply lg:px-60">
				<div className="flex w-full items-center justify-between">
					<button onClick={() => navigate(-1)}>
						<ArrowRight className="rotate-180" />
					</button>
					<div className="relative">
						<button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
							<DotsThree />
						</button>
						{isOpen && (
							<div
								ref={ref}
								className="absolute right-0 top-full min-w-[150px] rounded-2xl bg-dark-300 p-4">
								<div className="flex w-full flex-col">
									<p
										onClick={() => handleOpenEditor("edit")}
										className="cursor-pointer p-2 hover:text-gray-400 lg:text-xl">
										Edit Profile
									</p>
									<p
										onClick={() => handleOpenEditor("print")}
										className="cursor-pointer p-2 hover:text-gray-400 lg:text-xl">
										Print resume
									</p>
									<p
										onClick={() => copy()}
										className="cursor-pointer p-2 hover:text-gray-400 lg:text-xl">
										{isCopied ? "Copied!" : "Copy link"}
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="mt-20 flex w-full flex-col gap-5">
					<div className="flex w-full items-center justify-between">
						<div className="flex items-center gap-4">
							<img
								src={user?.imageUrl}
								alt=""
								className="size-20 rounded-full object-cover lg:size-40"
							/>
							<div className="flex flex-col">
								<p className="text-2xl lg:text-6xl">{user.name}</p>
								<p className="text-lg font-light lg:text-2xl">
									{user.role} in {user.location}
								</p>
								<a
									href={user.website}
									target="_blank"
									className="w-fit rounded-2xl bg-dark-200 px-2">
									{user.website}
								</a>
							</div>
						</div>
					</div>
					<div className="flex w-full flex-col gap-10 text-lg lg:text-xl">
						<p className="flex w-full flex-col lg:w-2/3">
							<span>About</span>
							<span className="text-gray-400">{user.about}</span>
						</p>
						<p className="flex w-full flex-col lg:w-2/3">
							<span>Projects</span>
							<span className="text-gray-400">
								{user.projects?.map((project) => (
									<span
										key={project.id}
										className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
										<span className="w-[75px] capitalize lg:w-[120px]">
											{project.year}
										</span>
										<a
											href={project.url}
											target="_blank"
											className="link light flex items-center gap-1 text-light">
											{project.title} <ArrowUpRight size={12} />
										</a>
									</span>
								))}
							</span>
						</p>
						<p className="flex w-full flex-col lg:w-2/3">
							<span>Work Experience</span>
							<span className="text-gray-400">
								{user.experience.map((item) => (
									<span
										key={item.id}
										className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
										<span className="w-[75px] capitalize lg:w-[120px]">
											{item.from} - {item.to}
										</span>
										<a
											href={item.url}
											target="_blank"
											className="link light flex items-center gap-1 text-light">
											{item.position} at {item.company} <ArrowUpRight size={12} />
										</a>
									</span>
								))}
							</span>
						</p>
						<p className="flex w-full flex-col lg:w-2/3">
							<span>Education</span>
							<span className="text-gray-400">
								{user.education.map((item) => (
									<span
										key={item.id}
										className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
										<span className="w-[75px] capitalize lg:w-[120px]">
											{item.from} - {item.to}
										</span>
										<span className="flex flex-col gap-1 text-light">
											<span>
												{item.degree} in {item.major} at {item.institution}
											</span>
											<span className="text-lg text-gray-400">{item.location}</span>
										</span>
									</span>
								))}
							</span>
						</p>
						<p className="flex w-full flex-col lg:w-2/3">
							<span>Certifications</span>
							<span className="text-gray-400"></span>
						</p>
						<p className="flex w-full flex-col lg:w-2/3">
							<span>Contact</span>
							<span className="text-gray-400">
								{objectToArray(user.contact).map((item, index) => (
									<span
										key={index}
										className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
										<span className="w-[75px] capitalize lg:w-[120px]">{item.key}</span>
										<a
											href={item.value}
											target="_blank"
											className="link light flex items-center gap-1 text-light">
											{item.value} <ArrowUpRight size={12} />
										</a>
									</span>
								))}
							</span>
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default Page
