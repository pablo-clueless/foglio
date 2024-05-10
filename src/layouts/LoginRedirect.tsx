import { Navigate, Outlet } from "react-router-dom"

import { useUserStore } from "store/z-store/user"

const LoginRedirect = () => {
	const { user } = useUserStore()

	return user ? <Navigate to="/" /> : <Outlet />
}

export default LoginRedirect
