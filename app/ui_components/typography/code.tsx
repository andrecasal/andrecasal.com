import { forwardRef, useState, type HTMLAttributes, type KeyboardEvent } from 'react'
import { useCopyToClipboard } from '~/hooks/useCopyToClipboard'
import { Tooltip } from '~/ui_components/ui/tooltip.tsx'

type CodeProps = { copy?: boolean } & { children: string } & HTMLAttributes<HTMLElement>

/**
 * A Code component.
 *
 * @param {boolean} [copy='false'] - Whether to allow copy functionality or not.
 */
const Code = forwardRef<HTMLElement, CodeProps>(({ copy = false, children, className, ...props }, ref) => {
	const [showCopyFeedback, setShowCopyIcon] = useState(true)
	const [, copyToClipboard] = useCopyToClipboard()

	const handleClick = (commandToCopy: string) => {
		copyToClipboard(commandToCopy)
		if (showCopyFeedback) {
			setShowCopyIcon(false)
			setTimeout(() => setShowCopyIcon(true), 1000)
		}
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLElement>, commandToCopy: string) => {
		if (e.key === 'Enter') {
			copyToClipboard(commandToCopy)
			if (showCopyFeedback) {
				setShowCopyIcon(false)
				setTimeout(() => setShowCopyIcon(true), 1000)
			}
		}
	}

	// Set tab index if copy is enabled
	props = copy ? { tabIndex: 0 } : {}

	return copy ? (
		<Tooltip key={children} content={showCopyFeedback ? 'Click to copy to clipboard' : 'Saved to clipboard!'}>
			<code ref={ref} className={`code ${copy ? 'cursor-pointer' : ''}`} {...props} onClick={() => handleClick(children)} onKeyDown={e => handleKeyDown(e, children)}>
				{children}
			</code>
		</Tooltip>
	) : (
		<code ref={ref} className="code" {...props}>
			{children}
		</code>
	)
})
Code.displayName = 'Code'

export { Code }
