import { useState, type HTMLAttributes, useRef, useEffect } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/utils/tailwind-merge.ts'
import { useCopyToClipboard } from 'usehooks-ts'
import { AccessibleIcon } from '~/components/ui/accessible-icon.tsx'
import { Tooltip } from '~/routes/_marketing+/ui+/components/ui/tooltip.tsx'

const commandLineVariants = cva('notranslate rounded-lg overflow-hidden text-white bg-[rgb(24,46,63)]', {
	variants: {
		variant: {
			inline: 'inline px-1 py-0.5',
			block: '',
		},
	},
})

export type CommandAndLogArray = { type: 'command' | 'log'; text: string }[]

type CommandLineProps = { command: string | CommandAndLogArray } & VariantProps<typeof commandLineVariants> &
	HTMLAttributes<HTMLPreElement> & {
		children?: never // Prevent receiving children
	}

export const CommandLine = ({ command = '', variant = 'inline', className, ...props }: CommandLineProps) => {
	// Copy to clipboard
	const [showCopyIcon, setShowCopyIcon] = useState(true)
	const [, copy] = useCopyToClipboard()
	// Extract commands
	const lines = Array.isArray(command) ? command : [{ type: 'command', text: command }]
	const linesWithoutLogs = lines.filter(line => line.type === 'command')
	const allCommandsString = linesWithoutLogs.map(line => line.text).join('\n')
	// Code overflows
	const ref = useRef<HTMLDivElement>(null)
	const [codeOverflows, setCodeOverflows] = useState(false)

	const handleCopy = (commandToCopy: string) => {
		copy(commandToCopy)
		if (showCopyIcon) {
			setShowCopyIcon(false)
			setTimeout(() => setShowCopyIcon(true), 1000)
		}
	}

	useEffect(() => {
		if (ref.current) {
			setCodeOverflows(ref.current.offsetHeight < ref.current.scrollHeight || ref.current.offsetWidth < ref.current.scrollWidth)
		}
	}, [ref])

	return variant === 'block' ? (
		<pre className={cn(commandLineVariants({ variant }), className)} {...props}>
			<div className="flex overflow-hidden">
				<div ref={ref} className="flex-grow overflow-x-scroll">
					{lines.map(({ type, text }, i) => (
						<div key={i} className="flex gap-4">
							{type === 'command' ? (
								<div className="flex items-stretch justify-stretch">
									<div className="bg-blue-500 pl-2 pr-1.5">~</div>
									<div>
										<svg viewBox="0 0 30 100" className="h-full">
											<polygon points="0,0 30,50 0,100" className="fill-blue-500" />
										</svg>
									</div>
								</div>
							) : null}
							<code className="pr-4">{text}</code>
						</div>
					))}
				</div>
				<div className={codeOverflows ? `shadow-[rgba(0,0,15,0.5)_-10px_0_5px_0]` : ``}>
					{linesWithoutLogs.length > 0 ? (
						<button className={`min-h-tap min-w-tap rounded-lg px-4 hover:bg-muted-100/10 ${lines.length > 1 ? 'py-2' : ''}`} onClick={() => handleCopy(allCommandsString)}>
							{showCopyIcon ? <AccessibleIcon name="copy" label="Copy to clipboard" /> : <AccessibleIcon name="check" label="Saved to clipboard" />}
						</button>
					) : null}
				</div>
			</div>
		</pre>
	) : (
		linesWithoutLogs.map(({ text }, i) => (
			<Tooltip key={text} content={showCopyIcon ? 'Click to copy to clipboard' : 'Saved to clipboard!'}>
				<span onClick={() => handleCopy(text)} className="cursor-pointer">
					<pre className={cn(commandLineVariants({ variant }), className)} {...props}>
						<code>{text}</code>
					</pre>
					{linesWithoutLogs.length > 1 && i < linesWithoutLogs.length - 1 ? ' ' : ''}
				</span>
			</Tooltip>
		))
	)
}
