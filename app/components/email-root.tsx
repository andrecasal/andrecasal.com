import {
	Preview, // A preview text that will be displayed in the inbox of the recipient before they open the email
	Tailwind, // A React component to wrap emails with Tailwind CSS
	Html, // <html> tag
	Head, // <head> tag
	Body, // <body> tag
	Container, // <table>, <tbody>, and <tr> tags with align="center" and max-width: 37.5em
	Row, // <table>, <tbody>, and <tr> tags
	Section, // <table>, <tbody>, <tr>, and <td> tags
	//Column, // <td> tag
	//Heading, // <h1> - <h6> tags
	Hr, // <hr> tag
	//Img, // <img> tag
	// Note: All email clients can display .png, .gif, and .jpg images. Unfortunately, .svg images are not well supported, regardless of how they’re referenced, so avoid using these. See Can I Email for more information.
	Link, // <a> tag, needs href and optional target
	//Button, // A link that is styled to look like a button.
	// Semantics: Quite often in the email world we talk about buttons, when actually we mean links. Behind the scenes this is a <a> tag, that is styled like a <button> tag.
	Text, // <p> tag
} from '@react-email/components'
import { type ReactNode } from 'react'

export const EmailRoot = ({ subjectLine, previewText, children }: { subjectLine: string; previewText: string; children: ReactNode }) => {
	return (
		<Html lang="en" dir="ltr">
			<Head>
				<title>{subjectLine}</title>
				<Preview>{previewText}</Preview>
			</Head>
			<Tailwind>
				<Body className="bg-white py-4 font-sans text-base">
					<Container>
						{children}
						<Hr className="mt-14" />
						<Section className="mt-14">
							<Row>
								<Link href="https://andrecasal.com" target="_blank" className="relative -m-3 block rounded-md p-3 text-4xl font-semibold text-gray-900">
									André Casal
								</Link>
							</Row>
							<Row>
								<Text className="mb-10 mt-2 text-lg leading-8 text-gray-600">A tech entrepreneur who loves to build stuff.</Text>
							</Row>
							<Row>
								<Link href="https://twitter.com/theandrecasal" target="_blank" className="mr-4 text-[#ca8b04]">
									Twitter
								</Link>
								<Link href="https://github.com/andrecasal" target="_blank" className="mx-4 text-[#ca8b04]">
									GitHub
								</Link>
								<Link href="https://www.youtube.com/@andrecasal" target="_blank" className="ml-4 text-[#ca8b04]">
									YouTube
								</Link>
							</Row>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}
