import { navItems } from '@siteConfig'
import { createClient } from '@supabase/server'
import { getSession } from '@utils/server'
import { getTranslations } from 'next-intl/server'
import { cookies } from 'next/headers'

import Logo from '~/components/icons/logo'
import SignInButton from '~/components/sign-in-button'
import Link from '~/components/ui/Link'
import NavItem from '~/components/ui/nav-item'
import MobileNav from './mobile-nav'
import UserDropdown from './user-dropdown'

export default async function Header() {
	const t = await getTranslations('NavItems')
	const session = getSession()
	const supabase = createClient(cookies())
	let inviteCount: number | null = null

	if (session) {
		const { count } = await supabase
			.from('invites')
			.select('', { count: 'exact' })
			.eq('user_id', session?.sub)
			.eq('status', 'pending')
		inviteCount = count
	}

	return (
		<header className='disabledViewTransiton h-14 bg-milky-white'>
			<section className='padding flex h-full grow items-center justify-between'>
				<Link
					href='/'
					className='flex cursor-pointer items-center space-x-2 focus:outline-none'
				>
					<Logo h={38} w={44} className='h-[38px] w-[44px]' />
					<h1 className='text-xl'>
						<span className='font-black'>TEST</span> OPEN
					</h1>
				</Link>

				<nav className='hidden h-full space-x-8 px-4 text-center font-semibold text-xs md:flex'>
					{navItems.map(({ link, text }) => (
						<NavItem
							key={text}
							link={link}
							className='flex items-center justify-center'
							underline
						>
							{t(text)}
						</NavItem>
					))}
				</nav>

				<nav className='md:hidden'>
					<MobileNav session={session} inviteCount={inviteCount} />
				</nav>

				{session ? (
					<UserDropdown session={session} inviteCount={inviteCount} />
				) : (
					<div className='hidden md:flex'>
						<SignInButton />
					</div>
				)}
			</section>
		</header>
	)
}
