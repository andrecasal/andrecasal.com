import { Link } from '@remix-run/react'
import { Text } from '~/components/ui/text.tsx'
import { type Post } from '~/routes/_marketing+/articles+/index.tsx'

export const ArticlePreview = ({ post: { title, slug, categories, mainImage } }: { post: Post }) => {
	return (
		<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-muted-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
			<img src={mainImage.asset.url} alt={mainImage.asset.originalFilename} className="absolute inset-0 -z-10 h-full w-full object-cover" />
			<div className="absolute inset-0 -z-10 bg-gradient-to-t from-muted-900 via-muted-900/40" />
			<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-muted-900/10" />
			<div className="flex gap-2">
				{categories.map(({ title }) => (
					<Text key={title} size="sm" className="inline rounded bg-muted-100/80 px-2 py-0.5 text-muted-600">
						{title}
					</Text>
				))}
			</div>
			<Text heading="h3" size="lg" className="mt-3 font-semibold leading-6 text-background">
				<Link
					// eslint-disable-next-line remix-react-routes/require-valid-paths
					to={`/articles/${slug.current}`}
				>
					<span className="absolute inset-0" />
					{title}
				</Link>
			</Text>
		</article>
	)
}
