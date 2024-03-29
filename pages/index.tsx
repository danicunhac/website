import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

import {
	LinkedinLogo,
	GithubLogo,
	InstagramLogo,
	ArrowSquareOut,
	Eye,
	YoutubeLogo,
	TwitterLogo,
} from "phosphor-react";
import axios from "axios";
import VisibilitySensor from "react-visibility-sensor";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

import styles from "../styles/Home.module.css";

const Home: NextPage<{ avatar_url: string; views: number }> = ({
	avatar_url,
	views,
}) => {
	const [isCounted, setIsCounted] = useState(false);

	return (
		<div className={styles.container}>
			<Head>
				<title>Daniel Costa | Software Engineer</title>
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
					placeholder="blur"
					blurDataURL={avatar_url}
				/>

				<div className={styles.info}>
					<h1 className={styles.title}>Daniel Costa</h1>
					<p className={styles.description}>Software Engineer</p>
				</div>

				<div className={styles.row}>
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
					<div className={styles.grid}>
						<a href="https://youtube.com/@danicunhac" className={styles.card}>
							<YoutubeLogo size={24} />
							<span>/@danicunhac</span>
							<ArrowSquareOut size={24} />
						</a>
						<a href="https://twitter.com/danicunhac" className={styles.card}>
							<TwitterLogo size={24} />
							<span>@danicunhac</span>
							<ArrowSquareOut size={24} />
						</a>
						<CountUp
							decimal="."
							separator="."
							start={isCounted ? 0 : undefined}
							end={views}
							redraw={true}
							duration={views * 0.1}
						>
							{({ countUpRef }) => (
								<VisibilitySensor
									onChange={(isVisible: boolean) => {
										if (isVisible) {
											setIsCounted(true);
										}
									}}
								>
									<div className={styles.card}>
										<Eye size={24} />
										<span>Views</span>
										<span className={styles.count} ref={countUpRef} />
									</div>
								</VisibilitySensor>
							)}
						</CountUp>
					</div>
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
