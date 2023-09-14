import { useLocation } from '@remix-run/react'
import { type ScriptHTMLAttributes, useRef, useEffect } from 'react'

export type Fathom = {
	trackPageview(): void
	trackGoal(code: string, cents: number): void
	enableTrackingForMe(): void
	blockTrackingForMe(): void
	setSite(siteId: string): void
}

export type FathomQueue = Array<(fathom: Fathom) => void>

declare global {
	interface Window {
		fathom: Fathom | undefined
		fathomQueue: FathomQueue | undefined
	}
}

export const useFathom = () => {
	const fathom = () => {
		if (window.fathom && (window.fathomQueue || []).length === 0) {
			return window.fathom
		}

		// if fathom is not loaded yet or if the queue is not empty, we queue any calls function call
		return new Proxy({} as Fathom, {
			get(target, prop) {
				return (...args: any[]) => {
					window.fathomQueue = [
						...(window.fathomQueue || []),
						fathom => {
							const property = Reflect.get(fathom, prop)
							if (typeof property === 'function') {
								// we bind the function to the fathom object
								property.bind(fathom)(...args)
							} else {
								// if the property is not a function, we do nothing
							}
						},
					]
				}
			},
		})
	}

	return { fathom }
}

export const useTrackPageview = () => {
	const { pathname } = useLocation()
	const { fathom } = useFathom()

	useEffect(() => {
		fathom().trackPageview()
		// use pathname as a dependency to track page changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])
}

export const FathomScript = (
	props: {
		'data-site': string
	} & ScriptHTMLAttributes<HTMLScriptElement>,
) => {
	const scriptRef = useRef<HTMLScriptElement>(null)

	useEffect(() => {
		const handleQueue = () => {
			if (!window.fathomQueue) return

			while (window.fathomQueue.length > 0) {
				const fn = window.fathomQueue.shift()
				if (fn) {
					fn(window.fathom!)
				}
			}
		}

		const scriptElement = scriptRef.current
		if (scriptElement) {
			scriptElement.addEventListener('load', handleQueue)
			return () => {
				scriptElement.removeEventListener('load', handleQueue)
			}
		}
	}, [props])

	return (
		<script
			{...props}
			ref={scriptRef}
			type="text/javascript"
			src="https://cdn.usefathom.com/script.js"
			data-spa="history" // https://usefathom.com/docs/script/script-advanced#spa
			data-auto="false" // prevent tracking visit twice on initial page load with the queue strategy
			defer
		/>
	)
}
