import { type LoaderFunctionArgs, json, type MetaFunction } from '@remix-run/node'
import { Form, Link, useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { GeneralErrorBoundary } from '~/components/error-boundary.tsx'
import { Spacer } from '~/components/spacer.tsx'
import { Button } from '~/components/ui/button.tsx'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { prisma } from '~/utils/db.server.ts'
import { getUserImgSrc } from '~/utils/misc.ts'
import { useOptionalUser } from '~/utils/user.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	invariant(params.username, 'Missing username')
	const user = await prisma.user.findUnique({
		where: { username: params.username },
		select: {
			id: true,
			username: true,
			name: true,
			imageId: true,
			createdAt: true,
		},
	})
	if (!user) {
		throw new Response('not found', { status: 404 })
	}
	return json({ user, userJoinedDisplay: user.createdAt.toLocaleDateString() })
}

export default function UsernameIndex() {
	const data = useLoaderData<typeof loader>()
	const user = data.user
	const userDisplayName = user.name ?? user.username
	const loggedInUser = useOptionalUser()
	const isLoggedInUser = data.user.id === loggedInUser?.id

	return (
		<Container>
			<div className="mb-48 mt-36 flex flex-col items-center justify-center">
				<Spacer size="4xs" />

				<div className="flex flex-col items-center rounded-3xl bg-muted-100 p-12">
					<div className="relative w-52">
						<div className="absolute -top-40">
							<div className="relative">
								<img src={getUserImgSrc(data.user.imageId)} alt={userDisplayName} className="h-52 w-52 rounded-full object-cover" />
							</div>
						</div>
					</div>

					<Spacer size="sm" />

					<div className="flex flex-col items-center">
						<div className="flex flex-wrap items-center justify-center gap-4">
							<H1 size="lg" align="center">
								{userDisplayName}
							</H1>
						</div>
						<P align="center" className="mt-2 text-muted-500">
							Joined {data.userJoinedDisplay}
						</P>
						{isLoggedInUser ? (
							<Form action="/logout" method="POST" className="mt-3">
								<Button type="submit" variant="secondary" size="pill">
									Logout
								</Button>
							</Form>
						) : null}
						<div className="mt-10 flex gap-4">
							{isLoggedInUser ? (
								<Button asChild>
									<Link to="/settings/profile" prefetch="intent">
										Edit profile
									</Link>
								</Button>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: ({ params }) => <P>No user with the username "{params.username}" exists</P>,
			}}
		/>
	)
}

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
	const displayName = data?.user.name ?? params.username
	return [
		{ title: `${displayName} | André Casal` },
		{
			name: 'description',
			content: `Profile of ${displayName} on André Casal`,
		},
	]
}
