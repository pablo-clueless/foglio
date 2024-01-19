import "./loader.css"

const Loader = () => {
	return (
		<div className="fixed left-0 top-0 grid h-screen w-screen place-items-center bg-dark-400">
			<svg viewBox="25 25 50 50" className="loader">
				<circle r="20" cx="50" cy="50" className="loader-circle" />
			</svg>
		</div>
	)
}

export default Loader
