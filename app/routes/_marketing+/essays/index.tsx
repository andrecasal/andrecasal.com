import { Outlet, useLocation } from '@remix-run/react'
import { Newsletter } from '~/components/newsletter.tsx'
import { ReadingProgress } from '~/components/reading-progress.tsx'
import { ShareButtons } from '~/components/share-buttons.tsx'
import { EssayCard } from '~/components/essay-card.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { getEssays } from './_index.tsx'

function EssaysLayoutRoute() {
	const location = useLocation()
	const isEssayPage = location.pathname !== '/essays'
	const essays = getEssays()
	const relatedEssays = essays.slice(0, 3)
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
					<div className="mt-24 sm:mt-32">
						<H2 size="2xl" className="font-bold">
							More essays
						</H2>
						<div className="mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
							{relatedEssays.map(essay => (
								<EssayCard key={essay.title} essay={essay} />
							))}
						</div>
					</div>
				</Container>
			) : null}
		</>
	)
}
export default EssaysLayoutRoute
