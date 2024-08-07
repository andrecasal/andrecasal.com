import { cssBundleHref } from '@remix-run/css-bundle'
import { type LoaderFunctionArgs, type MetaFunction, json, type HeadersFunction, type LinksFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useLocation } from '@remix-run/react'
import { withSentry } from '@sentry/remix'
import { useTheme } from './routes/resources+/theme/index.tsx'
import { getTheme } from './routes/resources+/theme/theme-session.server.ts'
import fontStylestylesheetUrl from './styles/font.css?url'
import tailwindStylesheetUrl from './styles/tailwind.css?url'
import { authenticator, getUserId } from './utils/auth.server.ts'
import { ClientHintCheck, getHints } from './utils/client-hints.tsx'
import { prisma } from './utils/db.server.ts'
import { getEnv } from './utils/env.server.ts'
import { combineHeaders, getDomainUrl } from './utils/misc.ts'
import { useNonce } from './utils/nonce-provider.ts'
import { makeTimings, time } from './utils/timing.server.ts'
import { href as iconsHref } from './components/ui/icon.tsx'
import Header from './components/header.tsx'
import { Confetti } from './components/confetti.tsx'
import { getFlashSession } from './utils/flash-session.server.ts'
import { useToast } from './utils/useToast.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import Footer from './components/footer.tsx'
import { FathomScript, useTrackPageview } from './utils/fathom.tsx'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { AuthenticityTokenProvider } from 'remix-utils/csrf/react'
import { csrf } from './utils/csrf.server.ts'
import { HoneypotProvider } from 'remix-utils/honeypot/react'
import { honeypot } from './utils/honeypot.server.ts'

export const links: LinksFunction = () => {
	return [
		// Preload svg sprite as a resource to avoid render blocking
		{ rel: 'preload', href: iconsHref, as: 'image' },
		// Preload CSS as a resource to avoid render blocking
		{ rel: 'preload', href: fontStylestylesheetUrl, as: 'style' },
		{ rel: 'preload', href: tailwindStylesheetUrl, as: 'style' },
		cssBundleHref ? { rel: 'preload', href: cssBundleHref, as: 'style' } : null,
		{ rel: 'mask-icon', href: '/favicons/mask-icon.svg' },
		{
			rel: 'alternate icon',
			type: 'image/png',
			href: '/favicons/favicon-32x32.png',
		},
		{ rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png' },
		{ rel: 'manifest', href: '/site.webmanifest' },
		{ rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon2.svg' },
		{ rel: 'stylesheet', href: fontStylestylesheetUrl },
		{ rel: 'stylesheet', href: tailwindStylesheetUrl },
		cssBundleHref ? { rel: 'stylesheet', href: cssBundleHref } : null,
	].filter(Boolean)
}

export const meta: MetaFunction = () => {
	return [{ title: 'André Casal' }, { name: 'description', content: 'Full-stack web dev' }]
}

export async function loader({ request }: LoaderFunctionArgs) {
	const timings = makeTimings('root loader')
	const userId = await time(() => getUserId(request), {
		timings,
		type: 'getUserId',
		desc: 'getUserId in root',
	})

	const user = userId
		? await time(
				() =>
					prisma.user.findUnique({
						where: { id: userId },
						select: { id: true, name: true, username: true, imageId: true },
					}),
				{ timings, type: 'find user', desc: 'find user in root' },
		  )
		: null
	if (userId && !user) {
		console.info('something weird happened')
		// something weird happened... The user is authenticated but we can't find
		// them in the database. Maybe they were deleted? Let's log them out.
		await authenticator.logout(request, { redirectTo: '/' })
	}
	const { flash, headers: flasHeaders } = await getFlashSession(request)
	const honeyProps = honeypot.getInputProps()
	const [csrfToken, csrfCookieHeader] = await csrf.commitToken()

	return json(
		{
			user,
			requestInfo: {
				hints: getHints(request),
				origin: getDomainUrl(request),
				path: new URL(request.url).pathname,
				session: {
					theme: await getTheme(request),
				},
			},
			ENV: getEnv(),
			flash,
			honeyProps,
			csrfToken,
		},
		{
			headers: combineHeaders({ 'Server-Timing': timings.toString() }, flasHeaders, csrfCookieHeader ? { 'set-cookie': csrfCookieHeader } : null),
		},
	)
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
	const headers = {
		'Server-Timing': loaderHeaders.get('Server-Timing') ?? '',
	}
	return headers
}

function App() {
	const data = useLoaderData<typeof loader>()
	const nonce = useNonce()
	const theme = useTheme()
	useToast(data.flash?.toast)
	useTrackPageview()
	const location = useLocation()

	return (
		<html lang={location.pathname === '/explicacoes-de-programacao' ? 'pt-PT' : 'en'} className={`${theme} h-full`}>
			<head>
				<ClientHintCheck nonce={nonce} />
				<Meta />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Links />
			</head>
			<body className="flex h-full flex-col justify-between bg-background text-foreground antialiased">
				<TooltipPrimitive.Provider delayDuration={300}>
					{!location.pathname.startsWith('/explicacoes') ? <Header /> : null}
					<div className="flex-1">
						<Outlet />
					</div>
					{!location.pathname.startsWith('/explicacoes') ? <Footer /> : null}
					<Confetti id={data.flash?.confetti} />
					<Toaster />
					<ScrollRestoration nonce={nonce} />
					<Scripts nonce={nonce} />
					<script
						nonce={nonce}
						dangerouslySetInnerHTML={{
							__html: `window.ENV = ${JSON.stringify(data.ENV)}`,
						}}
					/>
					<FathomScript nonce={nonce} data-site={data.ENV.FATHOM_ANALYTICS_SITE_ID} />
				</TooltipPrimitive.Provider>
			</body>
		</html>
	)
}
function AppWithProviders() {
	const data = useLoaderData<typeof loader>()
	return (
		<AuthenticityTokenProvider token={data.csrfToken}>
			<HoneypotProvider {...data.honeyProps}>
				<App />
			</HoneypotProvider>
		</AuthenticityTokenProvider>
	)
}

export default withSentry(AppWithProviders)
