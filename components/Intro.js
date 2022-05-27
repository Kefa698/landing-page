import Image from 'next/image';
import React from 'react';
import styles from '../styles/Intro.module.css';
const Intro = () => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1 className={styles.title}>
					<span className={styles.brand}>AVOCADO </span>
					DIGITAL PRODUCT AGENCY
				</h1>
				<p className={styles.desc}>we create segments on developing websites</p>
				<button className={styles.button}>DISCOVER</button>
			</div>
			<div className={styles.card}>
				<Image priority src="/img/face.jpg" layout="fill" alt=''/>
			</div>
		</div>
	);
};

export default Intro;
