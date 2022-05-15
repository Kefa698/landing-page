import Head from 'next/head';
import Intro from '../components/Intro';
import Services from '../components/Services';
import { data } from '../data';

import styles from '../styles/Home.module.css';

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
