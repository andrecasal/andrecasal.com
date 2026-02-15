import { type Essay } from '~/routes/_marketing+/essays/_index.tsx'
import { Badge } from './ui/badge.tsx'
import { H3 } from '~/ui_components/typography/h3.tsx'
import { P } from '~/ui_components/typography/p.tsx'

type EssayCardProps = {
	essay: Essay
}

export function EssayCard({ essay }: EssayCardProps) {
	return (
		<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-muted-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
			<img src={essay.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
			<div className="absolute inset-0 -z-10 bg-gradient-to-t from-muted-900 via-muted-900/40" />
			<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-muted-900/10" />
			<P size="xs" className="text-background">
				{essay.date}
			</P>
			<H3 size="lg" className="text-background">
				<a href={essay.href}>
					<span className="absolute inset-0" />
					{essay.title}
				</a>
			</H3>
			<div className="mt-4 flex flex-wrap items-center gap-1 overflow-hidden text-size-sm text-muted-300">
				{essay.pillars.map(pillar => (
					<Badge key={pillar} variant="muted" size="xs" className="whitespace-nowrap">
						{pillar}
					</Badge>
				))}
			</div>
		</article>
	)
}
