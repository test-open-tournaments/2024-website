import Image from 'next/image'

import ChevronDown from '~/components/icons/chevron-down'
import * as Dropdown from '~/components/ui/dropdown'

import type { Session } from '@types'
import SignOutButton from '~/components/sign-out-button'
import NavItem from '~/components/ui/nav-item'

interface UserDropdownProps {
	session: Session
	inviteCount: number | null
}

export default function UserDropdown({
	session,
	inviteCount
}: UserDropdownProps) {
	return (
		<Dropdown.Root>
			<Dropdown.Trigger className='group relative hidden max-w-44 items-center justify-between bg-gradient-to-r from-[-100%] from-light-blue to-salmon px-1 py-0.5 text-milky-white md:flex focus:outline-none'>
				{inviteCount ? (
					<div className='-left-1 -top-1 absolute'>
						<div className='relative'>
							<div className='size-3 rounded-full bg-red-500' />
							<div className='absolute top-[1px] left-[1px] size-[10px] animate-ping rounded-full bg-red-500' />
						</div>
					</div>
				) : null}

				<div className='flex items-center'>
					<Image
						width={26}
						height={26}
						alt='pfp'
						src={session.osu_avatar}
						className='size-[26px]'
					/>
					<span className='mx-1 max-w-28 truncate text-left font-semibold text-sm'>
						{session.osu_name}
					</span>
				</div>

				<ChevronDown className='size-6 transition-all duration-300 group-data-[state=open]:rotate-180' />
			</Dropdown.Trigger>

			<Dropdown.Content>
				<Dropdown.Item className='p-0'>
					<NavItem
						link='/profile'
						activeClassName='bg-light-blue text-milky-white'
						className='h-full w-full px-3 py-0.5 hover:bg-light-blue hover:text-milky-white'
					>
						PROFILE
					</NavItem>
				</Dropdown.Item>

				<Dropdown.Item className='p-0'>
					<NavItem
						link='/profile#invites'
						activeClassName='bg-light-blue text-milky-white'
						className='flex h-full w-full items-center justify-between px-3 py-0.5 hover:bg-light-blue hover:text-milky-white'
					>
						INVITES
						{inviteCount ? (
							<div className='flex size-4 items-center justify-center rounded-full bg-red-500 font-bold text-milky-white text-xs'>
								{inviteCount}
							</div>
						) : null}
					</NavItem>
				</Dropdown.Item>

				<Dropdown.Item className='p-0'>
					<NavItem
						link='/team'
						activeClassName='bg-light-blue text-milky-white'
						className='h-full w-full px-3 py-0.5 hover:bg-light-blue hover:text-milky-white'
					>
						TEAM
					</NavItem>
				</Dropdown.Item>

				<Dropdown.Item className='p-0 data-[highlighted]:bg-red-400'>
					<SignOutButton className='h-full w-full px-3 py-0.5 hover:text-milky-white' />
				</Dropdown.Item>
			</Dropdown.Content>
		</Dropdown.Root>
	)
}
