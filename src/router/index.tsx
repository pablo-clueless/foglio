import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { LoginRedirect, Main, ProtectedRoute } from "layouts"
import { useConcurrentTransition } from "hooks"
import { Loader } from "components"
import {
	About,
	Explore,
	Home,
	JobListing,
	JobListings,
	Login,
	NotFound,
	Profile,
	Recruiters,
	Search,
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
					<Route path="job" element={<JobListings />} />
					<Route path="hire" element={<Recruiters />} />
					<Route path="about" element={<About />} />
					<Route path="search" element={<Search />} />
				</Route>
				<Route element={<LoginRedirect />}>
					<Route path="/login" element={<Login />} />
				</Route>
				<Route path="job/:id" element={<JobListing />} />
				<Route path="/:username" element={<User />} />
				<Route path="*" element={<NotFound />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/me" element={<Profile />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default Router
