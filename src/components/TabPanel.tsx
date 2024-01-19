import { ComponentProps } from "react"

interface Props extends ComponentProps<"div"> {
	index: number
}

const TabPanel = (props: Props) => {
	return (
		<div
			role="tabpanel"
			hidden={props.index !== props.tabIndex}
			id={`tab-${props.tabIndex}`}
			aria-labelledby={`tab-${props.tabIndex}`}>
			<div className="w-full p-2">{props.children}</div>
		</div>
	)
}

export default TabPanel
