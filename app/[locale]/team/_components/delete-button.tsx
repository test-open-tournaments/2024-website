'use client'

import { cn } from '@utils/client'
import { VariantProps } from 'class-variance-authority'
import { useFormStatus } from 'react-dom'

import Button, { buttonVariants } from '~/components/ui/Button'

interface DeleteButtonProps extends VariantProps<typeof buttonVariants> {
	text: string
	className?: string
}

export default function DeleteButton({
	text,
	variant,
	className
}: DeleteButtonProps) {
	const { pending } = useFormStatus()

	return (
		<Button
			className={cn('w-full', className)}
			variant={variant}
			loading={pending}
		>
			{text}
		</Button>
	)
}
