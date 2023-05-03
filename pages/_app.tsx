import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { createClient } from "@supabase/supabase-js";

import "../styles/globals.css";
import { useCallback, useEffect, useState } from "react";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL as string,
	process.env.NEXT_PUBLIC_SUPABASE_KEY as string
);

function MyApp({ Component, pageProps }: AppProps) {
	const [views, setViews] = useState(0);

	const getViews = useCallback(async () => {
		const { data } = await supabase
			.from("views")
			.select("count")
			.limit(1)
			.single();

		setViews(data?.count);
	}, []);

	const updateViews = useCallback(async () => {
		await supabase.rpc("increment", {
			slug_text: "/",
		});
	}, []);

	useEffect(() => {
		getViews();
		updateViews();
	}, [updateViews, getViews]);

	return (
		<>
			<Component {...pageProps} views={views} />
			<Analytics />
		</>
	);
}

export default MyApp;
