import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
	return (
		<footer className='max-container'>
			<div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
				<div className='flex flex-col items-start'>
					<a href='/'>
						<img src={footerLogo} alt='footer logo' width={150} height={46} />
					</a>
					<p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
						Get shoes for the new season at your nearest Nike store. Find the
						perfect size in store & get rewards
					</p>
					<div className='flex items-center gap-5 mt-8'>
						{socialMedia.map((item, index) => (
							<div
								key={index}
								className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
							>
								<img src={item.src} alt={item.alt} height={24} width={24} />
							</div>
						))}
					</div>
				</div>

				<div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
					{footerLinks.map((section) => (
						<div key={section}>
							<h4 className='text-white font-montserrat leading-normal mb-6'>
								{section.title}
							</h4>
							<ul>
								{section.links.map((link, index) => (
									<li
										key={index}
										className='font-palanquin font-extralight text-slate-gray cursor-pointer hover:text-white leading-normal'
									>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className='flex justify-between text-slate-gray mt-24 max-sm:items-center mb-2'>
				<div className='flex flex-1 justify-start items-cetner gap-2 font-montserrat'>
					<img
						src={copyrightSign}
						alt='copyright'
						width={20}
						height={20}
						className='rounded-full m-0'
					/>
					<p>Copyright. All rights reserved</p>
				</div>
				<p className='font-montserrat cursor-pointer hover:text-white'>
					Terms and Conditions
				</p>
			</div>
		</footer>
	);
};

export default Footer;
