import { Link } from '@remix-run/react'
import BackgroundDiagonal from './bg-diagonal.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Badge } from '~/components/ui/badge.tsx'
import { Text } from '~/components/ui/text.tsx'
import { Heading } from '../ui+/components/typography/heading.tsx'

const HeroAndre = () => {
	return (
		<BackgroundDiagonal>
			<Container className="py-32 sm:py-40">
				<div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<a href="https://github.com/epicweb-dev/epic-stack" target="_blank" className="inline-flex flex-wrap gap-6" rel="noreferrer">
							<Badge variant="info" size="md" className="whitespace-nowrap">
								What's new
							</Badge>
							<Text size="sm" asChild>
								<span className="inline-flex items-center space-x-2 whitespace-nowrap text-size-sm font-medium text-muted-600">
									<span>Epic Stack collab with Kent C. Dodds</span>
									<Icon name="rocket" className="h-5 w-5 text-muted-400" aria-hidden="true" />
								</span>
							</Text>
						</a>
						<Heading as="h1" size="4xl" className="mt-10">
							Hi! I'm André Casal.
						</Heading>
						<Text size="lg" className="mt-6 text-muted-700">
							I help full-stack web devs create profitable one-person businesses.
						</Text>
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
