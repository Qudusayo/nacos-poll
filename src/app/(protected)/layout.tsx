import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
	const session = await auth();

	if (!session) redirect("/signin");

	return (
		<SessionProvider session={session}>
			<div className="flex h-dvh flex-1 flex-col bg-[#000000] text-white">
				<Navbar />
				<div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
			</div>
		</SessionProvider>
	);
};

export default Layout;
