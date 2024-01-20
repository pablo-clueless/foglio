import { Link } from "react-router-dom"

import { FooterLinks, Handles } from "constants"

const Footer = () => {
	return (
		<footer className="w-full px-5 py-5 lg:px-60">
			<div className="my-5 flex w-full flex-wrap items-center justify-between gap-5">
				{FooterLinks.map((item, index) => (
					<div key={index} className="flex flex-col">
						<p className="text-sm capitalize text-accent lg:text-base">
							{item.label}
						</p>
						<div className="flex flex-col">
							{item.links.map((link, index) => (
								<Link
									key={index}
									to={link.path}
									className="link text-lg capitalize lg:text-xl">
									{link.name}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="flex w-full items-center justify-between text-light lg:text-lg">
				<p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
				<div className="flex items-center gap-4">
					<p>Foglio</p>
					<div className="flex items-center gap-2">
						{Handles.map((handle, index) => (
							<a
								key={index}
								href={handle.url}
								target="_blank"
								title={handle.name}
								className="text-xl">
								{handle.logo}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
