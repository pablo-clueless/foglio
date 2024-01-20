import { ReactNode, createContext, useState } from "react"

type Mode = "dark" | "light"
type EditorState = "edit" | "print" | null

interface GlobalContextProps {
	mode: Mode
	openEditor: EditorState
	handleModeChange: (mode: Mode) => void
	handleOpenEditor: (openEditor: EditorState) => void
}

interface GlobalProviderProps {
	children: ReactNode
}

export const GlobalContext = createContext<GlobalContextProps>({
	mode: "dark",
	openEditor: null,
	handleModeChange: () => {},
	handleOpenEditor: () => {},
})

GlobalContext.displayName = "Foglio Global Context"

const GlobalProvider = (props: GlobalProviderProps) => {
	const [openEditor, setOpenEditor] = useState<EditorState>(null)
	const [mode, setMode] = useState<Mode>("dark")

	const handleModeChange = (mode: Mode) => {
		setMode(mode)
		localStorage.setItem("mode", JSON.stringify(mode))
	}

	const handleOpenEditor = (state: EditorState) => setOpenEditor(state)

	const value = { mode, openEditor, handleModeChange, handleOpenEditor }

	return (
		<GlobalContext.Provider value={value}>
			{props.children}
		</GlobalContext.Provider>
	)
}

export default GlobalProvider
