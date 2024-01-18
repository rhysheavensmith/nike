import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';
const CustomerReviews = () => {
	return (
		<section className='max-container'>
			<h3 className='font-palanquin text-center text-4xl font-bold'>
				What Our <span className='text-coral-red'>Customers </span>say?
			</h3>
			<p className='info-text m-auto mt-4 max-w-full text-center'>
				Hear genuine stories from Nike customers about their exceptional
				experiences with us.
			</p>
			<div className='mt-24 flex flex-1 justify-evenly items-center mx-lg:flex-col gap-14 max-sm:flex-col'>
				{reviews.map((review) => (
					<ReviewCard key={review.customerName} {...review} />
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;
