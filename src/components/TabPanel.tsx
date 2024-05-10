import { ComponentProps } from "react"

type Props = ComponentProps<"div"> & {
	index: number
}

export const TabPanel = (props: Props) => {
	return (
		<div
			role="tabpanel"
			hidden={props.index !== props.tabIndex}
			id={`tab-${props.tabIndex}`}
			aria-labelledby={`tab-${props.tabIndex}`}>
			<div className="h-full w-full">{props.children}</div>
		</div>
	)
}
