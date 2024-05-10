import { Globe } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { UserProps } from "types"

interface Props {
	user: UserProps
}

export const ExploreCard = ({ user }: Props) => {
	return (
		<div className="w-full rounded-xl border border-light/50 p-1 transition-all duration-500 hover:border-light">
			<div className="w-full rounded-lg bg-light p-2 text-dark-400">
				<div className="flex w-full items-center justify-between">
					<div className="rounded-2xl bg-dark-400 px-2 py-1 text-xs text-light">
						{user.location}
					</div>
					<a href={user.website} target="_blank">
						<Globe />
					</a>
				</div>
				<div className="my-1 flex w-full items-center justify-between">
					<div className="">
						<p className="text-sm font-semibold">{user.role}</p>
						<h3 className="text-xl font-medium">{user.name}</h3>
					</div>
					<div className="size-10 rounded-full border border-dark-400">
						<img
							src={user.imageUrl}
							alt={user.name}
							className="size-full rounded-full object-cover"
						/>
					</div>
				</div>
			</div>
			<div className="flex w-full items-center justify-between p-2 text-light">
				<Link
					to={`/${user.username}`}
					className="rounded-2xl bg-light px-3 py-[1px] text-dark-400">
					View
				</Link>
			</div>
		</div>
	)
}
