import { Outlet, useLocation } from '@remix-run/react'
import { Newsletter } from '~/components/newsletter.tsx'
import { ReadingProgress } from '~/components/reading-progress.tsx'
import { ShareButtons } from '~/components/share-buttons.tsx'
import { Container } from '~/ui_components/layout/container.tsx'

function EssaysLayoutRoute() {
	const location = useLocation()
	const isEssayPage = location.pathname !== '/essays'
	const currentUrl = `https://andrecasal.com${location.pathname}`

	return (
		<>
			{isEssayPage ? <ReadingProgress /> : null}
			<Container>
				<Outlet />
			</Container>
			{isEssayPage ? (
				<Container>
					<div className="mt-16 border-t border-muted-200 pt-8">
						<ShareButtons url={currentUrl} title="Check out this essay by André Casal" />
					</div>
					<Newsletter className="relative isolate mt-24 sm:mt-32" />
				</Container>
			) : null}
		</>
	)
}
export default EssaysLayoutRoute
