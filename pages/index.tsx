import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Web | Daniel Costa</title>
				<meta name="description" content="Generated by Daniel Costa" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="#">My Webpage</a>
				</h1>

				<p className={styles.description}>
					Developed by
					<code className={styles.code}>@danicunhac</code>
				</p>

				<div className={styles.grid}>
					<a href="https://github.com/danicunhac" className={styles.card}>
						<h2>Github &rarr;</h2>
						<p>Find in-depth information about what I&apos;m working on.</p>
					</a>

					<a href="https://linkedin.com/in/danielcunhac" className={styles.card}>
						<h2>Linkedin &rarr;</h2>
						<p>Learn about me in an interactive page on my personal profile!</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;
