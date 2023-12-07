import { z } from 'zod'

export const usernameSchema = z
	.string()
	.min(3, { message: 'Username is too short' })
	.max(20, { message: 'Username is too long' })
	.regex(/^[a-zA-Z0-9_]+$/, {
		message: 'Username can only include letters, numbers, and underscores',
	})

export const passwordSchema = z.string().min(6, { message: 'Password is too short' }).max(100, { message: 'Password is too long' })
export const nameSchema = z.string().nonempty({ message: 'Name is required'}).max(40, { message: 'Name is too long' })
export const emailSchema = z.string().nonempty({ message: 'Email is required'}).email({ message: 'Email is invalid' }).min(3, { message: 'Email is too short' }).max(100, { message: 'Email is too long' })
