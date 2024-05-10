import { Link, LinkProps } from "react-router-dom"
import { ComponentProps } from "react"

type Props =
	| (ComponentProps<"button"> & {
			as?: "button"
			width?: string
	  })
	| (LinkProps & {
			as: "link"
			width?: string
	  })

export const Button = (props: Props) => {
	if (props.as === "link") {
		return (
			<Link
				className={`my-1 flex h-8 items-center justify-center gap-1 rounded-2xl bg-light px-4 font-medium text-dark-400 transition-all duration-200 active:scale-[0.98] lg:text-lg ${props.width ? props.width : "w-fit"}`}
				{...props}>
				{props.children}
			</Link>
		)
	}

	return (
		<button
			className={`my-1 flex h-8 items-center justify-center gap-1 rounded-2xl bg-light px-4 font-medium text-dark-400 transition-all duration-200 active:scale-[0.98] lg:text-lg ${props.width ? props.width : "w-fit"}`}
			{...props}>
			{props.children}
		</button>
	)
}
