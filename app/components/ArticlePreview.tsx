export const ArticlePreview = ({
	post,
}: {
	post: {
		id: number
		title: string
		href: string
		description: string
		imageUrl: string
		date: string
		datetime: string
	}
}) => {
	return (
		<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-muted-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
			<img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
			<div className="absolute inset-0 -z-10 bg-gradient-to-t from-muted-900 via-muted-900/40" />
			<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-muted-900/10" />

			<div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-body-xs text-muted-300">
				<time dateTime={post.datetime} className="mr-8">
					{post.date}
				</time>
			</div>
			<h3 className="mt-3 text-body-md font-semibold text-background">
				<a href={post.href}>
					<span className="absolute inset-0" />
					{post.title}
				</a>
			</h3>
		</article>
	)
}
