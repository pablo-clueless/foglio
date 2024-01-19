import { UserProps } from "types"

const ExploreCard = (props: UserProps) => {
	return (
		<div className="w-full rounded-2xl bg-dark-300 p-4 transition-all duration-500 hover:border-dark-100">
			<img
				src={props.image}
				alt=""
				className="size-6 rounded-full border-dark-100 object-cover"
			/>
			<p className="text-sm text-gray-400 lg:text-base">{props.name}</p>
			<p className="text-sm lg:text-base">{props.about}</p>
		</div>
	)
}

export default ExploreCard
