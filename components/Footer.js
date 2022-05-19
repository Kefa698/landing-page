import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cardL}>
				<h1 className={styles.title}>Creatives</h1>
				<h1 className={styles.linkTitle}>
					<a href="/contact">
						<span className={styles.linkText}>Work with us</span>
						<Image src="/img/link.png" height="40px" width="40px" alt="" />
					</a>
				</h1>
			</div>
			<div className={styles.cardS}>
				<div className={styles.cardItem}>
					Shell MountainViewMall <br />
					Kenya
				</div>
				<div className={styles.cardItem}>
					contact@kefaisaboke.com <br />
					0712345678
				</div>
			</div>
			<div className={styles.cardS}>
				<div className={styles.cardItem}>
					Follow Us: <br />
					_FB _TW _IN _BE
				</div>
				<div className={styles.cardItem}>
					@2022 KEFA INTERACTIVE <br />
					ALL RIGHTS RESERVED
				</div>
			</div>
		</div>
	);
};

export default Footer;
