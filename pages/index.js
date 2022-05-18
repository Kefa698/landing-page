import Head from 'next/head';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { data } from '../data';

export default function Home({ services }) {
	console.log(services);
	return (
		<div>
			<Head>
				<title>Landing page</title>
				<meta name="description" content="landing page" />
			</Head>
			<Intro />
			<Services services={services} />
			<Testimonials />
		</div>
	);
}
export const getServerSideProps = async () => {
	const services = data;
	return {
		props: {
			services,
		},
	};
};
