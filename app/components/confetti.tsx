import { Index as ConfettiShower } from 'confetti-react'
import { ClientOnly } from 'remix-utils/client-only'
import { useWindowSize } from 'usehooks-ts'

export function Confetti({ id }: { id?: string | null }) {
	const { width, height } = useWindowSize()
	if (!id) return null

	return <ClientOnly>{() => <ConfettiShower key={id} run={Boolean(id)} recycle={false} numberOfPieces={500} width={width} height={height} />}</ClientOnly>
}
