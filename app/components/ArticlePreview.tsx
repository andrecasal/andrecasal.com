import { Link } from '@remix-run/react'
import { Text } from '~/components/ui/text.tsx'

export const ArticlePreview = ({
	post: { title, slug, categories, mainImage },
}: {
	post: {
		title: string
		slug: {
			current: string
		}
		categories: string[]
		mainImage: {
			asset: {
				originalFilename: string
				url: string
			}
		}
	}
}) => {
	return (
		<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-muted-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
			<img src={mainImage.asset.url} alt={mainImage.asset.originalFilename} className="absolute inset-0 -z-10 h-full w-full object-cover" />
			<div className="absolute inset-0 -z-10 bg-gradient-to-t from-muted-900 via-muted-900/40" />
			<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-muted-900/10" />
			<Text heading="h3" size="lg" className="mt-3 font-semibold leading-6 text-background">
				<Link to={`/articles/${slug.current}`}>
					<span className="absolute inset-0" />
					{title}
				</Link>
			</Text>
		</article>
	)
}
