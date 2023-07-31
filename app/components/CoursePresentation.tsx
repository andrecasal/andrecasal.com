import { Text } from '~/components/ui/text.tsx'
import { Button } from './ui/button.tsx'
import { Link } from '@remix-run/react'
import { Icon } from './ui/icon.tsx'

export const CoursePresentation = ({
	course: {
		title,
		description,
		img,
		benefits,
		link: { text, href },
	},
}: {
	course: {
		title: string
		description: string
		img: string
		benefits: string[]
		link: { text: string; href: string }
	}
}) => {
	return (
		<div className="relative isolate mx-auto flex max-w-2xl flex-col gap-16 bg-foreground/5 px-6 py-16 ring-1 ring-foreground/10 rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:py-20 xl:gap-x-20 xl:px-20">
			<img className="w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" src={img} alt="" />
			<div className="w-full flex-auto">
				<Text heading="h2" size="3xl" className="sm:text-size-4xl">
					{title}
				</Text>
				<Text size="lg" className="mt-6 text-muted-700">
					{description}
				</Text>
				<ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-size-md sm:grid-cols-2">
					{benefits.map(benefit => (
						<Text key={benefit} size="md" asChild>
							<li className="flex gap-x-3">
								<Icon name="check" className="h-7 w-5 flex-none" aria-hidden="true" />
								{benefit}
							</li>
						</Text>
					))}
				</ul>
				<div className="mt-10 flex">
					<Button asChild>
						<Link to={href}>{text}</Link>
					</Button>
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
	)
}
