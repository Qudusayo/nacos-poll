import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
	providers: [
		Credentials({
			type: "credentials",
			credentials: {
				username: {},
				password: {},
			},
			async authorize(credentials) {
				const username = credentials?.username;
				const password = credentials?.password;

				const data = new URLSearchParams({
					username: username as string,
					password: password as string,
				}).toString();

				const res = await fetch(
					process.env.NEXT_PUBLIC_BASE_URL + "/api/authenticate",
					{
						method: "POST",
						headers: {
							accept: "application/json",
							"Content-Type": "application/x-www-form-urlencoded",
							"X-APP-KEY": process.env.NEXT_PUBLIC_X_APP_KEY as string,
						},
						body: new URLSearchParams(data).toString(),
					},
				);

				const response = await res.json();
				console.log(response);

				if (response) {
					if (response.status) {
						return response?.payload ?? null;
					} else {
						throw new Error(JSON.stringify(response));
					}
				} else {
					throw new Error("An error occurred while logging in");
				}
			},
		}),
	],
	pages: {
		signIn: "/login",
		error: "/login",
		signOut: "/login",
	},
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token }) {
			session.user = token as any;

			return session;
		},
	},
};
