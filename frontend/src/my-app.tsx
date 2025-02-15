import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import type { Page1Response } from 'shared/types'

export function App() {
	const page = useQuery<Page1Response>({
		queryKey: ['api', 'page-1'],
		queryFn() {
			return fetch('/api/page-1').then((response) => response.json())
		},
		networkMode: 'always',
	})

	return (
		<>
			<Helmet>
				<title>
					{page.data ? page.data.title : 'Fastify Prerender Plugin'}
				</title>
				<meta
					name='description'
					content='Learn how to use the Fastify Prerender Plugin to make your Single Page Application (SPA) crawlable by search engines like Google.'
				/>
				<meta
					name='keywords'
					content='Fastify, Prerender Plugin, SPA, SEO, Server-Side Rendering, Google Crawlable'
				/>
				<meta name='author' content='Your Name' />
				<meta property='og:title' content='Fastify Prerender Plugin' />
				<meta
					property='og:description'
					content='Make your SPA crawlable by search engines using the Fastify Prerender Plugin.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://yourwebsite.com' />
				<meta
					property='og:image'
					content='https://yourwebsite.com/og-image.jpg'
				/>
			</Helmet>
			{page.data ? (
				<Helmet>
					<title>{page.data.title}</title>
				</Helmet>
			) : null}
			<p>
				If like me you believe that the performance of a Single Page Application
				(SPA) is good enough, then stay here. I am not going to try to convince
				you otherwise.
				<br />
				This is an experiment for making a SPA crawlable by Google... and it's
				working. It achieves that by returning the HTML after client hydration
				on an instance of a Chrome running on the server side with Playwright.
				<br />
				The title of this page is set after the request to /api/page-1 returns,
				intentionally after 1 second.
				<br />
				This is achieved by using Fastify +{' '}
				<a
					target='_blank'
					href='https://www.npmjs.com/package/fastify-prerender-plugin'
					rel='noreferrer'
					style={{ fontWeight: 'bold' }}
				>
					Fastify Prerender Plugin
				</a>
				.
			</p>
		</>
	)
}
