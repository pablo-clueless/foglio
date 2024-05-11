interface Props {
	alt: string
	size: "sm" | "md" | "lg"
	src?: string
}

const getInitials = (value: string) =>
	value.split(" ").map((word) => word.charAt(0))

const AvatarSize = {
	sm: "size-6 lg:size-12",
	md: "size-10 lg:size-20",
	lg: "size-14 lg:size-28",
}

const TextSize = {
	sm: "text-xl",
	md: "text-3xl",
	lg: "text-6xl",
}

export const Avatar = ({ alt, size, src }: Props) => {
	if (!src) {
		return (
			<div
				className={`grid place-items-center rounded-full border border-gray-300 ${AvatarSize[size]}`}>
				<span className={`${TextSize[size]} font-bold`}>{getInitials(alt)}</span>
			</div>
		)
	}

	return (
		<div className={`rounded-full border border-gray-300 ${AvatarSize[size]}`}>
			<img src={src} alt={alt} className="size-full rounded-full object-cover" />
		</div>
	)
}
