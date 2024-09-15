"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logout, Vote } from "./svgs";

const Sidebar = () => {
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;

	return (
		<div className="h-full w-80 bg-[#0f0f0f] p-6 px-10 pt-4 text-white">
			<div
				className="flex flex-col text-[#3f8627]"
				style={{
					textShadow: `1px 1px 0 white, -1px 1px 0 white, 1px -1px 0 white,-1px -1px 0 white;`,
				}}
			>
				<h2 className="text-2xl font-semibold">NACOS</h2>
				<div className="flex w-fit items-center text-4xl font-semibold">
					<h2>P</h2>
					<Image src="/small-logo.png" alt="logo" width={32} height={32} />
					<h2>LL</h2>
				</div>
			</div>
			<ul className="mt-16">
				<Navlink
					href="/dashboard"
					title="Vote"
					icon={Vote}
					onClick={() => {}}
				/>
				<Navlink
					href="/logout"
					title="Logout"
					icon={Logout}
					onClick={() => {}}
				/>
			</ul>
		</div>
	);
};

function Navlink({
	href,
	title,
	icon: IconComponent,
	onClick,
}: {
	href: string;
	title: string;
	icon: typeof Logout;
	onClick: () => void;
}) {
	const COLOR = title === "Logout" ? "text-red-500" : "text-white";

	return (
		<li onClick={onClick}>
			<Link
				href={href}
				className={[
					"mt-4 flex w-fit items-center gap-2 rounded-xl py-3 transition-all duration-200 ease-in-out",
				].join(" ")}
			>
				<IconComponent className={COLOR} />
				<span className={COLOR}>{title}</span>
			</Link>
		</li>
	);
}

export default Sidebar;
