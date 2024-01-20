import { useContext } from "react"

import { GlobalContext } from "contexts"

const useGlobalContext = () => useContext(GlobalContext)

export default useGlobalContext
