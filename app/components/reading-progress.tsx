import { useEffect, useState } from 'react'

function ReadingProgress() {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
			setProgress(Math.min(100, scrollPercent))
		}

		window.addEventListener('scroll', updateProgress, { passive: true })
		updateProgress()
		return () => window.removeEventListener('scroll', updateProgress)
	}, [])

	return (
		<div className="fixed left-0 right-0 top-0 z-50 h-0.5">
			<div className="h-full bg-brand transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
		</div>
	)
}

export { ReadingProgress }
