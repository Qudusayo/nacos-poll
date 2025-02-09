import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import Navbar from "@/components/navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(authOptions);

	if (!session) redirect("/login");

	return (
		<div className="flex h-dvh flex-1 flex-col bg-[#000000] text-white">
			<Navbar />
			<div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
		</div>
	);
};

export default Layout;
