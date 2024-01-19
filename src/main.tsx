import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import React from "react"

import App from "App"
import "index.css"

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
)
