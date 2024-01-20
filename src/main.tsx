import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { GlobalProvider, SocketProvider } from "contexts"
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
				<GlobalProvider>
					<SocketProvider>
						<App />
					</SocketProvider>
				</GlobalProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
)
