import { persist } from "zustand/middleware"
import { create } from "zustand"

import { UserProps } from "../types/index"

interface UserStore {
	user: UserProps | null
	isLoggedIn: boolean
	login: (user: UserProps) => void
	logout: () => void
}

export const useStore = create<UserStore>()(
	persist(
		(set) => ({
			user: null,
			isLoggedIn: false,
			login: (user) => set(() => ({ user, isLoggedIn: true })),
			logout: () => set(() => ({ user: null, isLoggedIn: false })),
		}),
		{ name: "user" }
	)
)
