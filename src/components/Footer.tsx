const Footer = () => {
	return (
		<footer className="w-full px-5 py-5 lg:px-60">
			<div className="w-full"></div>
			<div className="flex w-full items-center justify-between text-xs text-light lg:text-sm">
				<p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
				<p>Foglio</p>
			</div>
		</footer>
	)
}

export default Footer
