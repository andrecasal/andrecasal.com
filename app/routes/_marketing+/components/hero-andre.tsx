import { Link } from '@remix-run/react'
import BackgroundDiagonal from './bg-diagonal.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Badge } from '~/components/ui/badge.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

const HeroAndre = () => {
	return (
		<BackgroundDiagonal>
			<Container className="">
				<div className="md:grid md:grid-cols-2 space-y-10">
					<div className="mx-auto max-w-2xl">
						<a href="https://launchfast.pro" target="_blank" className="inline-flex flex-wrap gap-6" rel="noreferrer">
							<Badge variant="info" size="md" className="whitespace-nowrap">
								What's new
							</Badge>
							<P size="sm" className="inline-flex items-center space-x-2 whitespace-nowrap font-medium text-muted-600">
								Launched LaunchFast.pro 🎉
							</P>
						</a>
						<H1 size="4xl" className="mt-10">
							Hi! I'm André Casal.
						</H1>
						<P size="lg" className="mt-6 text-muted-700">
							I'm a tech entrepreneur that loves to build stuff.
						</P>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-6">
							<Link
								to="#built"
								className="inline-flex h-14 items-center justify-center whitespace-nowrap rounded-md border bg-muted-50 px-10 text-size-md font-semibold text-muted-800 ring-offset-background transition-colors hover:bg-muted-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
							>
								What have you built?
							</Link>
							<Button size="lg" asChild>
								<Link to="/mentorship">Let's build together</Link>
							</Button>
						</div>
					</div>
					<div className="flex justify-center">
						<img src="/img/andre_casal.png" alt="André Casal" className="aspect-square w-1/2 md:w-3/4 rounded-2xl object-contain" />
					</div>
				</div>
			</Container>
		</BackgroundDiagonal>
	)
}

export default HeroAndre
