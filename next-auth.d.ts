import "next-auth";

declare module "next-auth" {
	// eslint-disable-next-line
	interface Session {
		user: {
			access_token: string;
			details: {
				firstname: string;
				lastname: string;
				middlename: string;
				email: string;
				username: string;
				matric_number: string;
			};
		};
	}
}
