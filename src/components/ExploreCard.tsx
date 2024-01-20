import { Link } from "react-router-dom"

import { UserProps } from "types"

const ExploreCard = (props: UserProps) => {
	return (
		<Link
			to={`/user/${props.username}`}
			className="w-full rounded-2xl bg-dark-300 p-4 transition-all duration-500 hover:border-dark-100"></Link>
	)
}

export default ExploreCard
