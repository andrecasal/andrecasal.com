import { Text } from '~/components/ui/text.tsx'
import { type Post } from '~/routes/_marketing+/articles/_index.tsx'
import { Badge } from './ui/badge.tsx'

export const ArticlePreview = ({ post }: { post: Post }) => {
	return (
		<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-muted-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
			<img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
			<div className="absolute inset-0 -z-10 bg-gradient-to-t from-muted-900 via-muted-900/40" />
			<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-muted-900/10" />
			<Text heading="h3" size="lg" className="mt-3 font-semibold leading-6 text-background">
				<a href={post.href}>
					<span className="absolute inset-0" />
					{post.title}
				</a>
			</Text>
			<div className="mt-4 flex flex-wrap items-center gap-1 overflow-hidden text-size-sm text-muted-300">
				{post.topics.map(topic => (
					<Badge key={topic} variant="muted" size="sm" className="whitespace-nowrap">
						{topic}
					</Badge>
				))}
			</div>
		</article>
	)
}
