import { useState, type HTMLAttributes, useRef, useEffect } from 'react'
import { cn } from '~/utils/tailwind-merge.ts'
import { useCopyToClipboard } from 'usehooks-ts'
import { AccessibleIcon } from '~/components/ui/accessible-icon.tsx'

export type CommandAndLogArray = { type: 'command' | 'log'; text: string }[]

type CommandLineProps = { commands: CommandAndLogArray } & HTMLAttributes<HTMLPreElement> & {
		children?: never // Prevent receiving children
	}

export const CommandLine = ({ commands, className, ...props }: CommandLineProps) => {
	const [showCopyIcon, setShowCopyIcon] = useState(true)
	const [, copy] = useCopyToClipboard()
	const onlyCommands = commands
		.filter(command => command.type === 'command')
		.map(command => command.text)
		.join('\n')
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

	return (
		<pre className={cn('notranslate overflow-hidden rounded-lg bg-[rgb(24,46,63)] text-white', className)} {...props}>
			<div className="flex overflow-hidden">
				<div ref={ref} className="flex-grow overflow-x-scroll">
					{commands.map(({ type, text }, i) => (
						<div key={i} className="flex gap-4">
							{type === 'command' ? (
								<div className="flex select-none items-stretch justify-stretch">
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
					{onlyCommands.length > 0 ? (
						<button className={`min-h-tap min-w-tap rounded-lg px-4 hover:bg-muted-100/10 ${commands.length > 1 ? 'py-2' : ''}`} onClick={() => handleCopy(onlyCommands)}>
							{showCopyIcon ? <AccessibleIcon name="copy" label="Copy to clipboard" /> : <AccessibleIcon name="check" label="Saved to clipboard" />}
						</button>
					) : null}
				</div>
			</div>
		</pre>
	)
}
