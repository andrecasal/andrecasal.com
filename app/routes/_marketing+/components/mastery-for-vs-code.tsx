import { Link } from '@remix-run/react'
import { Button } from '~/components/ui/button.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Icon } from '~/components/ui/icon.tsx'

const MasteryForVSCode = () => {
	const benefits = ['Stellar DX', 'Make VS Code look awesome', 'Insights into your code', 'Automate common actions', 'Stay in the editor', 'Learn best practices']

	return (
		<Container>
			<div className="relative isolate pb-32">
				<div className="mx-auto flex max-w-2xl flex-col gap-16 bg-foreground/5 px-6 py-16 ring-1 ring-foreground/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:py-20 xl:gap-x-20 xl:px-20">
					<img className="w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" src="/img/andre.jpg" alt="" />
					<div className="w-full flex-auto">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mastery for VS Code</h2>
						<p className="mt-6 text-body-md text-muted-700">
							This course is designed to help you master VS Code. You'll learn how to use VS Code to its fullest potential, and you'll be able to do so in a way that's fun and
							engaging.
						</p>
						<ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-body-sm sm:grid-cols-2">
							{benefits.map(benefit => (
								<li key={benefit} className="flex gap-x-3">
									<Icon name="check" className="h-7 w-5 flex-none" aria-hidden="true" />
									{benefit}
								</li>
							))}
						</ul>
						<div className="mt-10 flex">
							<Button asChild>
								<Link to="/courses/mastery-for-vs-code">Become a master of VS Code</Link>
							</Button>
						</div>
					</div>
				</div>
				<div className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
					<div
						className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
						style={{
							clipPath:
								'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
						}}
					/>
				</div>
			</div>
		</Container>
	)
}

export default MasteryForVSCode
