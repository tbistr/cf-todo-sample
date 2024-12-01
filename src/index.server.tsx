import { Hono } from "hono";
import { hc } from "hono/client";
import { renderToString } from "react-dom/server";
import { api } from "./api";

type Env = {
	Bindings: {
		MY_VAR: string;
	};
};

const app = new Hono<Env>().route("/api", api);
app.get("*", (c) => {
	return c.html(
		renderToString(
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta content="width=device-width, initial-scale=1" name="viewport" />
					<link
						rel="stylesheet"
						href="https://cdn.simplecss.org/simple.min.css"
					/>
					{import.meta.env.PROD ? (
						<script type="module" src="/static/client.js" />
					) : (
						<script type="module" src="/src/index.client.tsx" />
					)}
				</head>
				<body>
					<div id="root" />
				</body>
			</html>,
		),
	);
});

export default app;

type AppType = typeof app;
export const client = hc<AppType>("/");
