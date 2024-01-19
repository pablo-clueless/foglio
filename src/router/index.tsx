import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { useConcurrentTransition } from "hooks"
import { Loader } from "components"
import { Main } from "layouts"
import {
	About,
	Explore,
	Home,
	JobListing,
	JobListings,
	Login,
	Profile,
	Recruiters,
	User,
} from "pages"

const Router = () => {
	const location = useConcurrentTransition()

	return (
		<Suspense fallback={<Loader />}>
			<Routes location={location}>
				<Route path="/" element={<Main />}>
					<Route index element={<Home />} />
					<Route path="explore" element={<Explore />} />
					<Route path="jobs" element={<JobListings />} />
					<Route path="hire" element={<Recruiters />} />
					<Route path="about" element={<About />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="jobs/:id" element={<JobListing />} />
				<Route path="/me" element={<Profile />} />
				<Route path="/:username" element={<User />} />
			</Routes>
		</Suspense>
	)
}

export default Router
