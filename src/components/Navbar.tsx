import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

import { NavLinks } from "constants"
import { useStore } from "store"
import Button from "./Button"

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const { isLoggedIn } = useStore()

	const handleScroll = () => setScrolled(window.scrollY > 600)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav
			className={`left-0 top-0 !z-[5] flex w-full items-center justify-between px-5 py-4 lg:px-60 ${scrolled ? "fixed bg-transparent" : "static"}`}>
			<div className="flex items-center gap-2 lg:gap-4">
				{NavLinks.map((link, index) => (
					<NavLink
						key={index}
						to={link.path}
						className={({ isActive }) =>
							`link transition-color text-sm capitalize duration-500 hover:text-light lg:text-xl ${isActive ? "text-light" : "text-gray-400"}`
						}>
						{link.name}
					</NavLink>
				))}
			</div>
			{isLoggedIn ? (
				<Link to="/me" className="size-6 rounded-full bg-light lg:size-10"></Link>
			) : (
				<Button as="link" to="/login">
					Login
				</Button>
			)}
		</nav>
	)
}

export default Navbar
