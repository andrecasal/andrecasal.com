import { Container } from '~/components/ui/container.tsx'
import { json } from '@remix-run/node'
/* import { useLoaderData } from '@remix-run/react'
import { useMemo } from 'react' */
import { bundleMDX } from 'mdx-bundler'
/* import { getMDXComponent } from 'mdx-bundler/client' */

export const loader = async () => {
	const source = `---
title: Example Post
published: 2021-02-13
description: This is some description
---

# Wahoo

Here's a **neat** demo.`.trim()

	const { code, frontmatter } = await bundleMDX({ source })
	return json({})
}

const TestingMDX = () => {
	//const { code, frontmatter } = useLoaderData<typeof loader>()

	// it's generally a good idea to memoize this function call to
	// avoid re-creating the component every render.
	//const Component = useMemo(() => getMDXComponent(code), [code])
	return (
		<Container>
			<p>Hello world!</p>
			<header>
				{/* <h1>{frontmatter.title}</h1>
				<p>{frontmatter.description}</p> */}
			</header>
			<main>{/* <Component /> */}</main>
		</Container>
	)
}

export default TestingMDX
