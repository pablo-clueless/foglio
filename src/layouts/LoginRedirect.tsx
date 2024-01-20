import { Navigate, Outlet } from "react-router-dom"

import { useStore } from "store"

const LoginRedirect = () => {
	const { isLoggedIn } = useStore()

	return isLoggedIn ? <Navigate to="/" /> : <Outlet />
}

export default LoginRedirect
