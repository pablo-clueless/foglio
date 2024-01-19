import { ErrorBoundary } from "react-error-boundary"

import { ErrorFallback } from "components"
import Router from "router"

const App = () => {
	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => typeof window !== "undefined" && window.location.reload()}>
			<Router />
		</ErrorBoundary>
	)
}

export default App
