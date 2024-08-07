import { type LinksFunction, json, type DataFunctionArgs } from '@remix-run/node'
import { Link, Outlet, useNavigate } from '@remix-run/react'
import { Icon } from '~/components/ui/icon.tsx'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '~/components/ui/dialog.tsx'
import { requireUserId } from '~/utils/auth.server.ts'
import { prisma } from '~/utils/db.server.ts'

export const twoFAVerificationType = '2fa'

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com/profile/two-factor` }]
}

export async function loader({ request }: DataFunctionArgs) {
	const userId = await requireUserId(request)
	const verification = await prisma.verification.findFirst({
		where: { type: twoFAVerificationType, target: userId },
		select: { id: true },
	})
	return json({ is2FAEnabled: Boolean(verification) })
}

export default function TwoFactorRoute() {
	const navigate = useNavigate()

	const dismissModal = () => navigate('..', { preventScrollReset: true })
	return (
		<Dialog open={true}>
			<DialogContent onEscapeKeyDown={dismissModal} onPointerDownOutside={dismissModal}>
				<DialogTitle asChild className="text-center">
					<h2 className="text-title-lg">Two-Factor Authentication</h2>
				</DialogTitle>
				<div className="mt-6">
					<Outlet />
				</div>
				<DialogClose asChild>
					<Link preventScrollReset to=".." aria-label="Close" className="absolute right-10 top-10">
						<Icon name="cross-1" />
					</Link>
				</DialogClose>
			</DialogContent>
		</Dialog>
	)
}
