import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Button from '~/components/ui/Button'
import SponsorLogo from '~/public/images/sponsor-logo.png'
import SponsorCode from './sponsor-code'

export default function Sponsor() {
	const t = useTranslations('HomePage.SponsorSpot')

	return (
		<div className='grid w-full grid-cols-1 md:h-[350px] md:grid-cols-2'>
			<div className='flex items-center justify-center gap-5 bg-[#F5F5F5] px-4 py-6 md:p-2'>
				<Image
					height={186}
					width={132}
					src={SponsorLogo}
					alt='bluebunny'
					className='h-[155px] w-[110px] md:h-[186px] md:w-[132px]'
				/>

				<div className='text-center font-medium text-light-blue'>
					<div className='mb-1 text-dark-blue text-xs lg:text-sm'>
						{t('sponsoredBy')}
					</div>
					<div className='mb-2 font-black text-3xl lg:text-5xl sm:text-4xl'>
						BLUEBUNNY
					</div>
					<div className='text-base lg:text-lg'>{t('sponsorMessage')}</div>
				</div>
			</div>

			<div className='flex flex-col items-center justify-center gap-4 bg-light-blue/60 px-4 py-6 text-center text-milky-white md:gap-5 md:p-2'>
				<div className='font-black text-3xl lg:text-5xl sm:text-4xl'>
					{t('Coupon.save')}
				</div>

				<div className='flex items-center gap-4 font-medium text-lg lg:text-xl'>
					<div>{t('Coupon.codeTitle')}</div>
					<SponsorCode />
					<div>{t('Coupon.checkout')}</div>
				</div>
				<Button>{t('Coupon.shopButton')}</Button>
			</div>
		</div>
	)
}
