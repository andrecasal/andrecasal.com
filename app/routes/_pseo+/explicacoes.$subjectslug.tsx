/* import { Button } from '~/components/ui/button.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import BackgroundDiagonal from './components/bg-diagonal.tsx'
import BackgroundBlur from './components/bg-blur.tsx'
import BackgroundSquareLines from './components/bg-square-lines.tsx'
import collegeLife from '../_marketing+/images/college-life.jpg'
import andreOnMacBookPro from './images/andre-on-macbook-pro.png'
import goncaloBarreiros from './images/goncalo-barreiros.png'
import pauloJorge from './images/paulo-jorge.png'
import miguelFerreira from './images/miguel-ferreira.png'
import satisfactionGuarantee from './images/satisfaction-guarantee.png'
import signatureBlack from './images/signature-black.png'
import signatureWhite from './images/signature-white.png'
import { Link, useLoaderData } from '@remix-run/react'
import { type LoaderFunction, json, type LinksFunction, type V2_MetaFunction, type LoaderArgs } from '@remix-run/node'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { H3 } from '~/ui_components/typography/h3.tsx'
import { Span } from '~/ui_components/typography/span.tsx'
import { H4 } from '~/ui_components/typography/h4.tsx'
import { subjects } from './subject-data.ts'
import { Ul } from '~/ui_components/typography/ul.tsx'

export const meta: V2_MetaFunction = ({ params }) => {
	const { subjectslug } = params
	const subject = subjects.find(s => s.slug === subjectslug)
	const { slug, name, prerequisites, topics, software, exercises, isTutorable } = subject
	return [
		{ title: `Explicações de ${name}` },
		{
			name: 'description',
			content: `Procuras explicações de ${name} e queres resultados? Ajudei 650+ alunos a obliterar os exames! Satisfação 100% garantida!`,
		},
		{
			name: 'keywords',
			content: `explicações, ${name}, tutoria, universidade, estudantes, notas, exames, sucesso, resultados, garantia, tutor, explicador, mentor, explicação, explicadores, mentores, tutorias`,
		},
	]
}

export const links: LinksFunction = () => {
	return [
		{
			rel: 'preload',
			href: collegeLife,
			as: 'image',
		},
		{
			rel: 'canonical',
			href: `https://andrecasal.com/explicacoes/programacao`,
		},
	]
}

export async function loader({ params }: LoaderArgs) {
	const { subjectslug } = params
	const subject = subjects.find(s => s.slug === subjectslug)!
	return json({ subject })
}

const Explicacoes = () => {
	const { subject } = useLoaderData<typeof loader>()
	const { slug, name, prerequisites, topics, software, exercises, isTutorable } = subject

	return (
		<>
			<Container className="relative">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-20">
					<div className="pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:pb-56 lg:pt-48 xl:col-span-6">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<H1 size="5xl" className="mt-24 sm:mt-10">
								Explicações de {name}
							</H1>
							<P size="lg" className="mt-6 text-muted-600">
								Aqui tens tudo o que precisas para ter sucesso em <strong>{name}</strong>!
							</P>
						</div>
					</div>
					<div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
						<img
							className="aspect-[3/2] w-full rounded-2xl bg-muted-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
							src={collegeLife}
							alt="Explicações de Programação"
						/>
					</div>
				</div>
			</Container>
			<Container className="py-32">
				<div className="max-w-3xl text-muted-700">
					<H2 size="3xl" className="mt-2 text-muted-900">
						Pré-requisitos de {name}
					</H2>
					<P>Estas são as coisas que já tens que dominar de forma a estares preparado para {name}:</P>
					<Ul>
						{prerequisites.map(prerequisite => (
							<li key={prerequisite}>{prerequisite}</li>
						))}
					</Ul>
					<H2 size="3xl" className="mt-2 text-muted-900">
						Tópicos de {name}
					</H2>
					<P>Esta é a lista da matéria para {name}:</P>
					<Ul>
						{topics.map(({ name, children }) => (
							<li key={name}>
								{name}
								{children ? (
									<Ul>
										{children.map(({ name }) => (
											<li key={name}>{name}</li>
										))}
									</Ul>
								) : null}
							</li>
						))}
					</Ul>
					<H2 size="3xl" className="mt-2 text-muted-900">
						Software útil para {name}
					</H2>
					<Ul>
						{software.map(({ name, link }) => (
							<li key={name}>
								<a href={link} target="_blank" rel="noreferrer" className="underline">
									{name}
								</a>
							</li>
						))}
					</Ul>
				</div>
			</Container>
		</>
	)
}
export default Explicacoes
 */
