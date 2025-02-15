import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { App } from './my-app.tsx'

const queryClient = new QueryClient()
const root = document.getElementById('root')

if (root) {
	createRoot(root).render(
		<StrictMode>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</HelmetProvider>
		</StrictMode>,
	)
} else {
	throw Error('root not found')
}
