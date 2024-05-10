import Cookies from "js-cookie"

import { createPersistMiddleware } from "../middleware/persist"
import { UserProps } from "types"

interface UserStore {
	loading: boolean
	signIn: (user: UserProps, token: string) => void
	signOut: () => void
	user: UserProps | null
}

const initialState: UserStore = {
	loading: false,
	signIn: () => {},
	signOut: () => {},
	user: null,
}

export const useUserStore = createPersistMiddleware<UserStore>(
	"user",
	(set, _get, _store) => ({
		...initialState,
		signIn: (user, token) => {
			Cookies.set("FOGLIO_USER_TOKEN", token)
			set({ user })
		},
		signOut: () => {
			Cookies.remove("FOGLIO_USER_TOKEN")
			set({ user: null })
		},
	})
)
