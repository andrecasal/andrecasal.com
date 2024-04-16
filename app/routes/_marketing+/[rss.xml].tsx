import { type LoaderFunction } from '@remix-run/node'
import { type Post, getPosts } from './articles/_index.tsx'

export type RssEntry = {
	title: string
	link: string
	description: string
	pubDate: string
	author?: string
	guid?: string
}
export function generateRss({ description, entries, link, title }: { title: string; description: string; link: string; entries: RssEntry[] }): string {
	return `<?xml version="1.0" encoding="UTF-8"?>
 <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
	  <title>${title}</title>
	  <description>${description}</description>
	  <link>${link}</link>
	  <language>en-us</language>
	  <ttl>60</ttl>
	  <atom:link href="https://andrecasal.com/rss.xml" rel="self" type="application/rss+xml" />
	  ${entries
			.map(
				entry => `
		 <item>
			<title><![CDATA[${entry.title}]]></title>
			<description><![CDATA[${entry.description}]]></description>
			<pubDate>${entry.pubDate}</pubDate>
			<link>${entry.link}</link>
			${entry.guid ? `<guid isPermaLink="false">${entry.guid}</guid>` : ''}
		 </item>`,
			)
			.join('')}
	</channel>
 </rss>`
}

export const loader: LoaderFunction = async () => {
	const posts: Post[] = getPosts()

	const feed = generateRss({
		title: 'André Casal Articles',
		description: 'André Casal Articles RSS Feed',
		link: 'https://andrecasal.com/articles',
		entries: posts.map(({ title, date, description, href, imageUrl, topics }) => ({
			description: description,
			pubDate: new Date(date).toUTCString(),
			title: title,
			link: `https://andrecasal.com/articles${href}`,
			guid: `https://andrecasal.com/articles${href}`,
		})),
	})

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=2419200',
		},
	})
}
