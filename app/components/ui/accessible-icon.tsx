import * as AccessibleIconPrimitive from '@radix-ui/react-accessible-icon'
import { Icon, type IconName } from './icon.tsx'

const AccessibleIcon = ({ name, label }: { name: IconName; label: string }) => {
	return (
		<AccessibleIconPrimitive.Root label={label}>
			<Icon name={name} />
		</AccessibleIconPrimitive.Root>
	)
}

export { AccessibleIcon }
