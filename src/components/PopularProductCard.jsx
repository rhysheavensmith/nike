import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price, stars }) => {
	const starImages = Array.from({ length: stars }, (_, index) => (
		<img key={index} src={star} alt='rating' width={24} height={24} />
	));
	return (
		<div className='flex flex-1 flex-col w-full max-sm:w-full max-sm:flex-row max-sm:justify-between max-sm:mt-10'>
			<img src={imgURL} alt={name} className='w-[280px] h-[280px]' />
			<div>
				<div className='mt-4 flex justify-start gap-2.5'>
					{starImages}
					<p className='font-montserrat text-xl leading-normal text-slate-gray'>
						({stars})
					</p>
				</div>
				<h3 className='mt-2 text-2xl leading-normal font-palanquin font-semibold'>
					{name}
				</h3>
				<p className='mt-2 font-semibold font-montserrat font-coral-red text-2xl leading-normal'>
					{price}
				</p>
			</div>
		</div>
	);
};

export default PopularProductCard;
