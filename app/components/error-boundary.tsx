import { isRouteErrorResponse, useParams, useRouteError } from '@remix-run/react'
import { type ErrorResponse } from '@remix-run/router'
import { getErrorMessage } from '~/utils/misc.ts'
import { Container } from '~/ui_components/layout/container.tsx'
import { P } from '~/ui_components/typography/p.tsx'

type StatusHandler = (info: { error: ErrorResponse; params: Record<string, string | undefined> }) => JSX.Element | null

export function GeneralErrorBoundary({
	defaultStatusHandler = ({ error }) => (
		<P>
			{error.status} {error.data}
		</P>
	),
	statusHandlers,
	unexpectedErrorHandler = error => <p>{getErrorMessage(error)}</p>,
}: {
	defaultStatusHandler?: StatusHandler
	statusHandlers?: Record<number, StatusHandler>
	unexpectedErrorHandler?: (error: unknown) => JSX.Element | null
}) {
	const error = useRouteError()
	const params = useParams()

	if (typeof document !== 'undefined') {
		console.error(error)
	}

	return (
		<Container>
			<div className="text-title-lg flex items-center justify-center p-20">
				{isRouteErrorResponse(error)
					? (statusHandlers?.[error.status] ?? defaultStatusHandler)({
							error,
							params,
					  })
					: unexpectedErrorHandler(error)}
			</div>
		</Container>
	)
}
