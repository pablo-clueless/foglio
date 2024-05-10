import { ComponentProps } from "react"

type Props = ComponentProps<"div"> & {
	onClose: () => void
}

export const Backdrop = (props: Props) => {
	return (
		<div
			onClick={props.onClose}
			className="fixed left-0 top-0 !z-[4] grid h-screen w-screen place-items-center overflow-hidden bg-dark-400/40 backdrop-blur-sm">
			<div
				onClick={(e) => e.stopPropagation()}
				className="max-h-fit w-[90%] max-w-[700px]">
				{props.children}
			</div>
		</div>
	)
}
