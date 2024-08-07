/* import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { type LoaderFunctionArgs, json, redirect, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData, type LinksFunction, type ActionFunctionArgs } from '@remix-run/node'
import { Form, Link, useActionData, useFetcher, useLoaderData, useNavigate } from '@remix-run/react'
import { useState } from 'react'
import { z } from 'zod'
import { Button } from '~/components/ui/button.tsx'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '~/components/ui/dialog.tsx'
import * as deleteImageRoute from '~/routes/resources+/delete-image.tsx'
import { requireUserId } from '~/utils/auth.server.ts'
import { prisma } from '~/utils/db.server.ts'
import { ErrorList } from '~/components/forms.tsx'
import { getUserImgSrc } from '~/utils/misc.ts'
import { Icon } from '~/components/ui/icon.tsx'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { invariantResponse } from '@epic-web/invariant'

const MAX_SIZE = 1024 * 1024 * 3 // 3MB

const DeleteImageSchema = z.object({
	intent: z.literal('delete'),
})

const NewImageSchema = z.object({
	intent: z.literal('submit'),
	photoFile: z
		.instanceof(File)
		.refine(file => file.size > 0, 'Image is required')
		.refine(file => file.size <= MAX_SIZE, 'Image size must be less than 3MB'),
})

const PhotoFormSchema = z.discriminatedUnion('intent', [DeleteImageSchema, NewImageSchema])

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com/profile/photo` }]
}

export async function loader({ request }: LoaderFunctionArgs) {
	const userId = await requireUserId(request)
	const user = await prisma.user.findUnique({
		where: { id: userId },
		select: { imageId: true, name: true, username: true },
	})
	invariantResponse(user, 'User not found', { status: 404 })
	return json({ user })
}

export async function action({ request }: ActionFunctionArgs) {
	const userId = await requireUserId(request)
	const formData = await unstable_parseMultipartFormData(request, unstable_createMemoryUploadHandler({ maxPartSize: MAX_SIZE }))

	const submission = await parseWithZod(formData, {
		schema: PhotoFormSchema.transform(async data => {
			if (data.intent === 'delete') return { intent: 'delete' }
			if (data.photoFile.size <= 0) return z.NEVER
			return {
				intent: data.intent,
				image: {
					contentType: data.photoFile.type,
					blob: Buffer.from(await data.photoFile.arrayBuffer()),
				},
			}
		}),
		async: true,
	})

	if (submission.status !== 'success') {
		return json({ result: submission.reply() }, { status: submission.status === 'error' ? 400 : 200 })
	}

	const { image, intent } = submission.value

	if (intent === 'delete') {
		const previousUserPhoto = await prisma.user.findUnique({
			where: { id: userId },
			select: { imageId: true },
		})
		await prisma.user.update({
			select: { id: true },
			where: { id: userId },
			data: {
				image: {
					delete: true,
				},
			},
		})
		if (previousUserPhoto?.imageId) {
			await prisma.image.delete({ where: { fileId: previousUserPhoto.imageId } })
		}
		return redirect('/settings/profile')
	}

	invariantResponse(image, 'Image is required', { status: 400 })

	const newPrismaPhoto = {
		contentType: image.contentType,
		file: {
			create: {
				blob: Buffer.from(image.blob),
			},
		},
	}

	const previousUserPhoto = await prisma.user.findUnique({ where: { id: userId }, select: { imageId: true } })

	await prisma.user.update({
		select: { id: true },
		where: { id: userId },
		data: {
			image: {
				upsert: {
					update: newPrismaPhoto,
					create: newPrismaPhoto,
				},
			},
		},
	})

	if (previousUserPhoto?.imageId) {
		void prisma.image.delete({ where: { fileId: previousUserPhoto.imageId } }).catch(() => {}) // ignore the error, maybe it never existed?
	}

	return redirect('/settings/profile')
}

export default function PhotoChooserModal() {
	const data = useLoaderData<typeof loader>()
	const [newImageSrc, setNewImageSrc] = useState<string | null>(null)
	const navigate = useNavigate()
	const deleteImageFetcher = useFetcher<typeof deleteImageRoute.action>()
	const actionData = useActionData<typeof action>()
	const [form, { photoFile }] = useForm({
		id: 'profile-photo',
		constraint: getZodConstraint(PhotoFormSchema),
		lastResult: actionData?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: PhotoFormSchema })
		},
		shouldRevalidate: 'onBlur',
	})

	const deleteProfilePhotoFormId = 'delete-profile-photo'
	const dismissModal = () => navigate('..', { preventScrollReset: true })
	return (
		<Dialog open={true}>
			<DialogContent
				onEscapeKeyDown={dismissModal}
				onPointerDownOutside={dismissModal}
				className="fixed left-1/2 top-1/2 w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 transform rounded-lg border-2 bg-background p-12 shadow-lg"
			>
				<DialogTitle asChild className="text-center">
					<h2 className="text-title-lg">Profile photo</h2>
				</DialogTitle>
				<Form
					method="POST"
					encType="multipart/form-data"
					className="mt-8 flex flex-col items-center justify-center gap-10"
					onReset={() => setNewImageSrc(null)}
					{...getFormProps(form)}
				>
					<img src={newImageSrc ?? getUserImgSrc(data.user.imageId)} className="h-64 w-64 rounded-full" alt={data.user.name ?? data.user.username} />
					<ErrorList errors={photoFile.errors} id={photoFile.id} />
					<input
						{...getInputProps(photoFile, { type: 'file' })}
						type="file"
						accept="image/*"
						className="sr-only"
						tabIndex={newImageSrc ? -1 : 0}
						onChange={e => {
							const file = e.currentTarget.files?.[0]
							if (file) {
								const reader = new FileReader()
								reader.onload = event => {
									setNewImageSrc(event.target?.result?.toString() ?? null)
								}
								reader.readAsDataURL(file)
							}
						}}
					/>
					{newImageSrc ? (
						<div className="flex gap-4">
							<Button type="submit">Save Photo</Button>
							<Button type="reset" variant="secondary">
								Reset
							</Button>
						</div>
					) : (
						<div className="flex gap-4">
							<Button asChild className="cursor-pointer">
								<label htmlFor={photoFile.id} className="flex gap-1">
									<Icon name="pencil-1" /> Change
								</label>
							</Button>
							{data.user.imageId ? (
								<Button variant="danger" type="submit" form={deleteProfilePhotoFormId} className="flex gap-1">
									<Icon name="trash" /> Delete
								</Button>
							) : null}
						</div>
					)}
					<ErrorList errors={form.errors} />
				</Form>
				<DialogClose asChild>
					<Link to=".." preventScrollReset aria-label="Close" className="absolute right-10 top-10">
						<Icon name="cross-1" />
					</Link>
				</DialogClose>
			</DialogContent>
			<deleteImageFetcher.Form method="POST" id={deleteProfilePhotoFormId} action={deleteImageRoute.ROUTE_PATH}>
				<input name="intent" type="hidden" value="submit" />
				<input name="imageId" type="hidden" value={data.user.imageId ?? ''} />
			</deleteImageFetcher.Form>
		</Dialog>
	)
}
 */
