import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import AuthLoadingScreen from "@/components/auth/AuthLoadingScreen";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Dashboard from "./dashboard";

const page = async () => {
	const session = await getServerSession(authOptions);
	if (!session) redirect("/login");

	const token = session.user.token;

	const res = await fetch(
		process.env.NEXT_PUBLIC_BASE_URL + "/api/candidate_details",
		{
			method: "GET",
			headers: {
				"X-APP-KEY": process.env.NEXT_PUBLIC_X_APP_KEY as string,
				Authorization: `Bearer ${token}`,
			},
		},
	);
	const response = await res.json();

	// const response = { payload: data };

	return (
		<Suspense fallback={<AuthLoadingScreen />}>
			<Dashboard data={response.payload} />
		</Suspense>
	);
};

export default page;
