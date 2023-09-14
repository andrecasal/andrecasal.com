import { useState, type HTMLAttributes, type MouseEvent } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/utils/tailwind-merge.ts'
import { useCopyToClipboard } from 'usehooks-ts'
import { AccessibleIcon } from '~/components/ui/accessible-icon.tsx'

const commandVariants = cva('notranslate text-white bg-[rgb(24,46,63)] flex', {
	variants: {
		variant: {
			inline: 'inline px-1 py-0.5 rounded-lg',
			block: 'p-2 rounded-lg',
		},
	},
})

type CodeProps = { code: string } & VariantProps<typeof commandVariants> &
	HTMLAttributes<HTMLPreElement> & {
		children?: never // Prevent receiving children
	}

export const Command = ({ code, variant = 'inline', className, ...props }: CodeProps) => {
	const [showCopyIcon, setShowCopyIcon] = useState(true)
	const [, copy] = useCopyToClipboard()
	const lines = code.split('\n')

	const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
		copy(code)
		if (showCopyIcon) {
			setShowCopyIcon(false)
			setTimeout(() => setShowCopyIcon(true), 1000)
		}
	}

	return (
		<pre className={cn(commandVariants({ variant }), className)} {...props}>
			{variant === 'block' ? (
				<div className="relative h-full w-full">
					{lines.map((line, i) => (
						<div key={i} className="flex gap-4">
							<div className="flex items-stretch justify-stretch">
								<div className="bg-blue-500 pl-2 pr-1.5">~</div>
								<div>
									<svg viewBox="0 0 30 100" className="h-full">
										<polygon points="0,0 30,50 0,100" className="fill-blue-500" />
									</svg>
								</div>
							</div>
							<code>{line}</code>
						</div>
					))}
					<button className={`absolute right-0 top-0 ml-auto min-h-tap min-w-tap rounded-lg px-4 ${lines.length > 1 ? 'py-2' : ''} hover:bg-muted-100/10`} onClick={handleCopy}>
						{showCopyIcon ? <AccessibleIcon name="copy" label="Copy to clipboard" /> : <AccessibleIcon name="check" label="Saved to clipboard" />}
					</button>
				</div>
			) : (
				<code>{code}</code>
			)}
		</pre>
	)
}
