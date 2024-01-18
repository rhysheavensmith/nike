import { star } from '../assets/icons';

const ReviewCard = ({ feedback, imgURL, customerName, rating }) => {
	const starImages = Array.from({ length: rating }, (_, index) => (
		<img key={index} src={star} alt='rating' width={24} height={24} />
	));
	return (
		<div className='flex justify-center items-center flex-col'>
			<img
				src={imgURL}
				alt='customer'
				className='rounded-full object-cover w-[120px] h-[120px]'
			/>
			<p className='mt-6 mx-w-sm text-center info-text'>{feedback}</p>
			<div className='flex gap-3 mt-2'>
				{starImages}
				<p className='text-xl font-montserrat tex-slate-gray'>({rating})</p>
			</div>
			<h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
				{customerName}
			</h3>
		</div>
	);
};

export default ReviewCard;
