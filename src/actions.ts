"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "./app/api/auth/[...nextauth]/auth-options";

type Response = {
	status: boolean;
	message: string;
	payload: null;
};

export async function castVote(selection: {
	[key: string]: string;
}): Promise<Response> {
	try {
		const session = await getServerSession(authOptions);
		const token = session?.user.token;

		const userRequest = {
			voting: Object.keys(selection).map(key => ({
				label: key,
				data: parseInt(selection[key]),
			})),
		};

		const vote_request = await fetch(
			process.env.NEXT_PUBLIC_BASE_URL + "/api/vote_casting",
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
					"X-APP-KEY": process.env.NEXT_PUBLIC_X_APP_KEY as string,
				},
				body: JSON.stringify(userRequest),
			},
		);

		const response: Response = await vote_request.json();

		return response;
	} catch (error: unknown) {
		return {
			status: false,
			message: "An unknown error occurred",
			payload: null,
		};
	}
}
