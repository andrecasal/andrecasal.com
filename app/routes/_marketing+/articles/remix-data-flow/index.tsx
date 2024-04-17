import remixDataFlow from './remix-data-flow.png'
import remixDataFlowDiagram from './remix-data-flow-diagram.png'
import { type LinksFunction, type V2_MetaFunction } from '@remix-run/node'
import { type Post } from '../_index.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const post: Post = {
	title: 'Remix Data Flow',
	description: 'Learn how data flows in a Remix route.',
	imageUrl: remixDataFlow,
	date: '2023-09-01',
	href: '/articles/remix-data-flow',
	topics: ['Remix', 'Full-stack'],
}

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com${post.href}` }]
}

export const meta: V2_MetaFunction = () => {
	return [{ title: post.title, description: post.description }]
}

const RemixDataFlow = () => {
	return (
		<>
			<H1 size="4xl">{post.title}</H1>
			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<img src={remixDataFlow} alt="Remix Data Flow" className="rounded-2xl object-cover" />
				<P size="lg" className="mt-6">
					When React emerged, one of its standout features was the "one-way data flow". The primary idea is that data flows unidirectionally throughout your app. The UI is merelly
					a reflection of your data and any changes your UI makes to the data, will trigger a re-render of the UI to reflect those changes. The cycle is data {'->'} UI {'->'} data
					update {'->'} UI update. This promotes clarity, comprehensibility, modularity and development speed.
				</P>
				<P size="md" className="mt-6">
					However, a slight misnomer exists: this one-way flow pertains to the client only. If you want to sync data between your client and your server, you have to step into
					two-way data flow, with state management tools like Redux or Apollo, where you send updates to the server (one-way), receive responses (two-way), and sync the remote
					state with the local state. React will pick things up from here and make the UI reflect the new client data. This two-way data flow is a hassle and an error prone
					process.
				</P>
				<P size="md" className="mt-6">
					One way to think about Remix is that it extends the unidirectional data flow across the network, ensuring a true one-way cycle: from server (loader) to client (component)
					and back to the server (action+loader). The cycle is remote state {'->'} UI {'->'} remote state update {'->'} UI update.
				</P>
				<figure className="mt-16">
					<img className="rounded-xl bg-gray-50 object-cover" src={remixDataFlowDiagram} alt="Remix Data Flow Diagram" />
					<figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">Data flow in a Remix route</figcaption>
				</figure>
				<P size="md" className="mt-6">
					Remote state that lives off the client, like user information, is sent to the client using loaders. Any data updates are sent back to the server's actions, which will
					trigger a data reload to reflect any data updates, which will, in turn, update the UI accordingly.
				</P>
				<P size="md" className="mt-6">
					Remix's "state management" solutions (although not labeled as such) encompass forms, fetchers, loaders, and actions. These tools maintain persistent state sync between
					client and server, ensuring a cyclical one-way flow of data.
				</P>
				<P size="md" className="mt-6">
					With Remix, your UI becomes a function of network-wide state, extending the analogy of React's one-way data flow from the client to the server.
				</P>
				<P size="md" className="mt-6">
					In Remix, managing client-side state synchronization with the server becomes seamless. Mutations trigger state changes, with loaders refetching updated data and updating
					component views.
				</P>
				<P size="md" className="mt-6">
					Remix simplifies complexity in web development. By working before JavaScript, it ensures progressive enhancement for users and reduces complexity for developers. State
					management tools like Redux and Apollo, while valuable, become unnecessary due to Remix's design. When using Remix, remote state management concerns fade away. Whether
					your app works without JavaScript or not, Remix manages complexities associated with state management, providing a streamlined approach to building web applications.
				</P>
				<P size="md" className="mt-6">
					This simplified one-way data flow model is a huge win and why I no longer build apps with anything else but Remix.
				</P>
			</div>
		</>
	)
}
export default RemixDataFlow
