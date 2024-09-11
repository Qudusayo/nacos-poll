"use client";

import { AuthProvider } from "@/context/auth";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<AuthProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</AuthProvider>
	);
}
