import { ArrowRight, ArrowUpRight, DotsThree } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { objectToArray } from "utils"
import { Loader } from "components"
import { useStore } from "store"

const Page = () => {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const navigate = useNavigate()
	const { user } = useStore()

	const handleClick = (e: MouseEvent) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClick)
		return () => document.removeEventListener("mousedown", handleClick)
	}, [])

	if (user === null) return <Loader />

	return (
		<main className="w-full bg-dark-400/95 bg-grid-background bg-cover bg-center bg-no-repeat px-5 py-10 bg-blend-multiply lg:px-60">
			<button onClick={() => navigate(-1)}>
				<ArrowRight className="rotate-180" />
			</button>
			<div className="mt-20 flex w-full flex-col gap-5">
				<div className="flex w-full items-center justify-between">
					<div className="flex items-center gap-4">
						<img
							src={user.image}
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
					<div className="relative">
						<button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
							<DotsThree />
						</button>
						{isOpen && (
							<div
								ref={ref}
								className="absolute right-0 top-full min-w-[150px] rounded-2xl bg-dark-300 p-4">
								<div className="flex w-full flex-col">
									<p onClick={() => setIsOpen(false)} className="lg:text-xl">
										Copy link
									</p>
									<p onClick={() => setIsOpen(false)} className="lg:text-xl">
										Print resume
									</p>
								</div>
							</div>
						)}
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
	)
}

export default Page
