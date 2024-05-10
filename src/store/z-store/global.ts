import { createReportableStore } from "../middleware/report"

interface GlobalStore {
	loading: boolean
}

const initialState: GlobalStore = {
	loading: false,
}

export const useGlobalStore = createReportableStore<GlobalStore>((set) => ({
	...initialState,
	setLoading: (loading: boolean) => set({ loading }),
}))
