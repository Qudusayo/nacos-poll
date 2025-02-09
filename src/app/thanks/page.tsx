"use client";

import { useEffect } from "react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Xy8vIhxWtE0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
	useEffect(() => {
		if (window.localStorage.getItem("nacos-polled")) {
			window.localStorage.removeItem("nacos-polled");
		}
	}, []);

	return (
		<div className="flex min-h-dvh flex-col items-center justify-center bg-black px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-md text-center">
				<div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-primary-foreground">
					<CheckIcon className="h-6 w-6" />
				</div>
				<h1 className="mt-4 text-balance text-2xl font-bold tracking-tight text-amber-50 sm:text-5xl md:text-4xl">
					Thank you for your <br />
					submission!
				</h1>
			</div>
		</div>
	);
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}
