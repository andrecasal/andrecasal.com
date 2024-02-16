import { Link } from '@remix-run/react'
import BackgroundDiagonal from './bg-diagonal.tsx'
import { Container } from '~/routes/_marketing+/ui+/components/layout/container.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Badge } from '~/components/ui/badge.tsx'
import { H1 } from '../ui+/components/typography/h1.tsx'
import { P } from '../ui+/components/typography/p.tsx'
import { AspectRatio } from '../ui+/components/layout/aspect-ratio.tsx'

const HeroAndre = () => {
	return (
		<>
			<div className="sticky h-[200vh] [view-timeline-name:--blowout]">
				<div className="fixed top-0 flex h-full w-full items-center justify-center [perspective:100vh]">
					<h2 className="whitespace-nowrap text-[20vw] font-bold tracking-tight [animation-fill-mode:forwards] [animation-name:blow-out] [animation-range:exit-crossing_10%_exit_0%] [animation-timeline:--blowout] [animation-timing-function:ease-in]">
						Web Dev
					</h2>
				</div>
			</div>
			<div className="sticky h-[100vh] [view-timeline-name:--fade-in]">
				<div className="fixed top-0 flex h-full w-full items-center justify-center [perspective:100vh]">
					<Container>
						<AspectRatio
							ratio={16 / 9}
							className="opacity-0 [animation-fill-mode:forwards] [animation-timing-function:ease-in] [animation-name:fade-in] [animation-range-end:entry-crossing_50%] [animation-range-start:entry_0%] [animation-timeline:--fade-in]"
						>
							<iframe
								className="h-full w-full rounded-lg shadow-lg"
								src="https://www.youtube.com/embed/ZabYyjBf_h4?si=Z8zcF1Q5Cx6wK3F2"
								allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								title="Embedded youtube"
							/>
						</AspectRatio>
					</Container>
				</div>
			</div>
			<BackgroundDiagonal>
				<Container className="py-32 sm:py-40">
					<div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<Link to="/ui" className="inline-flex flex-wrap gap-6">
								<Badge variant="info" size="md" className="whitespace-nowrap">
									What's new
								</Badge>
								<P size="sm" className="inline-flex items-center space-x-2 whitespace-nowrap font-medium text-muted-600">
									Building a React ⚛️ UI library
								</P>
							</Link>
							<H1 size="4xl" className="mt-10">
								Hi! I'm André Casal.
							</H1>
							<P size="lg" className="mt-6 text-muted-700">
								I'm a tech entrepreneur that loves to build stuff.
							</P>
							<div className="mt-10 flex items-center gap-x-6">
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
						<div className="mt-16 sm:mt-24 lg:mt-0">
							<img src="/img/andre.jpg" alt="André Casal" height="100px" className="aspect-[6/5] rounded-2xl object-cover" />
						</div>
					</div>
				</Container>
			</BackgroundDiagonal>
		</>
	)
}

export default HeroAndre
