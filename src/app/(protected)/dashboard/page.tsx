import { auth } from "@/auth";
import AuthLoadingScreen from "@/components/auth/AuthLoadingScreen";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Dashboard from "./dashboard";

const page = async () => {
	const session = await auth();

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

	return (
		<Suspense fallback={<AuthLoadingScreen />}>
			<Dashboard data={response.payload} />
		</Suspense>
	);
};

export default page;
