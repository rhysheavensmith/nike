import {
	Hero,
	Footer,
	SuperQuality,
	PopularProducts,
	Services,
	SpecialOffers,
	CustomerReviews,
	Subscribe,
} from './sections';

import Nav from './components/Nav';

const App = () => {
	return (
		<main className='relative'>
			<Nav />
			<section className='xl:padding-l padding-b wide:padding-r'>
				<Hero />
			</section>
			<section className='padding'>
				<PopularProducts />
			</section>
			<section className='padding'>
				<SuperQuality />
			</section>
			<section className='padding-x py-10'>
				<Services />
			</section>
			<section className='padding'>
				<SpecialOffers />
			</section>
			<section className='padding bg-pale-blue'>
				<CustomerReviews />
			</section>
			<section className='padding-x sm:py-32 py-16 w-full'>
				<Subscribe />
			</section>
			<section className='padding-x padding-t pb-8 bg-black '>
				<Footer />
			</section>
		</main>
	);
};

export default App;
