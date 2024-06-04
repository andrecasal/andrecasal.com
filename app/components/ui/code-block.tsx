import { type MouseEvent, type HTMLAttributes, useState, forwardRef } from 'react'
import { Highlight } from 'prism-react-renderer'
import type { PrismTheme } from 'prism-react-renderer/dist/'
import { AccessibleIcon } from './accessible-icon.tsx'
import { cn } from '~/utils/tailwind-merge.ts'
import { Icon } from './icon.tsx'
import { useCopyToClipboard } from '~/hooks/useCopyToClipboard.ts'

const cobalt2Theme: PrismTheme = {
	plain: {
		color: '#ffffff',
		backgroundColor: '#182E3F',
		fontWeight: '600',
	},
	styles: [
		// General purpose
		{
			types: ['keyword'],
			style: {
				color: '#F79028',
			},
		},
		{
			types: ['builtin'],
			style: {
				color: '#9DFE8D',
			},
		},
		{
			types: ['class-name'],
			style: {
				color: '#77FEB7',
			},
		},
		{
			types: ['function'],
			style: {
				color: '#FFBF2F',
			},
		},
		{
			types: ['boolean'],
			style: {
				color: '#FE5981',
			},
		},
		{
			types: ['number'],
			style: {
				color: '#FE5981',
			},
		},
		{
			types: ['string'],
			style: {
				color: '#9DFE8D',
			},
		},
		{
			types: ['char'],
			style: {
				color: '#9DFE8D',
			},
		},
		{
			types: ['symbol'], // For Smalltalk only
			style: {
				color: 'red',
			},
		},
		{
			types: ['regex'],
			style: {
				color: '#9DFE8D',
			},
		},
		{
			types: ['url'],
			style: {
				color: '#95FFFE',
			},
		},
		{
			types: ['operator'],
			style: {
				color: '#FE9327',
			},
		},
		{
			// The name of a variable. This token is intended to be used sparingly.
			// It's generally used on special variables (e.g. Less or Bash), not
			// general variables from imperative and procedural programming languages
			// (e.g. C, JavaScript, Python).
			types: ['variable'],
			style: {
				color: '#ffffff',
			},
		},
		{
			types: ['constant'],
			style: {
				color: '#ffffff',
			},
		},
		{
			types: ['property'],
			style: {
				color: '#9DFE8D',
			},
		},
		{
			types: ['punctuation'],
			style: {
				color: '#ffffff',
			},
		},
		{
			types: ['important'],
			style: {
				color: '#F79028',
			},
		},
		{
			types: ['comment'],
			style: {
				color: '#097DF9',
			},
		},
		// Markup languages
		{
			types: ['tag'],
			style: {
				color: '#95FFFE',
			},
		},
		{
			types: ['attr-name'],
			style: {
				color: '#FFBF2F',
			},
		},
		{
			types: ['attr-value'],
			style: {
				color: '#9DFE8D',
			},
		},
		{
			types: ['namespace'],
			style: {
				color: '#FFBF2F',
			},
		},
		{
			types: ['prolog'],
			style: {
				color: '#FFBF2F',
			},
		},
		{
			types: ['doctype'],
			style: {
				color: '#FFBF2F',
			},
		},
		{
			types: ['cdata'],
			style: {
				color: '#FFBF2F',
			},
		},
		{
			types: ['entity'],
			style: {
				color: '#FE5981',
			},
		},
		// Document-markup languages
		{
			types: ['bold'],
			style: {
				fontWeight: '900',
			},
		},
		{
			types: ['italic'],
			style: {
				fontStyle: 'italic',
			},
		},
		// Stylesheets
		{
			types: ['atrule'],
			style: {
				color: '#F79028',
			},
		},
		{
			types: ['selector'],
			style: {
				color: '#3AD900',
			},
		},
		// Diff (prism-react-renderer doesn't support this out-of-the-box)
		/* {
			types: ['inserted'],
			style: {
				color: '#FE5981',
			},
		},
		{
			types: ['deleted'],
			style: {
				color: '#9DFE8D',
			},
		}, */
		// Specific to prism-react-renderer
		/* {
			types: ['interpolation-punctuation'],
			style: {
				color: 'red',
			},
		},
		{
			types: ['template-punctuation'],
			style: {
				color: 'red',
			},
		}, */
	],
}

export type Language = 'css' | 'jsx' | 'tsx' | 'swift' | 'kotlin' | 'objectivec' | 'js-extras' | 'reason' | 'rust' | 'graphql' | 'yaml' | 'go' | 'cpp' | 'markdown' | 'js' | 'ts'

type CodeBlockProps = {
	filename: string
	extension: Language
	code: string
} & HTMLAttributes<HTMLDivElement>

const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(({ className, code, filename, extension, ...props }, ref) => {
	const [showCopyIcon, setShowCopyIcon] = useState(true)
	const [, copy] = useCopyToClipboard()

	const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
		copy(code)
		if (showCopyIcon) {
			setShowCopyIcon(false)
			setTimeout(() => setShowCopyIcon(true), 1000)
		}
	}

	return (
		<Highlight code={code} language={extension} theme={cobalt2Theme}>
			{({ style, tokens, getLineProps, getTokenProps }) => (
				<div ref={ref} className={cn('notranslate group overflow-hidden rounded-xl font-code text-size-xs leading-5', className)} style={style} {...props}>
					<div className="flex items-center justify-between bg-foreground/20">
						<div className="flex items-center gap-2 pl-3">
							<div className="h-[12px] w-[12px] rounded-full bg-[#FE5650]"></div>
							<div className="h-[12px] w-[12px] rounded-full bg-[#FDB43C]"></div>
							<div className="h-[12px] w-[12px] rounded-full bg-[#29C045]"></div>
						</div>
						<div>
							<Icon name={extension as any} /> {filename}.{extension}
						</div>
						<button className="h-10 min-h-tap min-w-tap rounded-lg px-4 py-2 hover:bg-muted-100/10" onClick={handleCopy}>
							{showCopyIcon ? <AccessibleIcon name="copy" label="Copy to clipboard" /> : <AccessibleIcon name="check" label="Saved to clipboard" />}
						</button>
					</div>
					<div className="flex">
						<ol className="select-none bg-foreground/10 px-2 py-2 sm:px-4">
							{tokens.map((_token, i) => (
								<li key={i}>{i + 1}</li>
							))}
						</ol>
						<pre className="flex-1 overflow-x-auto py-2 pl-2 pr-4">
							<code>
								{tokens.map((line, i) => (
									<div key={i} {...getLineProps({ line })}>
										{line.map((token, key) => (
											<span key={key} {...getTokenProps({ token })} />
										))}
									</div>
								))}
							</code>
						</pre>
					</div>
				</div>
			)}
		</Highlight>
	)
})
CodeBlock.displayName = 'CodeBlock'

export { CodeBlock }
