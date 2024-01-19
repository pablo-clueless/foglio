import { ComponentProps } from "react"

type Props =
	| (Omit<ComponentProps<"input">, "type"> & {
			as?: "input"
			label?: React.ReactNode
			error?: string
			width?: string
			typed: React.InputHTMLAttributes<HTMLInputElement>["type"]
	  })
	| (ComponentProps<"textarea"> & {
			as: "textarea"
			label?: React.ReactNode
			error?: string
			width?: string
	  })
	| (ComponentProps<"select"> & {
			as: "select"
			label?: React.ReactNode
			error?: string
			width?: string
	  })

const Input = (props: Props) => {
	if (props.as === "textarea") {
		return (
			<div className={`flex flex-col ${props.width ? props.width : "w-full"}`}>
				<label htmlFor={props.id} className="text-sm text-gray-400">
					{props.label}
				</label>
				<textarea
					className="min-h-40 w-full resize-none rounded-3xl border border-dark-100 bg-transparent px-3 py-2 text-light"
					{...props}></textarea>
				{props.error && <p className="text-sm text-red-500">{props.error}</p>}
			</div>
		)
	}

	if (props.as === "select") {
		return (
			<div className={`flex flex-col ${props.width ? props.width : "w-full"}`}>
				<label htmlFor={props.id} className="text-sm text-gray-400">
					{props.label}
				</label>
				<select
					className="h-10 w-full rounded-3xl border border-dark-100 bg-transparent px-3 py-2 text-light"
					{...props}>
					{props.children}
				</select>
				{props.error && <p className="text-sm text-red-500">{props.error}</p>}
			</div>
		)
	}

	return (
		<div className={`flex flex-col ${props.width ? props.width : "w-full"}`}>
			<label htmlFor={props.id} className="text-sm text-gray-400">
				{props.label}
			</label>
			<input
				type={props.typed}
				className="h-10 w-full rounded-3xl border border-dark-100 bg-transparent px-3 py-2 text-light"
				{...props}
			/>
			{props.error && <p className="text-sm text-red-500">{props.error}</p>}
		</div>
	)
}

export default Input
