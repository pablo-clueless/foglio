import { useState } from "react"

import { TabOptions } from "constants"
import TabPanel from "./TabPanel"

const EditProfile = () => {
	const [tab, setTab] = useState(0)

	return (
		<div className="grid h-full w-full grid-cols-3 rounded-2xl bg-dark-300 p-4">
			<div className="flex h-full w-full flex-col items-start border-r">
				{TabOptions.map((opt, index) => (
					<button
						key={index}
						onClick={() => setTab(index)}
						className={`py-2 text-xs lg:text-xl ${index === tab ? "text-accent" : ""}`}>
						{opt.name}
					</button>
				))}
			</div>
			<div className="col-span-2 h-full w-full overflow-y-scroll">
				{TabOptions.map((opt, index) => (
					<TabPanel key={index} index={index} tabIndex={tab}>
						{opt.component}
					</TabPanel>
				))}
			</div>
		</div>
	)
}

export default EditProfile
