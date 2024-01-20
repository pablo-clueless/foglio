import { useContext } from "react"

import { SocketContext } from "contexts"

const useSocketContext = () => useContext(SocketContext)

export default useSocketContext
