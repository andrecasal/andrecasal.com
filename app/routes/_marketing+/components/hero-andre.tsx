import { Link } from '@remix-run/react'
import BackgroundDiagonal from './bg-diagonal.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Button } from '~/components/ui/button.tsx'

const HeroAndre = () => {
	return (
		<BackgroundDiagonal>
			<Container className="py-32 sm:py-40">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
					<div className="lg:col-span-2 xl:col-auto">
						<a href="https://github.com/epicweb-dev/epic-stack" target="_blank" className="inline-flex space-x-6" rel="noreferrer">
							<span className="rounded-full bg-info-background px-3 py-1 text-sm font-semibold leading-6 text-info-foreground ring-1 ring-inset ring-info-foreground/20">
								What's new
							</span>
							<span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-muted-600">
								<span>Epic Stack collab with Kent C. Dodds</span>
								<Icon name="rocket" className="h-5 w-5 text-muted-400" aria-hidden="true" />
							</span>
						</a>
						<h1 className="mt-10 max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
							<span>
								Hi! I'm André Casal
								<br className="hidden sm:block" /> and I'm a full-stack
								<br className="hidden sm:block" /> web dev mentor.
							</span>
						</h1>
					</div>
					<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
						<p className="text-lg leading-8 text-muted-700">
							I teach modern full-stack web development to help you ship better products, delight your customers, take your career to new heights, or build your own projects
							with confidence, while staying productive.
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Button asChild>
								<Link to="/full-stack-web-dev-mentor">Let's work together</Link>
							</Button>
						</div>
					</div>
					<img
						src="/img/andre.jpg"
						alt="André Casal"
						className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
					/>
				</div>
			</Container>
		</BackgroundDiagonal>
	)
}

export default HeroAndre
