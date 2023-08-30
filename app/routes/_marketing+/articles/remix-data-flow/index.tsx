import { Text } from '~/components/ui/text.tsx'
import remixDataFlow from './remix-data-flow.png'
import { type V2_MetaFunction } from '@remix-run/node'

export const Title = 'Remix Data Flow 🔥'

export const meta: V2_MetaFunction = () => {
	return [{ title: 'Data flow in a Remix route' }]
}

const RemixDataFlow = () => {
	return (
		<>
			<Text heading="h1" size="6xl">
				{Title}
			</Text>
			<div className="mt-10 max-w-2xl">
				<Text size="lg" className="mt-6">
					When React emerged, one of its standout features was the "one-way data flow," detailed in the React documentation's "Thinking in React" section. This concept ensures that
					changes in your underlying data model lead to UI updates, promoting modularity and speed. The primary idea is that data flows unidirectionally throughout your
					application, enhancing its clarity and comprehensibility.
				</Text>
				<Text size="md" className="mt-6">
					Imagine a hierarchy of components: the top one receives your data model as a prop. If you modify the underlying data model and invoke root.render(), the UI reflects the
					changes. This approach clarifies UI updates and modification locations. However, a slight misnomer exists: this one-way flow pertains to the client only. Real-world
					applications often require two-way data flow: between the client and the server for data persistence and synchronization.
				</Text>
				<Text size="md" className="mt-6">
					Enter Remix: a key Remix feature is simplifying interactions with the server for data injection into components. Remix extends the data flow across the network, ensuring
					a true one-way cycle: from server (loader) to client (component) and back to the server (action).
				</Text>
				<figure className="mt-16">
					<img className="rounded-xl bg-gray-50 object-cover" src={remixDataFlow} alt="Remix Data Flow" />
					<figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">Data flow in a Remix route</figcaption>
				</figure>
				<Text size="md" className="mt-6">
					In traditional React, all state resides on the client; to persist specific components, you need to step out of the one-way flow and sync data with the server, a
					potentially error-prone process. Remix transforms this approach by disentangling remote state from local state.
				</Text>
				<Text size="md" className="mt-6">
					Remote state encompasses persistent data like user information, brought into your app from Remix mechanisms. This state lives off the client. In contrast, local state
					comprises transient data, stored on the client (via React state or local storage), not requiring network synchronization.
				</Text>
				<Text size="md" className="mt-6">
					Remix's "state management" solutions (although not labeled as such) encompass forms, fetchers, loaders, and actions. These tools maintain persistent state sync between
					client and server, ensuring a cyclical one-way flow of data.
				</Text>
				<Text size="md" className="mt-6">
					With Remix, your UI becomes a function of network-wide state, extending the analogy of React's virtual DOM abstraction. Just as React manages DOM updates via state, Remix
					simplifies API-layer data persistence.
				</Text>
				<Text size="md" className="mt-6">
					In Remix, managing client-side state synchronization with the server becomes seamless. Mutations trigger state changes, with loaders refetching updated data and updating
					component views.
				</Text>
				<Text size="md" className="mt-6">
					Remix simplifies complexity in web development. By working before JavaScript, it ensures progressive enhancement for users and reduces complexity for developers. State
					management tools like Redux and Apollo, while valuable, become unnecessary due to Remix's design. When using Remix, application state management concerns fade away.
					Whether your app works without JavaScript or not, Remix manages complexities associated with state management, providing a streamlined approach to building web
					applications.
				</Text>
			</div>
		</>
	)
}
export default RemixDataFlow
