import { ReactNode, createContext } from "react"
// import io from "socket.io-client"

interface SocketContextProps {}

interface SocketProviderProps {
	children: ReactNode
}

export const SocketContext = createContext<SocketContextProps>({})

SocketContext.displayName = "Foglio Socket Context"

const SocketProvider = (props: SocketProviderProps) => {
	const value = {}
	return (
		<SocketContext.Provider value={value}>
			{props.children}
		</SocketContext.Provider>
	)
}

export default SocketProvider
