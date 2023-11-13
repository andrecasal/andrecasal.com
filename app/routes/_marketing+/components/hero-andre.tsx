import { Link } from '@remix-run/react'
import BackgroundDiagonal from './bg-diagonal.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Badge } from '~/components/ui/badge.tsx'
import { H1 } from '../ui+/components/typography/h1.tsx'
import { P } from '../ui+/components/typography/p.tsx'
import { Span } from '../ui+/components/typography/span.tsx'

const HeroAndre = () => {
	return (
		<BackgroundDiagonal>
			<Container className="py-32 sm:py-40">
				<div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<Link to="/ship-fast" className="inline-flex flex-wrap gap-6">
							<Badge variant="info" size="md" className="whitespace-nowrap">
								What's new
							</Badge>
							<P size="sm" className="inline-flex items-center space-x-2 whitespace-nowrap font-medium text-muted-600">
								<Span>Launched ShipFast ⚡️</Span>
							</P>
						</Link>
						<H1 size="4xl" className="mt-10">
							Hi! I'm André Casal.
						</H1>
						<P size="lg" className="mt-6 text-muted-700">
							I help full-stack web devs create profitable one-person businesses.
						</P>
						<div className="mt-10 flex items-center gap-x-6">
							<Button size="lg" asChild>
								<Link to="/mentorship">Let's work together</Link>
							</Button>
						</div>
					</div>
					<div className="mt-16 sm:mt-24 lg:mt-0">
						<img src="/img/andre.jpg" alt="André Casal" height="100px" className="aspect-[6/5] rounded-2xl object-cover" />
					</div>
				</div>
			</Container>
		</BackgroundDiagonal>
	)
}

export default HeroAndre
