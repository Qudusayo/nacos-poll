import Navbar from "@/components/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen">
			{/* <Sidebar /> */}
			<div className="flex h-full flex-1 flex-col bg-[#000000] text-white">
				<Navbar />
				<div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
