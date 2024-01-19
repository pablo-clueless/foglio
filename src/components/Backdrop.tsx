import { ComponentProps, useEffect } from "react"

type Props = ComponentProps<"div"> & {
	onClose: () => void
}

const Backdrop = (props: Props) => {
	useEffect(() => {
		document.body.style.overflow = "hidden"
		return () => {
			document.body.style.overflow = "auto"
		}
	}, [])

	return (
		<div
			onClick={props.onClose}
			className="w-screem fixed left-0 top-0 !z-10 grid h-screen place-items-center overflow-hidden bg-black/40 backdrop-blur-sm">
			<div onClick={(e) => e.stopPropagation()} className="w-full">
				{props.children}
			</div>
		</div>
	)
}

export default Backdrop
