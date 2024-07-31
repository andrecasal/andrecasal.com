import { Button } from '~/components/ui/button.tsx'
import { Icon } from '~/components/ui/icon.tsx'
import collegeLife from '~/routes/_marketing+/images/college-life.jpg'
import andreOnMacBookPro from '~/routes/_marketing+/images/andre-on-macbook-pro.png'
import goncaloBarreiros from '~/routes/_marketing+/images/goncalo-barreiros.png'
import pauloJorge from '~/routes/_marketing+/images/paulo-jorge.png'
import luciaZiyuan from '~/routes/_marketing+/images/lucia-ziyuan.png'
import catiaSilva from '~/routes/_marketing+/images/catia-silva.png'
import marcoBarreiros from '~/routes/_marketing+/images/marco-barreiros.png'
import dejanMilosevic from '~/routes/_marketing+/images/dejan-milosevic.png'
import yev from '~/routes/_marketing+/images/yev.png'
import alexandreMiguelPinto from '~/routes/_marketing+/images/alexandre-miguel-pinto.png'
import lilianaFerreira from '~/routes/_marketing+/images/liliana-ferreira.png'
import paulaAlexandraSilva from '~/routes/_marketing+/images/paula-alexandra-silva.png'
import joseGuimaraes from '~/routes/_marketing+/images/jose-guimaraes.png'
import kirillLapshev from '~/routes/_marketing+/images/kirill-lapshev.png'
import fabianaMilanez from '~/routes/_marketing+/images/fabiana-milanez.png'
import apoZadeh from '~/routes/_marketing+/images/apo-zadeh.png'
import inesBarreiros from '~/routes/_marketing+/images/ines-barreiros.png'
import leahMeirinhos from '~/routes/_marketing+/images/leah-meirinhos.png'
import miguelFerreira from '~/routes/_marketing+/images/miguel-ferreira.png'
import satisfactionGuarantee from '~/routes/_marketing+/images/satisfaction-guarantee.png'
import signatureBlack from '~/routes/_marketing+/images/signature-black.png'
import signatureWhite from '~/routes/_marketing+/images/signature-white.png'
import danielaAlexandra from '~/routes/_marketing+/images/daniela-alexandra.png'
import { Link, useLoaderData } from '@remix-run/react'
import { type LoaderFunctionArgs, json, type LinksFunction, type MetaFunction, type ActionFunctionArgs } from '@remix-run/node'
import { Container } from '~/ui_components/layout/container.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { H3 } from '~/ui_components/typography/h3.tsx'
import { Span } from '~/ui_components/typography/span.tsx'
import { H4 } from '~/ui_components/typography/h4.tsx'
import BackgroundDiagonal from '../../components/bg-diagonal.tsx'
import BackgroundBlur from '../../components/bg-blur.tsx'
import BackgroundSquareLines from '../../components/bg-square-lines.tsx'
import { subjects } from '../disciplinas.ts'
import { validateCSRF } from '~/utils/csrf.server.ts'
import { checkHoneypot } from '~/utils/honeypot.server.ts'
import { parseWithZod } from '@conform-to/zod'
import { emailSchema } from '~/utils/user-validation.ts'
import { z } from 'zod'
import { prisma } from '~/utils/db.server.ts'
import { sendEmail } from '~/utils/email.server.ts'
import { ResourcesEmail } from '../materia+/tutoring.emails.tsx'
import { getDomainUrl } from '~/utils/misc.ts'
import { generateTOTP } from '~/utils/totp.server.ts'
import { type SEOHandle } from '@nasa-gcn/remix-seo'
import { AspectRatio } from '~/ui_components/layout/aspect-ratio.tsx'

export const handle: SEOHandle = {
	getSitemapEntries: async () => {
		return subjects.map(({ slug }) => {
			return { route: `/explicacoes/${slug}`, priority: 0.7 }
		})
	},
}

export const meta: MetaFunction = ({ params }) => {
	const { subjectslug } = params
	const subject = subjects.find(s => s.slug === subjectslug)!
	const { name } = subject
	return [
		{ title: `Explicações de ${name}` },
		{
			name: 'description',
			content: `Procuras explicações de ${name} e queres resultados? Ajudei 650+ alunos a obliterar os exames! Satisfação 100% garantida!`,
		},
		{
			name: 'keywords',
			content: `explicações de ${name}, explicador de ${name}, tutoria de ${name}, tutor de ${name}, professor particular de ${name}, boas notas ${name}, como estudar ${name}`,
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
			rel: 'preload',
			href: andreOnMacBookPro,
			as: 'image',
		},
		{
			rel: 'preload',
			href: goncaloBarreiros,
			as: 'image',
		},
		{
			rel: 'preload',
			href: pauloJorge,
			as: 'image',
		},
		{
			rel: 'preload',
			href: miguelFerreira,
			as: 'image',
		},
		{
			rel: 'preload',
			href: satisfactionGuarantee,
			as: 'image',
		},
		{
			rel: 'preload',
			href: signatureBlack,
			as: 'image',
		},
		{
			rel: 'preload',
			href: signatureWhite,
			as: 'image',
		},
		/* {
			rel: 'canonical',
			href: 'https://andrecasal.com/explicacoes-de-programacao',
		}, */
	]
}

export async function loader({ params }: LoaderFunctionArgs) {
	const { subjectslug } = params
	const subject = subjects.find(s => s.slug === subjectslug)!
	return json({ subject })
}

