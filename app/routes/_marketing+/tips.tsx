import { CodeBlock, type Language } from '~/components/ui/code-block.tsx'
import { Container } from '~/components/ui/container.tsx'
import { Text } from '~/components/ui/text.tsx'

const Tips = () => {
	const tips: { filename: string; extension: Language; code: string }[] = [
		{
			filename: 'example',
			extension: 'tsx',
			code: `let entity = /&#x?[\da-f]{1,8};/
const regExpLiteral = /Hello/gi;
for (const foo of ['a', 'b', 'c']) {
	if (foo === 'foobar') break;
	await foo;
}

const Tips = () => {
	const person: {name: string; age: number; skills: string[]} = {
		name: 'Dom',
		age: 28,
		skills: ['Programming', \`Cooking \${JSON.stringify(1 + 1) == 2}\`, 'Tennis'],
	}

	const copied = JSON.parse(JSON.stringify(person))

	const PI = 3.1415

	function testFunction() {
		if(1 === 1 && 2 == 2) {
			console.log(true === false)
			console.log(person.skills === copied.skills) // false 😎
		}
	}

	testFunction()

	return (
		<Container>
			<Text heading="h1" size="4xl" className="sm:text-size-6xl">
				Tips
			</Text>
			<Highlight code={jsString} language="javascript" theme={cobalt2Theme}>
				{({ style, tokens, getLineProps, getTokenProps }) => (
					<pre className="font-semibold" style={style}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								<span>{i + 1}</span>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
			<Spacer size="xs" />
			<Highlight code={htmlString} language="html" theme={cobalt2Theme}>
				{({ style, tokens, getLineProps, getTokenProps }) => (
					<pre style={style}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								<span>{i + 1}</span>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</Container>
	)
}`,
		},
		{
			filename: 'example',
			extension: 'tsx',
			code: `let entity = /&#x?[\da-f]{1,8};/
const regExpLiteral = /Hello/gi;
for (const foo of ['a', 'b', 'c']) {
	if (foo === 'foobar') break;
	await foo;
}

const Tips = () => {
	const person: {name: string; age: number; skills: string[]} = {
		name: 'Dom',
		age: 28,
		skills: ['Programming', \`Cooking \${JSON.stringify(1 + 1) == 2}\`, 'Tennis'],
	}

	const copied = JSON.parse(JSON.stringify(person))

	const PI = 3.1415

	function testFunction() {
		if(1 === 1 && 2 == 2) {
			console.log(true === false)
			console.log(person.skills === copied.skills) // false 😎
		}
	}

	testFunction()

	return (
		<Container>
			<Text heading="h1" size="4xl" className="sm:text-size-6xl">
				Tips
			</Text>
			<Highlight code={jsString} language="javascript" theme={cobalt2Theme}>
				{({ style, tokens, getLineProps, getTokenProps }) => (
					<pre className="font-semibold" style={style}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								<span>{i + 1}</span>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
			<Spacer size="xs" />
			<Highlight code={htmlString} language="html" theme={cobalt2Theme}>
				{({ style, tokens, getLineProps, getTokenProps }) => (
					<pre style={style}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								<span>{i + 1}</span>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</Container>
	)
}`,
		},
	]

	return (
		<Container>
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-2xl lg:text-center">
					<Text heading="h2" size="md" className="text-brand">
						Golden nuggets of knowledge
					</Text>
					<Text size="3xl" className="mt-2 font-bold sm:text-4xl">
						Hot tips to upgrade your skills
					</Text>
					<Text size="lg" className="mt-6 text-muted-600">
						Explore the art of writing elegant and maintainable code that sparks joy for developers and users alike. Master best practices, code refactoring, and design patterns
						to create software that stands the test of time.
					</Text>
				</div>
			</div>
			{tips.map(({ filename, extension, code }, i) => (
				<CodeBlock key={i} filename={filename} extension={extension} code={code} className="mt-10" />
			))}
		</Container>
	)
}

export default Tips
