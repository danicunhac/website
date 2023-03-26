import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
	LinkedinLogo,
	GithubLogo,
	InstagramLogo,
	ArrowSquareOut,
} from "phosphor-react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ avatar_url: string }> = ({ avatar_url }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Web | Daniel Costa</title>
				<meta name="description" content="Generated by Daniel Costa" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Image
					src={avatar_url}
					width={200}
					height={200}
					alt="Picture of Daniel Costa"
					className={styles.picture}
				/>

				<div className={styles.info}>
					<h1 className={styles.title}>Daniel Costa</h1>
					<p className={styles.description}>Software Engineer</p>
				</div>

				<div className={styles.grid}>
					<a
						href="https://linkedin.com/in/danielcunhac"
						className={styles.card}
					>
						<LinkedinLogo size={24} />
						<span>/in/danielcunhac</span>
						<ArrowSquareOut size={24} />
					</a>
					<a href="https://github.com/danicunhac" className={styles.card}>
						<GithubLogo size={24} />
						<span>/danicunhac</span>
						<ArrowSquareOut size={24} />
					</a>
					<a href="https://instagram.com/dancunhac" className={styles.card}>
						<InstagramLogo size={24} />
						<span>@dancunhac</span>
						<ArrowSquareOut size={24} />
					</a>
				</div>
			</main>
		</div>
	);
};

export async function getStaticProps() {
	const { data } = await axios.get("https://api.github.com/users/danicunhac");

	const avatar_url = data.avatar_url;

	return {
		props: {
			avatar_url,
		},
	};
}

export default Home;