const Route = () => {
	const { subject } = useLoaderData<typeof loader>()
	const { name } = subject
	const features = [
		{
			name: 'Aulas online por video-conferência',
			description: 'Explicações com áudio, vídeo, whiteboard e controlo remoto para te ajudar a organizar a matéria, programar, e explicar conceitos da melhor forma possível.',
			icon: 'video',
		},
		{
			name: 'Gravações privadas gratuitas',
			description: 'Acesso vitalício a uma playlist privada com todas as nossas sessões, para puderes rever a matéria sempre que precisares.',
			icon: 'play',
		},
		{
			name: 'Acesso ilimitado a mim',
			description: 'Falar comigo está a um clique de distância por WhatsApp. Estás bloqueado? Envia-me uma mensagem e eu respondo-te.',
			icon: 'chat',
		},
		{
			name: 'Compromisso ético',
			description: 'Eu comprometo-me a não fazer batota. Ajudo-te a entender a matéria e a tirar dúvidas, mas não farei o teu trabalho por ti.',
			icon: 'heart',
		},
	]

	const testimonials = [
		[
			[
				{
					body: 'Antes de começar a ser orientado pelo André, eu odiava Assembly e Microprocessadores. Eu estava a repetir a disciplina pela terceira vez e senti que ia reprovar mais uma vez. Mas depois que comecei a ser orientado pelo André, comecei a gostar do que estava a aprender, porque comecei a entender a matéria e até ficou divertido! Pela primeira vez, senti-me confiante! O André é muito simpático e paciente: ele desenhava diagramas, explicava, e usava outras linguagens de programação para me ajudar a ver a ligação entre linguagens de alto nível e Assembly, e tudo estava ótimo! Nunca tive um professor assim. Quando o resultado do exame chegou, fiquei perplexo ao ver que havia ido de reprovado nessa matéria por dois anos consecutivos para ter um 16! O método de ensino e a dedicação do André são, na minha opinião, imbatíveis.',
					author: {
						name: 'Gonçalo Barreiros',
						imageUrl: goncaloBarreiros,
					},
				},
				{
					body: 'Os meus professores introduziram a programação do Arduino com pequenos blocos de código. Um pouco de código aqui e ali. Mas eles nunca explicaram as coisas muito bem. Eles presumiam que íamos procurar as peças que faltavam. Tentei pesquisar na internet e conversar com colegas, mas não consegui encontrar bons recursos na internet e meus amigos estavam tão perdidos quanto eu. Quando comecei as aulas de reforço com o André, minhas notas aumentaram exponencialmente. Estou com o André há um ano neste momento, a disciplina atual é a segunda que estamos a fazer juntos. Na primeira aula, se eu sei alguma coisa sobre Arduino, foi porque o André me ensinou. Quero dizer, o André não apenas me ensinou como a fazer projetos com Arduino, mas também me ensinou ao ponto de eu poder concluir os exames sozinho! E em termos de disponibilidade o André é top.',
					author: {
						name: 'Paulo Jorge',
						imageUrl: pauloJorge,
					},
				},
				{
					body: 'O André é um professor muito amável que coloca o progresso dos seus alunos no centro da sua prática de ensino. Ele preocupa-se pessoalmente e adapta o seu ensino aos interesses e necessidades individuais dos alunos. Ele traz muitos anos de experiência do mundo real na construção de aplicações e negócios de sucesso para o seu ensino. Para além de ser um professor de programação muito conhecedor, também é apaixonado pela aprendizagem - crescimento pessoal, filosofia, saúde e afins. Aprenderá muito com ele para além da programação em si.',
					author: {
						name: 'Lucia Ziyuan',
						imageUrl: luciaZiyuan,
					},
				},
				{
					body: 'Eu não conseguia entender a matéria da aula que estava a ser dada pelos professores. Eles não estavam a fazer um bom trabalho e não nos davam os recursos necessários. Tentei ir à biblioteca da universidade, tentei conversar com colegas que entendiam um pouco mais da aula mas não adiantou muito. A diferença [entre ter e não ter explicações com o André] é que eu não passaria nas provas. Tenho obtido resultados. Tem sido uma boa experiência, tenho aprendido e melhorado.',
					author: {
						name: 'Miguel Ferreira',
						imageUrl: miguelFerreira,
					},
				},
				{
					body: 'É maravilhoso trabalhar com André! Ele é experiente e compassivo, e tem ideias inovadoras, paixão e amor por seu trabalho. Altamente recomendado!',
					author: {
						name: 'Amalia Sirica',
					},
				},
				{
					body: 'Já conheço o André há algum tempo. Ele é um ótimo programador e se mantém atualizado com as melhores práticas do setor. Altamente recomendado',
					author: {
						name: 'Zuki G',
					},
				},
				{
					body: 'Ajudou muito, foi muito paciente e interessado em ensinar e explicar o assunto.',
					author: {
						name: 'Isabel Bozzato',
					},
				},
				{
					body: 'Excelente explicador!',
					author: {
						name: 'José Maria',
					},
				},
				{ author: { name: 'Lecticia Benchimol' } },
				{ author: { name: 'Marisa Oliveira' } },
			],
			[
				{
					body: 'André é um tutor e mentor de programação absolutamente estelar. Sempre disponível para fornecer feedback pessoal, conselhos e orientação.',
					author: {
						name: 'Paula Alexandra Silva',
						imageUrl: paulaAlexandraSilva,
					},
				},
				{
					body: 'André é um excelente tutor, todos os conceitos ficam realmente compreensíveis com suas explicações. Altamente recomendado! 💪',
					author: {
						name: 'Alexandre Miguel Pinto',
						imageUrl: alexandreMiguelPinto,
					},
				},
				{
					body: 'O André é excelente mesmo!',
					author: {
						name: 'Inês V. Barreiros',
						imageUrl: inesBarreiros,
					},
				},
				{
					body: 'Incrível!!!!',
					author: {
						name: 'Léa Meirinhos',
						imageUrl: leahMeirinhos,
					},
				},
				{
					body: 'O professor André explica muito bem e tem imensa paciência. Eu estou extremamente grata!!',
					author: {
						name: 'Daniela Alexandra',
					},
				},
				{
					body: 'O André é um profissional que domina o que faz. Nota-se a sua paixão e entrega, mas sobretudo valorizo a sua disponibilidade em validar e perceber as necessidades do meu projeto; sempre com uma visão construtiva e com soluções interessantes que se tornaram numa mais-valia e algo diferenciador no mercado.',
					author: {
						name: 'Ana Mendes',
					},
				},
				{
					body: 'Olá André! Espero que esteja tudo bem! Enquanto isso, as notas foram publicadas [...] A de programação foi muito melhor do que eu esperava! [Captura de tela com nota de 17] A programação acabou por ser a melhor ahah!',
					author: {
						name: 'Guilherme Echeverri',
					},
				},
				{
					body: 'É excelente ter explicações com o André. Entendo tudo!',
					author: {
						name: 'Maria Isabel',
					},
				},
				{
					body: 'Ótimo explicador. Muito dedicado e paciente.',
					author: {
						name: 'Musslima Ibraimo',
					},
				},
				{
					body: 'Muito bom!',
					author: {
						name: 'Wilson Mesquita',
					},
				},
				{ author: { name: 'Kátia Santos' } },
				{ author: { name: 'Gleice Santos' } },
			],
		],
		[
			[
				{
					body: 'André sempre foi muito profissional, motivado e apaixonado pelo que faz. E quando está a ensinar, é a pessoa mais dedicada que conheço. Ele traz à tona o melhor que há nas pessoas, em qualquer circunstância. Sempre com um sorriso e uma atitude positiva, é entusiasmante trabalhar com ele!',
					author: {
						name: 'Dejan Milosevic',
						imageUrl: dejanMilosevic,
					},
				},
				{
					body: 'Tried many courses online with no tangible progress, glad I found Andre, where one size fits all mentality is avoided.',
					author: {
						name: 'Apo Zadeh',
						imageUrl: apoZadeh,
					},
				},
				{
					body: 'Um dos professores e mentores mais incríveis que conheci! Gentil e gentil, ele é um ótimo ouvinte e uma das pessoas mais calorosas que conheço. É um prazer enorme ser seu aluno 🫶',
					author: {
						name: 'Yev',
						imageUrl: yev,
					},
				},
				{
					body: 'Fiquei com a impressão de que 2h era pouco tempo, e que o Prof. André poderia ter-nos ajudado mais, não fossem os exercícios da minha faculdade serem supostamente pouco convencionais.',
					author: {
						name: 'Henrique Silvestre',
					},
				},
				{
					body: 'É perfeito. Recomendo 100%. Não poderia ter encontrado melhor. Muito grato por tudo.',
					author: {
						name: 'Isabel Rodrigues',
					},
				},
				{
					body: 'Profissional: competência e disponibilidade.',
					author: {
						name: 'Jaime Torrinhas',
					},
				},
				{
					body: 'Um excelente explicador! Sabe como orientar passo-a-passo para resolver problemas. Experiência muito boa em geral.',
					author: {
						name: 'Miguel Lomba',
					},
				},
				{ author: { name: 'João Pedro Araújo' } },
				{ author: { name: 'Inês Gouveia' } },
				{ author: { name: 'Lúcia Rocha' } },
				{ author: { name: 'João Telmo' } },
				{ author: { name: 'João Pimentel' } },
			],
			[
				{
					body: 'O André é um profissional inteligente super acessível e tem o dom de conseguir tornar simples o que à maioria parece complexo. :) Super Recomendo',
					author: {
						name: 'Liliana Ferreira',
						imageUrl: lilianaFerreira,
					},
				},
				{
					body: 'O André é um professor dedicado e muito comprometido. Tem uma capacidade de leitura e compreensão das necessidades que superou sempre as minhas expectativas. Tem interesse em ajudar sempre mais! É um conhecedor, gosta de aprender e ler sobre tudo, por isso quem o procurar vai ter explicações nao só de programação mas de outras áreas que se cruzem ou sejam necessárias. Recomendo muito, garantidamente é um contacto enriquecedor!',
					author: {
						name: 'Cátia Silva',
						imageUrl: catiaSilva,
					},
				},
				{
					body: 'O André é um excelente professor! Sua paciência e clareza ao explicar os conceitos são notáveis. Sinto-me muito grato por suas aulas extras e definitivamente voltarei a procurá-lo se precisar de ajuda novamente. Recomendo totalmente!!!! Muito obrigado, André!',
					author: {
						name: 'Marco Barreiros',
						imageUrl: marcoBarreiros,
					},
				},
				{
					body: 'Excelente profissional! Deu-me uma grande ajuda a perceber melhor programação!',
					author: {
						name: 'Kirill Lapshev',
						imageUrl: kirillLapshev,
					},
				},
				{
					body: 'André tem muita paciência, comunicação clara e didática.',
					author: {
						name: 'Fabiana Milanez',
						imageUrl: fabianaMilanez,
					},
				},
				{
					body: 'O professor André Casal é um excelente explicador, muito dedicado e atento as necessidades dos alunos. Recomendo vivamente!',
					author: {
						name: 'José Guimarães',
						imageUrl: joseGuimaraes,
					},
				},
				{
					body: 'Muito bom professor. Ajudou-me imenso em introdução à programação em Java. Recomendo a todos os que não entendam bem as aulas na faculdade pois o professor André dá explicações bastante detalhadas e esclarecedoras até entenderem tudo.',
					author: {
						name: 'Alfredo Soudo',
					},
				},
				{
					body: 'André Casal é o explicador mais inteligente, trabalhador e atencioso que conheço. Se deseja receber ajuda do mais alto nível, trabalhe com ele!',
					author: {
						name: 'Mony Chhim',
					},
				},
				{
					body: 'Estou muito grata por toda a ajuda: conhecimento, disponibilidade, paciência e, acima de tudo, pela gentileza. Obrigado!',
					author: {
						name: 'Maria Ribeiro',
					},
				},
				{
					body: 'O André foi muito paciente comigo e explicou tudo muito bem. Se eu precisar de ajuda novamente... é com ele.',
					author: {
						name: 'Marcos Marcos',
					},
				},
				{
					body: 'Além das expectativas!',
					author: {
						name: 'Helena Oliveira',
					},
				},
				{ author: { name: 'Csongor Csaba Horvath' } },
				{ author: { name: 'Ricardo Escudeiro' } },
				{ author: { name: 'Peter Delle' } },
				{ author: { name: 'Arthur Constantino' } },
			],
		],
	]

	const stats = [
		{ name: 'Número de estudantes', value: '650+' },
		{ name: 'Matérias ensinadas', value: '51+' },
		{ name: 'Nota média', value: '16.4' },
		{ name: 'Taxa de sucesso', value: '99.5%' },
	]

	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ')
	}

	const subjectsITeach = {
		programming: [
			{ name: 'C, C++, C#, Java, PHP, Python' },
			{ name: 'Kotlin (Android)' },
			{ name: 'Swift (iOS)' },
			{ name: 'Clean Code' },
			{ name: 'Programação Funcional' },
			{ name: 'Programação Orientada a Objetos' },
			{ name: 'Programação Imperativa e Declarativa' },
			{ name: 'Test-Driven Development (TDD)' },
		],
		webdev: [
			{ name: 'HTML, CSS, JS' },
			{ name: 'O protocolo HTTP' },
			{ name: 'React, Vue, Angular' },
			{ name: 'Styled Components' },
			{ name: 'TailwindCSS' },
			{ name: 'Browser, Node, Deno APIs' },
			{ name: 'Express, Next, Remix' },
			{ name: 'REST and GraphQL APIs' },
			{ name: 'Git & GitHub' },
			{ name: 'Databases (SQL, SQLite, Mongo)' },
		],
		computerscience: [
			{ name: 'Sistemas Digitais' },
			{ name: 'Organização e Arquitetura de Computadores' },
			{ name: 'Assembly (x86, x86-64, ARM, MIPS)' },
			{ name: 'Sistemas Operativos' },
			{ name: 'Redes de Computadores' },
			{ name: 'Estruturas de dados' },
			{ name: 'Algoritmos' },
		],
		math: [{ name: 'Álgebra' }, { name: 'Analise matemática' }, { name: 'Cálculo' }, { name: 'Análise numérica' }],
	}

	const includedFeatures = ['Estudar a par', 'Esclarecer dúvidas', 'Resolver desafios difíceis', 'Ajuda com projetos']

	const singleSessionFeatures = ['Estudar a par', 'Esclarecer dúvidas', 'Resolver desafios difíceis', 'Ajuda com projetos']

	return (
		<>
			<Container className="relative mt-14">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-20">
					<div className="pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:pb-56 lg:pt-48 xl:col-span-6">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<H1 size="5xl" className="mt-24 sm:mt-10">
								Explicações de {name}
							</H1>
							<P size="lg" className="mt-6 text-muted-600">
								Queres resultados a {name}? Ajudei 650+ alunos a obliterar os exames! Satisfação 100% garantida!
							</P>
							<div className="mt-10 flex items-center gap-x-6">
								<Link
									to="#pricing"
									className="inline-flex h-14 w-full items-center justify-center whitespace-nowrap rounded-md border bg-brand px-10 text-size-sm font-semibold text-muted-50 shadow ring-offset-background transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
								>
									Quero ter excelentes notas!
								</Link>
							</div>
						</div>
					</div>
					<div className="relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
						<figure className="relative flex h-full flex-col">
							<img
								className="w-full rounded-2xl bg-muted-50 object-cover lg:aspect-auto lg:h-full"
								src="/img/andre_casal_squared.png"
								alt="André, o teu tutor de programação"
							/>
							<figcaption className="mt-4 gap-x-2 text-center text-sm leading-6 text-muted-500">André, o teu professor particular de {name}.</figcaption>
						</figure>
					</div>
				</div>
			</Container>
			<Container className="py-32">
				<div className="max-w-3xl text-muted-700">
					<H2 size="3xl" className="mt-2 text-muted-900">
						A vida universitária
					</H2>
					<P size="xl" className="mt-6 leading-8">
						Ok, estás na universidade e não queres ser desrespeitado, envergonhado e humilhado pelos teus colegas. Muito menos pelos professores. Tendo passado pela universidade
						e sendo explicador e mentor há mais de {new Date().getFullYear() - 2006} anos, sei como é. Sentes que os professores não se preocupam suficientemente contigo, os teus
						colegas estão tão perdidos como tu, e ir à biblioteca não vai fazer as tuas notas magicamente subir. Para além disso, passar mais tempo a ler os livros da
						bibliografia das disciplinas não te vai ajudar porque não podes perder ainda mais tempo, e já dormes menos do que seria saudável.
					</P>
					<div className="mt-10 max-w-2xl">
						<P>
							Até já podes ter experimentado centros de explicações. Lembro-me de ir a um centro de explicações para Cálculo quando estava no secundário. Arranjei a minha
							mochila, saí de casa e 1h mais tarde cheguei ao centro e estava a estudar. Estávamos a pagar 30€/hora por uma professora numa sala cheia de alunos. Durante as
							duas horas que lá estive consegui colocar exatamente duas perguntas à professora, cujas respostas foram curtas e apressadas demais para eu perceber alguma coisa.
							A Professora queria distribuir o seu tempo por todos os alunos aparentemente. Lembro-me de me perguntar será que vale a pena perder 2 horas para ir e vir e pagar
							30€/hora para vir para aqui fazer exercícios e apenas obter a atenção da Professora duas vezes em 2 horas? Para isto estudo em casa!
						</P>
						<P className="mt-8">
							Depois disso experimentei um tutor privado de matemática. Ele sabia a matéria, mas não conseguia fazer a ponte entre o meu conhecimento e o conhecimento dele. Ele
							não conseguia perceber que conhecimento de fundo me faltava para compreender os conceitos atuais, então mecanisticamente repetia as mesmas respostas que eu não
							seria capaz de perceber enquanto ele não me fornecesse o conhecimento de fundo necessário. Foi frustrante.
						</P>
						<P className="mt-6">
							Estás à procura de uma solução melhor de subires as tuas notas e sentires-te orgulhoso de ti próprio e daquilo que conseguirás atingir? É por isso que estou aqui.
							Para te ajudar a dominar a matéria da universidade e a ganhares notas excelentes com tutoria dedicada a ti!
						</P>
						<H3 size="2xl" className="mt-16 text-muted-900">
							De iniciante a perito
						</H3>
						<P className="mt-10">
							Imagina-te a comandar o respeito e admiração dos teus pais, professores e colegas. Uau filho (ou filha), estás-te mesmo a safar bem na universidade! Imagina os
							professores: malta, se tiveres dúvidas perguntem-lhe a ele (ou ela) que sabe muito disto! Imagina os teus colegas a identificarem o teu conhecimento e a
							pedirem-te para guiares sessões de estudo com eles!
						</P>
					</div>
					<div className="mt-44 max-w-2xl">
						<H2 size="3xl" className="mt-2 text-muted-900">
							Como é trabalhar com um explicador de {name}
						</H2>
						<figure className="mt-16">
							<img className="aspect-video rounded-xl bg-muted-50 object-cover" src={andreOnMacBookPro} alt="André numa chamada com um aluno" />
							<figcaption className="mt-4 gap-x-2 text-center text-sm leading-6 text-muted-500">André numa chamada com um aluno.</figcaption>
						</figure>
						<P className="mt-6">
							Imagina isto: o teu professor fazer-te uma pergunta que sabe que nenhum estudante sabe responder. Mas tu tens uma arma secreta - lições com um tutor especializado
							em ciência da computação e com skills de comunicação excelentes e que tas ensina. Ao começares a brilhantemente responder à pergunta do professor, os teus colegas
							começam a olhar para ti com admiração e forma-se na face do teu professor um sorriso de aprovação. Quando acabas de dar a tua resposta, faz-se silêncio enquanto o
							choque da tua resposta subside. Sentes um surto de adrenalina quando de apercebes que toda a gente está a olhar para ti. Sorris e o teu professor diz: Malta, eu
							se fosse a vocês fazia amizade com ele, ele vai longe!
						</P>
						<P className="mt-8">
							Durante o resto da aula todos os teus colegas vão estar a pensar que tu serás um bom amigo para ter. Confia em mim, não vais ter problemas a fazer amigos na
							universidade. O teu maior problema vai ser distinguir entre as pessoas que gostam de ti por valorizarem inteligência e as pessoas que se querem aproveitar de ti
							para lhes explicares a matéria.
						</P>
						<P className="mt-8">
							Estás a fazer os exames. Confiante. Concentrado. Os teus colegas lutam para se lembrarem dos conceitos para responderem às questões. Tu passas a parte de
							memorização do exame com uma perna às costas. Um excelente começo faz-te sentir ainda mais confiante e dá-te bastante mais tempo para responder às questões que
							realmente requerem trabalho. Ainda faltam 20 minutos para o exame acabar mas já acabaste. Com calma e confiança revês o exame e ainda corriges um pequeno erro -
							mais meio ponto na classificação. Faltam 10 minutos. Entregas o exame cedo, sentido-te orgulhoso de ti próprio e do que atingiste! Sais da sala, pegas no
							telemóvel e ligas aos teus pais.
						</P>
						<ul className="max-w-md list-inside list-disc space-y-1">
							<li>Estou filho?</li>
							<li>Passei!</li>
						</ul>
						<P className="mt-8">
							Como é que isto é possível? Porque tiveste aulas de {name} comigo! Eu ensinei <strong>como estudar {name}</strong> e aprendeste um método cientificamente provado
							para memorizar tudo o que for importante. Para além disso, vou ao encontro do teu nível de conhecimento atual e ajudo-te a fazer a ponte entre o conhecimento que
							tens agora e o conhecimento que precisarás para passar no exames. Podes ter explicações dedicadas só a ti ou em grupo.
						</P>
					</div>
					<div className="mt-16 max-w-2xl">
						<h3 className="text-2xl font-bold tracking-tight text-muted-900">Eu dedico-me aos meus alunos</h3>
						<P className="mt-6">
							Estás a estudar na biblioteca com os teus colegas e encontras um problema que não sabes resolver. Perguntas aos teus colegas mas ninguém sabe a resposta. Estás
							bloqueado. Abres o browser e pesquisas no google. Sabes que é uma solução rápida, mas não encontras a resposta online. Mas lembras-te que tens um tutor de
							confiança sempre ao teu lado! Pegas no telefone, abres o Whatsapp e escreves uma pequena mensagem. Um minuto depois recebes uma explicação clara que responde
							exatamente à dúvida que tinhas. Sentes-te aliviado e agradecido por conseguires continuar a estudar sem solavancos no caminho.
						</P>
						<P className="mt-6">
							A taxa média de positivas dos meus mais de 650 alunos é de 98,75%. Eu dedico-me aos meus alunos e não descanso enquanto eles não têm resposta a todas as suas
							questões! Eu dou-te suporte por Whatsapp para que tenhas a liberdade de colocar todas as questões que quiseres e sentires que podes estudar sem solavancos - desde
							que sejam questões que possam ser esclarecidas por mensagem. Caso contrário marcamos uma explicação. Durante as explicações também terás comentários em tempo real
							acerca do trabalho que estiveres a fazer.
						</P>
					</div>
				</div>
			</Container>
			<Container className="py-24 sm:py-32">
				<div className="mx-auto max-w-2xl lg:text-center">
					<H2 size="3xl" className="mt-2 text-center text-muted-900">
						Tudo o que precisas para seres um aluno de sucesso
					</H2>
					<P size="lg" className="mt-6 text-center text-muted-600">
						Além de teres acesso a um explicador especializado,aprenderás a organizar teu tempo, materiais e sessões de estudo, para poderes entregar os trabalhos dentro do prazo
						e com a qualidade necessária para obteres as melhores notas.
					</P>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
						{features.map(feature => (
							<div key={feature.name} className="flex max-w-xl flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-muted-900">
									<Icon name={feature.icon as any} className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
									{feature.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-600">
									<P className="flex-auto">{feature.description}</P>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</Container>
			<BackgroundDiagonal>
				<Container className="py-32 sm:py-40">
					<div className="lg:flex lg:gap-x-10">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
							<H2 size="4xl" className="mt-10">
								Sobre o André, o teu explicador de {name}
							</H2>
							<P size="lg" className="mt-6 text-muted-700">
								O André tem vindo a trabalhar como engenheiro de software, há mais de {new Date().getFullYear() - 2006} anos, com empresas como a Fundação Calouste
								Gulbenkian, a rede de televisão americana NBC, a marca de bebidas Monster Energy e outras empresas de grande escala. Ele tem fornecido apoio em engenharia a
								inúmeras startups e gerido equipas de mais de 20 pessoas. Atualmente dá formação a alunos universitários, engenheiros de software, equipas de desenvolvimento
								para melhorarem a qualidade do seu trabalho e o seu curso Mastery for VS Code foi elogiado e destacado pela Microsoft. Ensinar e ajudar pessoas a
								transformarem-se sempre foi a sua paixão e é por isso que ao longo da sua carreira obteve comentários notáveis.
							</P>
						</div>
						<div className="mt-16 sm:mt-24 lg:mt-0">
							<img src="/img/andre_casal_squared.png" alt="André Casal" className="aspect-[6/5] h-full rounded-2xl object-cover" />
						</div>
					</div>
				</Container>
			</BackgroundDiagonal>
			<BackgroundSquareLines>
				<Container className="py-24 sm:py-32">
					<div className="lg:flex lg:items-center lg:gap-x-10 lg:pt-40">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
							<H2 size="3xl" className="mt-10 max-w-xl text-muted-900">
								As disciplinas que ensino
							</H2>
							<P size="lg" className="mt-6 text-muted-600">
								Ensino engenharia e ciência da computação há mais de {new Date().getFullYear() - 2006} anos, então dominei algumas matérias. Abaixo podes encontrar uma lista
								(não exaustiva) dos assuntos nos quais te posso ajudar.
							</P>
							<div className="mt-10 flex items-center gap-x-6"></div>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
						{stats.map(stat => (
							<div key={stat.name} className="py-6">
								<P size="sm" weight="medium" className="leading-6 text-muted-400">
									{stat.name}
								</P>
								<P className="mt-2 flex items-baseline gap-x-2">
									<Span size="4xl" weight="semibold" className="tracking-tight">
										{stat.value}
									</Span>
								</P>
							</div>
						))}
					</div>
				</Container>
			</BackgroundSquareLines>
			<Container>
				<div className="xl:grid xl:grid-cols-2 xl:gap-8">
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<H3 size="md">Programação</H3>
								<ul className="mt-6 space-y-4">
									{subjectsITeach.programming.map(item => (
										<li key={item.name}>
											<Span size="sm">{item.name}</Span>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<H3 size="md">Desenvolvimento Web</H3>
								<ul className="mt-6 space-y-4">
									{subjectsITeach.webdev.map(item => (
										<li key={item.name}>
											<Span size="sm">{item.name}</Span>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<H3 size="md">Ciência da Computação</H3>
								<ul className="mt-6 space-y-4">
									{subjectsITeach.computerscience.map(item => (
										<li key={item.name}>
											<Span size="sm">{item.name}</Span>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<H3 size="md">Matemática</H3>
								<ul className="mt-6 space-y-4">
									{subjectsITeach.math.map(item => (
										<li key={item.name}>
											<Span size="sm">{item.name}</Span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<BackgroundBlur>
				<Container>
					<div className="py-32">
						<div className="mx-auto max-w-2xl text-center">
							<H2 size="3xl" weight="bold" className="mt-2 text-center">
								Testemunhos dos alunos incríveis com quem trabalhei <Icon name="heart-filled" className="h-10 w-10 text-brand" aria-hidden="true" />
							</H2>
						</div>
						<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-muted-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
							<figure className="col-span-1 overflow-hidden rounded-2xl bg-background shadow-lg ring-1 ring-muted-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
								<AspectRatio ratio={16 / 9} className="relative">
									<iframe
										className="absolute inset-0 h-full w-full"
										src="https://www.youtube.com/embed/lwNh4Ddtl3U?modestbranding=1&rel=0"
										title="YouTube video player"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</AspectRatio>
								<figcaption className="flex items-center gap-x-4 border-t border-muted-900/10 px-6 py-4">
									<img className="h-10 w-10 flex-none rounded-full bg-muted-50" src={danielaAlexandra} alt="Daniela Alexandra" />
									<div className="flex-auto">
										<P size="sm" weight="semibold">
											Daniela Alexandra
										</P>
										<div className="flex gap-0.5">
											{Array(5)
												.fill(null)
												.map((_value, i) => (
													<Icon key={i} name="star-filled" className="text-size-lg text-brand" />
												))}
										</div>
									</div>
								</figcaption>
							</figure>
							{testimonials.map((columnGroup, columnGroupIdx) => (
								<div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
									{columnGroup.map((column, columnIdx) => (
										<div
											key={columnIdx}
											className={classNames(
												(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
													? 'xl:row-span-2'
													: 'xl:row-start-1',
												'space-y-8',
											)}
										>
											{column.map((testimonial, i) => (
												<figure key={i} className="rounded-2xl bg-background p-6 shadow-lg ring-1 ring-muted-900/5">
													<blockquote>{testimonial.body ? <P size="sm" className="text-muted-900">{`“${testimonial.body}”`}</P> : null}</blockquote>
													<figcaption className="mt-6 flex items-center gap-x-4">
														{'imageUrl' in testimonial.author ? (
															<img className="h-10 w-10 rounded-full bg-muted-50" src={testimonial.author.imageUrl} alt={testimonial.author.name} />
														) : null}
														<div>
															<P size="sm" weight="semibold">
																{testimonial.author.name}
															</P>
															<div className="flex gap-0.5">
																{Array(5)
																	.fill(null)
																	.map((_value, i) => (
																		<Icon key={i} name="star-filled" className="text-size-lg text-brand" />
																	))}
															</div>
														</div>
													</figcaption>
												</figure>
											))}
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</Container>
			</BackgroundBlur>

			<Container className="pt-44" id="pricing">
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-2xl sm:text-center">
						<H2 size="3xl" align="center" className="mt-2 font-bold" id="pricing">
							Preços simples
						</H2>
						<P size="lg" align="center" className="mx-auto mt-6 max-w-xl text-muted-600">
							Cobro 40€ por hora. Os pagamentos são feitos por sessão ou através de subscrição mensal.
						</P>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<H3 size="2xl">Sessão única</H3>
							<P size="md" className="mt-6 text-muted-600">
								Precisa de ajuda com um <strong>único projeto</strong> ou <strong>exame</strong>? Agende quantas dessas sessões desejar.
							</P>
							<div className="mt-10 flex items-center gap-x-4">
								<H4 size="sm" className="flex-none font-semibold text-brand">
									Podemos usar esse tempo para
								</H4>
								<div className="h-px flex-auto bg-muted-100" />
							</div>
							<ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-600 sm:grid-cols-2 sm:gap-6">
								{singleSessionFeatures.map(feature => (
									<li key={feature} className="flex gap-x-3">
										<Icon name="check" className="h-6 w-5 flex-none text-brand" aria-hidden="true" />
										{feature}
									</li>
								))}
							</ul>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="h-full rounded-2xl bg-muted-50 py-10 text-center ring-1 ring-inset ring-muted-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<P size="md" weight="semibold" className="text-muted-600">
										Pague por hora
									</P>
									<P className="mt-6 flex items-baseline justify-center gap-x-2">
										<Span size="4xl" weight="bold">
											€40
										</Span>
										<Span size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR
										</Span>
									</P>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://calendly.com/andrecasal/" target="_blank" rel="noopener noreferrer">
											Agende uma explicação
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<H3 size="2xl">Suporte contínuo 2h/semana</H3>
							<P size="md" className="mt-6 text-muted-600">
								Estes são os planos mais populares para estudantes que desejam <strong>suporte contínuo</strong>.
							</P>
							<div className="mt-10 flex items-center gap-x-4">
								<H4 size="sm" className="flex-none font-semibold text-brand">
									Podemos usar esse tempo para
								</H4>
								<div className="h-px flex-auto bg-muted-100" />
							</div>
							<ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-600 sm:grid-cols-2 sm:gap-6">
								{includedFeatures.map(feature => (
									<li key={feature} className="flex gap-x-3">
										<Icon name="check" className="h-6 w-5 flex-none text-brand" aria-hidden="true" />
										{feature}
									</li>
								))}
							</ul>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="h-full rounded-2xl bg-muted-50 py-10 text-center ring-1 ring-inset ring-muted-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<P size="md" weight="semibold" className="text-muted-600">
										Subscrição mensal
									</P>
									<P className="mt-6 flex items-baseline justify-center gap-x-2">
										<Span size="4xl" weight="bold">
											€320
										</Span>
										<Span size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR
										</Span>
									</P>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://buy.stripe.com/dR6cNf9eSa81fsY6or" target="_blank" rel="noopener noreferrer">
											Assine este plano
										</a>
									</Button>
									<P size="xs" className="mt-6 text-muted-600">
										Assine e cancele a qualquer momento.
									</P>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<H3 size="2xl">Suporte contínuo 4h/semana</H3>
							<P size="md" className="mt-6 text-muted-600">
								Estes são os planos mais populares para estudantes que desejam <strong>ótimas notas</strong>.
							</P>
							<div className="mt-10 flex items-center gap-x-4">
								<H4 size="sm" className="flex-none font-semibold text-brand">
									Podemos usar esse tempo para
								</H4>
								<div className="h-px flex-auto bg-muted-100" />
							</div>
							<ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-600 sm:grid-cols-2 sm:gap-6">
								{includedFeatures.map(feature => (
									<li key={feature} className="flex gap-x-3">
										<Icon name="check" className="h-6 w-5 flex-none text-brand" aria-hidden="true" />
										{feature}
									</li>
								))}
							</ul>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="h-full rounded-2xl bg-muted-50 py-10 text-center ring-1 ring-inset ring-muted-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<P size="md" weight="semibold" className="text-muted-600">
										Subscrição mensal
									</P>
									<P className="mt-6 flex items-baseline justify-center gap-x-2">
										<Span size="4xl" weight="bold">
											€640
										</Span>
										<Span size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR
										</Span>
									</P>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://buy.stripe.com/00g14xgHk0xr5So9AE" target="_blank" rel="noopener noreferrer">
											Assine este plano
										</a>
									</Button>
									<P size="xs" className="mt-6 text-muted-600">
										Assine e cancele a qualquer momento.
									</P>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<H3 size="2xl">Suporte contínuo 6h/semana</H3>
							<P size="md" className="mt-6 text-muted-600">
								Estes são os planos mais populares para estudantes que desejam <strong>notas excelentes</strong>.
							</P>
							<div className="mt-10 flex items-center gap-x-4">
								<H4 size="sm" className="flex-none font-semibold text-brand">
									Podemos usar esse tempo para
								</H4>
								<div className="h-px flex-auto bg-muted-100" />
							</div>
							<ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-600 sm:grid-cols-2 sm:gap-6">
								{includedFeatures.map(feature => (
									<li key={feature} className="flex gap-x-3">
										<Icon name="check" className="h-6 w-5 flex-none text-brand" aria-hidden="true" />
										{feature}
									</li>
								))}
							</ul>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="h-full rounded-2xl bg-muted-50 py-10 text-center ring-1 ring-inset ring-muted-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<P size="md" weight="semibold" className="text-muted-600">
										Subscrição mensal
									</P>
									<P className="mt-6 flex items-baseline justify-center gap-x-2">
										<Span size="4xl" weight="bold">
											€960
										</Span>
										<Span size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR
										</Span>
									</P>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://buy.stripe.com/8wM6oR9eSdkd5SoaEJ" target="_blank" rel="noopener noreferrer">
											Assine este plano
										</a>
									</Button>
									<P size="xs" className="mt-6 text-muted-600">
										Assine e cancele a qualquer momento.
									</P>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<H3 size="2xl">Suporte contínuo 8h/semana</H3>
							<P size="md" className="mt-6 text-muted-600">
								Esses são os planos mais populares para estudantes que desejam <strong>as melhores notas</strong>.
							</P>
							<div className="mt-10 flex items-center gap-x-4">
								<H4 size="sm" className="flex-none font-semibold text-brand">
									Podemos usar esse tempo para
								</H4>
								<div className="h-px flex-auto bg-muted-100" />
							</div>
							<ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-600 sm:grid-cols-2 sm:gap-6">
								{includedFeatures.map(feature => (
									<li key={feature} className="flex gap-x-3">
										<Icon name="check" className="h-6 w-5 flex-none text-brand" aria-hidden="true" />
										{feature}
									</li>
								))}
							</ul>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="h-full rounded-2xl bg-muted-50 py-10 text-center ring-1 ring-inset ring-muted-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<P size="md" weight="semibold" className="text-muted-600">
										Subscrição mensal
									</P>
									<P className="mt-6 flex items-baseline justify-center gap-x-2">
										<Span size="4xl" weight="bold">
											€1280
										</Span>
										<Span size="sm" weight="semibold" className="tracking-wide text-muted-600">
											EUR
										</Span>
									</P>
									<Button variant="primary" size="wide" asChild className="mt-10">
										<a href="https://buy.stripe.com/bIY6oRaiWa81gx2aEK" target="_blank" rel="noopener noreferrer">
											Assine este plano
										</a>
									</Button>
									<P size="xs" className="mt-6 text-muted-600">
										Assine e cancele a qualquer momento.
									</P>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container className="pt-14">
				<div className="py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:py-40">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
						<H2 size="4xl" className="mt-10 text-muted-900">
							Selo de garantia de satisfação
						</H2>
						<P size="lg" className="mt-6 text-muted-600">
							Tenho certeza que vais adorar as sessões de tutoria comigo. Na remota possibilidade de não gostares - e tenho orgulho de dizer que em{' '}
							{new Date().getFullYear() - 2006} anos de aulas particulares, ninguém pediu o dinheiro de volta - eu devolverei o teu dinheiro.
						</P>
					</div>
					<div className="mt-16 rounded-xl bg-brand p-40 sm:mt-24 lg:mt-0">
						<img src={satisfactionGuarantee} alt="Selo de garantia de satisfação" />
					</div>
				</div>
			</Container>
			<Container className="pt-14">
				<div className="py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:py-40">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
						<H2 size="4xl" className="mt-10 max-w-lg text-muted-900">
							Uma nota para ti
						</H2>
						<P size="lg" className="mt-6 text-muted-600">
							Só quero agradecer-te por reservares um tempo para leres sobre meu serviço de tutoria. Continua a ser uma tremenda honra ter tantos alunos que confiam em mim para
							ajudá-los a encontrar uma maneira melhor de frequentar a faculdade. Sinceramente espero que tenhas decidido ter tutoria de {name}, mesmo que não comigo, porque
							sei que é uma decisão muito boa.
						</P>
						<P size="lg" className="mt-6 text-muted-600">
							Ao teu sucesso! 🥂
						</P>
					</div>
					<div className="mt-16 rounded-xl p-8 sm:mt-24 lg:mt-0">
						<img src={signatureBlack} alt="Assinatura de André Casal" className="mt-16 dark:hidden" />
						<img src={signatureWhite} alt="Assinatura de André Casal" className="mt-16 hidden dark:block" />
					</div>
				</div>
			</Container>
		</>
	)
}
export default Route

const newsletterSchema = z.object({ email: emailSchema })
export const verificationType = `resources`

export async function action({ request, params }: ActionFunctionArgs) {
	const { subjectslug } = params
	const subject = subjects.find(s => s.slug === subjectslug)!
	const { name } = subject
	const formData = await request.formData()

	// Check for bots
	await validateCSRF(formData, request.headers)
	checkHoneypot(formData, '/newsletter')

	// Parse form
	const submission = parseWithZod(formData, { schema: newsletterSchema })
	if (submission.status !== 'success') {
		return json({ result: submission.reply() }, { status: submission.status === 'error' ? 400 : 200 })
	}

	// Extract data
	const { email } = submission.value

	const resourcesURL = new URL(`${getDomainUrl(request)}/explicacoes/${subjectslug}/recursos`)
	resourcesURL.searchParams.set('email', email)

	const oneDay = 60 * 60 * 24 // One day in seconds
	const target = email
	const { otp, secret, algorithm, period, digits } = generateTOTP({ algorithm: 'sha256', period: oneDay })
	// delete old verifications. Users should not have more than one verification
	// of a specific type for a specific target at a time.
	await prisma.verification.deleteMany({
		where: { type: verificationType, target },
	})
	await prisma.verification.create({
		data: {
			type: verificationType,
			target,
			algorithm,
			secret,
			period,
			digits,
			charSet: 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789',
			expiresAt: new Date(Date.now() + period * 1000),
		},
	})

	// add the otp to the url we'll email the user.
	resourcesURL.searchParams.set('code', otp)

	// Schedule emails
	await scheduleEmailSequence(email)

	// Send email with resource link
	await sendEmail({
		to: email,
		subject: `🚀 Recursos para estudantes de ${name}`,
		react: <ResourcesEmail subject={name} resourcesURL={resourcesURL.toString()} />,
	})

	// Everything ok
	return json({ status: 'success', submission } as const)
}

async function scheduleEmailSequence(email: string) {
	const now = new Date()
	const in1Day = new Date(now.getTime() + 1 * 24 * 3600 * 1000)
	const in2Days = new Date(now.getTime() + 2 * 24 * 3600 * 1000)
	const in3Days = new Date(now.getTime() + 3 * 24 * 3600 * 1000)
	const in4Days = new Date(now.getTime() + 4 * 24 * 3600 * 1000)
	const scheduleDates = [in1Day, in2Days, in3Days, in4Days]
	for (let i = 0; i < scheduleDates.length; i++) {
		const scheduledAt = scheduleDates[i]
		const sequence = i + 1
		await prisma.emailSchedule.upsert({
			where: {
				to_sequence: {
					to: email,
					sequence,
				},
			},
			update: {
				scheduledAt: scheduledAt,
			},
			create: {
				to: email,
				sequence,
				scheduledAt: scheduledAt,
			},
		})
	}
}
