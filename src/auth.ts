import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			type: "credentials",
			credentials: {
				username: {},
				password: {},
			},
			async authorize(credentials) {
				try {
					const { username, password } = credentials;

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
					return response?.payload ?? null;
				} catch (error) {
					console.log({ error });
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: "/login",
		error: "/login",
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
});
