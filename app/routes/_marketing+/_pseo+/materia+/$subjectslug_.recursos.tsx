import { type LoaderArgs, json, redirect } from '@remix-run/node'
import { subjects } from '../disciplinas.ts'
import { useLoaderData } from '@remix-run/react'
import { parse } from '@conform-to/zod'
import { z } from 'zod'
import { emailSchema } from '~/utils/user-validation.ts'
import { prisma } from '~/utils/db.server.ts'
import { verificationType } from '../explicacoes+/$subjectslug.tsx'
import { verifyTOTP } from '~/utils/totp.server.ts'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'

const verifySchema = z.object({
	email: emailSchema,
	code: z.string().min(6).max(6),
})

export async function loader({ params, request }: LoaderArgs) {
	const searchParams = new URL(request.url).searchParams
	if (!searchParams.has('code')) {
		return redirect('/')
	}
	const submission = await parse(searchParams, {
		schema: () =>
			verifySchema.superRefine(async (data, ctx) => {
				const verification = await prisma.verification.findFirst({
					where: {
						type: verificationType,
						target: data.email,
						expiresAt: { gt: new Date() },
					},
					select: {
						algorithm: true,
						secret: true,
						period: true,
					},
				})
				if (!verification) {
					ctx.addIssue({
						path: ['code'],
						code: z.ZodIssueCode.custom,
						message: `Invalid code`,
					})
					return
				}
				const result = verifyTOTP({
					otp: data.code,
					secret: verification.secret,
					algorithm: verification.algorithm,
					period: verification.period,
					window: 0,
				})
				if (!result) {
					ctx.addIssue({
						path: ['code'],
						code: z.ZodIssueCode.custom,
						message: `Invalid code`,
					})
					return
				}
			}),
		acceptMultipleErrors: () => true,
		async: true,
	})
	if (!submission.value) {
		return redirect('/')
	}
	const { subjectslug } = params
	const subject = subjects.find(s => s.slug === subjectslug)!
	return json({ subject })
}

const Route = () => {
	const {
		subject: { name, resources },
	} = useLoaderData<typeof loader>()
	return (
		<Container className="relative mt-14">
			<div className="lg:grid lg:grid-cols-12 lg:gap-x-20">
				<div className="pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:pb-56 lg:pt-48 xl:col-span-6">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<H1 size="5xl" className="mt-24 sm:mt-10">
							Recursos de {name}
						</H1>
						<P size="lg" className="mt-6 text-muted-600">
							Aqui estão os recursos que te vão ajudar a aprender {name} de forma mais eficaz.
						</P>
						<div className="mt-10 flex items-center gap-x-6">
							<a
								href={resources}
								download
								className="inline-flex h-14 w-full items-center justify-center whitespace-nowrap rounded-md border bg-brand px-10 text-size-sm font-semibold text-muted-50 shadow ring-offset-background transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
							>
								Fazer download dos recursos
							</a>
						</div>
					</div>
				</div>
				<div className="relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
					<figure className="relative flex h-full flex-col">
						<img className="w-full rounded-2xl bg-muted-50 object-cover lg:aspect-auto lg:h-full" src="/img/andre_casal_squared.png" alt="André, o teu tutor de programação" />
						<figcaption className="mt-4 gap-x-2 text-center text-sm leading-6 text-muted-500">André, o teu professor particular de {name}.</figcaption>
					</figure>
				</div>
			</div>
		</Container>
	)
}
export default Route
