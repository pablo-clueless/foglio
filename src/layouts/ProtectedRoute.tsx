import { Navigate, Outlet } from "react-router-dom"

import { useUserStore } from "store/z-store/user"

const ProtectedRoute = () => {
	const { user } = useUserStore()

	return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
