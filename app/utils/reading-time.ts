const WORDS_PER_MINUTE = 225

export function getReadingTime(text: string): number {
	const wordCount = text.trim().split(/\s+/).length
	return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
}
