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
		console.log(response);
		// {
		//   status: true,
		//   message: 'You have successfully cast your vote',
		//   payload: null
		// }
		if (response.status) {
			return response;
		} else {
			throw new Error(JSON.stringify(response));
		}
	} catch (error: unknown) {
		let errorMsg: Response;
		try {
			if (error instanceof Error) {
				errorMsg = JSON.parse(error.message);
			} else {
				errorMsg = {
					status: false,
					message: "An unknown error occurred",
					payload: null,
				};
			}
		} catch (parseError) {
			errorMsg = {
				status: false,
				message: "An unknown error occurred",
				payload: null,
			};
		}
		throw new Error(JSON.stringify(errorMsg));
	}
}
