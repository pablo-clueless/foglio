import { Link, NavLink } from "react-router-dom"
import { List } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

import { useUserStore } from "store/z-store/user"
import { NavLinks } from "constants"
import { Avatar } from "./Avatar"
import { Button } from "./Button"

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const { user } = useUserStore()

	const handleScroll = () => setScrolled(window.scrollY > 600)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav
			className={`left-0 top-0 !z-[3] flex w-full items-center justify-between px-5 py-4 transition-all duration-500 lg:px-60 ${scrolled ? "fixed border-b bg-dark-400" : "relative bg-transparent"}`}>
			<div className="block lg:hidden">
				<button name="nav-button" onClick={() => setIsOpen(!isOpen)}>
					<List
						className={`text-2xl transition-all duration-500 ${isOpen ? "rotate-90" : ""}`}
					/>
				</button>
			</div>
			<div className="hidden items-center gap-2 lg:flex lg:gap-4">
				{NavLinks.map((link, index) => (
					<NavLink
						key={index}
						to={link.path}
						className={({ isActive }) =>
							`link transition-color text-xl capitalize duration-500 hover:text-light ${isActive ? "text-light" : "text-gray-400"}`
						}>
						{link.name}
					</NavLink>
				))}
			</div>
			{user ? (
				<Link to="/me">
					<Avatar src={user?.imageUrl} alt={user.name} size="sm" />
				</Link>
			) : (
				<Button as="link" to="/login">
					Login
				</Button>
			)}
			{isOpen && (
				<div className="absolute left-0 top-full flex w-full flex-col border-b bg-dark-400 p-4 lg:hidden">
					{NavLinks.map((link, index) => (
						<NavLink
							key={index}
							to={link.path}
							onClick={() => setIsOpen(false)}
							className={({ isActive }) =>
								`link transition-color capitalize duration-500 hover:text-light ${isActive ? "text-light" : "text-gray-400"}`
							}>
							{link.name}
						</NavLink>
					))}
				</div>
			)}
		</nav>
	)
}
